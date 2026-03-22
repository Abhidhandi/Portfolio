"use client"

import { motion } from "framer-motion"

const certificates = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle",
        date: "Issued Oct 2025",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=819066AA343F76CE607077434AB7BC8EA4B8D597262B0AA7F653D0FC36099DFB",
    },
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "Issued 2025",
        link: "https://www.coursera.org/account/accomplishments/verify/K78PDTOCKBEX",
    },
    {
        title: "Introduction to AI Concepts",
        issuer: "Microsoft",
        date: "Issued Mar 2026",
        link: "https://learn.microsoft.com/en-us/users/abhijotsingh-7325/achievements/37s5ys7h?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
        title: "Introduction to Front-End Development",
        issuer: "Meta",
        date: "Issued 2026",
        link: "https://www.coursera.org/account/accomplishments/verify/IFVPRP6U8DHW",
    },
    {
        title: "Introduction to HTML5",
        issuer: "University of Michigan",
        date: "Issued 2025",
        link: "https://www.coursera.org/account/accomplishments/certificate/I9SWS58DY95O",
    },
]

export default function CertificatesSection() {
    return (
        <section className="min-h-screen bg-black px-6 py-20 flex flex-col items-center">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-800 via-red-600 to-rose-500 text-transparent bg-clip-text"
            >
                Certifications
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-sm mb-16"
            >
                Verified credentials from global institutions
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="p-7 rounded-xl backdrop-blur-lg bg-red-900/10 border border-red-800/30 hover:border-rose-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
                    >
                        <div>
                            <p className="text-red-800 text-xs tracking-widest uppercase mb-3">
                                {cert.issuer}
                            </p>
                            <h3 className="text-base font-semibold text-rose-300 mb-2 leading-snug">
                                {cert.title}
                            </h3>
                            <p className="text-red-300/50 text-xs mb-6">
                                {cert.date}
                            </p>
                        </div>

                        <a
                            href={cert.link}
                            target="_blank"
                            className="inline-block px-5 py-2 rounded-lg bg-rose-700/80 hover:bg-rose-600 transition text-sm text-center"
                        >
                            Show Credential ↗
                        </a>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}