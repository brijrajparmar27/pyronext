export const projectFilters = [
  { id: "all", label: "All work" },
  { id: "ai", label: "AI & intelligence" },
  { id: "experience", label: "Digital experiences" },
  { id: "concept", label: "Concepts" },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]["id"];

const maturity = {
  development: "Active development",
  demo: "Working demonstration",
  proposal: "Pilot proposal",
} as const;

interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectFilter, "all">;
  maturity: keyof typeof maturity;
  description: string;
  imageDescription: string;
  tags: readonly string[];
  details: readonly string[];
}

export const projects = [
  {
    id: "pyroai",
    title: "PyroAI / Enterprise Copilot",
    category: "ai",
    maturity: "development",
    description: "An assistant that helps portal users find information and prepare authorized actions in the context of their role.",
    imageDescription: "Concept illustration of a copilot connected to portal tools and approval workflows.",
    tags: ["Liferay DXP", "Java", "MCP", "Portal APIs"],
    details: [
      "The copilot is being developed for Liferay portal contexts with tools connected through Model Context Protocol (MCP).",
      "Tool discovery, permission checks, and approval flows are under development and testing. This is not a generally available product or a claimed deployment.",
    ],
  },
  {
    id: "ai-analyser",
    title: "AI Analyser / Knowledge Intelligence",
    category: "ai",
    maturity: "development",
    description: "A document intelligence workflow that helps teams retrieve relevant material and review requirements across sources.",
    imageDescription: "Concept illustration of documents being indexed and retrieved for review.",
    tags: ["Python", "FastAPI", "RAG", "Elasticsearch / Chroma", "Liferay integrations"],
    details: [
      "Work in progress includes document ingestion, embeddings, semantic retrieval, and analysis against requirements.",
      "Potential compliance-rule conflicts are flagged for human review. They are not compliance determinations or guaranteed findings.",
    ],
  },
  {
    id: "property",
    title: "Interactive Property Experiences",
    category: "experience",
    maturity: "demo",
    description: "A working browser demo that lets people explore an apartment or penthouse through interactive spaces and a cinematic walkthrough.",
    imageDescription: "Concept illustration of a cutaway apartment with annotated rooms, not a screenshot of the browser demo.",
    tags: ["Browser walkthrough", "Interactive spaces", "Spatial visualization"],
    details: [
      "The demonstration runs in a browser and focuses on exploring rooms and seeing how spaces relate to one another.",
      "The artwork is illustrative. VR headset support has not shipped; it is a possible future direction, subject to feasibility and demand.",
    ],
  },
  {
    id: "smart-parking",
    title: "Smart Parking & Urban Mobility",
    category: "concept",
    maturity: "proposal",
    description: "A civic-tech concept for testing how parking operators could coordinate bookings, payments, enforcement, and reporting.",
    imageDescription: "Concept illustration of an urban mobility map over a city at night.",
    tags: ["Civic technology", "Operator workflows", "Controlled pilot"],
    details: [
      "A controlled pilot would evaluate booking, payments, evidence-based enforcement, policy controls, operator tools, and revenue reconciliation.",
      "Private parking and EV interoperability are possible later integrations. This is a proposal, not a live system or a municipally approved deployment.",
    ],
  },
] satisfies readonly Project[];

export function getMaturityLabel(status: Project["maturity"]) {
  return maturity[status];
}
