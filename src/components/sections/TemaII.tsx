import { Cpu, HardDrive, Monitor, Keyboard, Fan, Shield, CheckCircle, AlertTriangle, Wrench, MemoryStick, Disc, Box, Mouse, Wifi, CircuitBoard, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cpuImg from "@/assets/hardware/cpu-real.jpg";
import hardDriveImg from "@/assets/hardware/hard-drive-real.jpg";
import monitorImg from "@/assets/hardware/monitor-real.jpg";
import keyboardImg from "@/assets/hardware/keyboard-real.jpg";
import fanImg from "@/assets/hardware/fan-real.jpg";
import powerSupplyImg from "@/assets/hardware/power-supply-real.jpg";
import ramImg from "@/assets/hardware/ram.jpg";
import dvdDriveImg from "@/assets/hardware/dvd-drive.jpg";
import caseImg from "@/assets/hardware/case.jpg";
import mouseImg from "@/assets/hardware/mouse-real.jpg";
import networkCardImg from "@/assets/hardware/network-card-real.jpg";
import motherboardImg from "@/assets/hardware/motherboard-real.jpg";

const TemaII = () => {
  const navigate = useNavigate();
  const componentsByCategory = {
    perifericos: [
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
        name: "Teclado", 
        desc: "Limpieza profunda y verificación de funcionamiento",
        img: keyboardImg,
        guide: [
          "Desconectar teclado del equipo",
          "Voltear teclado y sacudir suavemente para soltar residuos",
          "Usar aire comprimido entre las teclas",
          "Limpiar superficie con paño húmedo con alcohol",
          "Limpiar conectores con aire comprimido",
          "Verificar funcionamiento de todas las teclas",
        ]
      },
      { 
        icon: Mouse, 
        name: "Mouse (Ratón)", 
        desc: "Limpieza externa, sensor y verificación de botones",
        img: mouseImg,
        guide: [
          "Desconectar mouse del equipo",
          "Limpiar superficie externa con paño húmedo con alcohol",
          "Limpiar sensor óptico con hisopo de algodón seco",
          "Para mouse con bola: abrir compartimento y limpiar rodillos",
          "Limpiar patines deslizantes en la base",
          "Verificar funcionamiento de todos los botones y rueda",
        ]
      },
    ],
    componentes_internos: [
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
        desc: "Limpieza externa y verificación de conexiones",
        img: hardDriveImg,
        guide: [
          "Desconectar cables SATA y de alimentación",
          "Limpiar la superficie externa con paño suave",
          "Usar aire comprimido en conectores",
          "Verificar que no haya golpes o daños físicos",
          "Reconectar asegurando conexiones firmes",
          "Verificar detección en BIOS al encender",
        ]
      },
      { 
        icon: MemoryStick, 
        name: "Memoria RAM", 
        desc: "Limpieza de contactos y verificación de instalación",
        img: ramImg,
        guide: [
          "Abrir clips de seguridad en los slots de RAM",
          "Extraer módulos con cuidado presionando clips laterales",
          "Limpiar contactos dorados con goma de borrar suavemente",
          "Usar aire comprimido en slots de la placa madre",
          "Reinstalar presionando hasta escuchar 'click' de seguro",
          "Verificar detección correcta en BIOS",
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
        desc: "Limpieza externa y verificación de funcionamiento",
        img: powerSupplyImg,
        guide: [
          "⚠️ ADVERTENCIA: No abrir la fuente de poder",
          "Desconectar fuente completamente antes de manipular",
          "Limpiar polvo del ventilador externo con aire comprimido",
          "Verificar que el ventilador gire correctamente",
          "Inspeccionar cables por desgaste o daños",
          "Verificar voltaje correcto con selector (110V/220V)",
        ]
      },
      { 
        icon: Wifi, 
        name: "Tarjeta de Red", 
        desc: "Limpieza de contactos y verificación de conectividad",
        img: networkCardImg,
        guide: [
          "Desconectar cable de red si está conectado",
          "Liberar tornillo de sujeción de la tarjeta",
          "Extraer tarjeta del slot PCI con cuidado",
          "Limpiar contactos dorados con goma de borrar",
          "Usar aire comprimido en el slot PCI",
          "Reinstalar asegurando conexión firme en el slot",
        ]
      },
      { 
        icon: CircuitBoard, 
        name: "Placa Madre (Motherboard)", 
        desc: "Limpieza general y verificación de componentes",
        img: motherboardImg,
        guide: [
          "Desconectar TODOS los cables y componentes",
          "Usar aire comprimido en toda la superficie",
          "Limpiar slots (RAM, PCI, PCIe) con aire comprimido",
          "Verificar que no haya capacitores hinchados",
          "Limpiar conectores de alimentación con cuidado",
          "Inspeccionar por polvo acumulado en disipadores del chipset",
        ]
      },
    ],
    almacenamiento_estructura: [
      { 
        icon: Disc, 
        name: "Unidad Óptica (DVD/CD)", 
        desc: "Limpieza del lente y mecanismo de bandeja",
        img: dvdDriveImg,
        guide: [
          "Expulsar bandeja de la unidad",
          "Limpiar superficie de bandeja con paño suave",
          "Usar aire comprimido para limpiar el lente láser",
          "Verificar que la bandeja abra y cierre suavemente",
          "Limpiar rieles laterales de polvo acumulado",
          "Probar lectura con disco de prueba",
        ]
      },
      { 
        icon: Box, 
        name: "Gabinete (Case)", 
        desc: "Limpieza completa externa e interna del chasis",
        img: caseImg,
        guide: [
          "Retirar paneles laterales del gabinete",
          "Usar aire comprimido en todas las áreas internas",
          "Limpiar filtros de polvo (frontales y superiores)",
          "Lavar filtros con agua y jabón si están muy sucios",
          "Limpiar superficie externa con paño húmedo",
          "Verificar que todos los tornillos estén seguros",
        ]
      },
    ]
  };

  const maintenanceGuides = [
    {
      id: "preparacion",
      title: "Preparación del Área de Trabajo",
      icon: Wrench,
      color: "bg-blue-500",
      items: [
        "Asegurar un espacio limpio, seco y bien iluminado",
        "Colocar una superficie antiestática o alfombra de goma",
        "Reunir todas las herramientas necesarias antes de comenzar",
        "Tener a mano contenedores para organizar tornillos y piezas pequeñas",
        "Tomar fotografías del equipo antes de desarmar para referencia",
      ]
    },
    {
      id: "herramientas",
      title: "Herramientas Necesarias",
      icon: Wrench,
      color: "bg-purple-500",
      items: [
        "Destornilladores: Phillips y plano de varios tamaños",
        "Aire comprimido: Latas o compresor con regulador de presión",
        "Pulsera antiestática: Conectada a tierra para evitar descargas",
        "Paños de microfibra: Limpios y sin pelusa",
        "Alcohol isopropílico al 90% o superior",
        "Pasta térmica de calidad (Arctic MX-4, Noctua NT-H1)",
        "Brocha suave de cerdas naturales",
        "Linterna o lámpara de trabajo",
      ]
    },
    {
      id: "procedimientos",
      title: "Procedimientos de Limpieza",
      icon: CheckCircle,
      color: "bg-green-500",
      items: [
        "Siempre desconectar el equipo de la corriente eléctrica primero",
        "Usar aire comprimido en ráfagas cortas (2-3 segundos)",
        "Mantener lata de aire en posición vertical para evitar líquido",
        "Sostener ventiladores antes de soplar aire para evitar dañar rodamientos",
        "Limpiar de adentro hacia afuera, alejando el polvo del equipo",
        "No usar aspiradora directamente sobre componentes electrónicos",
        "Aplicar alcohol con paño, nunca directamente sobre componentes",
        "Dejar secar completamente antes de energizar",
      ]
    },
    {
      id: "precauciones",
      title: "Precauciones y Prohibiciones",
      icon: AlertTriangle,
      color: "bg-red-500",
      items: [
        "❌ NUNCA trabajar con el equipo conectado a la corriente",
        "❌ NO tocar componentes sin pulsera antiestática",
        "❌ NO soplar con la boca (humedad daña componentes)",
        "❌ NO usar productos de limpieza domésticos o abrasivos",
        "❌ NO forzar conectores o componentes al instalar",
        "❌ NO abrir la fuente de poder (contiene capacitores peligrosos)",
        "❌ NO usar agua directamente sobre componentes electrónicos",
        "❌ NO realizar mantenimiento en ambientes húmedos",
        "✅ SIEMPRE verificar compatibilidad antes de reemplazar piezas",
        "✅ SIEMPRE documentar el proceso con fotos",
      ]
    },
    {
      id: "verificacion",
      title: "Verificación Final",
      icon: CheckCircle,
      color: "bg-cyan-500",
      items: [
        "Verificar que todos los cables estén correctamente conectados",
        "Asegurar que no queden tornillos sueltos dentro del gabinete",
        "Confirmar que todos los ventiladores giren libremente",
        "Cerrar el gabinete asegurando todos los paneles",
        "Conectar periféricos en sus puertos correspondientes",
        "Realizar primera prueba de encendido fuera del escritorio",
        "Escuchar sonidos anormales durante el arranque",
        "Verificar que POST (Power-On Self Test) se complete exitosamente",
        "Monitorear temperaturas con software (HWMonitor, Open Hardware Monitor)",
        "Documentar fecha y tipo de mantenimiento realizado",
      ]
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
               Hardware básico
             </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guías prácticas para el mantenimiento preventivo y correctivo de componentes físicos
            </p>
          </div>

          {/* Introduction */}
          <div id="introduccion">
            <Card className="mb-12 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Mantenimiento Preventivo de Hardware
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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

          {/* Guías de Mantenimiento - AHORA PRIMERO */}
          <div id="guias" className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Wrench className="w-8 h-8 text-primary" />
              Guías de Mantenimiento Preventivo
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {maintenanceGuides.slice(0, 4).map((guide) => {
                const IconComponent = guide.icon;
                return (
                  <Card key={guide.id} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${guide.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg">{guide.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {guide.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Verificación Final - Centrada */}
            <div className="max-w-2xl mx-auto">
              {(() => {
                const guide = maintenanceGuides[4];
                const IconComponent = guide.icon;
                return (
                  <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg ${guide.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg">{guide.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {guide.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })()}
            </div>

            {/* Safety Warning */}
            <Card className="border-destructive/50 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-destructive mb-2">
                      ⚠️ Advertencias de Seguridad Importantes
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Siempre desconectar el equipo de la corriente eléctrica antes de cualquier intervención</li>
                      <li>• Usar pulsera antiestática conectada a tierra para prevenir daños por electricidad estática</li>
                      <li>• No abrir la fuente de poder - contiene capacitores que retienen carga peligrosa</li>
                      <li>• Trabajar en área bien ventilada al usar aire comprimido o productos químicos</li>
                      <li>• Si no tienes experiencia, buscar asistencia de personal capacitado</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Componentes y Procedimientos Específicos - AHORA SEGUNDO */}
          <div id="componentes" className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Cpu className="w-8 h-8 text-primary" />
              Componentes y Procedimientos Específicos
            </h3>
            
            <Tabs defaultValue="perifericos" className="w-full">
              <TabsList className="flex w-full overflow-x-auto mb-8 justify-start md:grid md:grid-cols-3 md:justify-center">
                <TabsTrigger value="perifericos" className="flex-shrink-0">Periféricos</TabsTrigger>
                <TabsTrigger value="componentes_internos" className="flex-shrink-0">Componentes Internos</TabsTrigger>
                <TabsTrigger value="almacenamiento_estructura" className="flex-shrink-0">Almacenamiento y Estructura</TabsTrigger>
              </TabsList>

              <TabsContent value="perifericos">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {componentsByCategory.perifericos.map((component, idx) => {
                    const IconComponent = component.icon;
                    return (
                      <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={component.img} 
                            alt={component.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-primary-foreground" />
                              </div>
                              <h4 className="font-bold text-foreground">{component.name}</h4>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-4">{component.desc}</p>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="steps" className="border-border/50">
                              <AccordionTrigger className="text-sm hover:text-primary">
                                Ver guía paso a paso
                              </AccordionTrigger>
                              <AccordionContent>
                                <ol className="space-y-2 mt-2">
                                  {component.guide.map((step, stepIdx) => (
                                    <li key={stepIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium">
                                        {stepIdx + 1}
                                      </span>
                                      <span className="flex-1">{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="componentes_internos">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {componentsByCategory.componentes_internos.map((component, idx) => {
                    const IconComponent = component.icon;
                    return (
                      <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={component.img} 
                            alt={component.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-primary-foreground" />
                              </div>
                              <h4 className="font-bold text-foreground">{component.name}</h4>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-4">{component.desc}</p>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="steps" className="border-border/50">
                              <AccordionTrigger className="text-sm hover:text-primary">
                                Ver guía paso a paso
                              </AccordionTrigger>
                              <AccordionContent>
                                <ol className="space-y-2 mt-2">
                                  {component.guide.map((step, stepIdx) => (
                                    <li key={stepIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium">
                                        {stepIdx + 1}
                                      </span>
                                      <span className="flex-1">{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="almacenamiento_estructura">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {componentsByCategory.almacenamiento_estructura.map((component, idx) => {
                    const IconComponent = component.icon;
                    return (
                      <Card key={idx} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={component.img} 
                            alt={component.name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-primary-foreground" />
                              </div>
                              <h4 className="font-bold text-foreground">{component.name}</h4>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-4">{component.desc}</p>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="steps" className="border-border/50">
                              <AccordionTrigger className="text-sm hover:text-primary">
                                Ver guía paso a paso
                              </AccordionTrigger>
                              <AccordionContent>
                                <ol className="space-y-2 mt-2">
                                  {component.guide.map((step, stepIdx) => (
                                    <li key={stepIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium">
                                        {stepIdx + 1}
                                      </span>
                                      <span className="flex-1">{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemaII;