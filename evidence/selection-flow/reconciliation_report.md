# Study-selection flow count reconciliation

## Result

The two-panel ledger reconciles the requested targets without treating purposeful full-report synthesis as a conventional exhaustive funnel. Panel A closes arithmetically at 140,959 canonical records; Panel B closes separately at 381 considered systems. Counts change unit explicitly at the report-to-system and system-to-placement boundaries.

## Panel A equations

- Source routes: 11664 + 12027 + 45753 + 816 + 207 + 146 + 11134 + 104366 + 1333 = 187,446 source occurrences.
- Identity consolidation: 187,446 occurrences − 140,959 canonical records = 46,487 consolidated occurrence surplus.
- Screening-state partition: 140,810 valid screenings + 35 technical failures + 4 ambiguous requests + 110 protected records + 0 genuinely unprocessed = 140,959.
- Effective valid-outcome partition: 9,505 ADVANCE + 83,258 DEFER + 48,047 EXCLUDED = 140,810.
- Background is nested: 10,460 known H2H3 background designations are a subset of the 48,047 exclusions.
- Candidate handoff: 646 precision ADVANCE records + 8,859 remaining-queue ADVANCE records = 9,505 unique categorized candidate records.

The generic merge first produced 141,383 canonical groups. The 424 approved exact-identity adjudications reduced that count to 140,959. Generic identity uses normalized DOI first and normalized title only when DOI is absent. The merge preserved 50 related-version links and did not collapse those versions merely because they were related.

Historical API calls, retries, and superseded model decisions are event counts, not record counts. The ledger therefore uses terminal unique-record artifacts. In particular, the earlier 890 INCLUDE nominations are not added to the final outcome totals: their precision results (646 ADVANCE, 201 DEFER, 43 EXCLUDED) supersede those nominations.

## Panel B equations

- Report access: 135 accessible full-report rows + 1 abstract-only row + 248 unavailable report rows = 384 selected report-identity rows.
- Report-to-system grouping: 384 report rows represent 381 systems. Two related-report pairs (moleculARweb and Surgical Theater XR) each map to one system, and one iCAVE preprint row maps to the previously assessed iCAVE system.
- System assessment: 132 completed system assessments + 249 systems without completed full-report assessment = 381 systems considered.
- Completed outcomes: 80 eligible + 19 unresolved + 33 excluded/contextual = 132 completed system assessments.
- Map coverage: 76 eligible mapped systems + 4 eligible systems without supported placements = 80 eligible systems.
- Placement expansion: 76 mapped systems yield 118 supported system–cell placements; this is multilabel and non-additive.

An accessible-report denominator is larger than the completed-system denominator because three accessible related-report rows do not create additional system assessments. Conversely, an access attempt is an event, an unavailable report is a report state, and an inaccessible system is a system-level absence of a completed full-report assessment; these units are not interchangeable.

## Assessment-wave reconciliation

| Wave | Report rows | New systems | Accessible | Abstract-only | Unavailable reports | Completed systems | Eligible | Unresolved | Excluded/contextual | Inaccessible systems | Supported systems | Placements |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| v1 audited | 20 | 20 | 20 | 0 | 0 | 20 | 17 | 1 | 2 | 0 | 17 | 26 |
| v2 bounded queue | 18 | 18 | 15 | 0 | 3 | 15 | 11 | 1 | 3 | 3 | 10 | 18 |
| expanded v1 bounded queue | 50 | 50 | 25 | 0 | 25 | 25 | 23 | 1 | 1 | 25 | 23 | 35 |
| targeted expansion v1 | 200 | 197 | 60 | 1 | 139 | 57 | 26 | 16 | 15 | 140 | 26 | 39 |
| sparse-cell follow-up v1 | 24 | 24 | 1 | 0 | 23 | 1 | 0 | 0 | 1 | 23 | 0 | 0 |
| target-cell complete pass v1 | 72 | 72 | 14 | 0 | 58 | 14 | 3 | 0 | 11 | 58 | 0 | 0 |

Selection was purposeful in every wave. The first two waves established and audited the map using anchor/coauthor evidence and a bounded sparse-cell queue. The next waves added coverage, comparison/evaluation evidence, and negative or contrasting cases. The final wave exhaustively assessed only three machine-coded target cells; it was not an exhaustive review of all 9,505 candidate records.

## Candidate-pool connection and additional routes

The exact-ID crosswalk links 376 of 384 selected report rows and 373 of 381 considered systems to the terminal 9,505-candidate pool. Eight systems have no exact current-export canonical match: Skin-lesion AR, Touch Talk Interactive, Exocentric/Egocentric VR study, BioWheel, FathomNet, Fused DTI/HARDI, Protein-model validation, and GENET. The first three are explicitly documented as coauthor-supplied local reports; the other five entered through the bounded v2 map expansion. Three of those five carry canonical IDs in the map package, but those IDs are absent from the terminal 9,505 export, so the ledger does not treat them as candidate-pool matches. These rows prevent a claim that all full-report systems are a direct subset of the 9,505 candidates.

No separate prior-survey-only full-report route is asserted because the cumulative crosswalk does not encode one. A candidate record can carry prior-survey provenance inside the registered corpus, but that is not the same as proving that its full-report selection originated from a prior-survey example list.

## Eligible systems without supported placements

- **CAVEman:** system eligibility is supported, but the assessed report says only “virtual reality environment”; the queued report and CAVE hardware binding remain unverified.
- **LiverPlan:** the implemented spatial/stage-adaptive mechanism is demonstrated in Meta Quest 3 XR; desktop is only an evaluation baseline.
- **YASARA Model VR:** a physical desktop apparatus is represented inside VR; the assistance mechanism is not demonstrated as Desktop/Planar.
- **Semantic molecular-analysis pipeline:** the proof of concept covers immersive/CAVE, AR, and screen-wall contexts, but the targeted Desktop/Planar assistance–modality combination is not demonstrated.

These four systems remain in the eligible denominator but not the mapped-system count. No unsupported modality combination was inferred to close that gap.

## Preserved unresolved boundaries

StarmapVis remains a scientifically unresolved system because substantive same-workflow computational assistance is not resolved by the assessed report. MinOmics remains eligible with its existing supported Algorithmic placements, while its Immersive × Large Display placement remains scientifically unresolved because guided navigation is implemented but not demonstrated in the wall workflow. Neither status was reassessed here.

## Discrepancies and limitations

1. The candidate-census expansion originally reported 285 considered, 121 accessible reports, 118 completed assessments, 79 eligible systems, 18 unresolved systems, 21 excluded/contextual systems, 167 inaccessible systems, 78 supported systems, and 122 placements. The later sparse-cell correction package explicitly supersedes those values with a corrected base of 285, 120, 117, 77, 19, 21, 168, 76, and 118. This ledger uses the corrected lineage.
2. The terminal candidate package manifest names several combined CSV handoffs that are not present in the local completion-audit directory. The terminal combined JSON report and the present 9,505-row candidate CSV are available and hash-bound. The 10,443 remaining-queue background count is therefore verified from the terminal JSON report, not re-counted from a missing CSV.
3. Two same-title pairs in the cumulative assessment table remain separate persisted system identities (two EasyREG records and two ‘Augmented Reality Sandpit Simulating Ant Colonies’ records). The ledger preserves the authoritative 381-system denominator and flags the identity limitation; it does not merge records by title.
4. Access-attempt events are distributed across wave-specific retrieval manifests. Because attempts can repeat for one report and several reports can concern one system, no cumulative attempt-event box is proposed. Unknown attempt totals are left unreported rather than set to zero.
5. All new full-report judgments are automated structured assessments pending author approval. The ledger reconciles persisted authority; it does not promote these judgments to independent human verification.

## Terminal versus stale artifacts

The registered production merge and identity overlay, the repaired initial batch, the terminal overnight completion audit, the complete precision re-screen report, and the terminal remaining-campaign combined report/export control Panel A. Periodic progress snapshots, partial exports, and pre-continuation unprocessed files are not added to terminal counts. For Panel B, `target-cell-complete-pass-v1-20260926` is terminal. Earlier packages remain historical wave evidence; where their totals conflict, the sparse-cell corrected base and target-cell corrected cumulative matrices control.

## Figure-authoring blockers

No arithmetic blocker remains for the proposed two-panel structure. Two qualifications must stay visible in the figure/caption: (1) Panel B is purposeful selection with mixed entry routes, not an exhaustive subset funnel; and (2) automated full-report judgments remain pending author approval. The ledger is ready for figure authoring, not a claim of PRISMA compliance.
