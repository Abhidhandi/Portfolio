"use client"

import { motion } from "framer-motion"

const links = [
    {
        label: "Email",
        href: "mailto:dhandiabhi@gmail.com",
        desc: "dhandiabhi@gmail.com",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/abhijotsingh-dev",
        desc: "linkedin.com/in/abhijotsingh-dev",
    },
    {
        label: "GitHub",
        href: "https://github.com/Abhidhandi",
        desc: "github.com/Abhidhandi",
    },
]

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 bg-black px-6">
            <div className="max-w-4xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-red-500 text-sm tracking-widest uppercase mb-4">Let's Talk</p>
                    <h2 className="text-5xl text-white font-bold mb-6">Get In Touch</h2>
                    <p className="text-gray-500 mb-16 max-w-md mx-auto">
                        Open to internships, collaborations, and interesting projects. Don't hesitate to reach out.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -4 }}
                            className="border border-red-900/30 hover:border-red-500/50 px-8 py-6 rounded-2xl text-left transition-all duration-300 group"
                        >
                            <p className="text-red-400 font-semibold mb-1 group-hover:text-red-300">
                                {link.label} ↗
                            </p>
                            <p className="text-gray-600 text-sm">{link.desc}</p>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    )
}