"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
    return (
        <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

            {/* Background glow effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl" />
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-red-500 text-sm tracking-[0.3em] uppercase mb-6"
            >
                Frontend & AI Developer
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold text-white leading-tight"
            >
                Abhijot
                <br />
                <span className="bg-gradient-to-r from-red-700 via-red-500 to-rose-400 text-transparent bg-clip-text">
                    Singh
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-500 text-base mt-6 max-w-md"
            >
                Building AI-powered applications and modern web experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex gap-4 mt-10"
            >
                <a
                    href="#projects"
                    className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full transition-all duration-200 text-sm font-medium"
                >
                    View My Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border border-red-800 text-red-400 hover:border-red-500 hover:text-red-300 rounded-full transition-all duration-200 text-sm"
                >
                    Get In Touch
                </a>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
                className="text-red-800 text-xl mt-20"
            >
                ↓
            </motion.div>

        </section>
    )
}