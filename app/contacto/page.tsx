import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DynamicMap } from "@/components/map/dynamic-map"

export default function ContactoPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Contacto</h1>
          <p className="body-lg text-muted-foreground">
            ¿Tienes un proyecto en mente? Ponte en contacto conmigo y hablemos sobre cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1 text-primary" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">ericphotography1995@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1 text-primary" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">656 314 757</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-1 text-primary" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Dirección</h3>
                  <p className="text-muted-foreground">C/Ramal de capitulaciones, Nº2, P41</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Horario</h2>
            <div className="space-y-2 mb-10">
              <p>
                <span className="font-medium">Lunes a Viernes:</span>{" "}
                <span className="text-muted-foreground">9:00 - 18:00</span>
              </p>
              <p>
                <span className="font-medium">Sábados:</span>{" "}
                <span className="text-muted-foreground">10:00 - 14:00</span>
              </p>
              <p>
                <span className="font-medium">Domingos:</span> <span className="text-muted-foreground">Cerrado</span>
              </p>
            </div>

            <p className="text-muted-foreground">
              También puedes seguirme en redes sociales para ver mi trabajo más reciente y contactarme por mensaje
              directo.
            </p>

            <div className="mt-10">
              <h3 className="text-lg font-medium mb-3">Redes Sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg mb-2 font-medium">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                  placeholder="Asunto de tu mensaje"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>
              <div>
                <Button type="submit" size="lg" className="text-lg px-8 w-full md:w-auto">
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Mapa de Málaga - Sección completa */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ubicación</h2>
          <DynamicMap />
        </div>
      </section>
    </div>
  )
}
