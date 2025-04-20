import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Actualizar los datos de servicios con las categorías proporcionadas y el contenido detallado
const servicios = [
  {
    id: 1,
    title: "Fotografía inmobiliaria",
    description:
      "El sector inmobiliario esta en constante expansión y por lo tanto la competencia entre las agencias es cada vez mayor, marcar la diferencia con una fotografía limpia y cuidada es esencial para generar un impacto visual en el cliente y así aumentar las posibilidades de visitar el inmueble.",
    image: "/assets/servicio-inmobiliaria.jpg",
    content: [
      {
        subtitle: "¿Qué importancia tiene este tipo de fotografía?",
        text: "En este sector la imagen es más importante que nunca, ya que es la primera toma de contacto del cliente con la vivienda, si la fotografía es descuidada, la iluminación no es la adecuada y el ángulo no es correcto, el resultado será una imagen que no transmite nada y lo más probable es que la vivienda sea descartada. Mi labor consiste en cuidar al máximo los detalles, tanto en la toma fotográfica in situ como en la post producción final, Iluminar correctamente las estancias para conseguir mostrar con definición tanto los interiores como los exteriores, eliminar desperfectos para embellecer la imagen, tomar correctamente la foto para no perder la dimensión real de la estancia. Lo ideal es que el cliente consiga imaginar como sería vivir en la casa que está viendo en las fotos.",
      },
      {
        subtitle: "¿Qué beneficios aporta la fotografía profesional en el sector inmobiliario?",
        text: "Acelera el proceso de venta o de alquiler, las fotos con mala calidad tomadas con móvil generan menos clics que las fotos profesionales. Genera una sensación de seriedad y profesionalidad. Resaltar y potenciar las características clave de la propiedad tanto en interiores como exteriores. Diferénciate de la competencia, no todas las agencias apuestan por un servicio de fotografía profesional.",
      },
    ],
    features: [
      "Fotografía de interiores y exteriores",
      "Iluminación profesional para resaltar espacios",
      "Composiciones que maximizan el atractivo de la propiedad",
      "Edición especializada para inmobiliaria",
      "Entrega rápida para publicaciones urgentes",
    ],
    price: "Desde 200€",
  },
  {
    id: 2,
    title: "Fotografía gastronómica",
    description:
      "Una de las claves para tener un restaurante de éxito a día de hoy es recurrir a los sentidos de los clientes, especialmente al visual. El sabor es la última esencia, antes debemos captar la atención de los clientes para que visiten el local.",
    image: "/assets/servicio-gastronomica.jpg",
    content: [
      {
        subtitle: "Servicios",
        text: "La mayoría de la gente acude a la página web o RRSS del restaurante antes de tomar la decisión final de visitar uno u otro.",
      },
      {
        subtitle: "Coctelería",
        text: "Es de vital importancia encontrar la correcta composición en la fotografía de coctelería, tanto en colores, formas y texturas para así realzar el trabajo del coctelero y lograr una imagen fresca y elegante. Este estilo de fotografía es cada vez más común encontrarla en las RRSS de los restaurantes, ya que es visualmente muy atractiva.",
      },
      {
        subtitle: "Comida",
        text: '"Todo entra primero por los ojos", y considero en que todos estamos de acuerdo en que cuando un plato es visualmente apetecible dan ganas de comérselo, la fotografía gastronómica en este aspecto desempeña un papel vital a la hora de vender un plato ya sea en RRSS, en la web o en la carta del restaurante.',
      },
      {
        subtitle: "Dispongo de un equipo creativo",
        text: "En mi carrera profesional he tenido la fortuna de colaborar en proyectos inspiradores y conocer a muchas personas creativas que han influido en mis trabajos; a día de hoy formamos un equipo creativo. Mi filosofía es que trabajando juntos creamos un todo, que es mayor que la suma de sus partes. Nuestro interés por los detalles nos lleva a embarcarnos en proyectos complejos siempre con un enfoque holístico hacia las necesidades del cliente. Trabajamos con una preparación previa al día de la sesión, ya sea en búsqueda de inspiración creativa teniendo en cuenta la estética del local, como en la preparación de todo el atrezzo necesario para la realización del trabajo.",
      },
    ],
    features: [
      "Fotografía de platos y presentaciones",
      "Iluminación que resalta texturas y colores",
      "Composición artística para menús y cartas",
      "Fotografía de ambiente del restaurante",
      "Edición profesional para publicidad gastronómica",
    ],
    price: "Desde 250€",
  },
  {
    id: 3,
    title: "Fotografía de moda",
    description:
      "La industria de la moda es tanto una herramienta comercial como una forma de expresión social, y la fotografía evoluciona junto a ella tratando siempre de realzar y embellecer el trabajo de cada artista.",
    image: "/assets/servicio-moda.jpg",
    content: [
      {
        subtitle: "Servicios",
        text: "La finalidad es relatar una historia que enganche, conseguir crear esas sensación de unicidad, cada marca o diseñador busca contar su propia historia y diferenciarse de las demás, e indudablemente la fotografía desempeña una labor crucial en este aspecto como herramienta publicitaria con una gran carga estética y artística.",
      },
      {
        subtitle: "Estudio",
        text: "La dos principales ventajas que obtenemos en un trabajo realizado en estudio son, poder manejar la luz a nuestro antojo, y el control total de la situación para conseguir centrar la atención del espectador en el sujeto; todos los detalles se cuidan al máximo, desde el color del fondo, la iluminación o el atrezzo que pueda hacer falta para enriquecer visualmente la foto.",
      },
      {
        subtitle: "Exteriores",
        text: "A diferencia de la fotografía en estudio, tanto el sujeto a fotografiar como la ubicación elegida y la hora en la que realice el trabajo son igual de importantes, la ubicación ha de ir acorde a la temática que se está buscando; la finalidad es crear una coherencia visual entre el sujeto, la localización y los elementos que queramos sumar. La hora del día elegida determinará la posición del sol, por lo tanto, la intensidad de la luz y la dureza de las sombras.",
      },
      {
        subtitle: "Cuéntame tu proyecto y yo me ocupo de todo",
        text: "Disponer de todo un equipo creativo a la hora de realizar un proyecto resulta a veces complicado, en gran medida por el desconocimiento de profesionales en la zona o por la falta de tiempo a disposición para realizar una búsqueda exhaustiva de cada uno de ellos, es por experiencias laborales que he llegado a la conclusión que formar un equipo creativo con el que poder contar es siempre un acierto. A lo largo de mi carrera profesional he tenido el placer de trabajar junto a muchos profesionales, maquilladores, peluqueros, estilistas, modelos, y definitivamente no podría a día de hoy realizar cada proyecto que hago sin su apoyo, ya que hemos desarrollado una relación laboral en la que fluyen las ideas y la creatividad.",
      },
      {
        subtitle: "El retoque digital",
        text: "El proceso de postproducción es el ultimo de todos y quizás de los mas importantes, ya que una mala edición puede comprometer todo el trabajo realizado en producción. Una correcta corrección de color, retoque de piel respetando la textura y naturalidad, eliminar desperfectos en la ropa o elementos que estorben la composición y que no hayan sido posibles quitar en producción, en definitiva, pulir la foto hasta lograr la perfección.",
      },
    ],
    features: [
      "Fotografía para catálogos y lookbooks",
      "Sesiones editoriales para revistas",
      "Campañas publicitarias",
      "E-commerce y fotografía de producto",
      "Dirección creativa completa",
    ],
    price: "Desde 500€",
  },
  {
    id: 4,
    title: "Fotografía en eventos",
    description:
      "La fotografía en eventos y congresos es sin lugar a duda una de las mejores herramientas de comunicación para las empresas, instituciones u organismos que las organicen.",
    image: "/assets/servicio-eventos.jpg",
    content: [
      {
        subtitle: "¿Cómo trabajo?",
        text: "La organización es un factor clave para que no se escape ningún detalle, conocer el programa del evento para saber en todo momento donde y cuando debo desplazarme en determinados momentos, de que manera se distribuirán los espacios, cuáles son los lugares en los que tengo permitido moverme, planificar cuáles son los encuadres más importantes, cuantos invitados asistirán, y si fuera posible, visitar con antelación el lugar ayudaría a enriquecer toda la información aportada previamente. Todo este proceso garantiza un desarrollo fluido del trabajo y la prevención de cualquier posible inconveniente que no pueda resolverse en el transcurso del evento.",
      },
      {
        subtitle: "¿Qué beneficios obtendrás?",
        text: "En diversos aspectos la fotografía en eventos logra resultados realmente positivos en cuanto a la promoción empresarial de un negocio, el lanzamiento de un producto o la promoción de marcas colaboradoras. Estas y muchas otras situaciones son una valiosa oportunidad para apostar por la fotografía como un medio de difusión. Se genera un efecto boca a boca. Fortalece la confianza del consumidor. Genera credibilidad. Es una gran oportunidad para conseguir publicidad.",
      },
    ],
    features: [
      "Lanzamientos de productos",
      "Eventos corporativos",
      "Inauguraciones y exposiciones",
      "Conferencias y seminarios",
      "Entrega de material editado en 48h",
    ],
    price: "Desde 350€",
  },
  {
    id: 5,
    title: "Fotografía corporativa",
    description:
      "Mostrar un producto o un servicio, así como las instalaciones de la empresa o el personal que conforma el equipo, son actividades esenciales para transmitir o crear una identidad de marca empresarial.",
    image: "/assets/servicio-corporativa.jpg",
    content: [
      {
        subtitle: "¿En que consiste mi trabajo?",
        text: 'Mi meta a la hora de realizar un reportaje corporativo es la de mostrar la cara humana detrás de una empresa, cuáles son sus labores diarias, sus instalaciones y los productos o servicios que ofertan de la forma más clara posible. "Una imagen vale más que mil palabras", cada vez más nos comunicamos a través de las imágenes, y es de vital importancia para las empresas mantener una imagen actualizada y cuidada de cara a sus clientes, y para esto existen diferentes estilos de fotografía corporativa como, "lifestyle business", retrato corporativo, fotografía Industrial de procesos y producción, fotografía de staff o eventos corporativos.',
      },
      {
        subtitle: "Beneficios de un reportaje corporativo",
        text: "En diversos aspectos la fotografía corporativa logra resultados realmente positivos en cuanto a la promoción empresarial de un negocio. Una mejora visual como empresa, identidad o marca. Transmitir confianza y cercanía sobre el funcionamiento y los valores de la empresa. Diferenciarse de la competencia. Obtener documentación visual sobre los diferentes procesos de producción que realiza la empresa.",
      },
    ],
    features: [
      "Retratos corporativos y de equipo",
      "Fotografía de instalaciones y oficinas",
      "Imágenes para comunicación interna y externa",
      "Fotografía para redes sociales corporativas",
      "Contenido visual para presentaciones y reportes",
    ],
    price: "Desde 300€",
  },
]

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Servicios</h1>
          <p className="body-lg text-muted-foreground">
            Ofrezco una amplia gama de servicios fotográficos profesionales adaptados a tus necesidades específicas.
          </p>
        </div>

        <div className="grid gap-24 md:gap-32">
          {servicios.map((servicio, index) => (
            <div key={servicio.id} className="group">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h2 className="text-4xl font-bold mb-6 group-hover:translate-x-2 transition-transform">
                    {servicio.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">{servicio.description}</p>
                </div>
                <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={servicio.image || "/placeholder.svg"}
                      alt={servicio.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Contenido detallado */}
              <div className="mt-12 prose prose-lg max-w-none">
                {servicio.content.map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">{section.subtitle}</h3>
                    <p className="text-muted-foreground">{section.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-muted/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Características del servicio</h3>
                <ul className="space-y-3 mb-8">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
                  <p className="text-2xl font-bold">{servicio.price}</p>
                  <Button asChild className="px-8">
                    <Link href="/contacto">Solicitar Presupuesto</Link>
                  </Button>
                </div>
              </div>

              {index < servicios.length - 1 && <hr className="my-16 border-t border-muted" />}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-muted/30 rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas un servicio personalizado?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Si no encuentras exactamente lo que buscas, podemos crear un servicio a medida para tu proyecto específico.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
