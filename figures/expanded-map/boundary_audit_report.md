# Narrow offline boundary audit

This correction package leaves `assistance-visualization-map-v2-20260925` unchanged. It uses the supplied synthesis draft and its bibliography as the current manuscript sources, together with the frozen protocol/rubric and already-local reports. No queue expansion or retrieval was performed.

## Candidate-export reconciliation

The apparent 9,903 versus 9,505 discrepancy is a physical-line versus logical-record distinction:

- **9,903 physical data lines** after the header.
- **9,505 logical CSV records** after RFC-style parsing of quoted multiline fields.
- **9,505 unique, nonblank canonical IDs**.
- **398 embedded continuation lines** across **27 multiline logical records**.
- **0 duplicate canonical-ID groups, 0 exact duplicate row groups, and 0 conflicting canonical-ID groups**.

Counting rule: parse the export as CSV; treat each unique canonical ID as one discovery record; split the exact semicolon-delimited `assistance_present` and `modalities_present` fields; normalize only `Desktop 2D` to `Desktop/Planar`; add at most one count per canonical identity per PRESENT assistance–PRESENT modality cell. UNKNOWN labels do not count. Multilabel records may contribute to several cells. These remain MACHINE-CODED CANDIDATE CO-OCCURRENCES, not verified placements or prevalence.

## Separated denominators

- **systems considered: 38** — 20 systems from the audited v1 map plus 18 systems in the frozen v2 queue.
- **accessible full reports: 35** — A complete primary or explicitly linked system report was locally available for assessment. Excludes VR BioTalk, Radiology dialogue, and ARAS.
- **completed eligibility assessments: 35** — E1–E7 assessed from an accessible complete report. Includes eligible, excluded/contextual, and evidence-based unresolved outcomes; excludes three inaccessible reports.
- **eligible systems: 28** — All eligibility criteria resolved YES after this boundary correction.
- **unresolved systems: 5** — CPW and ImmerVol after accessible-report review, plus three inaccessible systems whose eligibility assessment is incomplete.
- **excluded or contextual systems: 5** — Touch Talk and Exocentric/Egocentric remain contextual; BioWheel, FathomNet, and the LLM literature workflow remain excluded.
- **systems with supported placements: 27** — Eligible systems with at least one report-supported Assistance × Modality placement after correction.
- **counted placement rows: 44** — Unique eligible system-cell relationships. Cell totals are not additive across systems.

The three inaccessible systems are unresolved, but are not described as completed full-report assessments.

## Boundary corrections

- **SAMIRA / assessed report version**: arXiv:2505.07214v2 (v2 manifest/filename label) → arXiv:2505.07214v3. The locally assessed PDF banner identifies arXiv:2505.07214v3, dated 25 May 2025.
- **ImmerVol / E1 / aggregate**: E1=YES; aggregate=ELIGIBLE → E1=UNRESOLVED; aggregate=UNRESOLVED. A Foot CT benchmark does not establish a life-science analytical workflow.
- **Protein-model validation / Adaptive × Desktop/Planar**: SUPPORTED → UNRESOLVED. Implemented local-resolution weighting is optional and user-enabled; system-selected dynamic tailoring is not evidenced.
- **ImmerVol / Algorithmic × CAVE**: SUPPORTED → UNRESOLVED. Mechanism and modality are evidenced, but system eligibility is unresolved at E1.

ExaViz, SAMIRA, and the patient-health dashboard retain their Adaptive placements for the narrow implemented mechanisms recorded in `adaptive_boundary_audit.csv`. Protein-model validation is downgraded because its report establishes optional fixed weighting, not system-selected dynamic tailoring. ImmerVol is removed from counted placements because its domain-general benchmark evidence does not resolve E1.

## Corrected supported-system coverage

| Assistance | Desktop/Planar | Large Display | VR | AR/MR | CAVE |
|---|---:|---:|---:|---:|---:|
| Algorithmic | 20 | 1 | 4 | 1 | 3 |
| Adaptive | 4 | 0 | 1 | 0 | 1 |
| Conversational | 2 | 0 | 1 | 0 | 0 |
| Immersive | 0 | 0 | 4 | 1 | 1 |

Empty cells mean “not represented in assessed systems.” Counts are unique eligible systems per cell and are not additive.

## Current manuscript reconciliation

Current sources for this audit are `full-report-anchor-synthesis-v1-20260924/deliverables/synthesis_draft.md` and `anchor_bibliography.bib`, as directed. The draft reinforces the distinction between system-selected change and commanded execution: parameter adjustment alone is not adaptive, and implemented mechanisms must be separated from proposed future work. The four newly audited systems are not present in the supplied anchor bibliography, so their v2 citation keys remain package-local/provisional pending bibliography integration.

## Author decisions

1. Approve or reject the Protein-model validation downgrade. The audit recommends **UNRESOLVED Adaptive × Desktop/Planar**.
2. Approve or reject ImmerVol's E1 downgrade and removal from **Algorithmic × CAVE** counts. The audit recommends **UNRESOLVED** until a life-science analytical workflow is evidenced.
3. Confirm that data/task-conditioned system selection remains within the frozen Adaptive definition for ExaViz, SAMIRA RAG, and the patient-health dashboard. The audit retains these placements but does not use their future-work claims.
4. Decide whether and when to integrate citation records for ExaViz, SAMIRA, Protein-model validation, and the patient-health dashboard into the current bibliography.

All decisions in this package are automated recommendations pending author approval. No production judgment was changed.
