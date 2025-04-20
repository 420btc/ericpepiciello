import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Esto normalmente vendría de un CMS o base de datos
const getProyecto = (slug: string) => {
  return {
    title: "Retratos Urbanos",
    cliente: "Proyecto Personal",
    año: "2025",
    rol: "Fotógrafo",
    description: "Una serie de retratos en entornos urbanos que exploran la relación entre las personas y la ciudad.",
    desafio:
      "El principal desafío fue capturar la esencia de los sujetos en entornos urbanos dinámicos, manteniendo un equilibrio entre el retrato y el contexto urbano.",
    solucion:
      "Desarrollé un enfoque que combina iluminación natural con flash de relleno sutil, trabajando en horas específicas del día para aprovechar la luz ambiental. La composición se centró en integrar elementos arquitectónicos que complementaran a los sujetos.",
    tecnologias: ["Canon EOS 6D Mark II", "50mm f/1.4", "85mm f/1.8", "Flash Profoto B10"],
    featuredImage: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    instagramUrl: "https://instagram.com/ericpepiciello",
    siguienteProyecto: {
      title: "Moda Editorial",
      slug: "moda-editorial",
    },
  }
}

export default function ProyectoPage({ params }: { params: { slug: string } }) {
  const proyecto = getProyecto(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Botón de Regreso */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/portfolio" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Volver al Portfolio</span>
            </Link>
          </Button>
        </div>

        {/* Encabezado del Proyecto */}
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{proyecto.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{proyecto.description}</p>
          <div className="flex flex-wrap gap-6">
            {proyecto.instagramUrl && (
              <Button asChild size="lg" className="gap-2">
                <a href={proyecto.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <span>Ver en Instagram</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Imagen Destacada */}
        <div className="mb-16">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <Image
              src={proyecto.featuredImage || "/placeholder.svg"}
              alt={proyecto.title}
              width={1600}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Detalles del Proyecto */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Detalles del Proyecto</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Cliente</h3>
                <p className="text-lg">{proyecto.cliente}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Año</h3>
                <p className="text-lg">{proyecto.año}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Rol</h3>
                <p className="text-lg">{proyecto.rol}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase">Equipo</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {proyecto.tecnologias.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">El Desafío</h2>
                <p className="text-lg text-muted-foreground">{proyecto.desafio}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">La Solución</h2>
                <p className="text-lg text-muted-foreground">{proyecto.solucion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería del Proyecto */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Galería del Proyecto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {proyecto.gallery.map((image, index) => (
              <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${proyecto.title} - Imagen ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Siguiente Proyecto */}
        {proyecto.siguienteProyecto && (
          <div className="border-t border-muted pt-16">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Siguiente Proyecto</p>
              <h2 className="text-3xl font-bold mb-8">{proyecto.siguienteProyecto.title}</h2>
              <Button asChild size="lg">
                <Link href={`/portfolio/${proyecto.siguienteProyecto.slug}`}>Ver Proyecto</Link>
              </Button>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
