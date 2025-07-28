import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Send,
  MessageCircle,
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaré en las próximas 24 horas.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        message: ""
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hola@devtech.com",
      description: "Respuesta en 24h"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 600 000 000",
      description: "Lun-Vie 9:00-18:00"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "España",
      description: "Trabajo remoto"
    },
    {
      icon: Calendar,
      title: "Consulta",
      value: "Agendar llamada",
      description: "Gratuita 30 min"
    }
  ];

  const serviceTypes = [
    "Desarrollo web completo",
    "Landing page",
    "Aplicación web",
    "Automatización de procesos",
    "Migración cloud",
    "Consultoría técnica",
    "Mantenimiento web",
    "Otro"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a 
            digitalizarlo, automatizarlo o llevarlo al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-gradient-subtle border-border/50">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-sm text-foreground font-medium">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* CTA Cards */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-0 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="font-bold text-lg mb-2">Consulta Gratuita</h3>
                <p className="text-sm opacity-90 mb-4">
                  30 minutos para analizar tu proyecto sin compromiso
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-0 text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="font-bold text-lg mb-2">Respuesta Rápida</h3>
                <p className="text-sm opacity-90">
                  Te contacto en menos de 24 horas con una propuesta inicial
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-background/80 backdrop-blur-sm border-border/50 shadow-professional-lg">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl">Cuéntame sobre tu proyecto</CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y te enviaré una propuesta personalizada
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project">Tipo de proyecto</Label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecciona una opción</option>
                        {serviceTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe tu proyecto: qué necesitas, objetivos, plazos, presupuesto aproximado..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;