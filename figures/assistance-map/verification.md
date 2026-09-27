# Focused verification

Completed 2026-09-25 without a broad test run.

- The evidence table contains 30 rows: 26 established assistance–modality placements and 4 contextual or unresolved boundary records.
- The figure selects 17 representative established placements across 9 populated cells. Every plotted entry has a corresponding evidence-table row; no contextual or unresolved record is plotted as established.
- Every evidence row contains the required system, paper, citation/report identity, controlled assistance and modality labels, controlled task labels, mechanism, evidence passage, locator, status, qualification, and source path.
- All 30 preserved local source paths resolve.
- The generated CSV contains 30 data rows and is produced from the same `placements.json` used to generate the Markdown table and SVG, keeping displayed names, labels, and report bindings synchronized.
- The generator rejects uncontrolled assistance, modality, or task labels and rejects any plotted record not marked `established`.
- The SVG was rendered to PDF and PNG with Inkscape. Both the PNG and a fresh rasterization of the saved PDF were visually inspected at the declared 7.2 × 4.9 inch two-column size; labels, task symbols, empty-cell language, and the dashed contextual boundary remain legible without overlap or clipping.
- The figure uses color plus row position and text labels, so color is not the sole distinction. Its light fills, dark outlines, and direct labels remain distinguishable in grayscale.
- No heat, area, bubble, or count encoding is used.
- No manuscript, corpus, screening decision, evidence source, or production artifact was modified.
