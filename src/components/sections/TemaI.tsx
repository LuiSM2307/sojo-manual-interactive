import { Building, History, Eye, MapPin, FileText, Target, Lightbulb, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TemaI = () => {
  return (
    <section id="tema-i" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Tema I
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Aspectos Generales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce la institución, su historia, y los fundamentos del manual técnico
            </p>
          </div>

          {/* Datos de la Institución */}
          <div id="datos-institucion" className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Datos de la Institución
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Reseña Histórica */}
              <Card className="card-hover border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="w-6 h-6 text-primary" />
                    Reseña Histórica
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    La Unidad Educativa Nacional "Vicente Emilio Sojo" fue fundada con el compromiso
                    de ofrecer educación de calidad a la comunidad. A lo largo de los años, ha sido
                    referente en formación académica y tecnológica, adaptándose constantemente a las
                    demandas del mundo moderno y preparando estudiantes para los desafíos del futuro.
                  </p>
                </CardContent>
              </Card>

              {/* Visión y Misión */}
              <Card className="card-hover border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    Visión y Misión
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="vision" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="vision">Visión</TabsTrigger>
                      <TabsTrigger value="mision">Misión</TabsTrigger>
                    </TabsList>
                    <TabsContent value="vision" className="mt-4">
                      <p className="text-muted-foreground text-sm">
                        Ser una institución educativa de excelencia, reconocida por su compromiso con
                        la formación integral de estudiantes capaces de transformar la sociedad.
                      </p>
                    </TabsContent>
                    <TabsContent value="mision" className="mt-4">
                      <p className="text-muted-foreground text-sm">
                        Formar ciudadanos íntegros con valores éticos, capacidades académicas y
                        tecnológicas que les permitan desenvolverse exitosamente.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Ubicación y Datos */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-hover border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Dirección:</strong> [Dirección de la institución]</p>
                    <p><strong className="text-foreground">Ciudad:</strong> [Ciudad]</p>
                    <p><strong className="text-foreground">Estado:</strong> [Estado]</p>
                    <p><strong className="text-foreground">Teléfono:</strong> [Teléfono]</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Datos Esenciales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Tipo:</strong> Pública</p>
                    <p><strong className="text-foreground">Niveles:</strong> Primaria y Bachillerato</p>
                    <p><strong className="text-foreground">Dependencia:</strong> Ministerio del Poder Popular para la Educación</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sobre el Manual */}
          <div id="sobre-manual" className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              Sobre el Manual
            </h3>

            <Card className="card-hover border-border mb-8">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Objetivos del Manual
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-lg mb-3 text-primary">Objetivo General</h5>
                    <p className="text-muted-foreground">
                      Proporcionar una guía técnica completa, clara y práctica para el mantenimiento
                      preventivo y correctivo de los equipos informáticos de la institución,
                      garantizando su óptimo funcionamiento.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-3 text-primary">Objetivos Específicos</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Estandarizar procedimientos de mantenimiento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Capacitar al personal técnico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Prevenir fallas y extender vida útil de equipos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Facilitar diagnóstico y resolución de problemas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conceptos Básicos */}
          <div id="conceptos" className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" />
              Conceptos Básicos
            </h3>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border-border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Qué es mantenimiento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  El mantenimiento es el conjunto de acciones técnicas y administrativas destinadas a
                  conservar o restablecer un sistema o equipo a un estado en el cual pueda cumplir con
                  su función requerida. Incluye actividades de inspección, limpieza, lubricación,
                  ajuste, calibración y reparación.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border-border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  ¿Qué es mantenimiento de un sistema informático?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Es el conjunto de procedimientos técnicos aplicados tanto al hardware como al software
                  de un equipo de computación, con el objetivo de garantizar su correcto funcionamiento,
                  prevenir fallas, optimizar su rendimiento y prolongar su vida útil. Abarca desde la
                  limpieza física de componentes hasta la actualización de sistemas operativos y aplicaciones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border-border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Tipos de mantenimiento
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary-soft p-4 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Wrench className="w-5 h-5 text-primary" />
                        <h5 className="font-semibold text-primary">Preventivo</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Acciones planificadas y periódicas para prevenir fallas y garantizar el
                        funcionamiento óptimo del sistema. Incluye limpieza, actualización y
                        verificación de componentes.
                      </p>
                    </div>
                    <div className="bg-accent p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Wrench className="w-5 h-5 text-primary" />
                        <h5 className="font-semibold text-primary">Correctivo</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Acciones realizadas después de que ocurre una falla, destinadas a restaurar
                        el funcionamiento del sistema. Incluye diagnóstico, reparación y reemplazo
                        de componentes defectuosos.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemaI;
