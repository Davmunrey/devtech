import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Automatización con Google Apps Script: De 8 horas a 8 minutos",
      excerpt: "Cómo automaticé un proceso manual de reportes que tomaba toda la mañana y ahora se ejecuta en minutos con un script personalizado.",
      category: "Automatización",
      readTime: "5 min",
      date: "15 Nov 2024",
      slug: "automatizacion-google-apps-script",
      featured: true
    },
    {
      title: "Migración a Azure: Reduciendo costos en un 40% sin perder rendimiento",
      excerpt: "Caso real de migración de infraestructura on-premise a Azure Cloud, optimizando recursos y reduciendo gastos significativamente.",
      category: "Cloud",
      readTime: "7 min",
      date: "10 Nov 2024",
      slug: "migracion-azure-reducir-costos"
    },
    {
      title: "Landing Pages que Convierten: 5 elementos técnicos clave",
      excerpt: "Los aspectos técnicos que marcan la diferencia entre una landing page que convierte y una que no, basado en proyectos reales.",
      category: "Desarrollo Web",
      readTime: "4 min",
      date: "5 Nov 2024",
      slug: "landing-pages-que-convierten"
    },
    {
      title: "APIs REST con Python: Guía práctica para automatizar cualquier servicio",
      excerpt: "Tutorial paso a paso para crear integraciones robustas entre diferentes servicios usando Python y APIs REST.",
      category: "Python",
      readTime: "8 min",
      date: "28 Oct 2024",
      slug: "apis-rest-python-automatizacion"
    },
    {
      title: "React + TypeScript: Por qué es la combinación perfecta para proyectos empresariales",
      excerpt: "Ventajas técnicas y comerciales de usar React con TypeScript en desarrollos para empresas, casos de uso y mejores prácticas.",
      category: "Desarrollo Web",
      readTime: "6 min",
      date: "20 Oct 2024",
      slug: "react-typescript-proyectos-empresariales"
    },
    {
      title: "ROI de la Automatización: Cómo calcular el valor real de un script",
      excerpt: "Metodología para evaluar el retorno de inversión de proyectos de automatización y justificar desarrollos personalizados.",
      category: "Business",
      readTime: "5 min",
      date: "15 Oct 2024",
      slug: "roi-automatizacion-calcular-valor"
    }
  ];

  const categories = ["Todos", "Automatización", "Cloud", "Desarrollo Web", "Python", "Business"];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blog
            </span>
            {" "}Técnico
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos de uso reales, tutoriales técnicos y análisis de proyectos 
            para ayudarte a optimizar y automatizar tu negocio
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Artículo Destacado</h3>
            <Card className="overflow-hidden hover:shadow-professional-lg transition-all duration-300 bg-gradient-primary text-primary-foreground">
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4 opacity-90">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {blogPosts[0].category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <Button variant="secondary" size="lg" className="group">
                  Leer artículo completo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={post.slug}
              className="group overflow-hidden hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-2 bg-background/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="text-center bg-background/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional-md">
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres recibir contenido técnico exclusivo?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Suscríbete y recibe casos de estudio, tutoriales avanzados y análisis 
            de proyectos reales directamente en tu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              Suscribirse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;