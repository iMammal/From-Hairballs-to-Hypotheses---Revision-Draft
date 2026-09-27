# Assistance × Visualization Modality placement table

This table applies the frozen four assistance modes, five visualization modalities, and five task labels. Rows are mechanism-level placements within linked paper/system identities; they are not independent corpus members.

## Established placements

### P01 - RNA-SeqEZPZ: Algorithmic × Desktop/Planar

- Paper: RNA-SeqEZPZ: a point-and-click pipeline for comprehensive transcriptomics analysis with interactive visualizations
- Identity: canonical:e21d187bde483200b9fd70fb; citation key: `taslim2025rnaseqezpz`
- Report assessed: Published GigaScience full text (PMC XML), DOI 10.1093/gigascience/giaf133
- Tasks: Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: A point-and-click interface launches a fixed RNA-seq workflow for quality control, alignment, counting, differential expression, and pathway analysis, then exposes interactive result views.
- Evidence passage: “It offers a graphical, point-and-click interface from raw FASTQ files through differential expression and pathway analysis.”
- Locator: Findings; Methods - Workflow overview and Interactive visualization
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Commanded pipeline execution, not Adaptive assistance; evaluation does not establish improved scientific decisions.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/rna-seqezpz-giaf133-published.xml`

### P02 - Facetto: Algorithmic × Desktop/Planar

- Paper: Facetto: Combining Unsupervised and Supervised Learning for Hierarchical Phenotype Analysis in Multi-Channel Image Data
- Identity: canonical:b4476aea1a6d30e726e5d7e5; citation key: `krueger2020facetto`
- Report assessed: Published DOI assessed against related bioRxiv report canonical:309e8f4a4853859d2d0759ba
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: EM clustering, UMAP, and CNN classification are integrated with coordinated image, projection, distribution, table, and phenotype-tree views.
- Evidence passage: “It integrates unsupervised and supervised learning into the image and feature exploration process and offers tools for analytical provenance.”
- Locator: Related preprint PDF pp. 1, 3-5; Fig. 1 and Fig. 3
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Published identity is linked to an accessible related preprint; active learning is future work.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/facetto-biorxiv-722918-v1.pdf`

### P03 - Facetto: Adaptive × Desktop/Planar

- Paper: Facetto: Combining Unsupervised and Supervised Learning for Hierarchical Phenotype Analysis in Multi-Channel Image Data
- Identity: canonical:b4476aea1a6d30e726e5d7e5; citation key: `krueger2020facetto`
- Report assessed: Published DOI assessed against related bioRxiv report canonical:309e8f4a4853859d2d0759ba
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: Experts select and label phenotype subsets; clustering results train a classifier whose later assignments change, creating a user-feedback-to-model loop.
- Evidence passage: “Users leverage clustering to discover and isolate new cell types and then feed the results of clustering to train classifiers which are then used to assign labels to new image data.”
- Locator: Related preprint PDF pp. 2-5; Interactive Clustering and Classification
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Adaptive placement rests on demonstrated classifier retraining, not on parameter adjustment; experts directed cases while authors operated the interface.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/facetto-biorxiv-722918-v1.pdf`

### P04 - Compressed Adjacency Matrices: Algorithmic × Desktop/Planar

- Paper: Compressed Adjacency Matrices: Untangling Gene Regulatory Networks
- Identity: canonical:6573bf39102188b4289338f3; citation key: `dinkla2012compressed`
- Report assessed: Published IEEE article reproduced in an author-hosted thesis chapter
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: Structure-aware cutting, ordering, and compression reorganize a gene-regulatory-network matrix before interactive highlighting, filtering, and path or neighborhood inspection.
- Evidence passage: “Analysts can easily find these structures in compressed adjacency matrices, while the same is hard in standard adjacency matrix and node-link diagrams.”
- Locator: Local thesis PDF pp. 41-42, 55-61; article Sections 3-6
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: The algorithm structures the view; interaction does not revise the organizing algorithm.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/compressed-adjacency-thesis-chapter.pdf`

### P05 - Flud: Algorithmic × Desktop/Planar

- Paper: Flud: A Hybrid Crowd-Algorithm Approach for Visualizing Biological Networks
- Identity: canonical:99a4018e75c872b502ca41b9; citation key: `bharadwaj2022flud`
- Report assessed: Published TOCHI DOI; accessible full report arXiv:1908.07471
- Tasks: Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development; Coordination and Collaborative Reasoning
- Mechanism: A multi-criterion layout score, algorithmic clues, and simulated annealing alternate with crowd node placements to improve biological-network layouts.
- Evidence passage: “Crowdworkers and a simulated annealing algorithm build on each other's progress.”
- Locator: Accessible report PDF pp. 1-4 and 17-21; Sections 1 and 2.1
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: The system does not learn an individual user's preferences; layout improvements do not establish better biological discovery.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/flud-arxiv-1908.07471.pdf`

### P06 - FathomGPT: Algorithmic × Desktop/Planar

- Paper: FathomGPT: A Natural Language Interface for Interactively Exploring Ocean Science Data
- Identity: canonical:6f32492fecc588cc1c135326; citation key: `khanal2024fathomgpt`
- Report assessed: UIST 2024 article; accessible author version arXiv:2412.02784
- Tasks: Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: The system resolves scientific names, constructs and executes SQL or Python, retrieves results, and generates interactive charts from user requests.
- Evidence passage: “The system leverages OpenAI's GPT models to connect to external tools, to generate complex SQL queries, and to generate custom code that retrieves and visualizes information.”
- Locator: Author report PDF pp. 2-3; System architecture and Fig. 2
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Prompt-level success is not evidence of improved scientific decisions.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/fathomgpt-arxiv-2412.02784.pdf`

### P07 - FathomGPT: Conversational × Desktop/Planar

- Paper: FathomGPT: A Natural Language Interface for Interactively Exploring Ocean Science Data
- Identity: canonical:6f32492fecc588cc1c135326; citation key: `khanal2024fathomgpt`
- Report assessed: UIST 2024 article; accessible author version arXiv:2412.02784
- Tasks: Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: Natural-language subgoals and conversation history mediate query construction, result retrieval, and chart refinement in the planar interface.
- Evidence passage: “Users freely write natural language prompts ... to make additional inquiries ... or modify a visualization; relevant context from the conversation generates effective SQL queries or python code.”
- Locator: Author report PDF pp. 2-3 and 9-14; Fig. 1 and System architecture
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Conversation supports bounded subgoals; it does not establish durable goal learning or autonomous scientific agency.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/fathomgpt-arxiv-2412.02784.pdf`

### P08 - Metis: Algorithmic × Desktop/Planar

- Paper: Metis: a python-based user interface to collect expert feedback for generative chemistry models
- Identity: canonical:629c358472880c92d538e16d; citation key: `menke2024metis`
- Report assessed: Published Journal of Cheminformatics full text (PMC XML)
- Tasks: Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: The GUI shows generated molecules, similar active compounds, and model explanations while converting structured feedback into reward-model or reward-function inputs.
- Evidence passage: “The molecular display provides an image of the generated molecule ... the Explainability tab provides insights into why a scikit-learn QSAR model suggests a generated molecule as potentially active.”
- Locator: Application overview; Molecular display; Feedback to de novo design
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: The report demonstrates the mechanism with fictitious examples and no participant or outcome study.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/metis-published.xml`

### P09 - Metis: Adaptive × Desktop/Planar

- Paper: Metis: a python-based user interface to collect expert feedback for generative chemistry models
- Identity: canonical:629c358472880c92d538e16d; citation key: `menke2024metis`
- Report assessed: Published Journal of Cheminformatics full text (PMC XML)
- Tasks: Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: Chemist feedback trains a reward model or updates a constructed reward function; a REINVENT loop reloads newly generated molecules for further feedback.
- Evidence passage: “Metis can seamlessly re-integrate feedback back into a de novo design loop ... one approach involves utilizing a Reward Model ... trained on the chemist's feedback.”
- Locator: Feedback to de novo design; Figs. 1-3
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Adaptive placement rests on feedback changing model scoring and later outputs, not on simple parameter editing; alignment benefit is proposed rather than evaluated.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/metis-published.xml`

### P10 - RetainVis: Algorithmic × Desktop/Planar

- Paper: RetainVis: Visual Analytics with Interpretable and Interactive Recurrent Neural Networks on Electronic Medical Records
- Identity: canonical:beb9d5c6be07c52e403ca6d6; citation key: `kwon2019retainvis`
- Report assessed: IEEE TVCG author report verified against published DOI
- Tasks: Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: An interpretable recurrent model produces risk estimates and feature contributions that linked views expose for cohort and patient-history exploration and user-directed what-if steering.
- Evidence passage: “RetainVis ... couples a newly improved, interpretable, and interactive RNN-based model called RetainEX and visualizations for users' exploration of EMR data in the context of prediction tasks.”
- Locator: Author report PDF pp. 1-3 and 7-9
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Not placed as Adaptive: reported changes follow explicit edits and retraining commands, without evidenced system-selected tailoring; user benefit was not empirically tested.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/retainvis-author.pdf`

### P11 - MediSyn: Algorithmic × Desktop/Planar

- Paper: MediSyn: uncertainty-aware visualization of multiple biomedical datasets to support drug treatment selection
- Identity: canonical:bea40bf954729ebe419d9cd8; citation key: `he2017medisyn`
- Report assessed: Published BMC Bioinformatics full text (PMC XML)
- Tasks: Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: Linked biomedical datasets are algorithmically synthesized into matrix layers; sorting, uncertainty encodings, and provenance links support comparison and evidence inspection.
- Evidence passage: “Sorting functions bring more relevant drugs to the front of the view to assist visual comparison ... data provenance, such as publications, can be interactively retrieved.”
- Locator: Background; Overview of MediSyn; Figs. 1 and 5-7
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: The six-person study supports simplified evidence-selection tasks, not improved treatment decisions.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/medisyn-published.xml`

### P12 - PeCaX: Algorithmic × Desktop/Planar

- Paper: The personalized cancer network explorer (PeCaX) as a visual analytics tool to support molecular tumor boards
- Identity: canonical:fab9fb40fff4877b0b4f8192; citation key: `figaschewski2023pecax`
- Report assessed: Published BMC Bioinformatics full text (PMC XML)
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development; Coordination and Collaborative Reasoning
- Mechanism: ClinVAP variant annotation, pathway and drug-network extraction, and automatic layout feed interactive tables and networks used in molecular-tumor-board inspection.
- Evidence passage: “PeCaX performs clinical variant annotation ... networks ... are created ... and they are visualized ... [so] the user [can] interactively work on and present the results, e.g. in a Molecular Tumor Board.”
- Locator: Introduction; Methods - Clinical annotation, Network generation, GUI
- Status: Supported life-science replacement for CPW; full-report E1-E6 supported
- Qualification: Processing performance is reported; a usability study is future work.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/pecax-published.xml`

### P13 - NeuroBlocks: Algorithmic × Desktop/Planar

- Paper: NeuroBlocks - Visual Tracking of Segmentation and Proofreading for Large Connectomics Projects
- Identity: canonical:eed78b98d980fdfe6de53904; citation key: `alawami2016neuroblocks`
- Report assessed: IEEE TVCG author report verified against published DOI
- Tasks: Navigation and Multiscale Orientation; Selection, Filtering, and Precision Interaction; Coordination and Collaborative Reasoning
- Mechanism: Automatic RhoANA segmentation is integrated with manual and semi-automatic proofreading, task assignment, comparison, provenance, approval, and restoration views.
- Evidence passage: “NeuroBlocks ... seamlessly integrates ... manual and semi-automatic segmentation, proofreading, visualization, and analysis ... [with] management, provenance, accountability, and auditing.”
- Locator: Author report PDF pp. 1 and 5-9
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Qualitative case studies do not quantify productivity or scientific-outcome gains.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/neuroblocks-author.pdf`

### P14 - PhenoFlow: Algorithmic × Desktop/Planar

- Paper: PhenoFlow: A Human-LLM Driven Visual Analytics System for Exploring Large and Complex Stroke Datasets
- Identity: canonical:3de0682b18a545b34f3e469a; citation key: `kim2025phenoflow`
- Report assessed: IEEE TVCG 31(1) article, DOI 10.1109/TVCG.2024.3456215; locally saved IEEE report
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: An LLM synthesizes executable cohort-construction code from metadata; temporal folding and linked cohort and patient views expose results for supervision and exploration.
- Evidence passage: “The LLM serves as a data wrangler while neurologists explore and supervise the output using visualizations and natural language interactions.”
- Locator: Abstract; Section 5, especially 5.1-5.2; report pp. 9-12
- Status: Supported life-science system example from assessed coauthor source; full report locally available
- Qualification: Not placed as Adaptive: changing generated code in response to a direct request is not by itself system-selected adaptation.
- Source: `docs/H2H2/SamplePapers/PhenoFlow_ A Human-LLM Driven Visual Analytics System for Exploring Large and Complex Stroke Datasets _ IEEE Journals & Magazine _ IEEE Xplore.pdf`

### P15 - PhenoFlow: Conversational × Desktop/Planar

- Paper: PhenoFlow: A Human-LLM Driven Visual Analytics System for Exploring Large and Complex Stroke Datasets
- Identity: canonical:3de0682b18a545b34f3e469a; citation key: `kim2025phenoflow`
- Report assessed: IEEE TVCG 31(1) article, DOI 10.1109/TVCG.2024.3456215; locally saved IEEE report
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: Neurologists define and refine cohorts in natural language; the LLM normalizes terminology, synthesizes executable operations, and returns explanations and small-multiple diagnostics for supervision.
- Evidence passage: “When experts provide their requests in natural language, the LLM data wrangler goes through a four-step process to conduct data wrangling.”
- Locator: Section 5.1.1 Natural Language Cohort Construction; report pp. 9-13
- Status: Supported life-science system example from assessed coauthor source; full report locally available
- Qualification: Natural language mediates analytic operations and explanation; the authors describe the LLM as fragile and keep neurologists in the supervisory loop.
- Source: `docs/H2H2/SamplePapers/PhenoFlow_ A Human-LLM Driven Visual Analytics System for Exploring Large and Complex Stroke Datasets _ IEEE Journals & Magazine _ IEEE Xplore.pdf`

### P16 - Echo: Algorithmic × Large Display

- Paper: Echo: A Large Display Interactive Visualization of ICU Data for Effective Care HandOffs
- Identity: canonical:373a8344217704e8c2e51b93; citation key: `thomas2017echo`
- Report assessed: 2017 IEEE VAHC paper, DOI 10.1109/VAHC.2017.8387500; locally saved published report
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development; Coordination and Collaborative Reasoning
- Mechanism: Patient summaries, normalcy scores, and threshold-based automatic anomaly detection are presented on a tiled wall for team comparison, annotation, and handoff discussion.
- Evidence passage: “To detect anomalies, we compare the average value of each parameter against the assigned normal. We highlight the corresponding point in the line chart.”
- Locator: PDF pp. 1-2 and 5-7; Section 3, Anomaly Detection; Figs. 1, 4, and 7
- Status: Supported life-science system example from assessed coauthor source; full report locally available
- Qualification: Algorithmic assistance is simple threshold comparison, not Adaptation; evaluation is small and does not establish clinical outcome benefit.
- Source: `docs/H2H2/SamplePapers/Echo_A_large_display_interactive_visualization_of_ICU_data_for_effective_care_handoffs.pdf`

### P17 - NUI-VR2: Algorithmic × VR

- Paper: A VR-based volumetric medical image segmentation and visualization system with natural human interaction
- Identity: canonical:46e092b2600b6f0ff250f3db; citation key: `gao2022nuivr2`
- Report assessed: Published Virtual Reality article, DOI 10.1007/s10055-021-00577-4
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction
- Mechanism: User-placed 3D seeds feed SVM-based feature selection and segmentation that creates a probability volume for assisted volume rendering.
- Evidence passage: “With those seeds, image segmentation converts the original volume into a probability volume where voxels in the target yield higher values.”
- Locator: Published PDF pp. 1-6; Introduction and System design
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Speech commands are an input channel, not evidence of Conversational or Adaptive assistance.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/nui-vr2-published.pdf`

### P18 - NUI-VR2: Immersive × VR

- Paper: A VR-based volumetric medical image segmentation and visualization system with natural human interaction
- Identity: canonical:46e092b2600b6f0ff250f3db; citation key: `gao2022nuivr2`
- Report assessed: Published Virtual Reality article, DOI 10.1007/s10055-021-00577-4
- Tasks: Navigation and Multiscale Orientation; Selection, Filtering, and Precision Interaction
- Mechanism: The segmentation pipeline consumes spatial seeds placed with in-environment gestures and returns a probability volume that users inspect in the same immersive 3D workspace.
- Evidence passage: “Users inspect the 3D volume in a VR environment and specify a few seeds within the target with intuitive gestures ... [then] explore the rendered volume ... inside an immersive VR environment.”
- Locator: Published PDF pp. 1-6; Introduction and NUI interaction design
- Status: Supported life-science system example; full-report E1-E6 supported in anchor synthesis
- Qualification: Immersive placement rests on spatial seed specification coupled to segmentation, not on VR display alone; no participant study establishes usability or clinical decision benefit.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/nui-vr2-published.pdf`

### P19 - ProteinSketch: Algorithmic × VR

- Paper: ProteinSketch translates spatial intuition into protein design with bimanual interaction in VR
- Identity: canonical:f82ae5853c4f5c91f92c2b62; citation key: `ma2026proteinsketch`
- Report assessed: bioRxiv v1 preprint posted 20 July 2026, DOI 10.64898/2026.07.19.739460
- Tasks: Navigation and Multiscale Orientation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: RFdiffusion, ProteinMPNN, structure prediction, and filtering refine user-specified protein topologies and volumetric envelopes.
- Evidence passage: “Immersive backbone sketches and volumetric envelopes are directly created and translated into constraints for diffusion-based protein generation.”
- Locator: Preprint PDF pp. 2-6; Abstract and ProteinSketch system
- Status: Supported life-science system example; eligible preprint before retrieval cutoff
- Qualification: Preprint status must remain explicit; biological feasibility is not a user-performance evaluation.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/proteinsketch-biorxiv-v1.pdf`

### P20 - ProteinSketch: Immersive × VR

- Paper: ProteinSketch translates spatial intuition into protein design with bimanual interaction in VR
- Identity: canonical:f82ae5853c4f5c91f92c2b62; citation key: `ma2026proteinsketch`
- Report assessed: bioRxiv v1 preprint posted 20 July 2026, DOI 10.64898/2026.07.19.739460
- Tasks: Navigation and Multiscale Orientation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: Bare-hand bimanual sketching encodes position, orientation, curvature, connectivity, and volumetric envelopes as explicit spatial constraints for generative models.
- Evidence passage: “The non-dominant hand maintains the spatial frame of reference while the dominant hand performs structural manipulations.”
- Locator: Preprint PDF pp. 3-6; Bimanual VR platform and Fig. 1
- Status: Supported life-science system example; eligible preprint before retrieval cutoff
- Qualification: Immersive placement rests on VR-native spatial constraint specification; no learned user-preference mechanism is shown.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/proteinsketch-biorxiv-v1.pdf`

### P21 - DTBIA: Algorithmic × VR

- Paper: DTBIA: An Immersive Visual Analytics System for Brain-Inspired Research
- Identity: canonical:ed717318b4bd53ca09d881ed; citation key: `yao2025dtbia`
- Report assessed: IEEE TVCG 31(6) published report, DOI 10.1109/TVCG.2025.3567135
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: 3D force-directed edge bundling, top-connection selection, threshold filtering, animation, and hierarchical region-to-voxel-to-slice analysis organize functional and structural brain data.
- Evidence passage: “DTBIA employs 3D Force-Directed Edge Bundling ... to reduce visual clutter ... by clustering spatially and geometrically similar edges.”
- Locator: Published PDF pp. 5-8; Sections IV.A, IV.C, and V
- Status: Supported life-science system example from assessed coauthor source; full report locally available
- Qualification: The paper evaluates two expert case studies, not a controlled comparison of scientific outcomes.
- Source: `docs/H2H2/SamplePapers/DTBIA_An_Immersive_Visual_Analytics_System_for_Brain-Inspired_Research.pdf`

### P22 - DTBIA: Immersive × VR

- Paper: DTBIA: An Immersive Visual Analytics System for Brain-Inspired Research
- Identity: canonical:ed717318b4bd53ca09d881ed; citation key: `yao2025dtbia`
- Report assessed: IEEE TVCG 31(6) published report, DOI 10.1109/TVCG.2025.3567135
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: The system couples real-scale and large-scale brain models with walking, flying, teleportation, and controller-based spatial navigation while computational filtering and bundling guide multiscale inspection.
- Evidence passage: “Using animated navigation or manual exploration with VR controllers, users can 'fly into' the brain and closely examine data points or voxels with fine granularity.”
- Locator: Published PDF pp. 4-8; Requirement R1 and Section IV.B Exploration in an Immersive Environment
- Status: Supported life-science system example from assessed coauthor source; full report locally available
- Qualification: Immersive placement rests on multiscale spatial navigation coupled to filtering and bundling, not on the headset alone.
- Source: `docs/H2H2/SamplePapers/DTBIA_An_Immersive_Visual_Analytics_System_for_Brain-Inspired_Research.pdf`

### P23 - Skin-lesion AR: Algorithmic × AR/MR

- Paper: An Augmented Reality Mobile Application for Skin Lesion Data Visualization
- Identity: not found in current canonical export; citation key: `francese2020arskin (proposed; current manuscript bibliography unavailable)`
- Report assessed: 2020 International Conference Information Visualisation paper, DOI 10.1109/IV51561.2020.00018
- Tasks: Comparison and Differentiation; Sensemaking and Hypothesis Development
- Mechanism: Image preprocessing, lesion segmentation, feature extraction, photometric stereo, and CNN classification produce parameters and a melanoma classification shown in a mobile AR view.
- Evidence passage: “The system computes all the features ... [and] provides [the lesion] as input to the CNN classifier ... [then] builds and shows the augmented visualization on the mobile screen.”
- Locator: Published PDF pp. 2-5; Sections III and IV
- Status: Supported life-science system example from local coauthor source; bounded full-report assessment for this map
- Qualification: No repository canonical ID was found; CNN accuracy was 74.6% and the preliminary evaluation involved seven dermatologists.
- Source: `docs/H2H2/SamplePapers/An_Augmented_Reality_Mobile_Application_for_Skin_Lesion_Data_Visualization.pdf`

### P24 - Skin-lesion AR: Immersive × AR/MR

- Paper: An Augmented Reality Mobile Application for Skin Lesion Data Visualization
- Identity: not found in current canonical export; citation key: `francese2020arskin (proposed; current manuscript bibliography unavailable)`
- Report assessed: 2020 International Conference Information Visualisation paper, DOI 10.1109/IV51561.2020.00018
- Tasks: Comparison and Differentiation; Sensemaking and Hypothesis Development
- Mechanism: Spatially grounded assistance detects device-to-skin distance, centers and selects a lesion, adjusts illumination, computes a classification, and overlays the result in the dermatologist's view.
- Evidence passage: “The distance between the mobile device and the patient skin is detected ... [the system] detects if a lesion skin is in the center ... [and] builds and shows the augmented visualization.”
- Locator: Published PDF p. 5; Section IV Augmented Reality Visualization
- Status: Supported life-science system example from local coauthor source; bounded full-report assessment for this map
- Qualification: Immersive placement rests on tracked spatial context and in-situ overlay, not on phone display alone; no clinical-effectiveness result is established.
- Source: `docs/H2H2/SamplePapers/An_Augmented_Reality_Mobile_Application_for_Skin_Lesion_Data_Visualization.pdf`

### P25 - iCAVE: Algorithmic × Desktop/Planar

- Paper: iCAVE: an open source tool for visualizing biomolecular networks in 3D, stereoscopic 3D and immersive 3D
- Identity: canonical:aa1b96d255c53b1b20a90793; citation key: `liluashvili2017icave`
- Report assessed: Published GigaScience article, DOI 10.1093/gigascience/gix054
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: The same 3D layout, clustering, edge-bundling, network-query, and metric functions are analytically presented in a desktop screen environment.
- Evidence passage: “Users can explore networks ... in 3D using a desktop ... [and] iCAVE introduces 3D extensions of known 2D network layout, clustering, and edge-bundling algorithms.”
- Locator: Published PDF pp. 1, 3, and 5-11; Abstract and System description
- Status: Supported life-science system example from assessed coauthor source; full report locally available
- Qualification: Desktop/Planar is the frozen modality for rotatable 3D shown on a planar screen; stereoscopic desktop glasses do not create a sixth modality.
- Source: `docs/H2H2/SamplePapers/iCAVE-gix054.pdf`

### P26 - iCAVE: Algorithmic × CAVE

- Paper: iCAVE: an open source tool for visualizing biomolecular networks in 3D, stereoscopic 3D and immersive 3D
- Identity: canonical:aa1b96d255c53b1b20a90793; citation key: `liluashvili2017icave`
- Report assessed: Published GigaScience article, DOI 10.1093/gigascience/gix054
- Tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism: 3D layout, clustering, edge bundling, network metrics, and database-generated networks are presented and explored in a projection-based CAVE environment.
- Evidence passage: “Users can explore networks ... in immersive 3D within a CAVE environment. iCAVE introduces 3D extensions of known 2D network layout, clustering, and edge-bundling algorithms.”
- Locator: Published PDF pp. 1, 3, and 5-11; Abstract, Fig. 1d, and Network layout sections
- Status: Supported life-science system example from assessed coauthor source; full report locally available
- Qualification: Established as Algorithmic × CAVE. Immersive assistance is not inferred because the report does not show the assistance algorithm changing with tracked CAVE context.
- Source: `docs/H2H2/SamplePapers/iCAVE-gix054.pdf`

## Contextual and unresolved boundary records

### B01 - Comparative Pathology Workbench: Algorithmic (not established) × Desktop/Planar

- Paper: The Comparative Pathology Workbench: Interactive visual analytics for biomedical data
- Identity: canonical:e26e08d015cc07f5ac7f1892; citation key: `wicks2023cpw`
- Report assessed: Published DOI assessed from institutional author/preproof report
- Candidate tasks: Navigation and Multiscale Orientation; Selection, Filtering, and Precision Interaction; Coordination and Collaborative Reasoning
- Mechanism/boundary: The workbench organizes images, annotations, links, and discussions, while substantive analyses are performed in external tools and linked or imported.
- Evidence passage: “The integration of QuPath to the CPW is indirect, via the linking of 2 images.”
- Locator: Author/preproof PDF pp. 3-7 and 12-17; Integration discussion
- Status: Contextual original; E4 unresolved and on HOLD; PeCaX is the supported replacement
- Qualification: Not an established matrix placement and not counted as an eligible example.
- Source: `outputs/staging/full-report-anchor-synthesis-v1-20260924/reports/comparative-pathology-workbench-published.pdf`

### B02 - Touch Talk Interactive: Conversational (not established) × Large Display

- Paper: Talk to the Wall: The Role of Speech Interaction in Collaborative Visual Analytics
- Identity: not found in current canonical export; citation key: `molinaleon2025talk (proposed; current manuscript bibliography unavailable)`
- Report assessed: IEEE TVCG 31(1) article, DOI 10.1109/TVCG.2024.3456335
- Candidate tasks: Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development; Coordination and Collaborative Reasoning
- Mechanism/boundary: A wall-scale technology probe maps fixed speech-command templates to the same operations available through touch during a fictitious mystery task.
- Evidence passage: “All commands were available in both speech and touch ... 'Open document 12' ... 'Search for flowers'.”
- Locator: Published PDF pp. 3-5; Sections 3-4 and Table 1
- Status: Contextual non-life-science interaction and evaluation study
- Qualification: Speech is a button-equivalent command channel rather than evidenced dialogue; it does not establish Conversational or Adaptive assistance and is not a life-science system example.
- Source: `docs/H2H2/SamplePapers/Talk_to_the_Wall_The_Role_of_Speech_Interaction_in_Collaborative_Visual_Analytics.pdf`

### B03 - Exocentric/Egocentric VR study: Immersive (not established) × VR

- Paper: Exocentric and Egocentric Views for Biomedical Data Analytics in Virtual Environments - A Usability Study
- Identity: not found in current canonical export; citation key: `ng2024exocentric (proposed; current manuscript bibliography unavailable)`
- Report assessed: Journal of Imaging 10(1), DOI 10.3390/jimaging10010003
- Candidate tasks: Navigation and Multiscale Orientation; Comparison and Differentiation
- Mechanism/boundary: The study compares exocentric and egocentric viewing of biomedical data in VR, but the assessed evidence does not establish a substantive computational assistance mechanism coupled to the view.
- Evidence passage: “Oncology data models were observed in a virtual reality environment to analyse gene expression and clinical data from a cohort of cancer patients.”
- Locator: Published PDF p. 1; Abstract; usability-study sections
- Status: Contextual biomedical interaction/evaluation study
- Qualification: VR presentation and viewpoint comparison do not by themselves establish Immersive assistance or E4.
- Source: `docs/H2H2/SamplePapers/Exocentric and Egocentric Views for Biomedical Data Analytics in Virtual Environments-imaging-10-00003-v2.pdf`

### B04 - iCAVE: Immersive (unresolved) × CAVE

- Paper: iCAVE: an open source tool for visualizing biomolecular networks in 3D, stereoscopic 3D and immersive 3D
- Identity: canonical:aa1b96d255c53b1b20a90793; citation key: `liluashvili2017icave`
- Report assessed: Published GigaScience article, DOI 10.1093/gigascience/gix054
- Candidate tasks: Navigation and Multiscale Orientation; Comparison and Differentiation; Selection, Filtering, and Precision Interaction; Sensemaking and Hypothesis Development
- Mechanism/boundary: The report combines algorithmic 3D network organization with CAVE presentation and physical navigation, but the same assistance mechanisms also operate on desktop.
- Evidence passage: “Other layouts could possibly work well within 3D or immersive 3D, which we will explore further in future studies.”
- Locator: Published PDF p. 9; Discussion
- Status: Eligible life-science system; this specific assistance-mode placement remains unresolved
- Qualification: Do not infer Immersive assistance from CAVE use alone; the full report does not show assistance adapting to tracked immersive context.
- Source: `docs/H2H2/SamplePapers/iCAVE-gix054.pdf`

