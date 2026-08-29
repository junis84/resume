import { careerHistoryData, resumeData } from "@/data/resume";
import type {
  Experience,
  OpenSourceProject,
  Project,
  ProjectAchievement,
  Resume,
} from "@/types/resume";

type ExperienceCopy = Pick<
  Experience,
  "company" | "position" | "department" | "duration" | "companyInfo" | "highlights"
>;

const experienceCopy: Record<string, ExperienceCopy> = {
  "exp-oliveyoung": {
    company: "CJ OliveYoung",
    position: "AI Engineer · Forward Deployed Engineering (FDE)",
    department: "AI Transformation Engineering",
    duration: "5 months",
    companyInfo: "Health and beauty retailer · Enterprise AI transformation organization",
    highlights: [
      "Designed an enterprise agent platform on Gemini Enterprise and Vertex AI Agent Engine",
      "Led the architecture and core implementation of an evidence-grounded knowledge agent and a Tableau-connected analytics agent",
      "Defined A2A contracts and integration boundaries between document evidence and structured enterprise data",
      "Built deployment quality gates backed by 21 deterministic evaluators and 9 LLM-based evaluators",
      "Designed an AI-assisted internal app delivery platform and engineering harness for non-developers",
      "Worked directly with business teams from problem definition through evaluation-set authoring",
    ],
  },
  "exp-42dot": {
    company: "42dot Inc.",
    position: "Senior Backend Engineer",
    department: "TMS Engineering",
    duration: "7 months",
    companyInfo: "Hyundai Motor Group company specializing in software-defined vehicles and autonomous driving",
    highlights: [
      "Developed and launched the backend for Capora TMS 2.0",
      "Designed and implemented a multi-agent pipeline for the Capora AI Assistant",
      "Built domain-specific agents with Kotlin, Spring AI, and Amazon Bedrock",
      "Designed shipper organization and identity management for OMS and administration workflows",
      "Implemented integrations with external dispatch systems",
    ],
  },
  "exp-musinsa": {
    company: "Musinsa",
    position: "Backend Engineer",
    department: "Snap & Influencer Engineering",
    duration: "5 years 11 months",
    companyInfo: "Fashion commerce company",
    highlights: [
      "Built AI-powered recommendation and search systems with Amazon SageMaker and Amazon Bedrock",
      "Designed and developed the initial company-wide AI gateway",
      "Designed event-driven architectures and AWS infrastructure for high-traffic services",
      "Migrated legacy PHP services to Java and Kotlin while preserving business behavior",
      "Introduced domain-driven design, acceptance-test-driven development, and delivery automation to the team",
      "Shared the content-platform modernization case at AWS Summit Seoul and on the AWS Technical Blog",
    ],
  },
  "exp-hanbiro": {
    company: "Hanbiro",
    position: "Full-stack Engineer",
    department: "Engineering",
    duration: "6 years 3 months",
    companyInfo: "Groupware and web-hosting provider · 60 employees and a 10-person engineering team",
    highlights: [
      "Developed groupware and CRM products across the web stack",
      "Modeled relational schemas and designed application architectures",
      "Customized and integrated systems around customer-specific operations",
      "Owned delivery from requirements and estimates through release",
    ],
  },
  "exp-ssr": {
    company: "SSR",
    position: "Full-stack Engineer",
    department: "Engineering",
    duration: "4 months",
    companyInfo: "Security assessment products and information-security consulting",
    highlights: [
      "Built the management server and web application for the MetiEye malware-monitoring product",
      "Built management capabilities for the SolidStep system-assessment product",
      "Designed relational schemas, backend architecture, and server infrastructure",
    ],
  },
  "exp-ejunction": {
    company: "e-Junction Korea",
    position: "Full-stack Engineer",
    department: "Engineering",
    duration: "1 year 6 months",
    companyInfo: "Eight-person consumer web startup",
    highlights: [
      "Built an online service that delivered photos captured at partner photo-booth stores",
      "Designed the relational schema, backend architecture, and server infrastructure",
    ],
  },
  "exp-cloudweb": {
    company: "CloudWeb",
    position: "Web Engineer",
    department: "Engineering",
    duration: "1 year 10 months",
    companyInfo: "Ten-person IT startup",
    highlights: [
      "Developed a tool that reformatted search-result layouts across four major Korean portals",
      "Built an online fashion store",
      "Owned the full lifecycle from planning through deployment in a small team",
    ],
  },
};

function localizeExperience(experience: Experience): Experience {
  const copy = experienceCopy[experience.id];
  if (!copy) throw new Error(`Missing English experience copy: ${experience.id}`);
  return { ...experience, ...copy, companyEn: undefined };
}

type ProjectCopy = Pick<Project, "name" | "category" | "descriptions"> & {
  achievements?: ProjectAchievement[];
};

const projectCopy: Record<string, ProjectCopy> = {
  "proj-aix-platform": {
    name: "Enterprise Agent Platform & Evaluation",
    category: "Agentic AI Platform",
    descriptions: [
      "Designed and built an enterprise agent platform on Gemini Enterprise and Vertex AI Agent Engine",
      "Supported 10 distinct agent domains while enforcing package boundaries with static checks",
      "Selected managed Agent Engine or self-hosted Cloud Run A2A topology according to data-residency and security-boundary requirements",
      "Standardized Slack, Jira, Workspace, and Tableau access through MCP services inside the enterprise boundary",
      "Used shared infrastructure-as-code modules to prevent configuration drift between development and production",
    ],
    achievements: [
      { text: "Implemented a runtime registry that adds agent domains without modifying platform code", isHighlight: true },
      { text: "Recorded design decisions, trade-offs, and reversal criteria as a queryable document graph", isHighlight: true },
    ],
  },
  "proj-md-wisely": {
    name: "Evidence-grounded Enterprise Knowledge Agent",
    category: "RAG · Knowledge Agent",
    descriptions: [
      "Designed and implemented retrieval for an agent that answers internal policy, operating-guide, and Q&A questions",
      "Built an eight-stage ingestion pipeline over 1,435 active wiki documents using structure-aware chunking, embeddings, and indexing",
      "Implemented a 16-stage serving graph that separates intent, retrieval, evidence assessment, generation, and claim verification",
      "Defined A2A provenance boundaries for calls into the structured-data analytics agent",
      "Added citation validation, explicit abstention, and content-hash versioning for hallucination control and idempotent re-indexing",
    ],
    achievements: [
      { text: "Measured 96.9% claim precision and 1.6% unsupported claims in a 100-question comparative study", isHighlight: true },
      { text: "Blocked fluent answers when evidence was absent or insufficient through deterministic evidence states", isHighlight: true },
    ],
  },
  "proj-tableau-agent": {
    name: "Natural-language Analytics Agent for Tableau",
    category: "Data Analytics Agent",
    descriptions: [
      "Converted Korean natural-language questions into validated query plans for approved Tableau data sources",
      "Implemented five user-facing phases as a 25-step control graph while limiting model judgment to seven steps",
      "Resolved display-value mismatches with value indexes and alias harvesting, and handled relative dates using data-epoch awareness",
      "Defined nine abstention contracts for unsupported or unsafe requests",
      "Prevented invalid numeric queries before execution with 35 deterministic checks, up to three repairs, and one reinterpretation",
    ],
    achievements: [
      { text: "Made plausible-but-wrong numbers the primary failure mode and designed guardrails around silent errors", isHighlight: true },
      { text: "Traded additional latency for consistent, contract-valid responses through code-level output validation", isHighlight: true },
    ],
  },
  "proj-agent-eval": {
    name: "AI Agent Evaluation & Deployment Quality Gates",
    category: "AI Evaluation",
    descriptions: [
      "Designed an online evaluation framework with 21 deterministic and 9 LLM-based evaluators",
      "Implemented a prime–certify–score flow with database-owned evaluation sets and one live scoring runner",
      "Added judge calibration using weighted Cohen's kappa, Gwet's AC1, and Krippendorff's alpha, plus online drift detection",
      "Promoted production traces into evaluation sets through failure-weighted, complexity-stratified sampling",
      "Compared runs with McNemar's exact test and confidence intervals for differences in proportions",
    ],
    achievements: [
      { text: "Established deployment gates that block releases when measured quality regresses", isHighlight: true },
      { text: "Moved subjective debates toward measurable acceptance criteria authored by business experts", isHighlight: true },
    ],
  },
  "proj-webloom": {
    name: "AI-assisted Internal App Delivery Platform",
    category: "Harness Engineering · Platform",
    descriptions: [
      "Designed a platform where non-developers specify, build, verify, and deploy internal web applications",
      "Created a six-stage delivery pipeline with adversarial review bookends before and after implementation",
      "Layered constitutional rules, path-scoped rules, skills, and review lenses so agents load only relevant context",
      "Converted accessibility, design-token, architecture-boundary, and security expectations into build-time gates",
      "Operated four internal-app surfaces on a shared DTCG-compliant design-token foundation",
    ],
    achievements: [
      { text: "Introduced repeatable quality gates that apply the same standards regardless of who—or which agent—implements the change", isHighlight: true },
      { text: "Preserved failed approaches and reversal criteria to prevent repeated mistakes", isHighlight: true },
    ],
  },
  "proj-rag-experiments": {
    name: "Controlled Experiments for RAG Retrieval Quality",
    category: "Applied AI Research",
    descriptions: [
      "Designed 12 controlled conditions across chunking, contextual enrichment, and multimodal retrieval",
      "Cross-tested a 320-page corpus and 60-question golden set with bge-m3 hybrid and Gemini embeddings",
      "Compared seven multimodal strategies including captions, page images, tiling, joint retrieval, and hybrid RRF",
      "Separated retrieval failures from generation failures with an oracle condition",
      "Decomposed response variance into query-generation and answer-generation effects",
    ],
    achievements: [
      { text: "Measured R@5 0.80 and MRR 0.66 for the production retrieval configuration", isHighlight: true },
      { text: "Confirmed complementary roles: captions improved retrieval while images supplied generation context", isHighlight: true },
    ],
  },
  "proj-kb-ops-console": {
    name: "Knowledge Operations & AI Observability Consoles",
    category: "Operations Platform",
    descriptions: [
      "Decoupled the knowledge operations UI from platform internals through contract-owned database views",
      "Made deployed control-plane responses the sole source of truth for allowed values and constraints",
      "Reconstructed agent sessions from Cloud Logging for audit-grade observability",
      "Built content-addressed prompt versioning, evaluation-set authoring, trend views, and a promotion ledger",
    ],
    achievements: [
      { text: "Established a white-box, database-backed path for reconstructing agent execution traces", isHighlight: true },
    ],
  },
  "proj-ax-content": {
    name: "Engineering Decision Records & Experiment Reports",
    category: "Technical Communication",
    descriptions: [
      "Published 26 internal documents covering agent behavior, ingestion, RAG and multimodal experiments, evaluation studies, and tools",
      "Included source chunks, similarity signals, and judgment evidence alongside aggregate results",
      "Created operating guides that business and engineering teams could use without author intervention",
    ],
    achievements: [
      { text: "Reduced repeated design debates by preserving evidence, trade-offs, and decisions", isHighlight: true },
    ],
  },
  "proj-capora-ai-assistant": {
    name: "Capora AI Assistant Multi-agent System",
    category: "Multi-agent System",
    descriptions: [
      "Designed a five-stage intent–plan–specialize–compose–suggest pipeline for transportation management",
      "Implemented domain specialists with Spring AI tools and Amazon Bedrock for orders, dispatch, settlement, rates, and accounts",
      "Skipped planner calls for high-confidence simple requests and enabled zero-LLM execution for deterministic actions",
      "Centralized tool definitions in a single registry and generated planner prompts from the same source",
      "Supported component-level model selection for experiments and multiple providers",
    ],
    achievements: [
      { text: "Applied the multi-agent pipeline in production", isHighlight: true },
      { text: "Enabled new specialist domains without changing pipeline code", isHighlight: true },
    ],
  },
  "proj-capora-tms": {
    name: "Capora TMS 2.0 Backend & Launch",
    category: "Transportation Management System",
    descriptions: [
      "Developed backend services for the Capora TMS 2.0 launch",
      "Designed shipper organization and user-management capabilities for OMS and administration modules",
      "Integrated external dispatch systems to support automated assignment workflows",
    ],
    achievements: [{ text: "Launched Capora TMS 2.0", isHighlight: true }],
  },
  "proj-ai-gateway": {
    name: "Company-wide AI Gateway",
    category: "AI Platform",
    descriptions: [
      "Built the initial platform for centrally governing previously fragmented AI use cases",
      "Implemented rate limits, token budgets, usage tracking, audit logs, and quality checks",
      "Separated immediate and deferred requests and used Temporal workflows for cost-efficient batch processing",
    ],
    achievements: [
      { text: "Established a shared control plane for enterprise AI services", isHighlight: true },
      { text: "Improved operational efficiency with durable Temporal workflows", isHighlight: true },
    ],
  },
  "proj-ai-search": {
    name: "Natural-language Search for Fashion Creators",
    category: "Semantic Search",
    descriptions: [
      "Embedded natural-language queries, creator metadata, and image captions with Amazon Bedrock and SageMaker",
      "Built a Kotlin and Spring Boot inference API backed by Elasticsearch vector search and Redis",
      "Added a semantic discovery path for finding relevant creator content",
    ],
  },
  "proj-ai-image-tag": {
    name: "AI-assisted Product Tagging from Fashion Images",
    category: "Computer Vision · Recommendation",
    descriptions: [
      "Detected and segmented fashion items in user images with Amazon SageMaker",
      "Embedded cropped items and retrieved similar products for tag suggestions",
      "Built a real-time Kotlin and Spring Boot inference path backed by Elasticsearch and Redis",
      "Collaborated with the AWS prototyping team to move the approach from proof of concept toward production",
    ],
    achievements: [{ text: "Reduced manual work through image-based product-tag suggestions", isHighlight: true }],
  },
  "proj-db-sharding": {
    name: "Sharding the Product-like Data Store",
    category: "Database Scalability",
    descriptions: [
      "Migrated a single-table like service to a sharded design as it approached capacity limits",
      "Implemented routing with Apache ShardingSphere and supported reads with Amazon ElastiCache and RDS",
      "Executed the migration without service interruption",
    ],
  },
  "proj-snap-2": {
    name: "Musinsa Snap 2.0 Backend",
    category: "Content Platform",
    descriptions: [
      "Built Kotlin and Spring Boot services with explicit layered responsibilities",
      "Designed an event-driven architecture with Amazon MSK and introduced Amazon Personalize",
      "Operated on ECR and EKS with automated test and deployment pipelines",
    ],
    achievements: [{ text: "Reduced service coupling and improved extensibility through event-driven boundaries", isHighlight: true }],
  },
  "proj-kotlin-migration": {
    name: "Unified Content Platform & PHP-to-Kotlin Migration",
    category: "Platform Modernization",
    descriptions: [
      "Consolidated distributed style content into a unified platform",
      "Migrated legacy PHP services to Kotlin while preserving business behavior",
      "Integrated data in real time with Kafka Connect and Kafka Streams and operated the platform on Amazon EKS",
    ],
    achievements: [
      { text: "Reduced runtime footprint after moving the workload to the JVM", isHighlight: true },
      { text: "The architecture and migration were presented publicly at AWS Summit Seoul 2025", isHighlight: true },
    ],
  },
  "proj-fashiontalk": {
    name: "FashionTalk Community Backend",
    category: "Community Platform",
    descriptions: [
      "Built Java and Spring Boot APIs using test-driven development",
      "Applied hexagonal architecture to isolate external dependencies",
      "Designed event-driven integration with Amazon MSK",
    ],
    achievements: [{ text: "Improved testability through explicit ports and adapters", isHighlight: true }],
  },
  "proj-offerwall": {
    name: "Offerwall Service Backend",
    category: "Backend Service",
    descriptions: [
      "Built Kotlin and Spring Boot APIs using test-driven development",
      "Defined domain boundaries and ubiquitous language with domain-driven design",
      "Integrated services through Amazon MSK events",
    ],
    achievements: [{ text: "Established bounded contexts and explicit domain ownership", isHighlight: true }],
  },
  "proj-short-tv": {
    name: "Short-form Video Service & Back Office",
    category: "Media Platform",
    descriptions: [
      "Built Java and Spring Boot APIs and a Vue.js administration interface",
      "Implemented an asynchronous S3–SQS–Lambda ingestion path for transcoding and preview generation",
      "Added controls around external access to media content",
    ],
    achievements: [{ text: "Stabilized high-volume video processing with an asynchronous pipeline", isHighlight: true }],
  },
  "proj-blackfriday": {
    name: "Black Friday Event Systems (2020 & 2021)",
    category: "High-traffic Event",
    descriptions: [
      "Owned cache optimization and event-system hardening for two consecutive annual campaigns",
      "Built entry, drawing, and real-time sales-display features",
    ],
    achievements: [
      { text: "Redesigned caching to withstand event traffic", isHighlight: true },
      { text: "Improved operational visibility with a real-time sales dashboard", isHighlight: true },
    ],
  },
  "proj-raffle-java": {
    name: "Raffle Service Migration from PHP to Java",
    category: "Service Modernization",
    descriptions: [
      "Migrated a raffle service from PHP to Java and Spring Boot",
      "Deployed on Amazon ECR and EKS and used acceptance-test-driven development to preserve behavior",
    ],
    achievements: [{ text: "Reduced legacy debt and improved type safety through the Java migration", isHighlight: true }],
  },
  "proj-store-main": {
    name: "Serverless Storefront Content Pipeline",
    category: "Serverless Platform",
    descriptions: [
      "Generated static storefront data with Node.js and TypeScript",
      "Orchestrated Lambda and Step Functions and managed infrastructure with Serverless Framework and CloudFormation",
      "Integrated CloudFront, S3, SNS, SQS, and CloudWatch",
    ],
    achievements: [{ text: "Handled traffic variation without manual server scaling through serverless infrastructure", isHighlight: true }],
  },
  "proj-growth-tf": {
    name: "Growth Task Force",
    category: "Product Engineering",
    descriptions: [
      "Worked in a cross-functional team to identify and validate growth opportunities",
      "Improved referral workflows and delivered backlog items from hypothesis through implementation",
      "Documented and shared agile practices with other teams",
    ],
    achievements: [{ text: "Helped spread iterative product-delivery practices beyond the task force", isHighlight: true }],
  },
  "proj-codi": {
    name: "Outfit Recommendation Service",
    category: "Full-stack Product",
    descriptions: [
      "Built Kotlin and Spring Boot APIs using TDD and domain-driven design",
      "Designed event-driven integration with SNS and SQS",
      "Built the Vue.js frontend and end-to-end tests with Puppeteer",
    ],
    achievements: [{ text: "Added end-to-end coverage across frontend and backend workflows", isHighlight: true }],
  },
  "proj-store-platform-2020": {
    name: "Store Platform Security & Legacy Modernization",
    category: "Security · Serverless · Refactoring",
    descriptions: [
      "Implemented interoperable database encryption across PHP, Java, and Go with key management in AWS KMS",
      "Built a Go Lambda API backed by DynamoDB Streams and ElastiCache for navigation data",
      "Modernized a PHP CodeIgniter codebase with namespaces, autoloading, PSR-12, and clean-code practices",
    ],
  },
  "proj-policy-discussion": {
    name: "Store Engineering Policy Working Group",
    category: "Engineering Culture",
    descriptions: [
      "Organized discussions to resolve ambiguous service policies and missing documentation",
      "Documented coding conventions, infrastructure practices, and baseline service policies",
      "Improved consistency by turning tacit knowledge into shared references",
    ],
  },
  "proj-store-features": {
    name: "Storefront Filtering & Analytics Instrumentation",
    category: "Product · Analytics",
    descriptions: [
      "Built a global product filter across the storefront",
      "Instrumented marketing and product events through Google Tag Manager",
      "Improved personalization and established data for product and marketing decisions",
    ],
  },
  "proj-hanbiro-suite": {
    name: "Groupware, CRM & Customer Integrations (2013–2019)",
    category: "Groupware · CRM",
    descriptions: [
      "Developed groupware and CRM products with PHP, AngularJS, MariaDB, and Elasticsearch",
      "Built vehicle and call-management systems for automotive dealers and case-management systems for insurance adjusters",
      "Delivered public-sector integrations including the KIST Vietnam portal and a fire-department messenger",
      "Owned customer discovery, storyboards, work breakdown, implementation, and delivery",
    ],
  },
};

function localizeProject(project: Project): Project {
  const copy = projectCopy[project.id];
  if (!copy) throw new Error(`Missing English project copy: ${project.id}`);
  return {
    ...project,
    ...copy,
    company: project.companyEn ?? project.company,
    companyEn: undefined,
  };
}

const englishPublications: Resume["publications"] = [
  {
    ...resumeData.publications[0],
    title: "Connecting Content in Real Time: Musinsa's Unified Architecture",
    description: "Presented the architecture and migration decisions behind a unified content platform.",
  },
  {
    ...resumeData.publications[1],
    title: "How Musinsa Built AI-powered Product Recommendation and Search",
    publisher: "AWS Technical Blog",
    description: "Shared the system architecture built with Amazon SageMaker and Amazon Bedrock.",
  },
];

type OpenSourceCopy = Pick<OpenSourceProject, "description" | "features">;

const openSourceCopy: Record<string, OpenSourceCopy> = {
  "oss-symora": { description: "LSP-powered code intelligence CLI", features: ["36 languages", "LSP analysis", "Change-impact analysis"] },
  "oss-nodex": { description: "Queryable Markdown document graphs", features: ["Frontmatter and link validation", "Change-impact analysis", "JSON-first CLI"] },
  "oss-entelix": { description: "General-purpose agentic AI SDK", features: ["Multi-tenant foundations", "OTel GenAI conventions", "Type-enforced architecture"] },
  "oss-ontosyx": { description: "Knowledge-graph lifecycle platform", features: ["Ontology design", "NL-to-graph queries", "Graph analysis agent"] },
  "oss-branchforge": { description: "Rust runtime for stateful agents", features: ["Four-layer architecture", "Durable state", "Coding-agent support"] },
  "oss-lorekeeper": { description: "Turns daily work into a growing knowledge wiki", features: ["Multi-source ingestion", "Concept extraction and deduplication", "Obsidian publishing"] },
  "oss-hatel": { description: "Claude Code session telemetry", features: ["OTel and hook correlation", "Cost and token tracking", "Subagent analysis"] },
  "oss-harnex": { description: "Claude Code harness generator and validator", features: ["Project-aware scaffolding", "Rules, hooks, and permissions audit", "Session-based effectiveness measurement"] },
  "oss-claudio": { description: "Slack AI agent platform", features: ["Multi-agent routing", "Claude Code integration", "n8n integration"] },
  "oss-semantic-search": { description: "AI-powered semantic search CLI", features: ["Qwen3 embeddings", "Qdrant vector store", "MCP integration"] },
  "oss-datadog-cli": { description: "High-performance Datadog API CLI", features: ["Rust implementation", "Natural-language time parsing", "Unix pipelines"] },
  "oss-atlassian-cli": { description: "Atlassian Cloud CLI", features: ["JQL and CQL", "ADF support", "MCP server"] },
  "oss-chrome-devtools": { description: "Chrome automation CLI", features: ["Chrome DevTools Protocol", "Screenshots", "PDF generation"] },
  "oss-slack-cli": { description: "Slack API CLI", features: ["Messaging", "Channel management", "MCP server"] },
  "oss-figma-cli": { description: "Figma design extraction CLI", features: ["Design-data extraction", "JMESPath queries", "Image export"] },
  "oss-weavewiki": { description: "AI-powered codebase wiki generator", features: ["10+ language parsers", "Knowledge graph", "AI documentation"] },
  "oss-rds-cli": { description: "PostgreSQL and MySQL database CLI", features: ["Fast schema inspection", "Production safeguards", "Encrypted credentials"] },
  "oss-codecontext": { description: "Semantic code search engine", features: ["Hybrid retrieval", "12 relationship types", "Large-repository support"] },
};

function localizeOpenSource(project: OpenSourceProject): OpenSourceProject {
  const copy = openSourceCopy[project.id];
  if (!copy) throw new Error(`Missing English open-source copy: ${project.id}`);
  return { ...project, ...copy };
}

const englishCertifications: Resume["certifications"] = [
  {
    id: "cert-ckad-selected",
    name: "CKAD",
    issuer: "Linux Foundation",
    date: "2025-01",
    kind: "certification",
  },
  {
    id: "cert-cka-selected",
    name: "CKA",
    issuer: "Linux Foundation",
    date: "2025-01",
    kind: "certification",
  },
  {
    id: "membership-mensa",
    name: "Mensa Korea · Member",
    issuer: "Supervised IQ 148",
    date: "2014-04",
    kind: "membership",
  },
];

const englishAdditional: Resume["etc"] = [
  {
    id: "etc-military",
    date: "2003-11 – 2005-11",
    title: "Republic of Korea Army · Sergeant",
    organization: "Republic of Korea Army",
  },
];

const englishSelectedProjects: Resume["projects"] = [
  {
    id: "selected-md-wisely",
    name: "Evidence-grounded Enterprise Knowledge Agent",
    company: "CJ OliveYoung",
    startDate: "2026-04",
    category: "RAG · Knowledge Agent",
    role: "Architecture · RAG · Evaluation",
    stage: "Internal production environment · measured Aug 2026",
    portfolioUrl: "/portfolio/md-wisely",
    snapshot: "2026-08",
    descriptions: [
      "Indexed 1,435 wiki documents with structure-aware chunks, parent-child retrieval, and hybrid RRF",
      "Bounded intent, retrieval, evidence, generation, and claim checks in a 16-stage serving graph",
      "Blocked unsupported answers with evidence gates before generation and claim checks after generation",
    ],
    achievements: [
      { text: "100-question comparative study · 96.9% claim precision · 1.6% unsupported claims", isHighlight: true },
    ],
  },
  {
    id: "selected-tableau",
    name: "Natural-language Analytics Agent for Tableau",
    company: "CJ OliveYoung",
    startDate: "2026-04",
    category: "Data Analytics Agent",
    role: "Architecture · Guardrails · Evaluation",
    stage: "Internal production validation · measured Aug 2026",
    portfolioUrl: "/portfolio/tableau-agent",
    snapshot: "2026-08",
    descriptions: [
      "Implemented a 25-step control graph while limiting model judgment to seven steps",
      "Blocked silent errors with value normalization, 35 code checks, bounded repair, and data-epoch fingerprints",
    ],
    achievements: [
      { text: "139 business-authored questions × 3 runs · 121 stable passes · 14 variable results · 4 persistent failures", isHighlight: true },
    ],
  },
  {
    id: "selected-content-platform",
    name: "Unified Content Platform Modernization",
    company: "Musinsa",
    startDate: "2023-06",
    endDate: "2023-12",
    category: "Backend · Platform Modernization",
    role: "Backend Architecture · Migration · Event Streaming",
    stage: "Production launch · publicly presented case",
    descriptions: [
      "Unified style-content services and migrated the legacy PHP workload to Kotlin",
      "Used Kafka Connect and Kafka Streams for real-time integration and event-driven boundaries",
      "Improved Amazon EKS operations, CI/CD, and regression coverage for incremental migration",
    ],
    achievements: [
      { text: "Presented the architecture and migration at AWS Summit Seoul 2025", isHighlight: true },
    ],
  },
];

const selectedExperienceIds = ["exp-oliveyoung", "exp-42dot", "exp-musinsa"];
const selectedOpenSourceIds = ["oss-symora", "oss-nodex", "oss-hatel", "oss-harnex"];

export const selectedResumeDataEn: Resume = {
  header: {
    ...resumeData.header,
    nameKo: "Junyeong Eom",
    nameEn: "",
    title: "Senior AI & Backend Engineer · Agent Systems & Evaluation",
    location: "Seoul, South Korea",
    totalExperience: "16+ years",
    updatedAt: "2026-08-29",
  },
  introduce: {
    lead: "Senior AI and backend engineer with 16+ years building backend and platform systems, now specializing in enterprise agents with explicit evidence, guardrails, and evaluation.",
    principles: [],
    paragraphs: [
      "Partners directly with business and engineering stakeholders to define problems and measurable success criteria, validates model behavior through repeatable evaluation, and makes trade-offs explicit. Challenges proposals with evidence before a decision, then commits fully to the agreed direction. Scales solutions through reusable code, ADRs, operating guides, mentoring, and shared standards.",
    ],
    proofPoints: [
      { value: "10 domains", label: "Agent platform", detail: "Package boundaries · runtime registry" },
      { value: "96.9%", label: "Claim precision", detail: "100-question knowledge-agent study · Aug 2026" },
      { value: "139 questions", label: "Business-authored evaluation set", detail: "30 evaluators · 3 repeated runs" },
    ],
  },
  skills: careerHistoryData.skills,
  experience: resumeData.experience
    .filter((experience) => selectedExperienceIds.includes(experience.id))
    .map(localizeExperience)
    .map((experience) => {
      if (experience.id === "exp-oliveyoung") {
        return {
          ...experience,
          highlights: [
            "Defined package boundaries, runtime registries, and A2A/MCP contracts for 10 agent domains",
            "Led architecture and core implementation of evidence-grounded knowledge and analytics agents",
            "Partnered with business stakeholders to build a 139-question evaluation set and connect 30 evaluators to release gates",
          ],
        };
      }
      if (experience.id === "exp-42dot") {
        return {
          ...experience,
          highlights: [
            "Shipped Capora TMS 2.0 and designed its Amazon Bedrock multi-agent pipeline",
            "Centralized tool definitions and routed deterministic requests without an LLM",
          ],
        };
      }
      return {
        ...experience,
        companyInfo: undefined,
        highlights: [
          "Designed an initial AI gateway and built recommendation and semantic search with SageMaker and Bedrock",
          "Migrated PHP content services to Java/Kotlin with event-driven architecture",
          "Operated high-traffic services and led database sharding, CI/CD, and test automation; presented at AWS Summit Seoul",
        ],
      };
    }),
  projects: englishSelectedProjects,
  publications: englishPublications,
  openSource: resumeData.openSource.filter((project) => selectedOpenSourceIds.includes(project.id)).map(localizeOpenSource),
  certifications: englishCertifications,
  education: [],
  etc: englishAdditional,
};

export const careerHistoryDataEn: Resume = {
  ...selectedResumeDataEn,
  experience: resumeData.experience.map(localizeExperience),
  projects: careerHistoryData.projects.map(localizeProject),
  openSource: resumeData.openSource.map(localizeOpenSource),
  education: [
    {
      id: "edu-highschool",
      institution: "Seongdong High School",
      field: "Science Track",
      startDate: "2000-03",
      endDate: "2003-02",
      status: "Graduated",
    },
  ],
};
