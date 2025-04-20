import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hola, soy</p>
              <h1 className="heading-xl mb-4">Eric Pepiciello</h1>
              <h2 className="heading-md text-muted-foreground">Fotógrafo</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              Capturo momentos únicos a través de mi lente, especializándome en fotografía de moda y retratos con un
              enfoque artístico y personal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contacto">Contactar</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/proyectos">Ver Proyectos</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
              <Image
                src="/lol.jpg"
                alt="Eric Pepiciello"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#servicios-destacados" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="servicios-destacados" className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Servicios Destacados
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
          </h2>
          <Link href="/servicios" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            Ver Todos los Servicios
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fotografía de Moda",
              description: "Sesiones fotográficas para diseñadores, marcas y editoriales de moda.",
              image: "/moda1.jpg",
            },
            {
              title: "Retratos Profesionales",
              description: "Retratos personales y corporativos con un enfoque artístico y único.",
              image: "/gines1.jpg",
            },
            {
              title: "Fotografía Editorial",
              description: "Imágenes para revistas, publicaciones y campañas publicitarias.",
              image: "/assets/servicio-editorial.jpg",
            },
          ].map((service, index) => (
            <div key={index} className="group">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                href="/servicios"
                className="text-foreground font-medium inline-flex items-center group-hover:text-primary transition-colors"
              >
                Saber más
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Proyectos Destacados
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
          </h2>
          <Link href="/proyectos" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            Ver Todos los Proyectos
          </Link>
        </div>

        <div className="grid gap-24">
          {[
            {
              title: "Retratos Urbanos",
              description:
                "Una serie de retratos en entornos urbanos que exploran la relación entre las personas y la ciudad.",
              image: "/assets/proyecto-urbano.jpg",
            },
            {
              title: "Moda Editorial",
              description: "Colección de fotografías de moda editorial para diversas publicaciones y marcas.",
              image: "/assets/proyecto-moda.jpg",
            },
            {
              title: "Fotografía Artística",
              description: "Proyecto personal que explora la fotografía como medio de expresión artística.",
              image: "/assets/proyecto-arte.jpg",
            },
          ].map((project, index) => (
            <div key={index} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href="/proyectos">Ver Proyecto</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-spacing">
        <div className="bg-muted/30 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para capturar momentos inolvidables?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contacta conmigo para discutir tu proyecto y crear imágenes que cuenten tu historia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contacto">Contactar</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/biografia">Conocer más sobre mí</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
