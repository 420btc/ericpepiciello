import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

// Actualizar los datos de proyectos con las categorías proporcionadas
const proyectos = [
  {
    id: 1,
    title: "Proyectos corporativos",
    description:
      "Fotografía profesional para empresas, destacando su identidad y valores a través de imágenes de calidad.",
    technologies: ["Retratos Corporativos", "Fotografía de Instalaciones", "Imagen Corporativa"],
    image: "/assets/proyecto-corporativo.jpg",
    slug: "proyectos-corporativos",
    type: "destacado", // proyecto destacado
  },
  {
    id: 2,
    title: "Proyectos para inmobiliarias",
    description:
      "Fotografía especializada en propiedades inmobiliarias que resalta los espacios y características de cada inmueble.",
    technologies: ["Interiores", "Exteriores", "Arquitectura"],
    image: "/assets/proyecto-inmobiliaria.jpg",
    slug: "proyectos-inmobiliarias",
    type: "destacado", // proyecto destacado
  },
  {
    id: 3,
    title: "Proyectos gastronómicos",
    description:
      "Fotografía de alimentos y bebidas que captura la esencia y el arte culinario de restaurantes y chefs.",
    technologies: ["Food Styling", "Fotografía de Platos", "Ambiente Gastronómico"],
    image: "/assets/proyecto-gastronomico.jpg",
    slug: "proyectos-gastronomicos",
    type: "destacado", // proyecto destacado
  },
  {
    id: 4,
    title: "Proyectos en eventos",
    description:
      "Cobertura fotográfica de eventos especiales, capturando momentos únicos y la atmósfera del acontecimiento.",
    technologies: ["Eventos Corporativos", "Inauguraciones", "Conferencias"],
    instagramUrl: "https://instagram.com/ericpepiciello",
    image: "/assets/proyecto-eventos.jpg",
    type: "instagram", // proyecto de Instagram
  },
  {
    id: 5,
    title: "Proyectos de moda",
    description:
      "Fotografía de moda para diseñadores, marcas y editoriales, creando imágenes con estilo y personalidad.",
    technologies: ["Editorial", "Lookbooks", "Campañas"],
    instagramUrl: "https://instagram.com/ericpepiciello",
    image: "/assets/proyecto-moda.jpg",
    type: "instagram", // proyecto de Instagram
  },
]

export default function ProyectosPage() {
  // Separar proyectos destacados y de Instagram
  const proyectosDestacados = proyectos.filter((proyecto) => proyecto.type === "destacado")
  const proyectosInstagram = proyectos.filter((proyecto) => proyecto.type === "instagram")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Proyectos</h1>
          <p className="body-lg text-muted-foreground">
            Una muestra de mi trabajo, con proyectos fotográficos de moda, retratos y fotografía artística.
          </p>
        </div>

        {/* Proyectos Destacados */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Proyectos Destacados
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-16 md:gap-24">
            {proyectosDestacados.map((proyecto, index) => (
              <div key={proyecto.id} className="group">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                      {proyecto.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{proyecto.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {proyecto.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={`/proyectos/${proyecto.slug}`}>Ver Proyecto</Link>
                    </Button>
                  </div>
                  <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                      <Image
                        src={proyecto.image || "/placeholder.svg"}
                        alt={proyecto.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos de Instagram */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Trabajos en Instagram
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            Estos proyectos muestran mi trabajo diario y están disponibles en mi perfil de Instagram para que puedas ver
            más de mi estilo fotográfico.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosInstagram.map((proyecto) => (
              <div
                key={proyecto.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <Image
                    src={proyecto.image || "/placeholder.svg"}
                    alt={proyecto.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {proyecto.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{proyecto.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={proyecto.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      <span>Ver en Instagram</span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
