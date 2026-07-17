import { useState } from "react";

interface Feature {
  title: string;
  description: string;
  badge: string;
  icon: string;
}

export default function TemplateShowcase() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "analytics" | "settings">("dashboard");

  const features: Feature[] = [
    {
      title: "Edge-Native Performance",
      description: "Compiled statically and server-rendered directly on Cloudflare's global network for subsecond load times.",
      badge: "Performance",
      icon: "⚡",
    },
    {
      title: "Universal API Integration",
      description: "Pre-configured with dynamic environment variables to safely fetch from your serverless Hono API service.",
      badge: "Connectivity",
      icon: "🔌",
    },
    {
      title: "Modular Component Architecture",
      description: "Built with React 19, Tailwind CSS v4, and Astro for high-fidelity component composability.",
      badge: "Structure",
      icon: "🧩",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/20 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Ready-to-build Application Template
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
          Your Next Big Idea Starts Here
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          A production-grade, generic frontend template designed for high performance, ease of customization, and edge-native scale.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#explore"
            className="rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            Get Started
          </a>
          <a
            href="https://github.com/arcgestalt"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            View Repository
          </a>
        </div>
      </section>

      {/* Interactive Live Demo Stage */}
      <section id="explore" className="mb-24 scroll-mt-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-6 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-white/5">
            <div>
              <h3 className="text-xl font-bold text-white">Interactive State Manager</h3>
              <p className="text-sm text-gray-400">Verify client-side React hydration and routing hooks in real time.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10 w-full md:w-auto">
              {(["dashboard", "analytics", "settings"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 md:flex-none rounded-lg px-4 py-2 text-xs font-bold capitalize transition ${
                    activeTab === tab
                      ? "bg-emerald-500 text-black shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Stage */}
          <div className="min-h-[300px] flex items-center justify-center rounded-2xl bg-black/30 border border-white/5 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent) pointer-events-none"></div>

            {activeTab === "dashboard" && (
              <div className="text-center max-w-md animate-fade-in">
                <span className="text-4xl">📊</span>
                <h4 className="mt-4 text-lg font-bold text-white">Dynamic Workspace Dashboard</h4>
                <p className="mt-2 text-sm text-gray-400">
                  A high-fidelity layout placeholder representing a state-driven client console. Ready to be mapped to active API datasets.
                </p>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="text-center max-w-md animate-fade-in">
                <span className="text-4xl">📈</span>
                <h4 className="mt-4 text-lg font-bold text-white">Edge Telemetry & Analytics</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Pre-configured slots for graphs, tables, and reporting metrics. Ready for server-side or client-side visualization libraries.
                </p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="text-center max-w-md animate-fade-in">
                <span className="text-4xl">⚙️</span>
                <h4 className="mt-4 text-lg font-bold text-white">System Configurations</h4>
                <p className="mt-2 text-sm text-gray-400">
                  Form interfaces, theme toggles, and user metadata controllers. Seamlessly binds to your backend Hono database.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="group rounded-2xl border border-white/5 bg-white/[0.01] p-6 hover:border-emerald-500/30 hover:bg-emerald-500/[0.01] transition-all hover:-translate-y-1 shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:bg-emerald-500/10 text-xl border border-white/5 group-hover:border-emerald-500/20 transition-all">
              {feat.icon}
            </div>
            <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/5 px-2.5 py-0.5 rounded-full ring-1 ring-emerald-500/10">
              {feat.badge}
            </span>
            <h3 className="mt-4 text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
              {feat.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {feat.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
