import { Cpu, HardDrive, Monitor, Keyboard, Fan, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TemaII = () => {
  const components = [
    { icon: Cpu, name: "Procesador", desc: "Limpieza del disipador y renovación de pasta térmica" },
    { icon: HardDrive, name: "Disco Duro", desc: "Verificación de sectores y desfragmentación" },
    { icon: Monitor, name: "Monitor", desc: "Limpieza de pantalla y verificación de conexiones" },
    { icon: Keyboard, name: "Teclado/Mouse", desc: "Limpieza profunda y verificación de funcionamiento" },
    { icon: Fan, name: "Ventiladores", desc: "Limpieza de aspas y verificación de rodamientos" },
    { icon: Shield, name: "Fuente de Poder", desc: "Limpieza interna y prueba de voltajes" },
  ];

  const procedures = [
    {
      title: "Preparación del Área de Trabajo",
      steps: [
        "Asegurar un espacio limpio y bien iluminado",
        "Reunir herramientas necesarias: destornilladores, aire comprimido, paños antiestáticos",
        "Utilizar pulsera antiestática",
        "Desconectar completamente el equipo de la corriente eléctrica",
      ],
    },
    {
      title: "Limpieza Externa",
      steps: [
        "Limpiar carcasa con paño húmedo y productos no abrasivos",
        "Limpiar teclado y mouse con aire comprimido",
        "Limpiar pantalla con productos especializados",
        "Verificar estado de cables y conectores",
      ],
    },
    {
      title: "Limpieza Interna",
      steps: [
        "Abrir el gabinete siguiendo procedimientos de seguridad",
        "Eliminar polvo con aire comprimido",
        "Limpiar ventiladores y disipadores",
        "Verificar conexiones internas",
        "Renovar pasta térmica del procesador (cada 12 meses)",
      ],
    },
    {
      title: "Verificaciones Finales",
      steps: [
        "Cerrar el gabinete correctamente",
        "Reconectar todos los periféricos",
        "Encender y verificar funcionamiento",
        "Escuchar ruidos anormales",
        "Verificar temperaturas de componentes",
      ],
    },
  ];

  return (
    <section id="tema-ii" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Tema II
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Mantenimiento de Hardware
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guías prácticas para el mantenimiento preventivo y correctivo de componentes físicos
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-12 border-primary/20 bg-primary-soft">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    Mantenimiento Preventivo de Hardware
                  </h3>
                  <p className="text-muted-foreground">
                    El mantenimiento preventivo de hardware consiste en acciones planificadas que se
                    realizan periódicamente para evitar fallas en los componentes físicos del equipo.
                    Estas actividades incluyen limpieza, lubricación, ajustes y verificaciones que
                    prolongan la vida útil de los equipos y mejoran su rendimiento.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Components Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Componentes Principales
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <Card
                  key={index}
                  className="card-hover border-border group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <component.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold mb-2 text-foreground">
                        {component.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {component.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procedures */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-primary" />
              Guías Prácticas Paso a Paso
            </h3>

            <Accordion type="single" collapsible className="space-y-4">
              {procedures.map((procedure, index) => (
                <AccordionItem
                  key={index}
                  value={`procedure-${index}`}
                  className="bg-card border-border rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {index + 1}. {procedure.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      {procedure.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center text-sm font-semibold mt-0.5">
                            {stepIndex + 1}
                          </div>
                          <p className="text-muted-foreground flex-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Safety Warning */}
          <Card className="border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-yellow-700 dark:text-yellow-500">
                    Precauciones de Seguridad
                  </h4>
                  <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-600">
                    <li>• Siempre desconectar el equipo antes de realizar mantenimiento</li>
                    <li>• Utilizar pulsera antiestática para evitar daños por electricidad estática</li>
                    <li>• No utilizar líquidos directamente sobre componentes electrónicos</li>
                    <li>• Trabajar en un área ventilada al usar aire comprimido</li>
                    <li>• Documentar el proceso y tomar fotografías antes de desensamblar</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TemaII;
