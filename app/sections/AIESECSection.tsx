"use client"

import { motion } from "framer-motion"

export default function AIESECSection() {
    return (
        <section className="min-h-screen bg-black px-6 py-20 flex flex-col items-center">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-red-800 via-red-600 to-rose-500 text-transparent bg-clip-text"
            >
                Leadership & Community
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl grid md:grid-cols-2 gap-10 items-center"
            >

                {/* Images */}
                <div className="grid grid-cols-1 gap-6">

                    <img
                        src="/images/aiesec-chd.png"
                        className="rounded-xl object-cover w-full h-[220px]"
                    />

                    <img
                        src="/images/aiesec-team.png"
                        className="rounded-xl object-cover w-full h-[220px]"
                    />

                </div>

                {/* Text */}
                <div>

                    <h3 className="text-2xl font-semibold text-rose-400 mb-2">
                        Senior Marketing Executive
                    </h3>

                    <p className="text-red-200 mb-1">
                        AIESEC in India
                    </p>

                    <p className="text-red-300/70 mb-5 text-sm">
                        Feb 2025 – Present
                    </p>

                    <p className="text-red-100/70 leading-relaxed">
                        Contributing to marketing and outreach initiatives within AIESEC,
                        the world’s largest youth-led organization. Involved in promoting
                        international exchange programs, coordinating campaigns, and
                        collaborating with teams to increase engagement and participation
                        in global leadership opportunities.
                    </p>

                </div>

            </motion.div>

        </section>
    )
}