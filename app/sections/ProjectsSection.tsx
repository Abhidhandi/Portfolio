"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectModal from "../components/ProjectModal"

const projects = [
    {
        title: "SmartTalk – AI Chatbot",
        desc: "Real-time AI chatbot powered by OpenAI GPT-3.5. Built with JavaScript and a REST-based async system.",
        fullDesc:
            "SmartTalk is a web-based AI chatbot built using JavaScript and OpenAI's GPT-3.5 API. Improved response accuracy by 30% via prompt pipelines and evaluation metrics. Built a REST-based system reducing latency by 20% using async operations. Features a clean, scrollable chat interface with real-time responses.",
        tech: ["JavaScript", "OpenAI API", "HTML", "CSS"],
        github: "https://github.com/Abhidhandi/Chatbot",
        live: "", // add your live URL here
    },
    {
        title: "PixelMind – AI Image Generator",
        desc: "Generate stunning images from text prompts using OpenAI DALL·E. Clean UI with instant rendering.",
        fullDesc:
            "PixelMind is a modern AI-powered web application that lets users generate images from natural language prompts using OpenAI's DALL·E API. Reduced response time by 25% via backend workflow optimization. Designed scalable architecture with reusable components and structured data pipelines.",
        tech: ["JavaScript", "DALL·E API", "CSS", "HTML"],
        github: "https://github.com/Abhidhandi/Pixelmind-AI-image-Generator",
        live: "", // add your live URL here
    },
    {
        title: "Portfolio Website",
        desc: "This portfolio — built with Next.js, TypeScript, Framer Motion, and Lenis smooth scroll.",
        fullDesc:
            "A modern animated portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion for animations, and Lenis for smooth scrolling. Features a loading screen, project modals, scroll-triggered animations, and full mobile responsiveness.",
        tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
        github: "https://github.com/Abhidhandi",
        live: "", // add your live URL here
    },
]

export default function ProjectsSection() {
    const [modalData, setModalData] = useState<{
        isOpen: boolean
        title: string
        description: string
    }>({ isOpen: false, title: "", description: "" })

    const openModal = (title: string, description: string) => {
        setModalData({ isOpen: true, title, description })
    }

    const closeModal = () => {
        setModalData({ isOpen: false, title: "", description: "" })
    }

    return (
        <section id="projects" className="py-32 bg-black px-6">

            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-red-500 text-sm tracking-widest uppercase mb-4">What I've Built</p>
                    <h2 className="text-5xl text-white font-bold">Projects</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.7 }}
                            whileHover={{ y: -6 }}
                            className="border border-red-900/30 p-8 rounded-2xl bg-red-950/5 hover:border-red-600/40 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-red-400 text-xl font-semibold mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                    {p.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-xs text-red-800 border border-red-900/40 px-2 py-0.5 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 flex-wrap">
                                <button
                                    onClick={() => openModal(p.title, p.fullDesc)}
                                    className="text-xs px-4 py-2 border border-red-800/50 text-red-400 rounded-full hover:bg-red-900/20 transition"
                                >
                                    Details
                                </button>
                                <a
                                    href={p.github}
                                    target="_blank"
                                    className="text-xs px-4 py-2 border border-red-800/50 text-red-400 rounded-full hover:bg-red-900/20 transition"
                                >
                                    GitHub ↗
                                </a>
                                {p.live && (
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        className="text-xs px-4 py-2 bg-red-700 text-white rounded-full hover:bg-red-600 transition"
                                    >
                                        Live ↗
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            <ProjectModal
                isOpen={modalData.isOpen}
                onClose={closeModal}
                title={modalData.title}
                description={modalData.description}
            />

        </section>
    )
}