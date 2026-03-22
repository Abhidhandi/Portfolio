"use client"

import { useEffect, useState } from "react"
import useLenis from "../hooks/useLenis"
import LoadingScreen from "./LoadingScreen"

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    useLenis()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (loading) return <LoadingScreen />

    return <>{children}</>
}