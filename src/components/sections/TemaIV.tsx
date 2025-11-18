import { AlertCircle, Volume2, HelpCircle, Cpu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TemaIV = () => {
  const biosTypes = [
    {
      name: "AMI BIOS",
      codes: [
        { beeps: "1 corto", meaning: "Actualización de DRAM exitosa" },
        { beeps: "2 cortos", meaning: "Error de paridad de memoria" },
        { beeps: "3 cortos", meaning: "Error en los primeros 64KB de RAM" },
        { beeps: "4 cortos", meaning: "Fallo del temporizador del sistema" },
        { beeps: "5 cortos", meaning: "Fallo del procesador" },
        { beeps: "6 cortos", meaning: "Error del controlador de teclado" },
        { beeps: "7 cortos", meaning: "Excepción de modo virtual del procesador" },
        { beeps: "8 cortos", meaning: "Error de lectura/escritura de memoria de video" },
        { beeps: "9 cortos", meaning: "Error de checksum de ROM BIOS" },
        { beeps: "10 cortos", meaning: "Error en CMOS" },
      ],
    },
    {
      name: "Award BIOS",
      codes: [
        { beeps: "1 largo", meaning: "Problema de memoria RAM" },
        { beeps: "1 largo 2 cortos", meaning: "Fallo en tarjeta de video" },
        { beeps: "1 largo 3 cortos", meaning: "Fallo de video o memoria" },
        { beeps: "Repetidos continuos", meaning: "Problema de memoria RAM" },
        { beeps: "Repetidos altos y bajos", meaning: "Problema con el procesador" },
        { beeps: "Continuo", meaning: "Problema con fuente de alimentación" },
      ],
    },
    {
      name: "Phoenix BIOS",
      codes: [
        { beeps: "1-1-2", meaning: "Error del procesador" },
        { beeps: "1-1-3", meaning: "Error de lectura/escritura CMOS" },
        { beeps: "1-1-4", meaning: "Error de checksum del BIOS" },
        { beeps: "1-2-1", meaning: "Error del temporizador" },
        { beeps: "1-2-2", meaning: "Error de inicialización de DMA" },
        { beeps: "1-2-3", meaning: "Error en registro de DMA" },
        { beeps: "1-3-1", meaning: "Error de refresco de RAM" },
        { beeps: "1-3-3", meaning: "Error en primeros 64KB de RAM" },
        { beeps: "1-4-1", meaning: "Error de línea de direcciones" },
      ],
    },
  ];

  const commonProblems = [
    {
      problem: "El equipo no enciende",
      causes: ["Fuente de poder desconectada o dañada", "Cable de alimentación defectuoso", "Botón de encendido dañado"],
      solutions: ["Verificar conexiones eléctricas", "Probar con otra fuente de poder", "Verificar botón de encendido"],
    },
    {
      problem: "El equipo enciende pero no da video",
      causes: ["Tarjeta de video mal conectada", "Monitor desconectado", "Cable de video dañado", "RAM mal insertada"],
      solutions: ["Verificar conexión de tarjeta de video", "Probar con otro cable/monitor", "Reinsertar módulos de RAM"],
    },
    {
      problem: "Pantalla azul (BSOD)",
      causes: ["Drivers incompatibles", "Problemas de RAM", "Disco duro defectuoso", "Sobrecalentamiento"],
      solutions: ["Actualizar drivers", "Verificar RAM con Memtest", "Verificar disco con CHKDSK", "Revisar temperaturas"],
    },
    {
      problem: "Sistema lento",
      causes: ["Poco espacio en disco", "Muchos programas al inicio", "Malware", "Hardware obsoleto"],
      solutions: ["Liberar espacio en disco", "Desactivar programas de inicio", "Escanear con antivirus", "Actualizar componentes"],
    },
  ];

  return (
    <section id="tema-iv" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Tema IV
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Detección de Errores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Códigos de pitidos BIOS y diagnóstico de problemas comunes
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-12 border-border">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    Códigos de Pitidos POST (Power-On Self-Test)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cuando una computadora se enciende, la BIOS realiza un autodiagnóstico llamado POST.
                    Si detecta algún problema durante este proceso, emite una serie de pitidos que
                    indican la naturaleza del error. Estos códigos varían según el fabricante del BIOS
                    (AMI, Award, Phoenix), por lo que es importante identificar el tipo de BIOS para
                    interpretar correctamente los pitidos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BIOS Codes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Cpu className="w-7 h-7 text-primary" />
              Códigos por Tipo de BIOS
            </h3>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted">
                {biosTypes.map((bios, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    {bios.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {biosTypes.map((bios, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Volume2 className="w-5 h-5 text-primary" />
                        {bios.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {bios.codes.map((code, codeIndex) => (
                          <div
                            key={codeIndex}
                            className="flex items-start gap-4 p-4 rounded-lg bg-muted hover:bg-accent transition-colors"
                          >
                            <div className="flex-shrink-0 w-32">
                              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                                {code.beeps}
                              </span>
                            </div>
                            <p className="text-muted-foreground flex-1">{code.meaning}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Diagnostic Flowchart */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <AlertCircle className="w-7 h-7 text-primary" />
              Procedimiento de Diagnóstico
            </h3>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Identificar el problema",
                      desc: "Anotar síntomas, códigos de error o pitidos. Determinar cuándo ocurre el problema.",
                    },
                    {
                      step: 2,
                      title: "Consultar códigos BIOS",
                      desc: "Si hay pitidos, identificar tipo de BIOS y consultar tabla correspondiente.",
                    },
                    {
                      step: 3,
                      title: "Verificar conexiones básicas",
                      desc: "Revisar cables de alimentación, periféricos y conexiones internas.",
                    },
                    {
                      step: 4,
                      title: "Aislar el componente",
                      desc: "Probar componentes individualmente para identificar el defectuoso.",
                    },
                    {
                      step: 5,
                      title: "Aplicar solución",
                      desc: "Reemplazar, reparar o reconfigurar el componente problemático.",
                    },
                    {
                      step: 6,
                      title: "Verificar funcionamiento",
                      desc: "Probar el sistema completamente para confirmar que el problema está resuelto.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Common Problems */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-primary" />
              Problemas Frecuentes y Soluciones
            </h3>

            <Accordion type="single" collapsible className="space-y-4">
              {commonProblems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`problem-${index}`}
                  className="bg-card border-border rounded-lg px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {item.problem}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Causas Posibles
                        </h4>
                        <ul className="space-y-2">
                          {item.causes.map((cause, causeIndex) => (
                            <li
                              key={causeIndex}
                              className="flex items-start gap-2 text-muted-foreground text-sm"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{cause}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Soluciones
                        </h4>
                        <ul className="space-y-2">
                          {item.solutions.map((solution, solutionIndex) => (
                            <li
                              key={solutionIndex}
                              className="flex items-start gap-2 text-muted-foreground text-sm"
                            >
                              <span className="text-primary mt-1">✓</span>
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemaIV;
