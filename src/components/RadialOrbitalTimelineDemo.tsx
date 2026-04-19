"use client";

import { Search, PenTool, Code, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Discovery Call",
    date: "Phase 1",
    content: "We sit down to understand your business goals, target audience, and the technical requirements for your project.",
    category: "Planning",
    icon: Search,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "UI/UX Design",
    date: "Phase 2",
    content: "Crafting a premium aesthetic with wireframes and interactive prototypes for your approval.",
    category: "Design",
    icon: PenTool,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Full-Stack Dev",
    date: "Phase 3",
    content: "Bringing designs to life with modern web technologies, responsive layouts, and robust backend architecture.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "UAT & Testing",
    date: "Phase 4",
    content: "Extensive cross-browser testing, performance optimization, and bug fixing before final release.",
    category: "Testing",
    icon: ShieldCheck,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Launch & Support",
    date: "Phase 5",
    content: "Deployment to production systems, ongoing support, and scaling strategies for future growth.",
    category: "Release",
    icon: Rocket,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <section className="w-full relative bg-transparent py-32 flex flex-col items-center overflow-hidden">
      {/* Subtle Background Glow behind the heading */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto z-10 px-4 md:px-0 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-widest text-teal-300 uppercase">Process Overview</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-6 text-center leading-tight tracking-tight">
            Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500">Lifecycle</span>
          </h2>
          
          <p className="text-slate-400 max-w-3xl text-center mx-auto mb-16 text-lg md:text-xl font-light leading-relaxed">
            Experience our transparent and highly collaborative engineering process that takes your abstract ideas and transforms them into market-ready, scalable digital experiences.
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full relative mt-[-5dvh] lg:mt-[-10dvh]"
      >
        <RadialOrbitalTimeline timelineData={timelineData} />
      </motion.div>
    </section>
  );
}

export default RadialOrbitalTimelineDemo;
