import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Cog, 
  Code, 
  Cloud, 
  Smartphone, 
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web a Medida",
      description: "Landing pages, websites corporativos y aplicaciones web responsive con tecnologías modernas.",
      features: ["React & JavaScript", "Responsive Design", "SEO Optimizado", "Performance"],
      color: "text-primary"
    },
    {
      icon: Cog,
      title: "Automatización de Procesos",
      description: "Scripts y workflows que optimizan operaciones repetitivas y mejoran la productividad.",
      features: ["Google Apps Script", "Python Scripts", "APIs Integration", "Workflows"],
      color: "text-secondary"
    },
    {
      icon: Cloud,
      title: "Consultoría Cloud",
      description: "Migración y optimización en Microsoft Azure, configuración de infraestructura cloud.",
      features: ["Azure Setup", "Cloud Migration", "Cost Optimization", "Security"],
      color: "text-success"
    },
    {
      icon: Database,
      title: "Dashboards & Análisis",
      description: "Visualización de datos interactiva y dashboards personalizados para toma de decisiones.",
      features: ["Data Visualization", "Real-time Updates", "Custom Charts", "Business Intelligence"],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Web Progresivas",
      description: "PWAs que funcionan como apps nativas con capacidades offline y notificaciones.",
      features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"],
      color: "text-secondary"
    },
    {
      icon: Code,
      title: "Soporte Técnico",
      description: "Mantenimiento, actualizaciones y soporte continuo para tus soluciones digitales.",
      features: ["24/7 Support", "Bug Fixes", "Updates", "Performance Monitoring"],
      color: "text-success"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Servicios
            </span>
            {" "}Profesionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones técnicas completas que combinan desarrollo, automatización y consultoría 
            para impulsar el crecimiento de tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-professional-lg transition-all duration-300 hover:-translate-y-2 border-border/50 bg-background/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional-md">
          <h3 className="text-2xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Charlemos sobre cómo puedo ayudarte a digitalizar, automatizar u optimizar tu negocio 
            con soluciones técnicas a medida.
          </p>
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToContact}
            className="group"
          >
            Solicitar consulta gratuita
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;