import Image from "next/image"

export function StaticMap() {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden border-4 border-muted shadow-lg">
      <Image
        src="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/static/-4.42,36.72,12,0/800x500?access_token=pk.eyJ1IjoiNDIwYnRjIiwiYSI6ImNtOTN3ejBhdzByNjgycHF6dnVmeHl2ZTUifQ.Utq_q5wN6DHwpkn6rcpZdw"
        alt="Mapa de Málaga"
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg"></div>
      </div>
    </div>
  )
}
