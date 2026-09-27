# Proposed manuscript text (not applied)

Citation keys refer to `verified_bibtex_additions.bib`. The paragraphs preserve the Assistance × Visualization Modality map, analytical-task lens, and interpretive treatment of analytic agency.

## Methodology denominator replacement required before figure use

If the expanded evidence is accepted, replace the now-stale bounded-map denominator paragraph at the end of `sections/02-methodology.tex` with:

> For the mechanism-level map (Figure~\ref{fig:assistance-modality-map}), purposeful full-report assessment prioritized sparse assistance--modality combinations, contrasting mechanisms, and informative evaluations. The cumulative assessment considered 285 distinct systems. It includes 121 accessible report versions and 118 completed system-level eligibility assessments; multiple related reports can support one system assessment, while 167 systems remain inaccessible and are not counted as completed assessments. The evidence ledger contains 79 eligible systems, 18 unresolved systems, and 21 excluded or contextual systems. Of the eligible systems, 78 support at least one specific assistance--modality placement, yielding 122 non-additive system--cell placements. Automated structured report assessments remain pending author approval. These counts describe the bounded assessed set and do not estimate prevalence in the 9,505-record machine-coded candidate pool.

## End of Section 3

> The resulting synthesis uses the Assistance $\times$ Visualization Modality matrix to locate implemented relationships, analytical tasks to compare what scientists do within them, and analytic agency to interpret who initiates, specifies, executes, assesses, and corrects consequential operations. A system may occupy several cells only when each assistance--modality relationship is supported by full-report evidence. The map therefore does not treat paper-level labels as a Cartesian product, and an empty cell denotes only that the combination is not represented in the bounded assessed systems.

## Section 4 — Analytic Tasks

Place near the end of `\subsection{Synthesis Across Tasks}` (`sec:tasks-synthesis`):

> The expanded reports make cross-environment continuity a task-level issue rather than a sixth modality. Vitessce Link coordinates a planar tissue-map view with a registered mixed-reality representation, carrying selections and measurements across the two environments; the scientist still determines which structures warrant comparison and whether the linked evidence supports a biological interpretation.~\cite{ExpansionX015} VROOM instead places cohort comparison inside VR, arranging clinical and molecular variables for filtering and similarity-based inspection.~\cite{ExpansionX032} Both support Navigation, Comparison, Selection, and Sensemaking, but the locus of agency differs: Vitessce Link emphasizes maintaining analyst-created referents across devices, whereas VROOM concentrates exploration within an immersive space. Neither placement alone establishes a general modality advantage.

## Section 5 — Assistance

Place at the end of `\subsection{Conversational Assistance and Agentic Orchestration}` (`sec:assistance-conversational`):

> Several new desktop examples clarify what Conversational assistance adds without implying adaptation. CellWhisperer connects natural-language questions about cells and genes to a multimodal transcriptome--text model and a CELLxGENE browser; Robin mediates comparison and explanation of loop-caller outputs; scSelector, i-gRINN, REDAC, and CERA similarly connect language to inspectable domain analyses.~\cite{ExpansionX030,ExpansionX018,ExpansionX020,ExpansionX037,ExpansionX039,ExpansionX040} In these systems, the analyst initiates and specifies the request, computation executes or explains an operation, and the analyst interprets the returned evidence. Language-mediated execution supports Conversational placement, but it does not by itself show that the system inferred a changing analysis state and selected a different intervention. No newly assessed system was therefore added to an Adaptive cell.

Place in `\subsection{Immersive Assistance: Computational Use of Spatial Context}` (`sec:assistance-immersive`) after the opening definition:

> Vitessce Link supplies a narrowly supported mixed-reality case: registered cross-device links and spatial pointing make a selection in the stereoscopic tissue representation consequential to the coordinated analysis, while the paired planar view preserves complementary measurements and overview.~\cite{ExpansionX015} This differs from VROOM, where immersive cohort navigation is implemented but the report does not show spatial context changing the computation, and from iCAVE, where tracking adjusts perspective and interaction but the accepted evidence does not show the network-analysis algorithms changing with tracked context. The latter two remain Algorithmic, not additional Immersive placements.

## Section 6 — Modality

Place at the end of `\subsection{Desktop/Planar Environments}` (`sec:modality-desktop`):

> The expanded desktop evidence is strongest for conversational mediation of established analyses rather than for new adaptive mechanisms. CellWhisperer and scSelector couple language to single-cell analysis, while Robin and REDAC mediate comparative genomics and RNA-seq workflows.~\cite{ExpansionX030,ExpansionX020,ExpansionX018,ExpansionX039} Their planar interfaces keep prompts, returned plots, and source results jointly inspectable; whether the analyst can trace every generated claim to an executed operation remains an evaluation question rather than a placement criterion.

Place at the end of `\subsection{Virtual Reality}` (`sec:modality-vr`):

> The new VR systems broaden the supported Algorithmic mechanisms without filling an Adaptive gap. The RATS planning system reconstructs patient CT data for interactive inspection of pulmonary relations, whereas VROOM organizes patient-cohort variables for immersive comparison.~\cite{ExpansionX004,ExpansionX032} These are different analytical tasks and evidence bases: the former supports patient-specific spatial planning, and the latter supports cohort exploration. In both, the analyst initiates and interprets the operation; immersion does not establish that the assistance adapts.

Place at the end of `\subsection{Augmented/Mixed Reality}` (`sec:modality-ar`):

> Mixed-reality evidence now spans model overlays, linked tissue maps, and patient-specific planning. The Augmented Reality Microscope overlays deep-learning metastasis inferences in a pathologist's field of view, while Vitessce Link coordinates spatial tissue exploration with a planar analytical view.~\cite{ExpansionX014,ExpansionX015} Patient-specific planning reports add segmentation, registration, and reconstruction mechanisms, but the assessment retains a boundary between analytical planning and systems whose implemented contribution is procedural guidance or display. Consequently, AR/MR hardware, tracking, and registration were not treated as assistance on their own.

In `\subsection{CAVE Environments}` (`sec:modality-cave`), retain the current iCAVE placement and add after its paragraph:

> The related iCAVE preprint confirms the implemented CAVE combination but is linked to the already counted published system rather than treated as another system.~\cite{ExpansionX008} Its description of tracked perspective and hand-held interaction does not alter the accepted boundary: these features support navigation and selection, but the report does not show the analytical computation changing with tracked context.

## Section 7 — Evaluation

Place in `\subsection{Analytic Effectiveness and Scientific Utility}` (`sec:evaluation-effectiveness`):

> The independent Augmented Reality Microscope assessment illustrates why implementation and benefit must remain separate. The report evaluates lymph-node metastasis models and identifies ground-truth and field-of-view limitations, but explicitly states that the study does not directly establish efficacy of the models on the microscope as a decision-support system.~\cite{ExpansionX014} This evidence supports the Algorithmic $\times$ AR/MR mechanism while constraining any claim about improved pathological decisions.

Place in `\subsection{Workload and Embodied Cost}` (`sec:evaluation-workload`):

> A contextual mixed-reality drill-positioning study provides a complementary negative trade-off: dynamic widgets improved positional and rotational precision for 35 dentists, but increased completion time, mental and physical demand, effort, and frustration relative to static widgets.~\cite{ExpansionX058} The study is not counted as an eligible life-science analytical system because it evaluates procedural guidance, yet its precision--workload trade-off remains relevant to evaluating embodied assistance.

Place in `\subsection{Cross-Study Evidence and Limits of Comparability}` (`sec:evaluation-comparison`):

> The expanded set reinforces that case demonstrations, technical accuracy, usability, and scientific decisions are not interchangeable endpoints. Vitessce Link and VROOM demonstrate domain workflows and report formative use, the Augmented Reality Microscope report supplies an independent model assessment with explicit limits, and the drill-widget study measures procedural precision and workload in a contextual task.~\cite{ExpansionX015,ExpansionX032,ExpansionX014,ExpansionX058} These reports strengthen different claims and should not be pooled into a single effect of immersion or assistance.

## Section 8 — Challenges and Opportunities

Place in `\subsection{Generative Capability and Scientific Provenance}` (`sec:challenges-generative`):

> Language-mediated analysis makes the distinction between a request, an executed operation, and an explanation especially consequential. CellWhisperer and Robin demonstrate that natural-language access can connect scientists to multimodal models or comparative analyses, but their placement does not establish that every generated statement is traceable to a reproducible operation.~\cite{ExpansionX030,ExpansionX018} Future systems should expose the data subset, model or tool invocation, parameters, returned evidence, and any transformation from result to explanation, so that analysts can correct more than the wording of an answer.

Place in `\subsection{Modality Specialization and Workflow Continuity}` (`sec:challenges-continuity`):

> Vitessce Link makes continuity concrete by coordinating selections and measurements between planar and mixed-reality tissue views.~\cite{ExpansionX015} The design opportunity is not merely to mirror a view, but to preserve object identity, selection scope, transformations, and correction history as the analyst moves between environments. Spatial interaction can change where an operation is specified without changing who is responsible for judging its scientific meaning.
