import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Datos de blog de ejemplo
const blogPosts = [
  {
    id: 1,
    title: "La Importancia de la Composición en Fotografía",
    excerpt: "Aprende cómo la composición puede transformar tus fotografías y crear imágenes más impactantes.",
    date: "1 de Marzo, 2025",
    category: "Técnica",
    image: "/placeholder.svg?height=400&width=600",
    slug: "importancia-composicion-fotografia",
  },
  {
    id: 2,
    title: "Guía Completa de Iluminación para Retratos",
    excerpt: "Una guía exhaustiva para crear esquemas de iluminación efectivos en fotografía de retratos.",
    date: "15 de Febrero, 2025",
    category: "Iluminación",
    image: "/placeholder.svg?height=400&width=600",
    slug: "guia-iluminacion-retratos",
  },
  {
    id: 3,
    title: "El Futuro de la Fotografía: Tendencias para 2025",
    excerpt: "Explorando las próximas tendencias y tecnologías que darán forma a la fotografía en el próximo año.",
    date: "1 de Febrero, 2025",
    category: "Tendencias",
    image: "/placeholder.svg?height=400&width=600",
    slug: "futuro-fotografia-tendencias-2025",
  },
  {
    id: 4,
    title: "Optimizando tu Flujo de Trabajo en Fotografía: Un Caso Práctico",
    excerpt: "Cómo mejoré mi eficiencia en un 70% en un proyecto con un cliente mediante optimizaciones estratégicas.",
    date: "20 de Enero, 2025",
    category: "Flujo de Trabajo",
    image: "/placeholder.svg?height=400&width=600",
    slug: "optimizando-flujo-trabajo-fotografia",
  },
  {
    id: 5,
    title: "Fotografía Accesible: Más Allá de lo Básico",
    excerpt: "Llevando tus conocimientos de accesibilidad al siguiente nivel con técnicas y consideraciones avanzadas.",
    date: "5 de Enero, 2025",
    category: "Accesibilidad",
    image: "/placeholder.svg?height=400&width=600",
    slug: "fotografia-accesible-avanzada",
  },
  {
    id: 6,
    title: "De Aficionado a Profesional: Mi Viaje Personal",
    excerpt:
      "Mi experiencia personal transitando de la fotografía aficionada a la profesional y las lecciones aprendidas.",
    date: "15 de Diciembre, 2024",
    category: "Carrera",
    image: "/placeholder.svg?height=400&width=600",
    slug: "aficionado-a-profesional-viaje",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Blog</h1>
          <p className="body-lg text-zinc-600">
            Pensamientos, ideas y perspectivas sobre fotografía, diseño y el panorama visual.
          </p>
        </div>

        {/* Artículo Destacado */}
        <div className="mb-20">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-zinc-600 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-zinc-600 mb-6">{blogPosts[0].excerpt}</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="group-hover:bg-zinc-900 group-hover:text-white transition-colors"
                >
                  Leer Artículo
                </Button>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
                  <Image
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Cuadrícula de Artículos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-zinc-100 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-zinc-500 mb-2">
                  {post.category} • {post.date}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-zinc-600 transition-colors">{post.title}</h3>
                <p className="text-zinc-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
