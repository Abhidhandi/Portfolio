"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const links = ["About", "Skills", "Projects", "Contact"]

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-red-900/20" : "bg-transparent"}`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 className="text-white font-bold tracking-widest uppercase text-sm">
                    Abhijot
                </h1>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-sm text-gray-400 items-center">
                    {links.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="hover:text-white transition-colors duration-200 hover:text-red-400"
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="'Resume'pdf.pdf"
                        target="_blank"
                        className="px-4 py-1.5 border border-red-600 text-red-400 rounded-full hover:bg-red-600 hover:text-white transition-all duration-200 text-xs"
                    >
                        Resume ↗
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-black/95 backdrop-blur-md border-b border-red-900/20 px-6 pb-6"
                    >
                        <div className="flex flex-col gap-5 pt-4">
                            {links.map(link => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-gray-300 hover:text-red-400 transition-colors text-lg"
                                >
                                    {link}
                                </a>
                            ))}
                            <a
                                href="'Resume'pdf.pdf"
                                target="_blank"
                                className="text-red-400 text-lg"
                                onClick={() => setMenuOpen(false)}
                            >
                                Resume ↗
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}