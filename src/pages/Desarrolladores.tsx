import { User, Mail, Github, Linkedin, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Desarrolladores = () => {
  const navigate = useNavigate();
  
  const developers = [
    {
      name: "Desarrollador 1",
      role: "Full Stack Developer",
      email: "dev1@example.com",
      github: "github.com/dev1",
      linkedin: "linkedin.com/in/dev1",
      bio: "Especialista en desarrollo de aplicaciones web educativas y manuales técnicos interactivos.",
    },
    {
      name: "Desarrollador 2",
      role: "Frontend Developer",
      email: "dev2@example.com",
      github: "github.com/dev2",
      linkedin: "linkedin.com/in/dev2",
      bio: "Experto en diseño de interfaces modernas y experiencia de usuario para plataformas educativas.",
    },
    {
      name: "Desarrollador 3",
      role: "Technical Writer",
      email: "dev3@example.com",
      github: "github.com/dev3",
      linkedin: "linkedin.com/in/dev3",
      bio: "Especialista en documentación técnica y creación de contenido educativo de calidad.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <div className="mb-8">
                <Button
                  variant="ghost"
                  onClick={() => navigate("/")}
                  className="text-foreground hover:text-primary"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al Manual
                </Button>
              </div>

              {/* Header */}
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Equipo de Desarrollo
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                  Desarrolladores del Manual
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conoce al equipo de profesionales que creó este manual técnico interactivo
                  para la U.E.N. Vicente Emilio Sojo
                </p>
              </div>

              {/* Developers Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {developers.map((dev, index) => (
                  <Card
                    key={index}
                    className="card-hover border-border group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                          <User className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-foreground">
                          {dev.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-3">
                          {dev.role}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {dev.bio}
                        </p>
                        <div className="flex flex-col gap-2 w-full">
                          <a
                            href={`mailto:${dev.email}`}
                            className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            {dev.email}
                          </a>
                          <a
                            href={`https://${dev.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                          <a
                            href={`https://${dev.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Project Info */}
              <Card className="border-primary/20 bg-primary-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Sobre el Proyecto
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Institución</h4>
                      <p className="text-sm text-muted-foreground">
                        Unidad Educativa Nacional "Vicente Emilio Sojo"
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Año</h4>
                      <p className="text-sm text-muted-foreground">2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Objetivo</h4>
                      <p className="text-sm text-muted-foreground">
                        Crear un manual técnico interactivo para el mantenimiento de equipos informáticos
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Tecnologías</h4>
                      <p className="text-sm text-muted-foreground">
                        React, TypeScript, Tailwind CSS, Shadcn UI
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Desarrolladores;
