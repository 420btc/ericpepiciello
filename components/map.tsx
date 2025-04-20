"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

// Coordenadas de Málaga
const MALAGA_COORDINATES = {
  lng: -4.4214,
  lat: 36.7213,
  zoom: 13,
}

export function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Inicializar el mapa solo en el cliente
    if (!mapContainer.current || map.current) return

    mapboxgl.accessToken = "pk.eyJ1IjoiNDIwYnRjIiwiYSI6ImNtOTN3ejBhdzByNjgycHF6dnVmeHl2ZTUifQ.Utq_q5wN6DHwpkn6rcpZdw"

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [MALAGA_COORDINATES.lng, MALAGA_COORDINATES.lat],
      zoom: 9,
      attributionControl: false,
    })

    // Añadir controles de navegación
    map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right")

    // Añadir un marcador en Málaga
    new mapboxgl.Marker({
      color: "#FF0000",
    })
      .setLngLat([MALAGA_COORDINATES.lng, MALAGA_COORDINATES.lat])
      .addTo(map.current)

    // Animación de vuelo a Málaga cuando el mapa se carga
    map.current.on("load", () => {
      setMapLoaded(true)

      map.current?.flyTo({
        center: [MALAGA_COORDINATES.lng, MALAGA_COORDINATES.lat],
        zoom: MALAGA_COORDINATES.zoom,
        essential: true,
        duration: 5000,
      })
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [])

  // Cambiar el estilo del mapa cuando cambia el tema
  useEffect(() => {
    if (!map.current || !mapLoaded) return

    const isDarkMode = theme === "dark"

    map.current.setStyle(
      isDarkMode ? "mapbox://styles/mapbox/satellite-streets-v12" : "mapbox://styles/mapbox/satellite-streets-v12",
    )
  }, [theme, mapLoaded])

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  )
}
