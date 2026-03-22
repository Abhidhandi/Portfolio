"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const end = 100
        const duration = 2000
        const incrementTime = duration / end

        const timer = setInterval(() => {
            start += 1
            setCount(start)

            if (start === end) clearInterval(timer)
        }, incrementTime)

        return () => clearInterval(timer)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-900 via-red-700 to-rose-600 text-transparent bg-clip-text"

            >
                Deploying Abhi's Portfolio...
            </motion.h1>

            <motion.p
                className="text-white text-xl"
            >
                {count}%
            </motion.p>
        </motion.div>
    )
}