"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen bg-black flex items-center px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <motion.img
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    src="/images/profile.jpg"
                    alt="Abhijot Singh"
                    className="w-[320px] h-[320px] object-cover rounded-2xl border border-red-900/30"
                />

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-red-500 text-sm tracking-widest uppercase mb-4">Who I Am</p>

                    <h2 className="text-5xl text-white mb-6 font-bold">
                        About Me
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6">
                        Computer Science Engineering student at Chandigarh University, passionate about
                        building modern web applications and AI-powered systems. I focus on frontend
                        development with React and Next.js, and integrating AI APIs to create
                        interactive, real-world experiences.
                    </p>

                    <p className="text-gray-500 leading-relaxed">
                        I hold 2 patents in IoT and AI communication systems, and actively contribute
                        to the tech community through AIESEC's marketing initiatives.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <a
                            href="https://github.com/Abhidhandi"
                            target="_blank"
                            className="text-sm text-red-400 border border-red-800/40 px-4 py-2 rounded-full hover:border-red-500 transition"
                        >
                            GitHub ↗
                        </a>
                        <a
                            href="https://linkedin.com/in/abhijotsingh-dev"
                            target="_blank"
                            className="text-sm text-red-400 border border-red-800/40 px-4 py-2 rounded-full hover:border-red-500 transition"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}