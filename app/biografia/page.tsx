import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BiografiaPage() {
  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Biografía</h1>
          <p className="body-lg text-muted-foreground">
            Mi trayectoria como fotógrafo y mi pasión por capturar momentos únicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 md:min-h-[650px]">
          <div className="flex items-center justify-center">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden mx-auto md:h-[650px] md:w-[650px]">
              <Image
                src="/lol2.jpg"
                alt="Eric Pepiciello Quesada"
                width={1200}
                height={1200}
                className="w-full h-full object-cover object-left"
                priority
              />
            </div>
          </div>
          <div className="flex items-center h-full">
            <div>
              <h2 className="text-3xl font-bold mb-6">Eric Pepiciello Quesada</h2>
              <p className="text-lg text-muted-foreground mb-4">Fotógrafo | Málaga, España</p>
              <div className="space-y-4">
                <p>
                  Nacido en Foggia (Italia) y criado en Málaga (España), mi viaje en la fotografía comenzó a los 16 años
                  con la cámara de mi móvil, evolucionando hasta convertirme en un profesional dedicado a capturar la
                  belleza en todas sus formas.
                </p>
                <p>
                  Me especializo en fotografía de moda, retratos y fotografía artística, creando imágenes que transmiten
                  emociones y cuentan historias.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Mi nombre es Eric Pepiciello Quesada, un joven fotógrafo de 28 años nacido en Foggia (Italia) y crecido en
            Málaga (España), ciudad en la que actualmente resido y donde comencé a mis 16 años a hacer fotografía.
          </p>

          <p>
            De forma autodidacta comencé a dar mis primeros pasos con la cámara del móvil, que en aquel momento era a lo
            máximo que podía aspirar, poquito a poco y torpemente empecé a sentir el gusto por hacer fotos, solía hacer
            fotos de paisajes o fotografía callejera que después me entretenía en mis ratos libres a retocar con
            programas del mismo móvil.
          </p>

          <p>
            Con 18 años mis padres me compraron mi primera cámara, una Nikon D3100, era de las últimas que quedaba en el
            almacén y rebajada de precio, innegablemente esa fue la mejor de mis suertes, ya que supuso un gran esfuerzo
            para mis padres ofrecerme esa oportunidad. Desde que tuve esa cámara entre mis manos explotaron las ideas en
            mi cabeza y probé absolutamente todo lo que se me ocurría. En aquel preciso momento en el que me encontraba
            trasteando con una cámara que desconocía totalmente supe que quería dedicarme a la fotografía
            profesionalmente y que independientemente del género, sería feliz por el simple echo de trabajar con una
            cámara entre mis manos. Ese mismo año, en un viaje de visita a mi familia en Valencia, una noche cualquiera
            buscando cursos y escuelas por internet, encontré la escuela de la que me obsesioné desde que el primer
            momento que la vi, Apertura Centro De Fotografía y Artes Visuales.
          </p>

          <p>
            Al poco tiempo crecieron las dificultades económicas en casa de mis padres, y a mis 19 años decidí dedicarme
            a trabajar en almacenes para sostener la economía familiar, algo que resulto ser insuficiente en ciertos
            momentos, hasta llegar al punto de verme en la obligación de vender mi cámara por hacer algo más de dinero y
            ver como el trabajo y las responsabilidades impedían mis metas.
          </p>

          <p>
            No fue hasta mis 22 años que volví a creer en la posibilidad de poder dedicarme a la fotografía
            profesionalmente, en gran medida gracias al amor y apoyo incondicional de la chica que por aquellos años en
            los que no supe que camino seguir fue mi pareja y siempre vio en mí una pasión en la que ya no creía. Con 23
            años y con innumerables dificultades por compaginar trabajo y estudios conseguí matricularme en Apertura y
            comprar la cámara con la que actualmente trabajo, una Canon EOS 6D Mark ll.
          </p>

          <p>
            En mi paso por Apertura, realicé el master de fotografía profesional en el que conocí todas las disciplinas
            que abarcan este maravilloso mundo, dándome así la posibilidad de tener nociones en todas ellas y de elegir
            en cual especializarme. Aún siendo difícil para mí a día de hoy decantarme por uno o dos géneros en los que
            focalizar mi atención, definitivamente para mi la fotografía de moda suscita en mi un especial interés
            artístico.
          </p>

          <blockquote>
            <p>La constancia es un puente entre el deseo y la realización.</p>
            <cite>- Luis Señor</cite>
          </blockquote>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
