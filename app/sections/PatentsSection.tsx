"use client"

import { motion } from "framer-motion"

const patents = [
    {
        title: "Adaptive Clothing with IoT",
        description:
            "Designed a responsive clothing system using sensors and IoT technology to dynamically adjust to environmental conditions.",
    },
    {
        title: "AAC Devices with AI",
        description:
            "Developed an AI-powered communication system that generates contextual speech to assist users with speech impairments.",
    },
]

export default function PatentsSection() {
    return (
        <section className="min-h-screen bg-black px-6 py-20 flex flex-col items-center">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-red-800 via-red-600 to-rose-500 text-transparent bg-clip-text"
            >
                Patents & Research
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl">

                {patents.map((patent, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="p-8 rounded-2xl backdrop-blur-lg bg-red-900/10 border border-red-800/30 hover:border-rose-500/40 transition-all duration-300 shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold text-rose-400 mb-4">
                            {patent.title}
                        </h3>

                        <p className="text-red-100/70 leading-relaxed">
                            {patent.description}
                        </p>
                    </motion.div>
                ))}

            </div>

        </section>
    )
}