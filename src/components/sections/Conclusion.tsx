import { CheckCircle, Lightbulb, BookOpen, Sparkles, Camera, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import fotoGrupal from "@/assets/gallery/foto-grupal.jpg";
import antes1 from "@/assets/gallery/antes-1.jpg";
import antes2 from "@/assets/gallery/antes-2.png";
import despues1 from "@/assets/gallery/despues-1.png";
import despues2 from "@/assets/gallery/despues-2.png";
import manualFuncionando from "@/assets/gallery/manual-funcionando.png";

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
          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative group animate-fade-in mb-16">
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

          {/* ===== GALERÍA ===== */}
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Camera className="w-4 h-4" />
                Galería
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                Evidencias del Proyecto
              </h3>
              <p className="text-muted-foreground">Registro fotográfico del trabajo realizado en la institución</p>
            </div>

            {/* Foto grupal */}
            <Card className="mb-10 overflow-hidden border-border shadow-lg">
              <div className="relative">
                <img
                  src={fotoGrupal}
                  alt="Equipo desarrollador en la fachada de la U.E.N. Vicente Emilio Sojo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[500px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h4 className="text-white font-bold text-xl">Nuestro Equipo</h4>
                  <p className="text-white/80 text-sm">
                    El grupo desarrollador del manual frente a la fachada de la U.E.N. Vicente Emilio Sojo
                  </p>
                </div>
              </div>
            </Card>

            {/* Antes y Después */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-foreground mb-2 text-center">Antes y Después del Mantenimiento</h4>
              <p className="text-muted-foreground text-center mb-8 text-sm">
                Comparativa del estado de los equipos del laboratorio de informática antes y después de nuestra intervención
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Antes */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Antes</span>
                    <span className="text-muted-foreground text-sm">Estado previo al mantenimiento</span>
                  </div>
                  <div className="space-y-4">
                    <Card className="overflow-hidden border-border shadow-md">
                      <img src={antes1} alt="Laboratorio antes del mantenimiento - vista general" loading="lazy" decoding="async" className="w-full h-56 object-cover" />
                      <CardContent className="p-3">
                        <p className="text-xs text-muted-foreground">Equipos del laboratorio sin mantenimiento, con acumulación de polvo y sistemas desactualizados</p>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden border-border shadow-md">
                      <img src={antes2} alt="Laboratorio antes del mantenimiento - equipos apagados" loading="lazy" decoding="async" className="w-full h-56 object-cover" />
                      <CardContent className="p-3">
                        <p className="text-xs text-muted-foreground">Computadoras inoperativas y en desuso, sin software funcional ni conexión a internet</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Después */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Después</span>
                    <span className="text-muted-foreground text-sm">Resultado del mantenimiento</span>
                  </div>
                  <div className="space-y-4">
                    <Card className="overflow-hidden border-border shadow-md">
                      <img src={despues1} alt="Laboratorio después del mantenimiento - equipos organizados" loading="lazy" decoding="async" className="w-full h-56 object-cover" />
                      <CardContent className="p-3">
                        <p className="text-xs text-muted-foreground">Equipos limpios, organizados y con hardware revisado tras el mantenimiento preventivo</p>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden border-border shadow-md">
                      <img src={despues2} alt="Laboratorio después del mantenimiento - equipos funcionando" loading="lazy" decoding="async" className="w-full h-56 object-cover" />
                      <CardContent className="p-3">
                        <p className="text-xs text-muted-foreground">Computadoras encendidas y operativas con sistemas renovados, listas para uso estudiantil</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Flecha decorativa central */}
              <div className="hidden md:flex justify-center -mt-[340px] mb-[280px] pointer-events-none">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Renovación de software */}
            <Card className="overflow-hidden border-primary/30 shadow-lg">
              <div className="md:flex">
                <div className="md:w-3/5">
                  <img
                    src={manualFuncionando}
                    alt="Manual Técnico Interactivo funcionando en el laboratorio"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full min-h-[280px] object-cover"
                  />
                </div>
                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit">
                    <Sparkles className="w-3.5 h-3.5" />
                    Renovación completa
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Sistemas Operativos y Software Actualizados
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Se instaló <strong>Windows XP Mini OS</strong> como sistema operativo ligero y funcional, junto con <strong>Office 2010</strong> para ofimática y el navegador <strong>Supermium</strong>, compatible con tecnologías web modernas, permitiendo que este manual interactivo funcione directamente en los equipos del laboratorio.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
