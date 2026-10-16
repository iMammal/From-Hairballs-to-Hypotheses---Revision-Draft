# Methodology Supplement — 16 October 2026

From Hairballs to Hypotheses: A Survey of AI-Assisted Visual Analytics in the Life Sciences

Reserved DOI: 10.5281/zenodo.23406799
Status: prepared for deposit; DOI reservation does not mean this version is published.
Earlier reproducibility deposit: https://doi.org/10.5281/zenodo.23084434

## Contents

- methods-supplement.pdf: the compiled 51-page supplement (included explicitly in this ZIP).
- methods-supplement.tex: standalone source.
- METHODS_COMPACT_TABLE.tex and METHODS_EXTENDED_TABLE.tex: 79-system overview and extended evidence table.
- METHODS_REFERENCES.bib: supplement-only bibliography; no shared manuscript bibliography is required.
- METHODS_PER_SYSTEM_EVIDENCE.csv: the same 79 system IDs, evidence summaries, locators and evaluation-type classification.
- evidence/: retained selection, eligibility and placement snapshots; historical files are preserved unchanged.
- figures/: October access-follow-up accounting snapshots.
- MANIFEST.json and SHA256SUMS: package inventory and checksums.

Compile from this directory with `latexmk -pdf methods-supplement.tex` (pdfLaTeX and BibTeX).
In Overleaf, the source and its METHODS_* companions are in sections/. Overleaf resolves same-directory dependencies when compiling the standalone file.

## Review changes

Added title-page affiliations and the reserved DOI; revised selection and authority prose; explained the 60 accessible reports / 57 assessments against the 140-assessment ceiling; captioned the September accounting table; replaced unfinished language-audit recommendations with a final coverage limitation; added the compact system table and overlapping evaluation-type tally; removed template prefixes, doubled punctuation and extraction-to-do wording; replaced all CSV placeholder locators with retained passage locators; resolved seven bibliography keys and two missing preprint author/year fields.

Evaluation types reflect the retained evidence, with 'not established' separate from illustrative demonstrations. Missing extraction is not treated as proof that a report lacks controls or evaluation. The GENET evaluation summary was checked against the published report (PMC11600262, Abstract and Sections 2.1/2.3) on 16 October 2026; the historical snapshots remain unchanged. Bibliographic checks used publisher, arXiv and author/institutional pages.

The approved counts remain 135 completed systems, 83 eligible, 19 unresolved and 33 excluded/contextual; 79 mapped systems and 122 supported pairings. The language-follow-up reports remain outside approved counts. No submission ID was available in the supplied project, so none was invented.

This supplement package intentionally contains no main-manuscript source or PDF. The main manuscript is maintained separately. Historical source paths in evidence fields and prose refer to the original reproducibility repository/deposit; this ZIP does not assert that every original full report, session log, script or historical repository file is duplicated here. The earlier full reproducibility archive remains a separate deposit.
