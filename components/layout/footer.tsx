import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="font-playfair text-3xl font-bold tracking-tight">
              Eric<span className="ml-2 text-muted-foreground">Pepiciello</span><span className="ml-2 text-muted-foreground">Quesada</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Fotógrafo malagueño especializado en fotografía de moda, retratos y fotografía artística.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/biografia" className="text-muted-foreground hover:text-foreground transition-colors">
                  Biografía
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Conecta</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="mailto:ericphotography1995@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
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
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Eric Pepiciello Quesada. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
