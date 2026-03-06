import { Mail, Github, Linkedin, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import luisMendoza from "@/assets/developers/luis-mendoza.png";
import jaredMejias from "@/assets/developers/jared-mejias.png";
import ignacioPrieto from "@/assets/developers/ignacio-prieto.png";

const Desarrolladores = () => {
  const navigate = useNavigate();
  
  const developers = [
    {
      name: "Luis Antonio Mendoza Pérez",
      role: "Líder de Proyecto & Desarrollador Principal",
      email: "blueluis2007@gmail.com",
      github: "https://github.com/LuiSM2307",
      linkedin: "https://www.linkedin.com/in/luis-mendoza-47332b39a",
      photo: luisMendoza,
      bio: "Estudiante del PNF de Informática en la UPTAFBF. Profesional metódico con fortaleza en programación y capacidad para adaptarse rápidamente a nuevos lenguajes. Experiencia en mantenimiento integral de computadoras y diagnóstico de problemas. Combina habilidades técnicas con liderazgo efectivo para coordinar equipos.",
    },
    {
      name: "Jared Jesús Mejías Cordovez",
      role: "Especialista en Mantenimiento",
      email: "jaredcordovez64@gmail.com",
      github: "https://github.com/jaredcordovez64-ux",
      linkedin: "https://www.linkedin.com/in/jared-cordovez-958507392?trk=contact-info",
      photo: jaredMejias,
      bio: "Estudiante del PNF de Informática en la UPTAFBF. Especializado en mantenimiento de hardware y software, con habilidad proactiva en la resolución de problemas y optimización de equipos. Comprometido con la excelencia técnica y el trabajo en equipo.",
    },
    {
      name: "Ignacio José Prieto Espinoza",
      role: "Técnico de Mantenimiento",
      email: "ignacioprieto.simp@gmail.com",
      github: "https://github.com/ignacioprietosimp-tech",
      linkedin: "https://ve.linkedin.com/in/ignacio-prieto-14440439a",
      photo: ignacioPrieto,
      bio: "Estudiante del PNF de Informática en la UPTAFBF. Especialista en limpieza y mantenimiento integral de computadoras, con experiencia en optimización de sistemas, eliminación de software innecesario y configuración de rendimiento para garantizar funcionamiento estable.",
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
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                          <img 
                            src={dev.photo} 
                            alt={dev.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-1 text-foreground">
                          {dev.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-3">
                          {dev.role}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {dev.bio}
                        </p>
                        <div className="flex flex-col gap-2 w-full border-t border-border pt-4">
                          <a
                            href={`mailto:${dev.email}`}
                            className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            <span className="truncate">{dev.email}</span>
                          </a>
                          {dev.github && (
                            <a
                              href={dev.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                          )}
                          {dev.linkedin && (
                            <a
                              href={dev.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                              LinkedIn
                            </a>
                          )}
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
      <ScrollToTop />
    </div>
  );
};

export default Desarrolladores;
