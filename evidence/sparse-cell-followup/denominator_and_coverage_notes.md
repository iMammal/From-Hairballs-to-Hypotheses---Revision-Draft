# Denominators and coverage

## Corrected cumulative assessed set

| Denominator | Count | Rule |
|---|---:|---|
| Systems considered | 309 | 285 corrected-base systems plus 24 distinct frozen follow-up systems. |
| Accessible full reports | 121 | Full reports only; the abstract-only X199 item is excluded. |
| Completed eligibility assessments | 118 | Eligible, unresolved, or contextual/excluded assessments; inaccessible reports are not completed assessments. |
| Eligible systems | 77 | `normalized_status`, with `aggregate_status` fallback. |
| Unresolved systems | 19 | Same status normalization rule. |
| Excluded/contextual systems | 22 | Same status normalization rule. |
| Inaccessible systems | 191 | No completed full-report assessment. |
| Systems with supported placements | 76 | Distinct eligible systems with at least one supported system-cell placement. |
| Supported system-cell placements | 118 | Count each eligible system once per assistance–modality cell; cells are multilabel and totals are not additive. |

The accessible-report and completed-assessment denominators are intentionally distinct. Three accessible reports in the inherited cumulative set do not have completed system-level eligibility assessments. The abstract-only X199 item is neither an accessible full report nor a completed full-report assessment.

## Supported systems per cell

| Assistance | Desktop/Planar | Large Display | VR | AR/MR | CAVE |
|---|---:|---:|---:|---:|---:|
| Algorithmic | 51 | 4 | 14 | 16 | 3 |
| Adaptive | 4 | 0 | 3 | 1 | 1 |
| Conversational | 10 | 0 | 2 | 0 | 0 |
| Immersive | 0 | 0 | 6 | 2 | 1 |

These are distinct full-report-supported systems in the explicitly bounded assessed set, not paper counts or prevalence estimates. The separate `machine_candidate_cell_counts.csv` contains candidate-record co-occurrences from the 9,505-record machine-coded landscape and must not be combined with this table.

## Follow-up coverage

All 25 provisional rows bound exactly by canonical ID, normalized title, and DOI to the final 9,505-record export. The 2013 AREA article (DOI `10.1109/TBME.2013.2262279`) was linked to the previously assessed 2012 AREA conference report (DOI `10.1109/EMBC.2012.6346511`) and excluded from the new-system queue without merging the two corpus records. The resulting 24-system queue was frozen before access attempts.

Only S18 was accessible in the bounded retrieval. Its LLM-guided VR self-talk mechanism is implemented, but its counseling/self-reflection workflow is contextual rather than eligible relational or multiscale life-science visual analysis. Conversational × VR, Adaptive × VR, and Immersive × VR were therefore recorded as rejected placements for this system. The remaining 23 systems are access-limited and unresolved; their saved titles, abstracts, or machine labels were not promoted to full-report evidence.

