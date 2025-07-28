import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Dashboard Analytics SaaS",
      description: "Plataforma completa de análisis de datos con visualizaciones interactivas, autenticación y panel administrativo.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Charts.js", "API REST"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Real-time data", "Custom dashboards", "User management"]
    },
    {
      title: "E-commerce Automatizado",
      description: "Tienda online con integración de APIs de pago, gestión automática de inventario y notificaciones.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "Node.js", "Stripe API", "Google Sheets"],
      category: "E-commerce",
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Payment integration", "Inventory automation", "Order management"]
    },
    {
      title: "Sistema CRM Custom",
      description: "CRM desarrollado desde cero para gestión de leads, seguimiento de ventas y automatización de workflows.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "Azure Functions", "Database"],
      category: "Business App",
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Lead tracking", "Sales pipeline", "Workflow automation"]
    },
    {
      title: "Landing Pages Conversión",
      description: "Serie de landing pages optimizadas para conversión con A/B testing y analytics integrados.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML", "CSS", "JavaScript", "Google Analytics"],
      category: "Landing Page",
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["High conversion", "A/B testing", "Analytics tracking"]
    },
    {
      title: "Automatización Google Workspace",
      description: "Scripts personalizados para automatizar procesos en Google Sheets, Gmail y Drive.",
      image: "/api/placeholder/600/400",
      technologies: ["Google Apps Script", "JavaScript", "Google APIs"],
      category: "Automation",
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Process automation", "Google integration", "Time saving"]
    },
    {
      title: "Migración Cloud Azure",
      description: "Proyecto de migración completa de infraestructura on-premise a Microsoft Azure.",
      image: "/api/placeholder/600/400",
      technologies: ["Azure", "PowerShell", "ARM Templates", "DevOps"],
      category: "Cloud",
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Infrastructure as Code", "Cost optimization", "High availability"]
    }
  ];

  const categories = ["Todos", "Web App", "E-commerce", "Business App", "Landing Page", "Automation", "Cloud"];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
            {" "}de Proyectos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de proyectos reales que demuestran mi capacidad para crear 
            soluciones técnicas que resuelven problemas de negocio
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-2 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-subtle">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">{project.category}</div>
                </div>
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver proyecto
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 shadow-professional-md">
          <h3 className="text-2xl font-bold mb-4">
            ¿Quieres ver más proyectos?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estos son solo algunos ejemplos. Tengo más casos de estudio y proyectos 
            que puedo compartir contigo en una consulta personalizada.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            className="group"
          >
            Ver portfolio completo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;