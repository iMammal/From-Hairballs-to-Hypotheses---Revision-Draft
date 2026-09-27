# Assistance × Visualization Modality map staging package

Fresh staging package created 2026-09-25. It does not modify the manuscript, corpus, screening decisions, evidence packages, or production state.

## Deliverables

- `placement_table.csv` - machine-readable placement and boundary table.
- `placement_table.md` - readable evidence cards generated from the same placement data.
- `assistance_visualization_modality_map.svg` - editable vector figure.
- `assistance_visualization_modality_map.pdf` - publication vector figure.
- `assistance_visualization_modality_map.png` - raster preview.
- `generate_assistance_modality_map.mjs` and `placements.json` - deterministic editable source and data.
- `figure_block.tex` - drop-in two-column STAR figure block.
- `manuscript_text.md` - caption, Section 3 introduction paragraph, and Section 4-6 cross-references.
- `source_inventory.md` - located sources, authority boundaries, and the missing current-manuscript file.
- `unresolved_and_coverage.md` - unresolved placements and bounded coverage gaps.
- `verification.md` - focused integrity and render checks.

## Regeneration

From this directory:

```bash
node generate_assistance_modality_map.mjs
inkscape assistance_visualization_modality_map.svg --export-type=pdf --export-filename=assistance_visualization_modality_map.pdf
inkscape assistance_visualization_modality_map.svg --export-type=png --export-width=2880 --export-filename=assistance_visualization_modality_map.png
```

The generator validates the controlled assistance, modality, and task vocabularies and writes the CSV, Markdown, and SVG from `placements.json` before rendering.
