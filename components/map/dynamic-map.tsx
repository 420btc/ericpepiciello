"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { StaticMap } from "./static-map"

// Importación dinámica del componente del mapa (sin SSR)
const MalagaMapWithNoSSR = dynamic(() => import("./malaga-map").then((mod) => mod.MalagaMap), {
  ssr: false,
  loading: () => <StaticMap />,
})

export function DynamicMap() {
  const [isMounted, setIsMounted] = useState(false)
  const [loadFailed, setLoadFailed] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Detectar si la carga de Mapbox falla
    const timer = setTimeout(() => {
      if (!window.mapboxgl) {
        setLoadFailed(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted || loadFailed) {
    return <StaticMap />
  }

  return <MalagaMapWithNoSSR />
}
