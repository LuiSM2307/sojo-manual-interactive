import { Target, Flag, Map, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Introduction = () => {
  const sections = [
    {
      icon: Flag,
      title: "Justificación",
      content: "Este manual surge de la necesidad de estandarizar los procesos de mantenimiento de hardware y software en la institución, garantizando la disponibilidad y confiabilidad de los equipos informáticos utilizados en el proceso educativo.",
    },
    {
      icon: Target,
      title: "Objetivos",
      content: "Proporcionar una guía técnica completa y accesible para el personal encargado del mantenimiento de los sistemas informáticos, promoviendo las mejores prácticas y procedimientos estandarizados.",
    },
    {
      icon: Map,
      title: "Alcances",
      content: "Este manual abarca todos los aspectos relacionados con el mantenimiento preventivo y correctivo de hardware y software, incluyendo diagnóstico de fallas, procedimientos de limpieza, actualización de sistemas y resolución de problemas comunes.",
    },
  ];

  return (
    <section id="introduccion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Introducción
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bienvenido al Manual Técnico Interactivo de la Unidad Educativa Nacional
              "Vicente Emilio Sojo", una herramienta diseñada para facilitar el
              mantenimiento de los sistemas informáticos de nuestra institución.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card
                key={index}
                className="card-hover border-border shadow-lg animate-slide-up bg-gradient-to-br from-card to-card/80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                        <section.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {section.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary-soft rounded-xl border border-primary/20">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-primary">
                  Uso del Manual
                </h4>
                <p className="text-muted-foreground">
                  Este manual está diseñado para ser interactivo y fácil de navegar.
                  Utiliza el menú superior para acceder rápidamente a cualquier sección
                  y aprovecha los componentes desplegables para una mejor experiencia de lectura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
