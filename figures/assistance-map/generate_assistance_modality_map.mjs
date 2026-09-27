import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const placements = JSON.parse(fs.readFileSync(path.join(here, "placements.json"), "utf8"));

const modes = ["Algorithmic", "Adaptive", "Conversational", "Immersive"];
const modalities = ["Desktop/Planar", "Large Display", "VR", "AR/MR", "CAVE"];
const taskCodes = new Map([
  ["Navigation and Multiscale Orientation", "N"],
  ["Comparison and Differentiation", "C"],
  ["Selection, Filtering, and Precision Interaction", "F"],
  ["Sensemaking and Hypothesis Development", "H"],
  ["Coordination and Collaborative Reasoning", "R"],
]);

function csvEscape(value) {
  const text = Array.isArray(value) ? value.join("; ") : String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const csvColumns = [
  "placement_id", "figure_status", "plotted", "system", "paper_title",
  "stable_canonical_id", "citation_key", "report_or_version", "assistance_mode",
  "visualization_modality", "tasks", "mechanism", "evidence_passage",
  "evidence_locator", "eligibility_context_status", "uncertainty_qualification", "source_file",
];
const csv = [
  csvColumns.join(","),
  ...placements.map((row) => csvColumns.map((column) => csvEscape(row[column])).join(",")),
].join("\n") + "\n";
fs.writeFileSync(path.join(here, "placement_table.csv"), csv);

const established = placements.filter((row) => row.figure_status === "established");
const boundaries = placements.filter((row) => row.figure_status !== "established");
let markdown = `# Assistance × Visualization Modality placement table\n\n`;
markdown += `This table applies the frozen four assistance modes, five visualization modalities, and five task labels. Rows are mechanism-level placements within linked paper/system identities; they are not independent corpus members.\n\n`;
markdown += `## Established placements\n\n`;
for (const row of established) {
  markdown += `### ${row.placement_id} - ${row.system}: ${row.assistance_mode} × ${row.visualization_modality}\n\n`;
  markdown += `- Paper: ${row.paper_title}\n`;
  markdown += `- Identity: ${row.stable_canonical_id}; citation key: \`${row.citation_key}\`\n`;
  markdown += `- Report assessed: ${row.report_or_version}\n`;
  markdown += `- Tasks: ${row.tasks.join("; ")}\n`;
  markdown += `- Mechanism: ${row.mechanism}\n`;
  markdown += `- Evidence passage: “${row.evidence_passage}”\n`;
  markdown += `- Locator: ${row.evidence_locator}\n`;
  markdown += `- Status: ${row.eligibility_context_status}\n`;
  markdown += `- Qualification: ${row.uncertainty_qualification}\n`;
  markdown += `- Source: \`${row.source_file}\`\n\n`;
}
markdown += `## Contextual and unresolved boundary records\n\n`;
for (const row of boundaries) {
  markdown += `### ${row.placement_id} - ${row.system}: ${row.assistance_mode} × ${row.visualization_modality}\n\n`;
  markdown += `- Paper: ${row.paper_title}\n`;
  markdown += `- Identity: ${row.stable_canonical_id}; citation key: \`${row.citation_key}\`\n`;
  markdown += `- Report assessed: ${row.report_or_version}\n`;
  markdown += `- Candidate tasks: ${row.tasks.join("; ")}\n`;
  markdown += `- Mechanism/boundary: ${row.mechanism}\n`;
  markdown += `- Evidence passage: “${row.evidence_passage}”\n`;
  markdown += `- Locator: ${row.evidence_locator}\n`;
  markdown += `- Status: ${row.eligibility_context_status}\n`;
  markdown += `- Qualification: ${row.uncertainty_qualification}\n`;
  markdown += `- Source: \`${row.source_file}\`\n\n`;
}
fs.writeFileSync(path.join(here, "placement_table.md"), markdown);

const plotted = placements.filter((row) => row.plotted && row.figure_status === "established");
for (const row of plotted) {
  if (!modes.includes(row.assistance_mode)) throw new Error(`Unknown mode in ${row.placement_id}`);
  if (!modalities.includes(row.visualization_modality)) throw new Error(`Unknown modality in ${row.placement_id}`);
  for (const task of row.tasks) if (!taskCodes.has(task)) throw new Error(`Unknown task in ${row.placement_id}: ${task}`);
}

const cellKey = (mode, modality) => `${mode}|||${modality}`;
const cells = new Map();
for (const mode of modes) for (const modality of modalities) cells.set(cellKey(mode, modality), []);
for (const row of plotted) cells.get(cellKey(row.assistance_mode, row.visualization_modality)).push(row);

const escapeXml = (text) => String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const W = 1440;
const H = 980;
const left = 230;
const top = 116;
const cellW = 229;
const cellH = 142;
const rowColors = ["#3B7EA1", "#D17C2F", "#4F8A5B", "#7B62A3"];
const rowFills = ["#EDF5FA", "#FFF4E8", "#EFF7F0", "#F5F0FA"];
const out = [];
out.push(`<?xml version="1.0" encoding="UTF-8"?>`);
out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="7.2in" height="4.9in" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc">`);
out.push(`<title id="title">Assistance by visualization modality map</title>`);
out.push(`<desc id="desc">A four by five matrix of representative assessed life-science systems. Rows are Algorithmic, Adaptive, Conversational, and Immersive assistance. Columns are Desktop or Planar, Large Display, VR, AR or MR, and CAVE. Empty cells mean not represented in the assessed examples.</desc>`);
out.push(`<rect width="${W}" height="${H}" fill="#FFFFFF"/>`);
out.push(`<style>
  text { font-family: Arial, Helvetica, sans-serif; fill: #17222B; }
  .axis { font-size: 24px; font-weight: 700; }
  .head { font-size: 21px; font-weight: 700; }
  .row { font-size: 22px; font-weight: 700; fill: #FFFFFF; }
  .entry { font-size: 18px; font-weight: 700; }
  .tasks { font-size: 15px; font-weight: 400; fill: #40505C; }
  .empty { font-size: 16px; fill: #6B747B; font-style: italic; }
  .legend { font-size: 16px; }
  .small { font-size: 14px; fill: #4A5964; }
</style>`);
out.push(`<text class="axis" x="${left + (cellW * modalities.length) / 2}" y="34" text-anchor="middle">Visualization modality</text>`);
out.push(`<text class="axis" transform="translate(20 ${top + (cellH * modes.length) / 2}) rotate(-90)" text-anchor="middle">Assistance mode</text>`);
for (let c = 0; c < modalities.length; c++) {
  const x = left + c * cellW + cellW / 2;
  out.push(`<text class="head" x="${x}" y="88" text-anchor="middle">${escapeXml(modalities[c])}</text>`);
}
for (let r = 0; r < modes.length; r++) {
  const y = top + r * cellH;
  out.push(`<rect x="38" y="${y}" width="180" height="${cellH}" rx="8" fill="${rowColors[r]}"/>`);
  const label = modes[r] === "Immersive" ? ["Immersive", "assistance"] : [modes[r]];
  const rowFontSize = modes[r] === "Conversational" ? 18 : 22;
  const startY = y + cellH / 2 - (label.length - 1) * 13;
  out.push(`<text class="row" x="128" y="${startY}" text-anchor="middle" font-size="${rowFontSize}px">`);
  label.forEach((line, i) => out.push(`<tspan x="128" dy="${i === 0 ? 0 : 27}">${escapeXml(line)}</tspan>`));
  out.push(`</text>`);
  for (let c = 0; c < modalities.length; c++) {
    const x = left + c * cellW;
    out.push(`<rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" fill="${rowFills[r]}" stroke="#71808A" stroke-width="1.4"/>`);
    const rows = cells.get(cellKey(modes[r], modalities[c]));
    if (!rows.length) {
      out.push(`<text class="empty" x="${x + cellW / 2}" y="${y + cellH / 2 - 4}" text-anchor="middle">not represented</text>`);
      out.push(`<text class="empty" x="${x + cellW / 2}" y="${y + cellH / 2 + 18}" text-anchor="middle">in assessed examples</text>`);
      continue;
    }
    const lineGap = rows.length >= 3 ? 40 : 48;
    const firstY = y + cellH / 2 - ((rows.length - 1) * lineGap) / 2 - 6;
    rows.forEach((row, i) => {
      const yy = firstY + i * lineGap;
      const codes = row.tasks.map((task) => taskCodes.get(task)).join(" ");
      out.push(`<line x1="${x + 13}" y1="${yy - 7}" x2="${x + 13}" y2="${yy + 20}" stroke="${rowColors[r]}" stroke-width="5"/>`);
      out.push(`<text class="entry" x="${x + 24}" y="${yy}">${escapeXml(row.system)}</text>`);
      out.push(`<text class="tasks" x="${x + 24}" y="${yy + 20}">${escapeXml(codes)}</text>`);
    });
  }
}

const legendY = top + modes.length * cellH + 34;
out.push(`<text class="head" x="48" y="${legendY}">Task symbols</text>`);
const legendItems = [
  ["N", "Navigation and Multiscale Orientation"],
  ["C", "Comparison and Differentiation"],
  ["F", "Selection, Filtering, and Precision Interaction"],
  ["H", "Sensemaking and Hypothesis Development"],
  ["R", "Coordination and Collaborative Reasoning"],
];
for (let i = 0; i < legendItems.length; i++) {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = 48 + col * 450;
  const y = legendY + 30 + row * 30;
  out.push(`<rect x="${x}" y="${y - 17}" width="24" height="22" rx="3" fill="#FFFFFF" stroke="#253742" stroke-width="1.5"/>`);
  out.push(`<text class="legend" x="${x + 12}" y="${y}" text-anchor="middle" font-weight="700">${legendItems[i][0]}</text>`);
  out.push(`<text class="legend" x="${x + 34}" y="${y}">${escapeXml(legendItems[i][1])}</text>`);
}

const boxY = legendY + 98;
out.push(`<rect x="48" y="${boxY}" width="1340" height="87" rx="7" fill="#F7F7F7" stroke="#606A70" stroke-width="1.5" stroke-dasharray="8 6"/>`);
out.push(`<text class="head" x="65" y="${boxY + 25}">Contextual and unresolved boundary examples (not matrix placements)</text>`);
out.push(`<text class="small" x="65" y="${boxY + 50}">CPW - integrated computation unresolved.  Talk to the Wall - non-life-science, command-only speech study.</text>`);
out.push(`<text class="small" x="65" y="${boxY + 72}">Exocentric/Egocentric VR - biomedical evaluation context without evidenced assistance.  iCAVE Immersive × CAVE - unresolved; Algorithmic × CAVE is supported.</text>`);
out.push(`<text class="small" x="48" y="${H - 15}">Representative assessed examples only. Empty cells do not imply absence from the literature. No quantitative encoding is used.</text>`);
out.push(`</svg>`);
fs.writeFileSync(path.join(here, "assistance_visualization_modality_map.svg"), out.join("\n"));

const plottedPairs = new Set(plotted.map((row) => `${row.system}|||${row.assistance_mode}|||${row.visualization_modality}`));
if (plottedPairs.size !== plotted.length) throw new Error("Duplicate plotted placement rows detected");
console.log(JSON.stringify({
  placements: placements.length,
  established: established.length,
  boundary_records: boundaries.length,
  plotted: plotted.length,
  populated_cells: [...cells.values()].filter((rows) => rows.length).length,
  outputs: ["placement_table.csv", "placement_table.md", "assistance_visualization_modality_map.svg"],
}, null, 2));
