import { CheckCircle, Lightbulb, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Conclusion = () => {
  const recommendations = [
    "Realizar mantenimiento preventivo de forma periódica (cada 3-6 meses)",
    "Mantener un registro de todas las actividades de mantenimiento realizadas",
    "Capacitar regularmente al personal técnico en nuevas tecnologías",
    "Utilizar herramientas de diagnóstico y monitoreo constantemente",
    "Mantener copias de seguridad actualizadas de datos críticos",
    "Documentar todos los problemas y soluciones para futuras referencias",
    "Mantener un inventario actualizado del hardware y software institucional",
    "Establecer protocolos claros para el mantenimiento correctivo",
  ];

  return (
    <section id="conclusion" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Conclusión
            </h2>
          </div>

          {/* Conclusion Content */}
          <Card className="mb-12 border-border shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Reflexión Final
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      El mantenimiento preventivo y correctivo de hardware y software es fundamental
                      para garantizar el funcionamiento óptimo, la seguridad y la longevidad de los
                      sistemas informáticos en cualquier institución educativa. Este manual ha
                      proporcionado una guía completa y práctica para llevar a cabo estas tareas de
                      manera eficiente y profesional.
                    </p>
                    <p>
                      La implementación de un programa de mantenimiento estructurado no solo reduce
                      costos a largo plazo al prevenir fallas mayores, sino que también mejora la
                      experiencia de usuarios y estudiantes al asegurar que los equipos estén siempre
                      disponibles y funcionando correctamente.
                    </p>
                    <p>
                      Es importante recordar que la tecnología evoluciona constantemente, por lo que
                      este manual debe considerarse como una guía viva que requerirá actualizaciones
                      periódicas para incorporar nuevas técnicas, herramientas y mejores prácticas
                      en el campo del mantenimiento de sistemas informáticos.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Recomendaciones
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((recommendation, index) => (
                <Card
                  key={index}
                  className="card-hover border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final Note */}
          <Card className="border-primary/20 bg-primary-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎓</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">
                Compromiso con la Excelencia
              </h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                La Unidad Educativa Nacional "Vicente Emilio Sojo" se compromete a mantener
                estándares de excelencia en el cuidado y mantenimiento de su infraestructura
                tecnológica, garantizando así una educación de calidad para todos nuestros estudiantes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
