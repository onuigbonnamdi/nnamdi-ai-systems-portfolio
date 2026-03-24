import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function NnamdiPortfolio() {
  const phases = [
    {
      title: "Foundations",
      description:
        "The technical base for robust AI systems: programming discipline, API thinking, and system-level problem solving.",
      capabilities: ["Python", "OOP", "APIs", "System thinking"],
      impact:
        "Creates reliable foundations for scalable products, cleaner integrations, and faster technical execution.",
    },
    {
      title: "AI Automation",
      description:
        "Workflow-driven automation for content, communication, lead handling, and operational execution.",
      capabilities: ["Workflows", "Telegram bots", "AI content systems", "Lead automation"],
      impact:
        "Reduces manual work, improves response speed, and turns repetitive processes into repeatable systems.",
    },
    {
      title: "Data for AI Systems",
      description:
        "Structured data preparation and insight generation to support intelligent systems and business decisions.",
      capabilities: ["Data processing", "Insight generation", "Structured datasets"],
      impact:
        "Improves data quality, enables better decision-making, and powers downstream AI workflows.",
    },
    {
      title: "Applied AI / Machine Learning",
      description:
        "Practical machine learning systems built for prediction, analysis, language, and vision use cases.",
      capabilities: ["ML models", "NLP", "Computer vision", "AI APIs"],
      impact:
        "Transforms business data into predictive intelligence and expands what operations can automate.",
    },
    {
      title: "Advanced AI Systems",
      description:
        "End-to-end AI architecture for production-minded systems using retrieval, agents, and deployment workflows.",
      capabilities: ["LLMs", "RAG", "AI agents", "System architecture", "Deployment"],
      impact:
        "Enables intelligent products that answer with context, act across tools, and scale beyond prototypes.",
    },
  ];

  const projects = [
    {
      title: "AI Lead Qualification & Booking Agent",
      label: "Automation",
      what:
        "WhatsApp/Telegram-based AI agent that captures leads, qualifies intent, answers FAQs from a knowledge base, and books appointments with calendar/email integration.",
      why:
        "Increases conversion rates, reduces front-desk workload, and ensures 24/7 response with structured lead data and follow-ups.",
      tags: ["WhatsApp", "n8n", "LLM", "Calendars", "CRM"]
    },
    {
      title: "Multi-Mode AI Content Engine",
      label: "Featured",
      what:
        "A Telegram-triggered content generation system with three intelligent modes: Authority, DM, and Viral. The system generates platform-specific content on demand, autonomously.",
      why:
        "Eliminates content creation bottlenecks — a single trigger produces fully formatted, mode-appropriate content ready for distribution.",
      tags: ["Telegram Bot", "LLM Integration", "Multi-Mode AI", "Automation", "Content Systems"],
    },
    {
      title: "AI Workflow Automation System",
      label: "System",
      what:
        "End-to-end automation pipeline: trigger → AI processing → structured output. Applied across customer support, lead qualification, and operations management.",
      why:
        "Reduces manual processing time and scales operational capacity without additional headcount.",
      tags: ["n8n", "Webhooks", "AI Processing", "Operations"],
    },
    {
      title: "AI-Supported Data Insight System",
      label: "Data",
      what:
        "Automated data cleaning and AI-driven insight generation pipeline. Converts raw, unstructured data into decision-ready intelligence and feeds downstream AI workflows.",
      why:
        "Accelerates decision-making cycles and ensures AI systems are trained on clean, reliable data.",
      tags: ["Pandas", "NumPy", "AI Insights", "Data Pipeline"],
    },
    {
      title: "Predictive Machine Learning System",
      label: "ML",
      what:
        "Structured ML pipeline supporting both classification and regression tasks. Designed for production deployment with feature engineering, model evaluation, and output integration.",
      why:
        "Enables data-driven forecasting and classification that replaces guesswork with statistical confidence.",
      tags: ["scikit-learn", "ML Pipeline", "Predictive Models", "Classification"],
    },
    {
      title: "RAG-Based AI Assistant",
      label: "Advanced",
      what:
        "A document-aware AI assistant built on Retrieval-Augmented Generation architecture. The system retrieves relevant context from a vector database before generating precise, grounded responses.",
      why:
        "Transforms static documentation into an intelligent, queryable AI system that answers with accuracy and context. Applicable to internal knowledge bases, client portals, and support automation.",
      tags: ["LangChain", "Vector DB", "RAG", "LLM APIs", "Embeddings"],
    },
  ];

  const techGroups = [
    { label: "Core", items: ["Python", "OOP & System Design", "REST APIs & Webhooks"] },
    { label: "Automation", items: ["n8n", "APIs", "Webhooks", "Telegram Bots"] },
    { label: "Data", items: ["Pandas", "NumPy", "SQL"] },
    { label: "AI/ML", items: ["scikit-learn", "TensorFlow", "PyTorch", "Hugging Face"] },
    { label: "Advanced AI", items: ["LangChain", "Vector DBs", "LLM APIs"] },
    { label: "Deployment", items: ["FastAPI", "Docker", "Cloud"] },
  ];

  const valuePoints = [
    "automate workflows",
    "scale content and communication",
    "convert data into actionable intelligence",
    "reduce operational cost",
    "increase speed and efficiency",
    "enable intelligent decision-making at scale",
  ];

  const links = {
    email: "mailto:onuigbonnamdiokwy@gmail.com",
    linkedin: "https://linkedin.com/in/nnamdionuigbo/",
    github: "https://github.com/onuigbonnamdi/",
  };

  const fadeUp = {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, ease: "easeOut" },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070b] text-white selection:bg-cyan-400/20 selection:text-white scroll-smooth">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,180,255,0.16),_transparent_28%),radial-gradient(circle_at_80%_18%,_rgba(34,211,238,0.11),_transparent_22%),linear-gradient(180deg,#04060a_0%,#07111b_42%,#05070b_100%)]" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[12%] top-[18rem] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)] opacity-20" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-sm font-medium tracking-[0.18em] text-white/80 uppercase">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-black font-bold shadow-[0_0_32px_rgba(34,211,238,0.35)]">
              N
            </span>
            Nnamdi Onuigbo
          </a>
          <nav className="hidden gap-6 text-sm text-white/65 md:flex">
            <a href="#positioning" className="transition hover:text-cyan-300">Operating Model</a>
            <a href="#capabilities" className="transition hover:text-cyan-300">System Architecture</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#stack" className="transition hover:text-cyan-300">Tech Stack</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-32">
          <div className="grid items-end gap-14 lg:grid-cols-1">
            <motion.div {...fadeUp} className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
                AI Systems Engineer | Automation Architect
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Nnamdi Onuigbo
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                I design and deploy AI-powered systems that automate workflows, enhance decision-making, and scale business operations.
              </p>

              <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                I build systems, not demos.
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/58">
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  <Github size={16} /> github.com/onuigbonnamdi
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  <Linkedin size={16} /> linkedin.com/in/nnamdionuigbo
                </a>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3.5 text-sm font-medium text-slate-950 transition duration-300 hover:scale-[1.02]"
                >
                  View Projects <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6 lg:px-10">
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-8 border-y border-white/10 py-10 sm:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold text-white">5+</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">AI Systems Built</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">5</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">Capability Phases</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">LLMs</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">RAG · Agents · Pipelines</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">Automation</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45">Workflows · Systems</p>
            </div>
          </motion.div>
        </section>

        <section id="positioning" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">Operating Model</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Designed for real operational value.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              My work sits at the intersection of AI automation, data-driven systems, machine learning, and LLM-based architectures. I design infrastructure that helps businesses move faster, operate smarter, and make better decisions with less friction. The focus is not experimentation for its own sake, but building practical systems that can support workflow execution, intelligence generation, and scalable business operations.
            </p>
          </motion.div>
        </section>

        <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <motion.div {...fadeUp} className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">System Architecture</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Five structured phases of capability.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/55">
              A layered architecture of skill development spanning technical foundations, workflow automation, data systems, applied machine learning, and advanced AI deployment.
            </p>
          </motion.div>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                {...fadeUp}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.03 }}
                className="group grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.045] lg:grid-cols-[0.7fr_0.7fr_0.9fr] lg:p-8"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{phase.description}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Key capabilities</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {phase.capabilities.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">Business impact</p>
                  <p className="mt-4 text-sm leading-7 text-white/72">{phase.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-0 py-20 lg:py-28">
          <motion.div {...fadeUp} className="mb-14 px-6 lg:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">Projects / Systems</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Premium systems built for leverage.
              </h2>
            </div>
          </motion.div>

          <div className="border-y border-white/10">
            <div className="grid lg:grid-cols-3 border-b border-white/10">
              <motion.div
                {...fadeUp}
                className="lg:col-span-2 border-b border-white/10 lg:border-b-0 lg:border-r border-white/10 px-6 py-10 lg:px-8"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">01 — {projects[0].label}</p>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">{projects[0].title}</h3>
                <p className="mt-5 max-w-6xl text-sm leading-8 text-white/62">{projects[0].what}</p>
                <div className="mt-6 border-l-2 border-cyan-300/90 bg-cyan-400/[0.07] px-4 py-4">
                  <p className="text-sm leading-7 text-cyan-200/95">{projects[0].why}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span key={tag} className="border border-cyan-300/20 bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.52, ease: "easeOut", delay: 0.04 }}
                className="px-6 py-10 lg:px-8"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">02</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{projects[1].title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/62">{projects[1].what}</p>
                <div className="mt-6 border-l-2 border-cyan-300/90 bg-cyan-400/[0.07] px-4 py-4">
                  <p className="text-sm leading-7 text-cyan-200/95">{projects[1].why}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[1].tags.map((tag) => (
                    <span key={tag} className="border border-cyan-300/20 bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 border-b border-white/10">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.52, ease: "easeOut", delay: 0.03 }}
                className="border-b border-white/10 lg:border-b-0 lg:border-r border-white/10 px-6 py-10 lg:px-8"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">03</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{projects[2].title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/62">{projects[2].what}</p>
                <div className="mt-6 border-l-2 border-cyan-300/90 bg-cyan-400/[0.07] px-4 py-4">
                  <p className="text-sm leading-7 text-cyan-200/95">{projects[2].why}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[2].tags.map((tag) => (
                    <span key={tag} className="border border-cyan-300/20 bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.52, ease: "easeOut", delay: 0.06 }}
                className="border-b border-white/10 lg:border-b-0 lg:border-r border-white/10 px-6 py-10 lg:px-8"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">04</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{projects[3].title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/62">{projects[3].what}</p>
                <div className="mt-6 border-l-2 border-cyan-300/90 bg-cyan-400/[0.07] px-4 py-4">
                  <p className="text-sm leading-7 text-cyan-200/95">{projects[3].why}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[3].tags.map((tag) => (
                    <span key={tag} className="border border-cyan-300/20 bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.52, ease: "easeOut", delay: 0.09 }}
                className="px-6 py-10 lg:px-8"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">05</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{projects[5].title}</h3>
                <p className="mt-5 text-sm leading-8 text-white/62">{projects[5].what}</p>
                <div className="mt-6 border-l-2 border-cyan-300/90 bg-cyan-400/[0.07] px-4 py-4">
                  <p className="text-sm leading-7 text-cyan-200/95">{projects[5].why}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects[5].tags.map((tag) => (
                    <span key={tag} className="border border-cyan-300/20 bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.52, ease: "easeOut", delay: 0.08 }}
              className="px-6 py-10 lg:px-8"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">06 — {projects[4].label}</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">{projects[4].title}</h3>
              <p className="mt-5 max-w-6xl text-sm leading-8 text-white/62">{projects[4].what}</p>
              <div className="mt-6 border-l-2 border-cyan-300/90 bg-cyan-400/[0.07] px-4 py-4">
                <p className="text-sm leading-7 text-cyan-200/95">{projects[4].why}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {projects[4].tags.map((tag) => (
                  <span key={tag} className="border border-cyan-300/20 bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-cyan-200/80">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="stack" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <motion.div {...fadeUp} className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">Technology</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Tech Stack
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/58">
              A focused, production-oriented toolkit built around real AI system requirements.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {techGroups.map((group, idx) => (
              <motion.div
                key={group.label}
                {...fadeUp}
                transition={{ duration: 0.48, ease: "easeOut", delay: idx * 0.04 }}
                className="rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-sm"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-200/80 mb-6">
                  {group.label}
                </p>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <motion.div
            {...fadeUp}
            className="rounded-[2.2rem] border border-cyan-300/10 bg-gradient-to-br from-white/[0.05] to-cyan-400/[0.04] p-8 lg:p-10"
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">Value Creation</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  I build systems that create measurable leverage.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {valuePoints.map((point, idx) => (
                  <motion.div
                    key={point}
                    {...fadeUp}
                    transition={{ duration: 0.42, ease: "easeOut", delay: idx * 0.03 }}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/78"
                  >
                    {point}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div {...fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">Experience</p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">AI Systems Builder — SmartFlow Systems</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Designing and deploying production-oriented AI systems focused on workflow automation, lead handling, and intelligent operations.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                    <li>Built end-to-end automation pipelines (trigger → AI → output) using n8n, APIs, and LLMs</li>
                    <li>Developed AI-assisted content and communication systems for scalable outreach</li>
                    <li>Designed data pipelines to clean, structure, and feed AI workflows</li>
                    <li>Implemented RAG-based assistants for context-aware decision support</li>
                    <li>Integrated Telegram interfaces for real-time system control and approvals</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200/80">
                    <span className="rounded-full border border-white/10 px-3 py-1">Automation</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">LLM Systems</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">Workflow Design</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Engineering Background</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Strong foundation in control systems, modelling, and analytical problem-solving applied to system architecture and optimisation.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                    <li>Applied systems thinking from power engineering to AI architecture design</li>
                    <li>Experience with MATLAB/Simulink for modelling and simulation</li>
                    <li>Built technical intuition bridging hardware systems and software workflows</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">Education & Training</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Credentials</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">MSc Power Engineering and Sustainable Energy</h3>
                  <p className="text-sm text-cyan-200/80">Swansea University, UK</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Advanced engineering studies with a focus on systems modelling, control theory, and technical problem-solving at postgraduate level.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">BSc Electrical / Electronic Engineering</h3>
                  <p className="text-sm text-cyan-200/80">Madonna University, Nigeria</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Undergraduate foundation in electrical engineering, circuit design, and electronic systems — providing the hardware-level intuition that shapes software architecture decisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">AI & Machine Learning Training</h3>
                  <p className="text-sm text-cyan-200/80">IBM · Google</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Structured AI training programmes covering machine learning fundamentals, applied AI, and enterprise AI deployment.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">In Progress</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">Hands-On AI Systems Development</h3>
                  <p className="text-sm text-cyan-200/80">Self-Directed · Project-Based</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Practical AI system construction across automation, data processing, ML pipelines, and LLM-based architectures — built and deployed in real environments.
                  </p>
                  <p className="mt-2 text-sm text-white/80">Applied Learning</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10 lg:pb-28">
          <motion.div {...fadeUp} className="rounded-[2.4rem] border border-white/10 bg-white/[0.03] p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/75">Contact</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl leading-tight">
                  Let's build<br />something<br />intelligent.
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
                  Available for AI system design, automation, and intelligent workflow development. Whether you're a founder, recruiter, or AI company — let's talk systems.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <a
                  href={links.email}
                  className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/80 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  <Mail size={18} />
                  <div>
                    Email<br />
                    <span className="text-white">onuigbonnamdiokwy@gmail.com</span>
                  </div>
                </a>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/80 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  <Linkedin size={18} />
                  <div>
                    LinkedIn<br />
                    <span className="text-white">linkedin.com/in/nnamdionuigbo</span>
                  </div>
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/80 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  <Github size={18} />
                  <div>
                    GitHub<br />
                    <span className="text-white">github.com/onuigbonnamdi</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
