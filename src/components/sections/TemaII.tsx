import { Cpu, HardDrive, Monitor, Keyboard, Fan, Shield, CheckCircle, AlertTriangle, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cpuImg from "@/assets/hardware/cpu.jpg";
import hardDriveImg from "@/assets/hardware/hard-drive.jpg";
import monitorImg from "@/assets/hardware/monitor.jpg";
import keyboardImg from "@/assets/hardware/keyboard.jpg";
import fanImg from "@/assets/hardware/fan.jpg";
import powerSupplyImg from "@/assets/hardware/power-supply.jpg";

const TemaII = () => {
  const components = [
    { 
      icon: Cpu, 
      name: "Procesador (CPU)", 
      desc: "Limpieza del disipador y renovación de pasta térmica",
      img: cpuImg,
      guide: [
        "Apagar el equipo y desconectar de la corriente",
        "Liberar el disipador del procesador con cuidado",
        "Limpiar el disipador con aire comprimido",
        "Remover la pasta térmica antigua con alcohol isopropílico",
        "Aplicar nueva pasta térmica (tamaño de un grano de arroz)",
        "Reinstalar el disipador asegurando buena presión",
      ]
    },
    { 
      icon: HardDrive, 
      name: "Disco Duro", 
      desc: "Verificación de sectores y desfragmentación de HDD solamente",
      img: hardDriveImg,
      guide: [
        "Abrir 'Este equipo' y hacer clic derecho en la unidad",
        "Seleccionar 'Propiedades' > pestaña 'Herramientas'",
        "Ejecutar 'Comprobar' para verificar errores",
        "Para HDD: Ejecutar desfragmentador de disco",
        "Para SSD: Ejecutar optimización TRIM",
        "Verificar temperatura con software de monitoreo",
      ]
    },
    { 
      icon: Monitor, 
      name: "Monitor", 
      desc: "Limpieza de pantalla y verificación de conexiones",
      img: monitorImg,
      guide: [
        "Apagar el monitor y desconectar de la corriente",
        "Usar paño de microfibra seco para polvo",
        "Para manchas: humedecer ligeramente con agua destilada",
        "Limpiar en movimientos circulares suaves",
        "Verificar cables de video (HDMI, DisplayPort, VGA)",
        "Comprobar botones y menú OSD del monitor",
      ]
    },
    { 
      icon: Keyboard, 
      name: "Teclado y Mouse", 
      desc: "Limpieza profunda y verificación de funcionamiento",
      img: keyboardImg,
      guide: [
        "Desconectar teclado y mouse del equipo",
        "Voltear teclado y sacudir suavemente para soltar residuos",
        "Usar aire comprimido entre las teclas",
        "Limpiar superficie con paño húmedo con alcohol",
        "Para mouse: limpiar sensor óptico con hisopo",
        "Verificar funcionamiento de todas las teclas",
      ]
    },
    { 
      icon: Fan, 
      name: "Ventiladores", 
      desc: "Limpieza de aspas y verificación de rodamientos",
      img: fanImg,
      guide: [
        "Identificar todos los ventiladores (gabinete, CPU, GPU)",
        "Sostener las aspas antes de usar aire comprimido",
        "Limpiar polvo acumulado en aspas y rejillas",
        "Verificar que giren libremente sin ruidos",
        "Aplicar una gota de aceite en rodamiento si es necesario",
        "Asegurar que cables no obstruyan el movimiento",
      ]
    },
    { 
      icon: Shield, 
      name: "Fuente de Poder", 
      desc: "Limpieza interna y prueba de voltajes sin abrir su interior",
      img: powerSupplyImg,
      guide: [
        "⚠️ ADVERTENCIA: Solo personal capacitado debe abrir la fuente",
        "Desconectar fuente completamente antes de manipular",
        "Limpiar polvo del ventilador externo con aire comprimido",
        "Verificar que el ventilador gire correctamente",
        "Comprobar voltajes con multímetro (12V, 5V, 3.3V)",
        "Inspeccionar cables por desgaste o daños",
      ]
    },
  ];

  const procedures = [
    {
      title: "Preparación del Área de Trabajo",
      steps: [
        "Asegurar un espacio limpio y bien iluminado",
        "Reunir herramientas necesarias: destornilladores, aire comprimido, paños antiestáticos",
        "Utilizar pulsera antiestática conectada a tierra",
        "Desconectar completamente el equipo de la corriente eléctrica",
        "Tomar fotografías antes de desconectar cables",
      ],
    },
    {
      title: "Limpieza Externa",
      steps: [
        "Limpiar carcasa con paño húmedo y productos no abrasivos",
        "Limpiar teclado y mouse con aire comprimido y alcohol isopropílico",
        "Limpiar pantalla con productos especializados o agua destilada",
        "Verificar estado de cables y conectores externos",
        "Limpiar puertos USB y conectores con aire comprimido",
      ],
    },
    {
      title: "Limpieza Interna",
      steps: [
        "Abrir el gabinete siguiendo procedimientos de seguridad",
        "Eliminar polvo con aire comprimido en ráfagas cortas",
        "Limpiar ventiladores sosteniendo las aspas",
        "Limpiar disipadores de CPU y GPU",
        "Verificar conexiones internas (SATA, alimentación, RAM)",
        "Renovar pasta térmica del procesador (cada 12 meses)",
      ],
    },
    {
      title: "Verificaciones Finales",
      steps: [
        "Cerrar el gabinete correctamente asegurando todos los tornillos",
        "Reconectar todos los periféricos en sus puertos correspondientes",
        "Encender y verificar funcionamiento correcto",
        "Escuchar ruidos anormales (ventiladores, discos)",
        "Verificar temperaturas de componentes con software",
        "Documentar el mantenimiento realizado",
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
          <div id="introduccion">
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
          </div>

          {/* Components Grid */}
          <div id="componentes" className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Wrench className="w-7 h-7 text-primary" />
              Componentes Principales y Guías
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <Card
                  key={index}
                  className="card-hover border-border group cursor-pointer animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={component.img} 
                      alt={component.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                          <component.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground">
                          {component.name}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {component.desc}
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="guide" className="border-border">
                          <AccordionTrigger className="text-sm font-semibold hover:text-primary py-2">
                            Ver guía paso a paso
                          </AccordionTrigger>
                          <AccordionContent>
                            <ol className="space-y-2 mt-2">
                              {component.guide.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-soft text-primary flex items-center justify-center text-[10px] font-semibold mt-0.5">
                                    {stepIndex + 1}
                                  </span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procedures */}
          <div id="guias" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <CheckCircle className="w-7 h-7 text-primary" />
              Guías Prácticas Paso a Paso
            </h3>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-muted">
                {procedures.map((_, index) => (
                  <TabsTrigger key={index} value={index.toString()} className="text-xs lg:text-sm">
                    {index + 1}. {procedures[index].title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {procedures.map((procedure, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        {procedure.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {procedure.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center text-sm font-semibold mt-0.5">
                              {stepIndex + 1}
                            </div>
                            <p className="text-muted-foreground flex-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
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
                    <li>• No abrir la fuente de poder sin conocimientos técnicos especializados</li>
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
