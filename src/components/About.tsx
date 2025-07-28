import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Cloud, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle
} from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Desarrollador Full-Stack",
      period: "2020 - Presente",
      description: "Desarrollo de aplicaciones web modernas, automatizaciones y soluciones cloud.",
      technologies: ["React", "JavaScript", "Python", "Node.js"]
    },
    {
      title: "Consultor Cloud Azure",
      period: "2019 - 2022",
      description: "Migración y optimización de infraestructuras cloud para empresas medianas.",
      technologies: ["Microsoft Azure", "PowerShell", "DevOps", "ARM Templates"]
    },
    {
      title: "Especialista Ventas B2B Tech",
      period: "2018 - 2020",
      description: "Venta consultiva de soluciones tecnológicas y transformación digital.",
      technologies: ["CRM", "Sales Process", "Business Analysis", "Client Relations"]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "HTML/CSS", "Responsive Design"] },
    { category: "Backend", items: ["Python", "Node.js", "APIs REST", "Database Design"] },
    { category: "Cloud", items: ["Microsoft Azure", "Cloud Architecture", "DevOps", "CI/CD"] },
    { category: "Automation", items: ["Google Apps Script", "Python Scripts", "Workflow Design", "API Integration"] },
    { category: "Business", items: ["B2B Sales", "Technical Consulting", "Project Management", "Client Relations"] }
  ];

  const achievements = [
    "50+ proyectos web completados exitosamente",
    "15+ empresas migradas a cloud Azure",
    "30+ procesos automatizados con scripts personalizados",
    "100% de clientes satisfechos y con proyectos entregados a tiempo"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sobre
            </span>
            {" "}Mí
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La combinación perfecta entre experiencia técnica y visión comercial 
            para crear soluciones que realmente funcionan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  Mi Historia
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Soy un desarrollador con un perfil único que combina <strong className="text-foreground">experiencia técnica sólida</strong> 
                    con un <strong className="text-foreground">enfoque comercial estratégico</strong>.
                  </p>
                  <p>
                    Mi trayectoria comenzó en ventas B2B tecnológicas, donde aprendí a entender las necesidades reales 
                    de las empresas. Después me especialicé en consultoría cloud con Microsoft Azure, y finalmente 
                    me dediqué al desarrollo web full-stack.
                  </p>
                  <p>
                    Esta combinación me permite crear <strong className="text-foreground">soluciones técnicas que realmente resuelven 
                    problemas de negocio</strong>, no solo código bonito. Entiendo tanto el lado técnico como el comercial 
                    de cada proyecto.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Award className="h-6 w-6 text-success" />
                  Logros Destacados
                </h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <Card className="p-6 bg-background/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                  Experiencia Profesional
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                      {index !== experiences.length - 1 && (
                        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-border"></div>
                      )}
                      <div className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{exp.title}</h4>
                            <Badge variant="outline" className="text-xs w-fit">
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <Card className="p-8 bg-background/80 backdrop-blur-sm border-border/50">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Code2 className="h-6 w-6 text-primary" />
              Stack Tecnológico & Habilidades
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category} className="text-center">
                  <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="block text-xs py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;