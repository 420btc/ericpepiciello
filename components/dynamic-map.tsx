"use client"

import dynamic from "next/dynamic"

// Cargar el componente del mapa dinámicamente para evitar problemas de SSR
const DynamicMap = dynamic(() => import("./map").then((mod) => ({ default: mod.MapComponent })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center bg-muted rounded-lg border-4 border-gray-300 dark:border-gray-700">
      <div className="animate-pulse text-center">
        <p className="text-lg font-medium">Cargando mapa...</p>
        <p className="text-sm text-muted-foreground">Visualizando ubicación en Málaga</p>
      </div>
    </div>
  ),
})

export { DynamicMap }
