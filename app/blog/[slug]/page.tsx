import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Esto normalmente vendría de un CMS o base de datos
const getBlogPost = (slug: string) => {
  return {
    title: "La Importancia de la Composición en Fotografía",
    date: "1 de Marzo, 2025",
    author: "Eric Pepiciello",
    category: "Técnica",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p class="text-xl leading-relaxed mb-6">La composición es uno de los elementos más importantes de la fotografía. No se trata solo de elegir un buen encuadre; se trata de crear una jerarquía, establecer un ritmo y garantizar que la imagen sea atractiva y comunique lo que queremos.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">La Importancia de la Composición</h2>
      
      <p class="text-lg leading-relaxed mb-6">Una buena composición puede marcar la diferencia entre una fotografía que impacta y otra que pasa desapercibida. Afecta a la legibilidad, la experiencia visual e incluso a cómo se percibe el mensaje que queremos transmitir.</p>
      
      <p class="text-lg leading-relaxed mb-6">Al diseñar una fotografía, considera estos factores clave:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
        <li>Regla de los tercios y puntos de interés</li>
        <li>Líneas y formas que guían la mirada</li>
        <li>Equilibrio y distribución de elementos</li>
        <li>Espacio negativo y simplicidad</li>
        <li>Perspectiva y profundidad</li>
      </ul>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Eligiendo la Composición Adecuada</h2>
      
      <p class="text-lg leading-relaxed mb-6">Al seleccionar la composición para tu fotografía, considera tanto la estética como la funcionalidad. Una composición hermosa que no comunica el mensaje deseado no cumple su propósito.</p>
      
      <blockquote class="border-l-4 border-zinc-900 pl-6 italic my-8 text-xl">
        "La fotografía es el arte de la observación. Se trata de encontrar algo interesante en un lugar ordinario."
        <cite class="block text-sm mt-2 not-italic">— Elliott Erwitt</cite>
      </blockquote>
      
      <p class="text-lg leading-relaxed mb-6">Para el contenido principal de la imagen, prioriza la claridad sobre el estilo. Las composiciones simples y directas suelen funcionar mejor para transmitir un mensaje claro. Para elementos más creativos o artísticos, puedes experimentar con composiciones más complejas que reflejen tu estilo personal.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-6">Creando Jerarquía Visual</h2>
      
      <p class="text-lg leading-relaxed mb-6">La jerarquía visual guía al espectador a través de tu imagen, ayudándole a entender qué es más importante y cómo está organizada la información visual.</p>
      
      <p class="text-lg leading-relaxed mb-6">Utiliza el tamaño, el peso, el color y el espacio para crear distinciones claras entre los diferentes elementos de la imagen. Una jerarquía bien estructurada hace que tu fotografía sea más impactante y comprensible.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "Guía Completa de Iluminación para Retratos",
        slug: "guia-iluminacion-retratos",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 5,
        title: "Fotografía Accesible: Más Allá de lo Básico",
        slug: "fotografia-accesible-avanzada",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="pt-20">
      <article className="container-custom section-spacing">
        {/* Botón de Regreso */}
        <div className="mb-10">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Volver al Blog</span>
            </Link>
          </Button>
        </div>

        {/* Encabezado del Artículo */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="text-sm font-medium text-zinc-500 mb-4">
            {post.category} • {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt={post.author}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-zinc-600">Por {post.author}</span>
          </div>
        </div>

        {/* Imagen Destacada */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] bg-zinc-100 rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contenido del Artículo */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-zinc max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Biografía del Autor */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-zinc-100 rounded-lg">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-zinc-200 overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={post.author}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sobre {post.author}</h3>
              <p className="text-zinc-600">
                Fotógrafo profesional especializado en fotografía de moda y retratos. Escribo sobre técnicas
                fotográficas, tendencias y la intersección entre tecnología y creatividad.
              </p>
            </div>
          </div>
        </div>

        {/* Artículos Relacionados */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-8">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-lg overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-zinc-100 overflow-hidden">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-zinc-600 transition-colors">{relatedPost.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
