import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Scissors, Users, TrendingUp, Calendar, BookOpen, Network, Star } from "lucide-react"
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              La comunidad exclusiva para barberos profesionales
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Conecta con profesionales de toda España. Comparte conocimientos, descubre tendencias y haz crecer tu
              negocio en una red diseñada exclusivamente para barberos.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link href="/auth">
                <Button size="lg" className="min-w-[200px]  border hover:text-primary-foreground">
                  Unete ahora
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="min-w-[200px]  hover:border-accent">
                Descubre más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-[#FF3333]">1,500+</div>
              <div className=" text-[#7FC0FF]">Barberos activos</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold  text-[#FF3333]">50+</div>
              <div className=" text-[#7FC0FF]">Ciudades en España</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-[#FF3333]">5,000+</div>
              <div className=" text-[#7FC0FF]">Conexiones realizadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">
              Todo lo que necesitas para crecer profesionalmente
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Una plataforma completa diseñada específicamente para las necesidades de los barberos profesionales
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Scissors className="h-6 w-6 text-[#FF3333]" />
              </div>
              <h3 className="mb-2 text-xl text-primary font-semibold">Herramientas y Productos</h3>
              <p className=" text-[#7FC0FF]">
                Descubre y comparte información sobre las mejores herramientas y productos del mercado. Reseñas reales
                de profesionales.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <BookOpen className="h-6 w-6 text-[#FF3333]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Formación Profesional</h3>
              <p className="text-[#7FC0FF]">
                Accede a información sobre cursos, talleres y formaciones especializadas para mejorar tus técnicas y
                habilidades.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-[#FF3333]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Tendencias</h3>
              <p className="text-[#7FC0FF]">
                Mantente actualizado con las últimas tendencias en cortes, estilos y técnicas de barbería a nivel
                nacional e internacional.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Calendar className="h-6 w-6 text-[#FF3333]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Eventos y Competiciones</h3>
              <p className="text-[#7FC0FF] ">
                Entérate de eventos, competiciones y encuentros profesionales en toda España. No te pierdas ninguna
                oportunidad.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Network className="h-6 w-6 text-[#FF3333]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Networking Profesional</h3>
              <p className="text-[#7FC0FF]">
                Establece contactos con otros profesionales, encuentra oportunidades de negocio y crea alianzas
                estratégicas.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Star className="h-6 w-6 text-[#FF3333]" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Experiencias Reales</h3>
              <p className="text-[#7FC0FF]">
                Lee y comparte experiencias reales de otros barberos. Aprende de casos de éxito y evita errores comunes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Cómo funciona</h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              En tres simples pasos estarás conectado con la mejor comunidad de barberos de España
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3333] text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Regístrate</h3>
              <p className="text-[#7FC0FF]">Crea tu perfil profesional y únete a la comunidad exclusiva</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3333] text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Conecta</h3>
              <p className="text-[#7FC0FF]">Encuentra y conecta con barberos de tu zona o de toda España</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3333] text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary  ">Crece</h3>
              <p className="text-[#7FC0FF] ">Comparte conocimientos, aprende y haz crecer tu negocio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center md:p-12">
            <Users className="mx-auto mb-6 h-16 w-16 text-[#FF3333]" />
            <h2 className="mb-4 text-balance text-primary text-3xl font-bold md:text-4xl">Únete a la comunidad hoy</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Miles de barberos ya están conectados y haciendo crecer sus negocios. ¿A qué esperas?
            </p>
            <Link href="/auth">
              <Button size="lg" className="min-w-[250px] hover:text-primary-foreground">
                Comenzar ahora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 ">
              <Scissors className="h-6 w-6 text-[#FF3333]" />
              <span className="text-lg font-semibold text-primary">ST8</span>
            </div>
            <p className="text-sm text-[#7FC0FF]">
              © 2025 ST8. La red profesional de barberos en España.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
