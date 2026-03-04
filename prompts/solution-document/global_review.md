
  ---
  Section 3: Ingestion — "Take control of how documents enter agent workflows"

  Current wording:
  - Label: "Ingestion"
  - Headline: "Take control of how documents enter agent workflows."
  - Tagline: "Pull PDFs, scans, images, and inbound messages into a single intake layer so downstream agents receive clean, typed records instead of fragmented files."
  - Detail bullets: "Standardize source capture across inboxes, scanners, portals..." and "Route every file through the same evidence pipeline..."

  Issues:
  - "Take control" is generic motivational language — doesn't say what's different.
  - "Single intake layer" is good but buried in the tagline.
  - The detail bullets are wordy and repeat "standardize" / "route" concepts.
  - "Without changing existing operational tooling" is a good selling point but reads like fine print.

  Option A (Concise and direct):
  Headline: "One intake layer. Every document format."
  Tagline: "PDFs, scans, images, and inbound messages enter a single pipeline —
  agents receive clean, typed records instead of fragmented files."
  Detail bullets:
    - "Connect inboxes, scanners, portals, and shared drives without changing existing tooling."
    - "Every file passes through the same evidence pipeline — consistent structure, every time."

  Option B (Pipeline-forward):
  Headline: "Standardize intake. Eliminate format fragmentation."
  Tagline: "Every document — PDF, scan, image, email attachment — enters one pipeline
  and exits as a typed, schema-validated record."
  Detail bullets:
    - "Plug into existing inboxes, scanners, and portals. No migration required."
    - "Consistent evidence pipeline from source capture to agent handoff."

  ---
  Section 4: Classification — "Classify first. Extract with precision."

  Current wording:
  - Label: "Classification"
  - Headline: "Classify first. Extract with precision."
  - Tagline: "Identify document types, segment pages, and route each section to the right extraction model — before a single field is pulled."
  - Signals: "Layout cues", "Page intent", "Entity patterns", "Evidence trace"

  Issues:
  - This section is actually well-written. The headline is punchy and the logic is clear.
  - Minor issue: "before a single field is pulled" is slightly awkward — "before extraction begins" is cleaner.
  - The signals list is good but could be more descriptive.

  Option A (Minor polish only):
  Headline: "Classify first. Extract with precision." (keep)
  Tagline: "Identify document types, segment pages, and route each section
  to the right extraction model — before extraction begins."

  Option B (Stronger connection to pipeline):
  Headline: "Know the document before you extract it."
  Tagline: "Classify type, segment pages, and route each section to the right
  extraction model — so every field is pulled with the correct schema."

  ---
  Section 5: Table Extraction — "Capture every row, column, and nested structure"

  Current wording:
  - Label: "Smart table extraction"
  - Headline: "Capture every row, column, and nested structure."
  - Tagline: "Preserve table hierarchy, handle merged cells, and output structured records that match the original layout — ready for agents to query."

  Issues:
  - Solid section. The headline is concrete and specific.
  - "Ready for agents to query" connects back to the agent-use-ready theme.
  - Minor: "Preserve table hierarchy" and "match the original layout" say similar things.

  Option A (Tighten):
  Headline: "Capture every row, column, and nested structure." (keep)
  Tagline: "Handle merged cells, multi-page continuations, and nested subtotals —
  output structured records agents can query directly."

  Option B (Add financial specificity):
  Headline: "Tables are the hardest part. We solve them."
  Tagline: "Merged cells, multi-page continuations, nested subtotals, and footnote
  references — extracted into typed records with row-level lineage."

  ---
  Section 6: Data Mapping — KEY SECTION 🎯

  Current wording:
  - Label: "Data mapping"
  - Headline: "Agents are only as reliable as the data map they can retrieve."
  - Tagline: "We structure extracted data into entity graphs, field lineage, and retrieval-ready indexes — so agents reason over relationships, not raw text."
  - Mapping rows: "Entity graph: issuer → account → transaction → obligation", "Field lineage: page 02 · table B · row 14 · cell 06", "Reasoning index: retrieval-ready evidence + typed
  schema"
  - Capabilities: "Reasoning", "Retrieval", "Calculation"

  Issues:
  - The headline is strong — "only as reliable as the data map" is a great insight.
  - But the section doesn't leverage the agentic search blog's key insight: traditional RAG achieves 25-30% accuracy on financial QA, while agentic search with proper data mapping achieves
  99%+.
  - The capability descriptions are too abstract: "Give agents explicit semantic relationships instead of forcing them to infer structure from raw text" — this is correct but doesn't land
  with impact.
  - Missing the blog's core concept: data mapping is what enables multi-agent verification, cross-source validation, and the iterative retrieval loop that drives 99% accuracy.

  Option A (Integrate agentic search insight — recommended):
  Headline: "Agents are only as reliable as the data map they retrieve."
  Tagline: "Traditional RAG hits 25–30% accuracy on financial questions.
  With structured data maps — entity graphs, field lineage, and retrieval-ready
  indexes — agentic search reaches 99%."

  Mapping rows:
    - "Entity graph" → "issuer → account → transaction → obligation"
    - "Field lineage" → "page 02 · table B · row 14 · cell 06"
    - "Retrieval index" → "typed schema + evidence trace + cross-source anchor"

  Capabilities:
    - "Reasoning" → "Entity graphs give agents explicit relationships —
      no inference from raw text. Each node links to source evidence."
    - "Retrieval" → "Route queries to the exact field, table, and entity —
      with cross-source verification that catches unit and temporal errors."
    - "Calculation" → "Anchor numerical operations to normalized values
      so comparisons, ratios, and totals stay reliable across documents."

  Option B (Bolder claim with benchmark):
  Headline: "The difference between 30% accuracy and 99%? The data map."
  Tagline: "RAG retrieves text. Agentic search retrieves structured relationships.
  We build the entity graphs, field lineage, and retrieval indexes that make
  the difference."

  Capabilities:
    - "Reasoning" → "Semantic relationships, not raw text. Agents traverse
      entity graphs instead of guessing structure from paragraphs."
    - "Retrieval" → "Multi-path retrieval across vector search, keyword match,
      and structured queries — verified against source evidence."
    - "Calculation" → "Normalized values with unit alignment. No more
      millions-vs-billions errors or fiscal-vs-calendar mismatches."

  Option C (Subtle, let the data speak):
  Headline: "Agents are only as reliable as the data map they can retrieve." (keep)
  Tagline: "We structure extracted data into entity graphs, field lineage, and
  retrieval-ready indexes — the foundation agentic search needs to verify,
  cross-reference, and reason across documents."

  Capabilities: (same titles, sharper descriptions)
    - "Reasoning" → "Entity graphs with source-linked nodes. Agents traverse
      relationships instead of inferring structure from raw text."
    - "Retrieval" → "Route each query to the correct field, table, and entity —
      with cross-source validation that catches temporal and unit errors."
    - "Calculation" → "Normalized values anchored to typed schemas.
      Comparisons, ratios, and totals stay reliable across filings."

  ---
  Section 7: Human Review — "Automate document review from end-to-end"

  Current wording:
  - Label: "Human review"
  - Headline: "Automate document review from end-to-end."
  - Tabs: "Document annotation", "Edge-case handling", "Shareable review screen", "Role-based access"

  Issues:
  - "Automate document review from end-to-end" contradicts itself — if it's automated end-to-end, why is there a human review section?
  - The section should position human review as the exception, not the rule. The hero already says "only edge cases reach human review."

  Option A (Reframe as exception handling):
  Headline: "When agents flag an edge case, humans resolve it fast."

  Option B (Confidence-based framing):
  Headline: "Agents handle the volume. Humans handle the exceptions."

  ---
  Section 8: CTA — "See how businesses are using it"

  Current wording:
  - Label: "Use cases"
  - Headline: "See how businesses are using it."
  - Tabs: Finance, Logistics, Real Estate, Healthcare, Insurance
  - Use cases listed in 3 columns

  Issues:
  - "See how businesses are using it" is weak — generic and passive.
  - "It" is vague — what is "it"?

  Option A:
  Headline: "Built for the workflows that matter most."

  Option B:
  Headline: "Document processing across regulated industries."

  ---
  Storyline Flow Assessment

  Current flow has one structural issue: the Features section (Section 2) overlaps heavily with the Hero. Both talk about "extraction, fields, tables, agents." The fix is to make the hero
  about what you get (the promise) and the features about how it works (the pipeline).

  Recommended storyline after optimization:

  1. Hero: The promise — "Agent-use-ready extraction. Financial-grade precision." ✅ (done)
  2. Features: The pipeline overview — "From raw documents to typed records in one pass."
  3. Ingestion: How documents enter — "One intake layer. Every format."
  4. Classification: How documents are understood — "Classify first. Extract with precision."
  5. Table Extraction: The hardest technical problem — "Every row, column, nested structure."
  6. Data Mapping: The key differentiator — "The difference between 30% and 99%? The data map."
  7. Human Review: The safety net — "Agents handle the volume. Humans handle the exceptions."
  8. CTA: The close — "Built for the workflows that matter most."

  ---




  ---
  Section 3: Ingestion ("Take control of how documents enter agent workflows")

  Current:
  - Headline: "Take control of how documents enter agent workflows."
  - Description: "Pull PDFs, scans, images, and inbound messages into a single intake layer..."
  - Left-border callouts about standardizing source capture and routing through evidence chains.

  Issues:
  - "Take control" is vague motivational language.
  - "Single intake layer" is good but the description is wordy — 35 words to say "we normalize inputs."
  - The two callout paragraphs are redundant with each other. Both say "standardize inputs and route them."
  - "Without changing existing operational tooling" is a good selling point but buried.

  Options:

  Option A (Tighten):
  Headline: "One intake layer. Every document format."
  Description: "PDFs, scans, images, and inbound messages enter a single ingestion
  pipeline. Downstream agents receive clean, typed records — not fragmented files."
  Callouts:
  - "Connect inboxes, scanners, portals, and shared drives without changing existing tooling."
  - "Every file gets the same evidence chain: source → parse → validate → route."

  Option B (Pipeline-focused):
  Headline: "Standardize document intake across every source."
  Description: "Pull from inboxes, scanners, portals, and shared drives into one
  pipeline. Every file is parsed, validated, and routed before agents see it."
  Callouts:
  - "Supports PDF, PNG, HTML, email attachments, and scanned images."
  - "No changes to existing operational tooling required."

  ---
  Section 4: Classification ("Classify first. Extract with precision.")

  Current:
  - Headline: "Classify first. Extract with precision."
  - Description: "Identify document types before extraction begins..."
  - Signals: "Layout cues", "Page intent", "Entity patterns", "Evidence trace"
  - Visual: Document classification UI mockup

  Issues:
  - This section is solid. The headline is punchy and the logic is clear: classify → then extract.
  - "Page intent" is slightly vague — could be "document intent" or "content type."
  - The description is clean. Minor tightening possible.

  Options:

  Option A (Minor polish — recommended):
  Headline: "Classify first. Extract with precision." (keep)
  Description: "Identify document types before extraction begins so each format gets
  the right parsing model — not a generic one."
  Signals: "Layout structure", "Document intent", "Entity patterns", "Evidence trace"

  Option B (More specific):
  Headline: "Classify first. Extract right."
  Description: "Route each document to a specialized extraction model based on type —
  1040s, W-2s, bank statements, and invoices each get purpose-built parsing."
  Signals: "Layout cues", "Content type", "Entity patterns", "Extraction trace"

  ---
  Section 5: Table Extraction ("Capture every row, column, and nested structure")

  Current:
  - Headline: "Capture every row, column, and nested structure."
  - Description: "Detect and extract tabular data from financial statements, rent rolls, and operational reports..."
  - Tabs: "Smart table extraction", "Annotate to automate", "API integration"

  Issues:
  - Headline is good — concrete and specific.
  - "Detect and extract tabular data" is slightly redundant with the headline.
  - The tabs suggest three sub-features but only "Smart table extraction" content is shown. The other two tabs feel like placeholders.
  - This section could connect more explicitly to the Data Mapping section below — tables are the raw material, data mapping is the semantic layer.

  Options:

  Option A (Add bridge to Data Mapping):
  Headline: "Capture every row, column, and nested structure." (keep)
  Description: "Extract tabular data from financial statements, rent rolls, and
  operational reports — then pass structured records to the data mapping layer
  for semantic indexing."

  Option B (Tighten):
  Headline: "Table extraction that handles real-world complexity."
  Description: "Merged cells, nested headers, multi-page tables, and footnote
  references — extracted into typed records with row-level provenance."

  ---
  Section 6: Data Mapping ⭐ (KEY SECTION)

  Current:
  - Headline: "Agents are only as reliable as the data map they can retrieve."
  - Description: "Structure extracted data into entity graphs, field lineage, and retrieval-ready indexes..."
  - Mapping rows: "Entity graph", "Field lineage", "Reasoning index"
  - Capabilities: "Reasoning", "Retrieval", "Calculation"

  Issues:
  - The headline is strong — it's the best headline on the page.
  - But the section undersells the concept. Based on the agentic search blog, this is where agentii.Solutions' 99% accuracy comes from. The blog explains that traditional RAG achieves only
  25-30% accuracy on financial QA because it can't navigate the semantic complexity of financial documents. Agentic search solves this through multi-agent orchestration, iterative
  verification, and structured data maps.
  - "Entity graph", "Field lineage", "Reasoning index" are the right concepts but need more explanation of WHY they matter.
  - The three capabilities (Reasoning, Retrieval, Calculation) are good but their descriptions are generic. They should reference the agentic search architecture: orchestrator → retrievers →
   extractor → verifier → synthesizer.
  - This section should be the climax of the page's storyline: Ingest → Classify → Extract Tables → Map semantically → Review exceptions. Data Mapping is the transformation that makes
  everything agent-use-ready.

  Options:

  Option A (Agentic Search Positioning — Recommended):
  Headline: "Agents are only as reliable as the data map they retrieve."
  Description: "Traditional RAG achieves 25-30% accuracy on financial questions.
  Our agentic data maps achieve 99%. The difference: structured entity graphs,
  field-level lineage, and retrieval-ready indexes that agents can navigate
  with precision — not guess from raw embeddings."

  Mapping rows:
  - "Entity graph" → "issuer → account → transaction → obligation — explicit
     relationships agents traverse, not infer"
  - "Field lineage" → "page 02 · table B · row 14 · cell 06 — every value
     traceable to its source coordinate"
  - "Reasoning index" → "retrieval-ready evidence with typed schema — agents
     query by field, entity, or time period, not by keyword similarity"

  Capabilities:
  - "Reasoning" → "Agents traverse explicit semantic relationships instead of
     inferring structure from raw text. Entity graphs connect issuers to accounts
     to transactions — no ambiguity."
  - "Retrieval" → "Each query routes to the correct field, table, and time period
     with provenance. No more retrieving Q2 data when the question asks about Q3."
  - "Calculation" → "Numerical operations anchor to normalized, typed values.
     Comparisons, ratios, and totals stay reliable because units, currencies,
     and time periods are explicit."

  Option B (Shorter, punchier):
  Headline: "The data map is the accuracy."
  Description: "RAG retrieves text. Agentic search retrieves structured facts.
  We build the data maps that make the difference: entity graphs, field lineage,
  and typed schemas that agents query with 99% precision."

  Mapping rows:
  - "Entity graph" → "issuer → account → transaction — relationships, not embeddings"
  - "Field lineage" → "page · table · row · cell — every value has a source address"
  - "Reasoning index" → "typed schema + evidence trace — query by field, not by keyword"

  Capabilities:
  - "Reasoning" → "Explicit relationships replace inference. Agents traverse, not guess."
  - "Retrieval" → "Right field, right period, right entity. Provenance included."
  - "Calculation" → "Typed values with units and currencies. Math that stays correct."

  Option C (Blog-reference heavy):
  Headline: "Why agentic search achieves 99% where RAG stops at 30%."
  Description: "The answer is data mapping. When agents can traverse entity graphs,
  follow field lineage to source coordinates, and query typed schemas instead of
  raw embeddings — accuracy jumps from 30% to 99%. We build that layer."

  Mapping rows: (same as Option A)

  Capabilities:
  - "Multi-path retrieval" → "Vector search, keyword search, and structured queries
     run in parallel — the orchestrator picks the best evidence."
  - "Cross-source verification" → "Every extracted value is validated against
     multiple sources within 0.1% tolerance before agents see it."
  - "Provenance tracking" → "Full audit trail from user query to final answer —
     which documents, which tables, which cells, which reasoning steps."

  ---
  Section 7: Human Review ("Automate document review from end-to-end")

  Current:
  - Headline: "Automate document review from end-to-end."
  - Tabs: "Document annotation", "Edge-case handling", "Shareable review screen", "Role-based access"
  - Visual: Review UI with flagged/resolved states

  Issues:
  - "Automate document review from end-to-end" contradicts itself — if it's automated end-to-end, why is there human review?
  - The section should position human review as the exception handler, not the default. The storyline should be: agents handle 95%+ automatically, humans only see edge cases.
  - "Document annotation" as a tab label is confusing here — annotation is an input activity, not a review activity.

  Options:

  Option A (Exception-first framing):
  Headline: "Agents handle 95%. Humans handle the exceptions."
  Description: "Confidence scoring routes edge cases to human reviewers.
  Everything above threshold executes automatically. No bottleneck."
  Tabs: "Exception routing", "Edge-case annotation", "Shared review screen", "Role-based access"

  Option B (Quality gate framing):
  Headline: "Human review where it matters. Automation everywhere else."
  Description: "Confidence thresholds determine what agents execute and what
  humans verify. Flagged fields get annotation. Resolved fields flow downstream."
  Tabs: "Field-level annotation", "Edge-case handling", "Shareable review screen", "Role-based access"

  Option C (Minimal change):
  Headline: "Human-in-the-loop for edge cases. Automated for everything else."
  Tabs: "Field annotation", "Edge-case handling", "Shared review screen", "Role-based access"

  ---
  Section 8: CTA ("See how businesses are using it")

  Current:
  - Headline: "See how businesses are using it."
  - Industry tabs: Finance, Logistics, Real Estate, Healthcare, Insurance
  - Use case grid with specific applications

  Issues:
  - "See how businesses are using it" is weak as a closing CTA. It's passive — "see" instead of "do."
  - The use case grid is strong content but the headline doesn't drive conversion.
  - Missing a primary CTA button (Request a Demo, Contact Sales).

  Options:

  Option A (Conversion-focused):
  Headline: "Document processing for your industry."
  Add below the use case grid:
    CTA headline: "Ready to make your documents agent-use-ready?"
    Primary button: "Request a Demo"
    Secondary button: "Contact Sales"
    Trust indicators: "Response within 24 hours · SOC 2 certified"

  Option B (Direct):
  Headline: "Built for regulated, data-heavy industries."
  CTA: "See it work on your documents."
  Primary button: "Request a Demo"

  ---
  Storyline Flow Assessment

  The current flow has redundancy between Hero and Features. Here's the optimized storyline:

  Current:  Hero → Features → Ingestion → Classification → Table → Data Mapping → Human Review → CTA
                   ↑ redundant

  Proposed: Hero → Ingestion → Classification → Table Extraction → Data Mapping → Human Review → CTA
                                                                        ↑ climax

  The Features section should either be merged into the Hero or eliminated. Every other section tells a clear pipeline story: documents come in (Ingestion) → get classified (Classification)
  → tables extracted (Table) → semantically mapped (Data Mapping) → exceptions reviewed (Human Review) → ready for agents (CTA).

  ---
  Which options do you want me to implement for each section?
