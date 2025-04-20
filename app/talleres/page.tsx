import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Datos de talleres
const talleres = [
  {
    id: 1,
    title: "Fotografía de Retrato Avanzada",
    description:
      "Aprende técnicas avanzadas de iluminación y composición para retratos profesionales. Este taller cubre esquemas de iluminación, dirección de modelos y edición.",
    date: "15 de Abril, 2025",
    time: "10:00 - 14:00",
    duration: "4 horas",
    location: "Online",
    capacity: "30 participantes",
    price: "149€",
    image: "/placeholder.svg?height=400&width=800",
    status: "Próximo",
    slug: "fotografia-retrato-avanzada",
    testimonials: [
      {
        name: "Sara Jiménez",
        role: "Fotógrafa Aficionada",
        company: "Estudio Luz",
        quote: "Este taller cambió completamente mi enfoque en la fotografía de retratos. ¡Altamente recomendado!",
      },
    ],
  },
  {
    id: 2,
    title: "Introducción a la Fotografía de Moda",
    description:
      "Una introducción completa a la fotografía de moda para fotógrafos con experiencia. Aprende a trabajar con modelos, estilistas y a crear imágenes de impacto.",
    date: "10 de Mayo, 2025",
    time: "9:00 - 12:00",
    duration: "3 horas",
    location: "Estudio Fotográfico, Málaga",
    capacity: "25 participantes",
    price: "129€",
    image: "/placeholder.svg?height=400&width=800",
    status: "Próximo",
    slug: "introduccion-fotografia-moda",
    testimonials: [
      {
        name: "Miguel Chen",
        role: "Fotógrafo Senior",
        company: "Revista Moda",
        quote:
          "El equilibrio perfecto entre teoría y práctica. Ahora estoy aplicando estas técnicas en todos mis proyectos.",
      },
    ],
  },
  {
    id: 3,
    title: "Edición Profesional con Lightroom",
    description:
      "Explora las funciones de Lightroom y aprende a editar como un profesional. Este taller cubre flujos de trabajo, ajustes avanzados y técnicas de retoque.",
    date: "5 de Marzo, 2025",
    time: "13:00 - 17:00",
    duration: "4 horas",
    location: "Online",
    capacity: "35 participantes",
    price: "149€",
    image: "/placeholder.svg?height=400&width=800",
    status: "Pasado",
    slug: "edicion-profesional-lightroom",
    testimonials: [
      {
        name: "Alex Rivera",
        role: "Director Creativo",
        company: "Estudio Visual",
        quote:
          "El taller de Lightroom dio a nuestro equipo el conocimiento necesario para mejorar significativamente nuestro flujo de trabajo y calidad final.",
      },
    ],
  },
  {
    id: 4,
    title: "Masterclass de Fotografía de Producto",
    description:
      "Domina el arte de la fotografía de producto y crea imágenes que destaquen en catálogos y tiendas online. Este taller cubre iluminación, composición y técnicas de post-producción.",
    date: "20 de Febrero, 2025",
    time: "10:00 - 15:00",
    duration: "5 horas",
    location: "Centro de Diseño, Málaga",
    capacity: "20 participantes",
    price: "179€",
    image: "/placeholder.svg?height=400&width=800",
    status: "Pasado",
    slug: "masterclass-fotografia-producto",
    testimonials: [
      {
        name: "Elena Wong",
        role: "Diseñadora UI",
        company: "Agencia Creativa",
        quote:
          "Este taller cerró la brecha entre diseño e implementación para mí. Ahora tengo una comprensión mucho mejor de los principios de fotografía de producto.",
      },
    ],
  },
  {
    id: 5,
    title: "Iluminación Creativa en Fotografía",
    description:
      "Explora diferentes soluciones de iluminación en fotografía y aprende cuándo usar cada enfoque. Este taller cubre iluminación natural, flash, estudio y técnicas mixtas.",
    date: "15 de Enero, 2025",
    time: "9:00 - 13:00",
    duration: "4 horas",
    location: "Online",
    capacity: "30 participantes",
    price: "149€",
    image: "/placeholder.svg?height=400&width=800",
    status: "Pasado",
    slug: "iluminacion-creativa-fotografia",
    testimonials: [
      {
        name: "David Kim",
        role: "Fotógrafo Freelance",
        company: "Estudio Independiente",
        quote:
          "Las comparaciones entre diferentes técnicas de iluminación fueron increíblemente valiosas. Ahora tengo una estrategia clara para mis proyectos.",
      },
    ],
  },
]

export default function TalleresPage() {
  // Separar talleres próximos y pasados
  const talleresFuturos = talleres.filter((taller) => taller.status === "Próximo")
  const talleresPasados = talleres.filter((taller) => taller.status === "Pasado")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Talleres</h1>
          <p className="body-lg text-muted-foreground">
            Experiencias de aprendizaje práctico para ayudarte a dominar las técnicas de fotografía moderna.
          </p>
        </div>

        {/* Talleres Próximos */}
        <div className="mb-20">
          <h2 className="heading-lg mb-10 relative">
            Próximos Talleres
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-12">
            {talleresFuturos.map((taller) => (
              <Card key={taller.id} className="overflow-hidden border border-border bg-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={taller.image || "/placeholder.svg"}
                      alt={taller.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-2">
                      <Badge variant="default">Próximo</Badge>
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl">{taller.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{taller.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 py-4 space-y-3 flex-grow">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{taller.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {taller.time} ({taller.duration})
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{taller.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{taller.capacity}</span>
                      </div>
                      <div className="text-lg font-bold mt-2">{taller.price}</div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button asChild className="w-full">
                        <Link href={`/talleres/${taller.slug}`}>Inscribirse</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Talleres Pasados */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Talleres Anteriores
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {talleresPasados.map((taller) => (
              <Card key={taller.id} className="group overflow-hidden border border-border bg-card">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={taller.image || "/placeholder.svg"}
                    alt={taller.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 opacity-80"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">Pasado</Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{taller.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{taller.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{taller.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{taller.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/talleres/${taller.slug}`}>Ver Detalles</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <div className="mt-20">
          <h2 className="heading-lg mb-10 text-center">Opiniones de Participantes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {talleres.flatMap((taller) =>
              taller.testimonials.map((testimonio, index) => (
                <div key={`${taller.id}-${index}`} className="bg-muted/30 p-8 rounded-lg border border-border">
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
              )),
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-muted/30 p-12 rounded-lg border border-border">
          <h2 className="text-3xl font-bold mb-4">¿Quieres un Taller Personalizado?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            También ofrezco talleres a medida para equipos y organizaciones. Ponte en contacto para discutir tus
            necesidades y objetivos específicos.
          </p>
          <Button asChild size="lg">
            <Link href="/#contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
