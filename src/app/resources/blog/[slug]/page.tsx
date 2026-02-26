'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  Clock, ArrowLeft, User, ArrowRight,
  Eye, Copy, Twitter, Linkedin, BookOpen,
} from 'lucide-react';
import SlideInSection from '@/components/SlideInSection';
import ContactForm from '@/components/ContactForm';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div;

/* ─── Types ────────────────────────────────────────────────────────── */
interface BlogPost {
  id: number;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryName: string;
  author: string;
  authorRole: string;
  authorBio: string;
  image: string;
  heroImage?: string;
  tags: string[];
  views: string;
  content: ContentBlock[];
  relatedSlugs: string[];
}

type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'stat'; items: { value: string; label: string }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; emoji: string; title: string; text: string }
  | { type: 'divider' };

/* ─── Categories ────────────────────────────────────────────────────── */
const CATS: Record<string, { accent: string; light: string; dark: string; icon: string }> = {
  ai:       { accent: '#7c3aed', light: '#f5f3ff', dark: '#4c1d95', icon: '\uD83E\uDD16' },
  cloud:    { accent: '#0369a1', light: '#e0f2fe', dark: '#0c4a6e', icon: '\u2601\uFE0F'  },
  security: { accent: '#b91c1c', light: '#fef2f2', dark: '#7f1d1d', icon: '\uD83D\uDD12' },
  data:     { accent: '#047857', light: '#ecfdf5', dark: '#064e3b', icon: '\uD83D\uDCCA' },
};
const getCat = (id: string) => CATS[id] ?? CATS['cloud'];

/* ─── All content uses double-quote strings only ──────────────────── */
const blogPosts: Record<string, BlogPost> = {
  "ai-quality-control-solution-blueprint": {
    id: 1,
    title: "AI Quality Control Blueprint",
    subtitle: "How Our Multi-Cloud Computer Vision Achieves >99% Defect Detection",
    excerpt: "A hands-on breakdown of AnoCloud's computer vision pipeline — from camera ingestion to real-time rejection.",
    date: "Sep 1, 2025", readTime: "5 min", category: "ai", categoryName: "AI & ML",
    author: "AnoCloud Team", authorRole: "Platform Engineering",
    authorBio: "The AnoCloud Platform Engineering team specialises in production-grade AI systems that bridge research and manufacturing reality.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&h=700&fit=crop&q=90",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&h=700&fit=crop&q=90",
    tags: ["AI", "Computer Vision", "Manufacturing", "MLOps"],
    views: "12.5k",
    relatedSlugs: ["innovate-faster-with-google-cloud", "azure-blueprint-scalability-cost-optimization", "unleashing-insights-with-advanced-analytics"],
    content: [
      { type: "p", text: "Quality control in high-throughput manufacturing has historically been a human problem: trained inspectors studying parts on a belt, trying to catch defects with eyes that tire, minds that drift, and judgment that varies. We set out to replace that with something better — and ended up achieving >99% defect detection accuracy at production speed." },
      { type: "stat", items: [{ value: ">99%", label: "Detection Accuracy" }, { value: "120fps", label: "Processing Speed" }, { value: "0.1mm", label: "Min Defect Size" }, { value: "<40ms", label: "Latency Per Frame" }] },
      { type: "h2", text: "Why Traditional QC Breaks at Scale" },
      { type: "p", text: "Manual inspection misses an average of 15-30% of defects under standard production conditions. Fatigue sets in after two hours. Lighting inconsistency between shifts changes what inspectors see. And crucially — you cannot parallelise a human inspector across 50 camera stations without 50 salaries." },
      { type: "ul", items: ["Human eye misses ~20% of defects at sustained throughput", "Inconsistent lighting interpretation between shifts", "Cannot process faster than ~3 parts/second manually", "No persistent audit trail for rejected parts", "Scaling requires linear headcount increases"] },
      { type: "h2", text: "The Architecture: Three Layers of Intelligence" },
      { type: "h3", text: "Layer 1 — Edge Inference" },
      { type: "p", text: "Cameras running at 120fps feed into NVIDIA Jetson AGX Orin modules co-located on the production line. A lightweight TensorRT-optimised model runs inference at the edge, flagging anomalies in under 40ms. Anything flagged gets pulled from the line immediately — no cloud round-trip required." },
      { type: "h3", text: "Layer 2 — Cloud Ensemble Validation" },
      { type: "p", text: "Flagged frames stream to a multi-cloud ensemble across Google Cloud (Vertex AI), Azure ML, and AWS SageMaker. Three independent models vote on each defect. This cross-cloud approach eliminates single-provider availability risk and lets us run different model architectures optimised on each platform." },
      { type: "quote", text: "The multi-cloud ensemble was the breakthrough moment. A single model at 97% accuracy means 3 false negatives per 100. Three independent models voting cuts that to effectively zero in our operating conditions.", author: "Lead ML Engineer, AnoCloud" },
      { type: "h3", text: "Layer 3 — Continuous Retraining Loop" },
      { type: "p", text: "Every confirmed defect — whether caught by the system or discovered post-shipment — gets labelled and fed back into training within 48 hours. The model improves continuously without manual intervention. Six months after deployment, our false negative rate had dropped by a further 60% from the baseline." },
      { type: "callout", emoji: "⚡", title: "Key Insight", text: "Edge inference keeps latency below the mechanical rejection window. Cloud ensemble catches edge cases the local model misses. The combination is what gets you past 99%." },
      { type: "h2", text: "Deployment & Results" },
      { type: "table", headers: ["Metric", "Before", "After"], rows: [["Defect escape rate", "18-30%", "<1%"], ["Inspection throughput", "3 parts/s", "12 parts/s"], ["Inspection cost/unit", "$0.40", "$0.06"], ["Customer returns (90 days)", "2.1%", "0.2%"]] },
      { type: "h2", text: "What It Takes to Deploy This" },
      { type: "ol", items: ["3-4 weeks: Discovery, camera placement, lighting study", "5-6 weeks: Initial model training on your defect taxonomy", "2 weeks: Edge hardware deployment and latency validation", "1 week: Shadow mode (parallel with human QC)", "Ongoing: Continuous retraining and model drift monitoring"] },
      { type: "h2", text: "Key Takeaways" },
      { type: "ul", items: ["Edge + cloud is the right split — not either/or", "Multi-cloud ensemble is the accuracy unlock, not a single powerful model", "Continuous retraining makes the system better than day-one deployment", "Shadow mode before full rollout is non-negotiable for stakeholder trust", "ROI typically closes within 8 months via reject rate reduction alone"] },
    ],
  },

  "innovate-faster-with-google-cloud": {
    id: 2,
    title: "Innovate Faster with Google Cloud",
    subtitle: "A Deep Dive into GKE, BigQuery, and Vertex AI in Production",
    excerpt: "Real architecture patterns for shipping on GCP — beyond the docs, into what actually works.",
    date: "May 8, 2025", readTime: "7 min", category: "cloud", categoryName: "Cloud",
    author: "Vishal Gupta", authorRole: "Cloud Architect",
    authorBio: "Vishal is a GCP-certified cloud architect who has designed and migrated infrastructure for 30+ enterprise clients across fintech, healthcare, and manufacturing.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=700&fit=crop&q=90",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800&h=700&fit=crop&q=90",
    tags: ["Google Cloud", "Kubernetes", "BigQuery", "MLOps"],
    views: "8.2k",
    relatedSlugs: ["ai-quality-control-solution-blueprint", "azure-blueprint-scalability-cost-optimization", "digital-workspace-remote-productivity"],
    content: [
      { type: "p", text: "Google Cloud Platform is excellent infrastructure, but the docs make everything look easier than it is in production. This is the guide I wish I had before migrating my first major workload: what GCP does better than anyone, where it will bite you, and the architecture patterns that actually hold up under load." },
      { type: "h2", text: "Where GCP Genuinely Wins" },
      { type: "p", text: "Google's networking is the real moat. The private fibre backbone between GCP regions means cross-region latency is dramatically lower than you would get on other clouds for equivalent routing. BigQuery's serverless execution model eliminates the capacity-planning nightmare of traditional data warehouses. And Vertex AI's unified training/serving platform avoids the franken-stack most ML teams end up with." },
      { type: "stat", items: [{ value: "99.99%", label: "GKE SLA" }, { value: "40%", label: "Avg Cost Reduction" }, { value: "3x", label: "Faster Deployments" }, { value: "60PB", label: "BigQuery Scale" }] },
      { type: "h2", text: "GKE in Production: What the Docs Do Not Tell You" },
      { type: "p", text: "Autopilot mode is genuinely good — let Google handle node provisioning unless you have specific GPU or bare-metal requirements. The gotcha is resource requests: Autopilot packs pods based on requests, not limits, so under-specified requests lead to noisy neighbours in surprising ways." },
      { type: "callout", emoji: "⚠️", title: "Common Mistake", text: "Running GKE Standard with manual node pools and not enabling Cluster Autoscaler is the single most expensive GKE mistake we see. You will pay for idle capacity 24/7." },
      { type: "ul", items: ["Use Autopilot for stateless workloads — let Google pack nodes", "Use Spot node pools for batch jobs (70-80% cost reduction)", "Enable Vertical Pod Autoscaler to right-size requests over time", "Workload Identity over service account keys — always", "Binary Authorization for supply-chain security in regulated industries"] },
      { type: "h2", text: "BigQuery: The Analytics Engine That Changes How Teams Work" },
      { type: "p", text: "The shift BigQuery creates is not technical — it is cultural. When queries are fast and cheap enough that analysts can explore freely, you stop gatekeeping data access. Teams stop waiting for data engineering sprints. Questions get answered same-day." },
      { type: "h3", text: "Architecture Patterns That Scale" },
      { type: "ol", items: ["Partitioned tables on ingestion timestamp as the baseline — always", "Clustering on your highest-cardinality query dimension (usually user_id or event_type)", "Materialized views for repeated aggregate queries (85%+ cache hit rate typical)", "BigQuery ML for in-warehouse model training — no data movement, no ETL debt", "Connected Sheets for self-serve analytics without SQL"] },
      { type: "h2", text: "Vertex AI: Unified ML Without the Franken-Stack" },
      { type: "p", text: "Most ML teams end up duct-taping five tools: a notebook environment, a feature store, a training orchestrator, a model registry, and a serving layer. Vertex AI is all of those in one API surface. The managed pipelines using Kubeflow components give you reproducibility without maintaining Airflow or Argo." },
      { type: "quote", text: "The first time we ran a Vertex AI pipeline end-to-end — feature engineering, training, evaluation, deployment — without touching any infrastructure, the ML team went quiet for about thirty seconds. Then everyone started migrating their old jobs." },
      { type: "h2", text: "Cost Governance: GCP Gets Expensive Fast" },
      { type: "ul", items: ["Set budgets with alerting at 50%, 80%, 100% thresholds on day one", "Use Committed Use Discounts for baseline Compute Engine — 37% savings", "BigQuery slots reservations for predictable analytics spend", "Cloud Asset Inventory + Policy Analyser for zombie resource detection", "Label everything — cost allocation without labels is archaeology"] },
    ],
  },

  "azure-blueprint-scalability-cost-optimization": {
    id: 3,
    title: "Your Azure Blueprint",
    subtitle: "Effortless Scalability and Cost-Saving Innovation for Enterprise Teams",
    excerpt: "The exact playbook for cutting Azure spend 40% while improving SLAs.",
    date: "May 7, 2025", readTime: "6 min", category: "cloud", categoryName: "Cloud",
    author: "Vivek Gupta", authorRole: "Azure Solutions Architect",
    authorBio: "Vivek holds Azure Solutions Architect Expert certification and has led enterprise Azure transformations for healthcare, financial services, and manufacturing clients.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1400&h=700&fit=crop&q=90",
    heroImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1800&h=700&fit=crop&q=90",
    tags: ["Azure", "FinOps", "Scalability", "Enterprise"],
    views: "9.7k",
    relatedSlugs: ["innovate-faster-with-google-cloud", "ai-quality-control-solution-blueprint", "safeguarding-your-data-comprehensive-security-solutions"],
    content: [
      { type: "p", text: "Azure bills are painful in a specific way: they grow in the dark. Developers spin up VMs for a test that never gets torn down. Reserved capacity bought for a project that pivoted sits idle. By the time finance flags it, the damage is done. This blueprint is how we prevent that — and how we cut average Azure spend by 40% without touching a single workload." },
      { type: "stat", items: [{ value: "40%", label: "Avg Cost Reduction" }, { value: "60+", label: "Azure Regions" }, { value: "99.99%", label: "AKS SLA" }, { value: "36%", label: "RI Savings vs PAYG" }] },
      { type: "h2", text: "The Azure Landing Zone: Foundation Before Everything" },
      { type: "p", text: "Every Azure engagement we do starts with landing zone review. If the foundation is wrong — management groups mis-scoped, no policy guardrails, RBAC too broad — the cost and security problems compound over time. You cannot bolt governance on later." },
      { type: "ol", items: ["Management group hierarchy: Tenant Root to Platform to Landing Zones to Corp/Online/Sandbox", "Azure Policy assignments at management group level — not per-subscription", "Azure Blueprints for repeatable, compliant subscription vending", "Defender for Cloud across all subscriptions from day one", "Azure Monitor + Log Analytics workspace hierarchy mapped to your MG structure"] },
      { type: "h2", text: "The Cost Optimisation Playbook" },
      { type: "h3", text: "Quick Wins (Week 1)" },
      { type: "ul", items: ["Enable Azure Advisor and action all High impact Cost recommendations", "Tag everything — use Azure Policy to enforce tag inheritance", "Set budget alerts on every subscription (50%/80%/100%)", "Identify unattached disks and orphaned NICs (Azure Resource Graph query)", "Shut down dev/test VMs outside business hours (Azure Automation runbooks)"] },
      { type: "callout", emoji: "💰", title: "Fastest Win", text: "Orphaned resources (unattached disks, idle public IPs, abandoned load balancers) typically represent 8-15% of total Azure spend. A single Resource Graph query finds them all." },
      { type: "h3", text: "Strategic Savings (Month 1-3)" },
      { type: "table", headers: ["Strategy", "Typical Saving", "Best For"], rows: [["Reserved Instances (1yr)", "30-36%", "Predictable baseline compute"], ["Reserved Instances (3yr)", "50-60%", "Long-term stable workloads"], ["Spot VMs", "60-90%", "Batch, dev/test, stateless"], ["Azure Hybrid Benefit", "40-49%", "Existing Windows/SQL licenses"], ["Dev/Test pricing", "~40%", "Non-prod environments"]] },
      { type: "h2", text: "AKS: Getting Kubernetes Right on Azure" },
      { type: "p", text: "AKS is mature and production-ready, but the defaults leave money on the table. System node pools should be minimal. User node pools with Cluster Autoscaler scale from zero. Add a spot node pool for non-critical workloads and watch your compute bill drop 60%." },
      { type: "ul", items: ["KEDA for event-driven autoscaling — scale to zero on queues", "Azure CNI Overlay for better IP utilisation in large clusters", "Workload Identity for credential-free service-to-service auth", "AKS Cost Analysis add-on to attribute spend to namespace/deployment", "GitOps with Flux for cluster configuration drift detection"] },
      { type: "h2", text: "Enterprise Integration: The Azure-Microsoft Moat" },
      { type: "p", text: "The real reason large enterprises choose Azure is not the technical specs — it is the Microsoft 365 integration, Active Directory Federation, existing EA agreements, and compliance certifications their legal team trusts. When you are already paying for E5, Azure SSO and Defender integration is genuinely additive, not aspirational." },
      { type: "quote", text: "Our security team went from spending 3 weeks reviewing Azure deployment proposals to 3 days, because Defender for Cloud spoke their language and our policies were encoded in Azure Policy. That time saving has compounding value." },
    ],
  },

  "unleashing-insights-with-advanced-analytics": {
    id: 4,
    title: "Beyond Dashboards",
    subtitle: "Powering Real-Time Business Intelligence with Generative AI",
    excerpt: "Why traditional BI is failing and how embedding LLMs into your data stack unlocks questions nobody thought to ask.",
    date: "May 6, 2025", readTime: "4 min", category: "data", categoryName: "Data Analytics",
    author: "AnoCloud Team", authorRole: "Data & Analytics Practice",
    authorBio: "AnoCloud's Data & Analytics practice helps organizations move from reactive dashboards to proactive intelligence systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=700&fit=crop&q=90",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&h=700&fit=crop&q=90",
    tags: ["AI", "Business Intelligence", "Analytics", "Generative AI"],
    views: "6.3k",
    relatedSlugs: ["ai-quality-control-solution-blueprint", "innovate-faster-with-google-cloud", "safeguarding-your-data-comprehensive-security-solutions"],
    content: [
      { type: "p", text: "Most business intelligence implementations solve the wrong problem. They answer questions executives already know to ask — revenue by region, churn by segment, cost per acquisition. The questions worth $10M are the ones nobody knew to put on a dashboard. Generative AI embedded in your data stack is how you find them." },
      { type: "h2", text: "The Dashboard Paradox" },
      { type: "p", text: "Here is the thing about dashboards: they measure what you measured last quarter. They encode your existing mental model of the business. Every KPI on every Tableau dashboard exists because someone decided it mattered. What you do not measure does not show up — and that is where the real risk lives." },
      { type: "callout", emoji: "🔍", title: "The Hidden Cost", text: "The average analyst spends 60% of their time answering ad-hoc questions that do not fit existing dashboards. At a $80k fully-loaded analyst salary, that is $48k/year in reactive work per person." },
      { type: "h2", text: "The Architecture: Embedding Intelligence in the Stack" },
      { type: "h3", text: "Natural Language to SQL (NL2SQL)" },
      { type: "p", text: "The entry point for most teams: let business users ask questions in plain English, have an LLM translate to SQL against your warehouse, return results. Sounds simple, works beautifully for 70% of questions. The hard 30% — questions requiring business context, fiscal calendar awareness, or complex joins — needs a semantic layer." },
      { type: "stat", items: [{ value: "60%", label: "Analyst Time on Ad-hoc Queries" }, { value: "10x", label: "Questions Asked With AI Access" }, { value: "3.2x", label: "ROI on AI Analytics Stack" }, { value: "48hr", label: "Avg Time to Insight (Before)" }] },
      { type: "h3", text: "Anomaly Detection at Scale" },
      { type: "p", text: "You cannot build dashboards for what you do not know to watch. Embedding LLM-powered anomaly detection directly in your data pipeline surfaces unusual patterns automatically — revenue spikes in unexpected cohorts, support ticket volume correlating with a specific product SKU, churn leading indicators three weeks before they hit MRR." },
      { type: "ul", items: ["Statistical anomaly detection on every metric time series automatically", "LLM-generated plain-English explanations of detected anomalies", "Automated root cause analysis pulling correlating signals", "Alert routing based on business impact estimate, not just deviation magnitude", "Learning from analyst feedback on alert quality"] },
      { type: "h2", text: "What AI-Ready Data Infrastructure Actually Means" },
      { type: "ol", items: ["Single source of truth: one governed data warehouse, no shadow spreadsheets", "Semantic layer: business definitions that do not require SQL expertise", "Data contracts between producers and consumers (schema governance)", "Feature store for reusable ML features across models", "Observability: data quality monitoring as a first-class concern"] },
      { type: "quote", text: "We used to spend the first 20 minutes of every analytics meeting debating whether the numbers were right. With a governed semantic layer, that debate disappeared. We now spend 20 minutes actually making decisions.", author: "Head of Analytics, AnoCloud client (retail, $2B revenue)" },
    ],
  },

  "safeguarding-your-data-comprehensive-security-solutions": {
    id: 5,
    title: "Zero-Trust Cloud Security",
    subtitle: "The Architecture Every CTO Needs in 2025",
    excerpt: "Beyond perimeter firewalls — identity-first security with microsegmentation and automated threat response.",
    date: "May 5, 2025", readTime: "8 min", category: "security", categoryName: "Security",
    author: "Anish Kumar", authorRole: "Principal Security Architect",
    authorBio: "Anish is a CISSP-certified security architect specialising in cloud-native zero-trust architectures for regulated industries including fintech, healthcare, and government.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=700&fit=crop&q=90",
    heroImage: "https://images.unsplash.com/photo-1563986768494-4759ab23703a?w=1800&h=700&fit=crop&q=90",
    tags: ["Zero-Trust", "IAM", "Cloud Security", "CISSP"],
    views: "11.1k",
    relatedSlugs: ["azure-blueprint-scalability-cost-optimization", "innovate-faster-with-google-cloud", "digital-workspace-remote-productivity"],
    content: [
      { type: "p", text: "The perimeter is dead. It has been dead since the first employee connected to a corporate resource from a coffee shop. The problem is that most cloud security implementations are just old-school perimeter thinking translated to VPCs — a firewall with a different name. Zero-trust is not a product; it is a philosophy that changes how you think about every access decision." },
      { type: "stat", items: [{ value: "82%", label: "Breaches Involve Cloud Assets" }, { value: "$4.88M", label: "Avg Breach Cost 2024" }, { value: "277 days", label: "Avg Detection Time" }, { value: "94%", label: "Preventable with ZT" }] },
      { type: "h2", text: "Zero-Trust Principles That Actually Matter" },
      { type: "p", text: "The NIST zero-trust framework has seven tenets, but three drive 90% of real-world security improvement: verify explicitly (authenticate and authorise every request, every time), use least privilege (just-in-time, just-enough access), and assume breach (design for containment, not just prevention)." },
      { type: "callout", emoji: "🛡️", title: "The Assume Breach Mindset", text: "Design your architecture assuming an attacker is already inside. If you would have caught them before reaching your crown jewels, you are making progress. If your entire flat network is accessible from a compromised endpoint, you are not doing zero-trust — you are doing theatre." },
      { type: "h2", text: "Identity: The New Perimeter" },
      { type: "h3", text: "IAM That Actually Works" },
      { type: "ul", items: ["Conditional Access policies tied to device compliance, location, and risk score", "Privileged Identity Management (PIM) for just-in-time admin access — no standing privileges", "Managed Identity over service accounts — credentials that cannot be stolen because they do not exist", "Continuous Access Evaluation — revoke tokens in near-real-time when risk signals appear", "MFA everywhere, phishing-resistant (FIDO2) for privileged accounts"] },
      { type: "h3", text: "The Privileged Access Workstation Model" },
      { type: "p", text: "Privileged actions — production deployments, database access, security configuration changes — should only be possible from purpose-built, hardened workstations. No email, no browsing, no third-party software. A compromised laptop that cannot reach admin portals is contained by design." },
      { type: "h2", text: "Network Microsegmentation" },
      { type: "p", text: "Flat networks are an attacker's playground — compromise one endpoint and pivot everywhere. Microsegmentation creates verified-identity-based perimeters around each workload. A compromised web tier cannot reach the database tier. A compromised development subnet cannot reach production. Containment is architectural, not procedural." },
      { type: "table", headers: ["Layer", "Control", "Tool"], rows: [["Identity", "Conditional Access", "Azure AD / Okta"], ["Device", "Compliance enforcement", "Intune / Jamf"], ["Network", "Microsegmentation", "NSGs + Private Endpoints"], ["Application", "API authentication", "Azure APIM / AWS API GW"], ["Data", "Classification + DLP", "Microsoft Purview"], ["Threat detection", "SIEM + SOAR", "Sentinel / Chronicle"]] },
      { type: "h2", text: "Automated Threat Response: Speed Over Process" },
      { type: "p", text: "The average security team takes 8 hours to respond to an alert. A sophisticated attacker completes their objective in under 24 hours. That math does not work. The only answer is automation — SOAR playbooks that contain, quarantine, and remediate without waiting for a human to wake up and read a ticket." },
      { type: "ol", items: ["Define playbooks for your top 10 alert types before you need them", "Quarantine compromised identities automatically — re-enable requires human approval", "Network isolation of suspected compromised workloads within 60 seconds of detection", "Automated evidence collection before any remediation action (for forensics)", "Executive alert paths for high-severity incidents — not just SOC tickets"] },
      { type: "quote", text: "The incident that convinced our board to invest in zero-trust was not a successful breach — it was our red team exercise showing how far they got with a single phished credential in a flat network. The answer to how bad it could get was devastating.", author: "CISO, AnoCloud enterprise client" },
    ],
  },

  "digital-workspace-remote-productivity": {
    id: 6,
    title: "The Modern Digital Workspace Stack",
    subtitle: "Tools and Architecture Patterns That Scale Beyond Remote",
    excerpt: "How leading remote-first companies architect collaboration infrastructure that actually works.",
    date: "May 3, 2025", readTime: "5 min", category: "cloud", categoryName: "Cloud",
    author: "AnoCloud Team", authorRole: "Workplace Technology",
    authorBio: "AnoCloud's Workplace Technology practice helps organizations build collaboration infrastructure that enables high-performing distributed teams.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&h=700&fit=crop&q=90",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=700&fit=crop&q=90",
    tags: ["Remote Work", "Productivity", "Collaboration", "Cloud"],
    views: "5.9k",
    relatedSlugs: ["innovate-faster-with-google-cloud", "azure-blueprint-scalability-cost-optimization", "safeguarding-your-data-comprehensive-security-solutions"],
    content: [
      { type: "p", text: "The companies that struggled with remote work did not fail because of tools — they failed because they tried to digitise office-era processes. Zoom stand-ups replacing conference room stand-ups. Slack replacing hallway conversations. The shift is not about tools; it is about rebuilding processes from scratch for asynchronous, distributed execution." },
      { type: "stat", items: [{ value: "13%", label: "Productivity Gain (Remote)" }, { value: "40%", label: "Reduction in Real Estate Cost" }, { value: "2.5x", label: "Talent Pool Expansion" }, { value: "4.5/5", label: "Avg Employee Satisfaction" }] },
      { type: "h2", text: "The Three Layers of Digital Workspace Infrastructure" },
      { type: "h3", text: "Layer 1 — Async Communication Foundation" },
      { type: "p", text: "Synchronous-first culture is the silent killer of distributed teams. Every quick sync is a context switch that costs 23 minutes of deep work. The companies that crack remote productivity build async by default — rich written communication, video messages, collaborative documents that live beyond meetings." },
      { type: "ul", items: ["Notion or Confluence for persistent, searchable institutional knowledge", "Loom for async video that replaces 30-min syncs with 5-min recordings", "Linear or Jira for project tracking that does not require status meetings", "Slack/Teams with enforced channel structure — not infinite DM chaos", "Miro or FigJam for visual collaboration that scales globally"] },
      { type: "h3", text: "Layer 2 — Security Without Friction" },
      { type: "p", text: "The worst security outcome is policies so painful that employees route around them. Shadow IT, personal Dropbox, forwarding work emails to Gmail — all symptoms of security friction. The target is invisible security: protection that works without the user thinking about it." },
      { type: "callout", emoji: "🔐", title: "The Security-Productivity Equation", text: "Every friction point in your security stack has a productivity cost. SSO across all tools, passwordless authentication, and device trust reduce friction and improve security simultaneously. This is the only direction that works." },
      { type: "h3", text: "Layer 3 — AI-Augmented Productivity" },
      { type: "p", text: "The teams pulling ahead in 2025 are the ones treating AI as a junior collaborator for every task, not a novelty. Meeting summaries, first drafts, code reviews, data analysis — AI handles the first 80%, humans handle the judgment layer. The bandwidth multiplier is real." },
      { type: "ol", items: ["Microsoft 365 Copilot or Google Gemini for Workspace embedded across the productivity suite", "GitHub Copilot for engineering teams — 30-55% faster code completion in studies", "AI-powered meeting notes (Fireflies, Otter) eliminating manual note-taking", "Custom GPTs or Claude Projects for team-specific knowledge retrieval", "AI-assisted async video (Loom AI) for auto-summaries and chapter markers"] },
      { type: "h2", text: "Measuring What Matters" },
      { type: "table", headers: ["Metric", "Tool", "Target"], rows: [["Response time (async)", "Slack analytics", "<4h business hours"], ["Meeting hours/person/week", "Calendar analytics", "<10h"], ["Documentation coverage", "Notion analytics", ">80% projects"], ["Security incident rate", "SIEM dashboard", "<2/quarter"], ["Employee NPS", "Quarterly survey", ">40"]] },
      { type: "quote", text: "We were remote-first for two years before we realised we were just office-in-Zoom. The turning point was auditing how decisions were made. Almost everything required a meeting. We rewrote every process to work without one." },
    ],
  },
};

/* ─── Content renderer ─────────────────────────────────────────────── */
function RenderContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-0">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2": return (
            <h2 key={i} className="font-display text-gray-900 font-black mt-12 mb-5 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              {block.text}
            </h2>
          );
          case "h3": return (
            <h3 key={i} className="font-display text-gray-800 font-bold text-xl mt-8 mb-4">{block.text}</h3>
          );
          case "p": return (
            <p key={i} className="text-gray-700 leading-[1.85] mb-6 text-[17px]">{block.text}</p>
          );
          case "ul": return (
            <ul key={i} className="space-y-2.5 mb-7 ml-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700 text-[16px] leading-relaxed">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#005241] mt-2.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
          case "ol": return (
            <ol key={i} className="space-y-3 mb-7 ml-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3.5 text-gray-700 text-[16px] leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#005241]/10 text-[#005241] text-xs font-black flex items-center justify-center mt-0.5">
                    {j + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          );
          case "quote": return (
            <blockquote key={i} className="relative my-10 pl-6 border-l-4 border-[#005241]">
              <p className="text-gray-700 text-xl italic leading-relaxed mb-2 font-display">{"\u201c"}{block.text}{"\u201d"}</p>
              {block.author && <cite className="text-sm text-gray-500 font-semibold not-italic">{"— "}{block.author}</cite>}
            </blockquote>
          );
          case "stat": return (
            <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 p-6 rounded-2xl border border-[#005241]/10" style={{ background: "rgba(0,82,65,0.03)" }}>
              {block.items.map((s, j) => (
                <div key={j} className="text-center">
                  <div className="font-display text-3xl font-black text-[#005241] leading-none mb-1">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          );
          case "table": return (
            <div key={i} className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#005241] text-white">
                    {block.headers.map((h, j) => (
                      <th key={j} className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.map((cell, k) => (
                        <td key={k} className="px-4 py-3 text-gray-700 border-t border-gray-100">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          case "callout": return (
            <div key={i} className="my-8 p-5 rounded-2xl flex gap-4" style={{ background: "rgba(0,82,65,0.05)", border: "1px solid rgba(0,82,65,0.15)" }}>
              <div className="flex-shrink-0 text-2xl">{block.emoji}</div>
              <div>
                <div className="font-bold text-[#005241] text-sm mb-1">{block.title}</div>
                <p className="text-gray-700 text-sm leading-relaxed">{block.text}</p>
              </div>
            </div>
          );
          case "divider": return <hr key={i} className="my-10 border-gray-200" />;
          default: return null;
        }
      })}
    </div>
  );
}

/* ─── Reading progress bar ─────────────────────────────────────────── */
function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <motion.div style={{ width }} className="fixed top-0 left-0 h-[3px] bg-[#56c48f] z-[60] origin-left" />
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function BlogPostPage() {
  const params = useParams();
  const slugParam = params?.slug as string;
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const post = blogPosts[slugParam];
  const cat = post ? getCat(post.category) : getCat("cloud");

  // Set URL after hydration to avoid mismatch
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f6f5f1] flex items-center justify-center font-body">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=Instrument+Sans:wght@400;600;700&display=swap');
          .font-display { font-family: 'Fraunces', Georgia, serif; }
          .font-body { font-family: 'Instrument Sans', system-ui, sans-serif; }
        `}</style>
        <div className="text-center px-6">
          <div className="font-display text-[8rem] font-black text-gray-100 leading-none">404</div>
          <h1 className="font-display text-3xl font-black text-gray-900 mb-3">Article Not Found</h1>
          <p className="text-gray-500 mb-8">This article has moved or does not exist.</p>
          <Link href="/resources/blog" className="inline-flex items-center gap-2 bg-[#005241] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#003b2d] transition-colors">
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const related = post.relatedSlugs.map(s => blogPosts[s]).filter(Boolean).slice(0, 3);

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f6f5f1] font-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Instrument+Sans:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .font-body    { font-family: 'Instrument Sans', system-ui, sans-serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f0f0ec; }
        ::-webkit-scrollbar-thumb { background: #005241; border-radius: 4px; }
      `}</style>

      <ProgressBar />

      {/* Back nav */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="/resources/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#005241] text-sm font-semibold transition-colors">
            <ArrowLeft size={15} /> Blog
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ background: cat.light, color: cat.accent }}>
              {cat.icon} {post.categoryName}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1"><Eye size={11} />{post.views}</span>
            <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={11} />{post.readTime} read</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative w-full overflow-hidden bg-gray-900" style={{ height: "clamp(320px, 55vh, 600px)" }}>
        <Image src={post.heroImage || post.image} alt={post.title} fill priority className="object-cover opacity-75" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c]/80 via-[#0a0d0c]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 pb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full text-white" style={{ background: cat.accent }}>
                {cat.icon} {post.categoryName}
              </span>
              {post.tags.slice(0, 2).map(t => (
                <span key={t} className="text-[10px] text-white/60 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full">#{t}</span>
              ))}
            </div>
            <h1 className="font-display text-white font-black leading-[1.08] tracking-tight mb-2"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.4rem)", maxWidth: "800px" }}>
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-white/65 text-lg font-medium" style={{ maxWidth: "640px" }}>{post.subtitle}</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-14">

          <article>
            {/* Meta */}
            <SlideInSection>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm" style={{ background: cat.accent }}>
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{post.author}</div>
                    <div className="text-xs text-gray-500">{post.authorRole} {"·"} {post.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-semibold">Share</span>
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 hover:text-blue-500 transition-colors text-gray-600">
                    <Twitter size={14} />
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-sky-50 hover:text-sky-600 transition-colors text-gray-600">
                    <Linkedin size={14} />
                  </a>
                  <button onClick={copyLink} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-600 transition-colors">
                    {copied ? <span className="text-[#005241]">Copied!</span> : <><Copy size={12} /> Copy link</>}
                  </button>
                </div>
              </div>
            </SlideInSection>

            {/* Lead */}
            <SlideInSection>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium border-l-4 border-[#56c48f] pl-6">{post.excerpt}</p>
            </SlideInSection>

            {/* Body */}
            <SlideInSection>
              <RenderContent blocks={post.content} />
            </SlideInSection>

            {/* Tags */}
            <SlideInSection>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">Filed under</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(t => (
                    <span key={t} className="text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full cursor-pointer transition-colors font-medium">#{t}</span>
                  ))}
                </div>
              </div>
            </SlideInSection>

            {/* Author card */}
            <SlideInSection>
              <div className="mt-12 p-7 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-xl text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${cat.accent}, ${cat.dark})` }}>
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-gray-900 mb-0.5">{post.author}</div>
                  <div className="text-xs text-gray-500 mb-2">{post.authorRole}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.authorBio}</p>
                </div>
              </div>
            </SlideInSection>

            {/* CTA */}
            <SlideInSection>
              <div className="mt-12 p-8 rounded-2xl bg-[#005241] text-white text-center relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-3xl" style={{ background: "rgba(86,196,143,0.1)" }} />
                <div className="relative">
                  <h3 className="font-display text-2xl font-black mb-2">Ready to transform your business?</h3>
                  <p className="text-white/75 mb-6 text-sm">Expert strategy and implementation, tailored to your goals.</p>
                  <button onClick={() => setShowContact(true)}
                    className="inline-flex items-center gap-2 bg-[#56c48f] text-[#003b2d] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#4bb07a] transition-colors">
                    Get in Touch <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </SlideInSection>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6">

              {/* TOC */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-4">In This Article</p>
                <nav className="space-y-2">
                  {post.content
                    .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
                    .map((b, i) => (
                      <div key={i} className="flex items-start gap-2 group cursor-pointer">
                        <div className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#005241] mt-2 transition-colors" />
                        <span className="text-xs text-gray-500 group-hover:text-[#005241] transition-colors leading-snug">{b.text}</span>
                      </div>
                    ))}
                </nav>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-4">Article Info</p>
                <div className="space-y-3">
                  {[
                    { icon: Eye,      label: "Views",     value: post.views },
                    { icon: Clock,    label: "Read time", value: post.readTime + " read" },
                    { icon: User,     label: "Author",    value: post.author },
                    { icon: BookOpen, label: "Published", value: post.date },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500"><Icon size={12} />{label}</div>
                      <span className="text-xs font-semibold text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-400 mb-4">Share This Article</p>
                <div className="flex flex-col gap-2">
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                    style={{ background: "rgba(29,161,242,0.08)", color: "#1da1f2" }}>
                    <Twitter size={13} /> Share on X
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors"
                    style={{ background: "rgba(0,119,181,0.08)", color: "#0077b5" }}>
                    <Linkedin size={13} /> Share on LinkedIn
                  </a>
                  <button onClick={copyLink} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-xs font-semibold hover:bg-gray-200 transition-colors">
                    {copied ? <span className="text-[#005241] font-bold">Copied!</span> : <><Copy size={13} /> Copy link</>}
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#005241] rounded-2xl p-5 text-white">
                <p className="font-display font-black text-lg leading-tight mb-2">Get more like this</p>
                <p className="text-white/65 text-xs mb-4">Weekly insights from the AnoCloud team.</p>
                <input type="email" placeholder="your@email.com"
                  className="w-full px-3 py-2.5 rounded-xl text-white placeholder-white/40 text-xs focus:outline-none focus:ring-2 focus:ring-[#56c48f] mb-2"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }} />
                <button className="w-full bg-[#56c48f] text-[#003b2d] py-2.5 rounded-xl font-black text-xs hover:bg-[#4bb07a] transition-colors">
                  Subscribe free
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <SlideInSection>
            <div className="mt-20 pt-12 border-t border-gray-200">
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-8 h-[2px] bg-[#005241]" />
                <h2 className="font-display text-2xl font-black text-gray-900">Related Reading</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel, i) => {
                  const relCat = getCat(rel.category);
                  const relSlug = Object.keys(blogPosts).find(k => blogPosts[k].id === rel.id) || "";
                  return (
                    <MotionDiv key={rel.id}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                      whileHover={{ y: -5 }}>
                      <Link href={`/resources/blog/${relSlug}`} className="group block h-full">
                        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                          <div className="relative h-44 overflow-hidden">
                            <Image src={rel.image} alt={rel.title} fill
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                              sizes="(max-width:768px) 100vw, 33vw" />
                            <div className="absolute top-3 left-3">
                              <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm"
                                style={{ background: relCat.light, color: relCat.accent }}>
                                {relCat.icon} {rel.categoryName}
                              </span>
                            </div>
                          </div>
                          <div className="p-5 flex flex-col flex-1">
                            <div className="text-[10px] text-gray-400 mb-2 flex items-center gap-1.5">
                              <Clock size={9} />{rel.readTime} read {"·"} {rel.date}
                            </div>
                            <h4 className="font-display font-black text-sm text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-[#005241] transition-colors flex-1">
                              {rel.title}
                            </h4>
                            <div className="flex items-center gap-1 text-xs text-[#005241] font-bold pt-3 border-t border-gray-100">
                              Read article <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </MotionDiv>
                  );
                })}
              </div>
            </div>
          </SlideInSection>
        )}
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContact(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}>
              <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
                <div>
                  <h3 className="font-display text-xl font-black text-gray-900">{"Let's Work Together"}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Tell us about your project</p>
                </div>
                <button onClick={() => setShowContact(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                  <ArrowLeft size={17} />
                </button>
              </div>
              <div className="p-6">
                <ContactForm initialService="Blog Inquiry" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}