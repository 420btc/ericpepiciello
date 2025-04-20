"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface MalagaMapProps {
  className?: string
}

export function MalagaMap({ className }: MalagaMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const markerRef = useRef<any>(null)
  const { theme } = useTheme()

  // Coordenadas de Málaga
  const malagaCoordinates = {
    lng: -4.42,
    lat: 36.72,
    zoom: 13,
  }

  useEffect(() => {
    // Importar mapbox-gl solo en el cliente
    const initializeMap = async () => {
      // Si el mapa ya está inicializado o el contenedor no está listo, no hacer nada
      if (mapInstance.current || !mapContainer.current) return

      // Importar mapbox-gl dinámicamente
      const mapboxgl = (await import("mapbox-gl")).default

      // Importar los estilos de mapbox-gl
      import("mapbox-gl/dist/mapbox-gl.css")

      // Inicializar Mapbox
      mapboxgl.accessToken = "pk.eyJ1IjoiNDIwYnRjIiwiYSI6ImNtOTN3ejBhdzByNjgycHF6dnVmeHl2ZTUifQ.Utq_q5wN6DHwpkn6rcpZdw"

      // Crear mapa con vista satelital
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: [malagaCoordinates.lng, malagaCoordinates.lat],
        zoom: 9,
      })

      mapInstance.current = map

      // Añadir controles de navegación
      map.addControl(new mapboxgl.NavigationControl(), "top-right")

      // Cuando el mapa carga, ejecutar la animación fly-to
      map.on("load", () => {
        // Añadir marcador en Málaga
        const marker = new mapboxgl.Marker({ color: "#FF0000" })
          .setLngLat([malagaCoordinates.lng, malagaCoordinates.lat])
          .addTo(map)

        markerRef.current = marker

        // Añadir popup con información
        new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        })
          .setLngLat([malagaCoordinates.lng, malagaCoordinates.lat])
          .setHTML('<h3 class="font-bold">Eric Pepiciello</h3><p>Fotógrafo profesional</p>')
          .addTo(map)

        setTimeout(() => {
          map.flyTo({
            center: [malagaCoordinates.lng, malagaCoordinates.lat],
            essential: true,
            zoom: malagaCoordinates.zoom,
            speed: 0.8,
            curve: 1,
            easing(t) {
              return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
            },
          })
        }, 1000)
      })
    }

    initializeMap().catch(console.error)

    // Cleanup
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  return (
    <div className={`relative ${className || ""}`}>
      <div
        ref={mapContainer}
        className="w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border-4 border-muted shadow-lg"
        style={{
          borderColor: theme === "dark" ? "#333" : "#ccc",
          boxShadow: theme === "dark" ? "0 0 15px rgba(0,0,0,0.3)" : "0 0 15px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  )
}
