"use client"

import { motion } from "framer-motion"

const skillGroups = [
    {
        category: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
        category: "AI & Backend",
        skills: ["Python", "OpenAI API", "DALL·E", "REST APIs", "Node.js"],
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Vercel", "Framer Motion"],
    },
]

export default function SkillsSection() {
    return (
        <section id="skills" className="py-32 bg-black px-6">
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-red-500 text-sm tracking-widest uppercase mb-4">What I Work With</p>
                    <h2 className="text-5xl text-white font-bold">Skills</h2>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.15, duration: 0.7 }}
                        >
                            <p className="text-red-800 text-xs tracking-[0.2em] uppercase mb-5">
                                {group.category}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {group.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-5 py-2 border border-red-900/40 text-red-300 rounded-full text-sm hover:border-red-500 hover:text-white transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}