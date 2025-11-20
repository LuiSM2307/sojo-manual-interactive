import { CheckCircle, Lightbulb, BookOpen, Sparkles } from "lucide-react";
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
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Final
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Conclusión
            </h2>
            <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Conclusion Content */}
          <Card className="mb-12 border-border shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                    Reflexión Final
                    <Sparkles className="w-5 h-5 text-primary" />
                  </h3>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p className="text-base">
                      El mantenimiento preventivo y correctivo de hardware y software es fundamental
                      para garantizar el funcionamiento óptimo, la seguridad y la longevidad de los
                      sistemas informáticos en cualquier institución educativa. Este manual ha
                      proporcionado una guía completa y práctica para llevar a cabo estas tareas de
                      manera eficiente y profesional.
                    </p>
                    <p className="text-base">
                      La implementación de un programa de mantenimiento estructurado no solo reduce
                      costos a largo plazo al prevenir fallas mayores, sino que también mejora la
                      experiencia de usuarios y estudiantes al asegurar que los equipos estén siempre
                      disponibles y funcionando correctamente.
                    </p>
                    <p className="text-base">
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
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Recomendaciones Clave
                </h3>
                <p className="text-sm text-muted-foreground">Para un mantenimiento exitoso</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((recommendation, index) => (
                <Card
                  key={index}
                  className="card-hover border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                        {recommendation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final Note */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative group animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <CardContent className="p-10 text-center relative z-10">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🎓</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-primary flex items-center justify-center gap-2">
                Compromiso con la Excelencia
                <Sparkles className="w-5 h-5" />
              </h4>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base">
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
