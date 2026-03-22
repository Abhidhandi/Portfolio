"use client"

import { motion, AnimatePresence } from "framer-motion"

interface Props {
    isOpen: boolean
    onClose: () => void
    title: string
    description: string
}

export default function ProjectModal({
    isOpen,
    onClose,
    title,
    description,
}: Props) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-red-950/40 border border-red-800/40 rounded-2xl p-10 max-w-2xl w-full text-white"
                    >
                        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-700 via-red-500 to-rose-500 text-transparent bg-clip-text">
                            {title}
                        </h3>

                        <p className="text-red-100/80 leading-relaxed">
                            {description}
                        </p>

                        <button
                            onClick={onClose}
                            className="mt-8 px-6 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 transition"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
