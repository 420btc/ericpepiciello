import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Esto normalmente vendría de un CMS o base de datos
const getTaller = (slug: string) => {
  return {
    title: "Fotografía de Retrato Avanzada",
    description: "Aprende técnicas avanzadas de iluminación y composición para retratos profesionales.",
    longDescription: `
      <p>Este taller intensivo está diseñado para fotógrafos de nivel intermedio a avanzado que quieran llevar sus retratos al siguiente nivel. Profundizaremos en técnicas avanzadas de iluminación, composición y dirección de modelos.</p>
      
      <p>A lo largo del taller, trabajarás en ejercicios prácticos y ejemplos del mundo real que demuestran cómo implementar estas técnicas en tus propios proyectos.</p>
    `,
    date: "15 de Abril, 2025",
    time: "10:00 - 14:00",
    duration: "4 horas",
    location: "Online",
    capacity: "30 participantes",
    price: "149€",
    image: "/placeholder.svg?height=600&width=1200",
    status: "Próximo",
    instructor: {
      name: "Eric Pepiciello",
      bio: "Fotógrafo profesional con más de 10 años de experiencia en fotografía de retratos. Eric ha trabajado con diversas publicaciones y marcas, ayudándoles a crear imágenes impactantes y memorables.",
      image: "/placeholder.svg?height=200&width=200",
    },
    topics: [
      "Esquemas de iluminación avanzados",
      "Dirección de modelos y poses",
      "Composición y encuadre",
      "Uso creativo de la profundidad de campo",
      "Técnicas de edición para retratos",
      "Desarrollo de un estilo personal",
    ],
    prerequisites: [
      "Conocimientos básicos de fotografía",
      "Familiaridad con los controles manuales de la cámara",
      "Comprensión básica de la iluminación",
    ],
    testimonials: [
      {
        name: "Sara Jiménez",
        role: "Fotógrafa Aficionada",
        company: "Estudio Luz",
        quote: "Este taller cambió completamente mi enfoque en la fotografía de retratos. ¡Altamente recomendado!",
      },
      {
        name: "Miguel Chen",
        role: "Fotógrafo Senior",
        company: "Revista Moda",
        quote:
          "El equilibrio perfecto entre teoría y práctica. Ahora estoy aplicando estas técnicas en todos mis proyectos.",
      },
    ],
    relatedTalleres: [
      {
        title: "Introducción a la Fotografía de Moda",
        slug: "introduccion-fotografia-moda",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Iluminación Creativa en Fotografía",
        slug: "iluminacion-creativa-fotografia",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

export default function TallerPage({ params }: { params: { slug: string } }) {
  const taller = getTaller(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Botón de Regreso */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/talleres" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Volver a Talleres</span>
            </Link>
          </Button>
        </div>

        {/* Encabezado del Taller */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Badge variant={taller.status === "Próximo" ? "default" : "secondary"}>{taller.status}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{taller.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{taller.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3" />
                <span>{taller.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3" />
                <span>
                  {taller.time} ({taller.duration})
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{taller.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3" />
                <span>{taller.capacity}</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-3xl font-bold">{taller.price}</div>
            </div>

            {taller.status === "Próximo" && (
              <Button size="lg" className="w-full md:w-auto">
                Inscribirse Ahora
              </Button>
            )}
          </div>

          <div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src={taller.image || "/placeholder.svg"}
                alt={taller.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contenido del Taller */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Sobre Este Taller</h2>
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: taller.longDescription }}
            />

            <h2 className="text-2xl font-bold mb-6">Lo Que Aprenderás</h2>
            <ul className="space-y-3 mb-8">
              {taller.topics.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-6">Requisitos Previos</h2>
            <ul className="space-y-3 mb-8">
              {taller.prerequisites.map((prerequisite, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{prerequisite}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-muted/30 p-6 rounded-lg border border-border mb-8">
              <h2 className="text-xl font-bold mb-4">Tu Instructor</h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-muted overflow-hidden mr-4">
                  <Image
                    src={taller.instructor.image || "/placeholder.svg"}
                    alt={taller.instructor.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{taller.instructor.name}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{taller.instructor.bio}</p>
            </div>

            {taller.status === "Próximo" && (
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h2 className="text-xl font-bold mb-4">¿Listo para Unirte?</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Asegura tu plaza ahora. El espacio es limitado para garantizar una experiencia de aprendizaje de
                  calidad.
                </p>
                <Button className="w-full">Inscribirse Ahora</Button>
              </div>
            )}
          </div>
        </div>

        {/* Testimonios */}
        {taller.testimonials && taller.testimonials.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Opiniones de Participantes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {taller.testimonials.map((testimonio, index) => (
                <div key={index} className="bg-muted/30 p-8 rounded-lg border border-border">
                  <p className="text-xl italic mb-6">"{testimonio.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt={testimonio.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonio.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonio.role}, {testimonio.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Talleres Relacionados */}
        {taller.relatedTalleres && taller.relatedTalleres.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Talleres Relacionados</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {taller.relatedTalleres.map((relatedTaller, index) => (
                <Link
                  key={index}
                  href={`/talleres/${relatedTaller.slug}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square bg-muted overflow-hidden">
                      <Image
                        src={relatedTaller.image || "/placeholder.svg"}
                        alt={relatedTaller.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="col-span-2 p-4 flex items-center">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {relatedTaller.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
