import { AlertCircle, Volume2, HelpCircle, Cpu, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import biosImage from "@/assets/diagnostics/bios-diagnostic.jpg";
import troubleshootImage from "@/assets/diagnostics/troubleshooting.jpg";

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
      causes: ["Fuente de poder desconectada o dañada", "Cable de alimentación defectuoso", "Botón de encendido dañado", "Interruptor de fuente apagado"],
      solutions: ["Verificar conexiones eléctricas", "Probar con otra fuente de poder", "Verificar botón de encendido", "Revisar interruptor de fuente"],
    },
    {
      problem: "El equipo enciende pero no da video",
      causes: ["Tarjeta de video mal conectada", "Monitor desconectado", "Cable de video dañado", "RAM mal insertada", "Entrada de video incorrecta"],
      solutions: ["Verificar conexión de tarjeta de video", "Probar con otro cable/monitor", "Reinsertar módulos de RAM", "Verificar entrada correcta en monitor"],
    },
    {
      problem: "Pantalla azul (BSOD)",
      causes: ["Drivers incompatibles", "Problemas de RAM", "Disco duro defectuoso", "Sobrecalentamiento", "Actualizaciones incorrectas"],
      solutions: ["Actualizar drivers", "Verificar RAM con Memtest", "Verificar disco con CHKDSK", "Revisar temperaturas", "Deshacer actualizaciones recientes"],
    },
    {
      problem: "Sistema lento",
      causes: ["Poco espacio en disco", "Muchos programas al inicio", "Malware", "Hardware obsoleto", "Fragmentación de disco"],
      solutions: ["Liberar espacio en disco", "Desactivar programas de inicio", "Escanear con antivirus", "Actualizar componentes", "Desfragmentar disco"],
    },
    {
      problem: "Sobrecalentamiento",
      causes: ["Ventiladores sucios o dañados", "Pasta térmica seca", "Mala ventilación del gabinete", "Overclocking excesivo"],
      solutions: ["Limpiar ventiladores", "Renovar pasta térmica", "Mejorar flujo de aire", "Restaurar velocidades de fábrica"],
    },
    {
      problem: "Errores de disco duro",
      causes: ["Sectores defectuosos", "Cable SATA dañado", "Disco al final de vida útil", "Corrupción del sistema de archivos"],
      solutions: ["Ejecutar CHKDSK", "Reemplazar cable SATA", "Respaldar datos y reemplazar disco", "Reparar sistema de archivos"],
    },
    {
      problem: "USB no reconocido",
      causes: ["Puerto USB dañado", "Driver desactualizado", "Dispositivo defectuoso", "Problemas de alimentación USB"],
      solutions: ["Probar otro puerto USB", "Actualizar drivers de chipset", "Verificar dispositivo en otro equipo", "Verificar configuración de energía USB"],
    },
    {
      problem: "No hay audio",
      causes: ["Controladores de audio desactualizados", "Dispositivo de audio deshabilitado", "Cable de audio mal conectado", "Configuración incorrecta"],
      solutions: ["Actualizar drivers de audio", "Habilitar dispositivo en Administrador", "Verificar conexiones físicas", "Configurar dispositivo predeterminado"],
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
               Resolución de Problemas
             </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Códigos de pitidos BIOS y diagnóstico de problemas comunes
            </p>
          </div>

          {/* Introduction with Image */}
          <div id="introduccion" className="mb-12 animate-fade-in">
            <Card className="border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={biosImage} 
                    alt="BIOS Diagnostic" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden"></div>
                </div>
                <CardContent className="p-8 flex items-center">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-lg">
                        <Volume2 className="w-6 h-6 text-primary-foreground" />
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
              </div>
            </Card>
          </div>

          {/* BIOS Codes */}
          <div id="codigos" className="mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary-foreground" />
              </div>
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
                            className="flex items-start gap-4 p-4 rounded-lg bg-muted hover:bg-accent hover:shadow-md transition-all duration-200 border border-transparent hover:border-primary/20 group"
                          >
                            <div className="flex-shrink-0 w-32">
                              <span className="inline-flex items-center gap-2 px-3 py-1 gradient-primary text-primary-foreground rounded-full text-sm font-semibold shadow-sm group-hover:shadow-md transition-shadow">
                                <Volume2 className="w-3 h-3" />
                                {code.beeps}
                              </span>
                            </div>
                            <p className="text-muted-foreground flex-1 group-hover:text-foreground transition-colors">{code.meaning}</p>
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
          <div id="diagnostico" className="mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary-foreground" />
              </div>
              Procedimiento de Diagnóstico
            </h3>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <Card className="border-border shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-8 relative">
                      {/* Línea conectora vertical */}
                      <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block"></div>
                      
                      {[
                        {
                          step: 1,
                          title: "Identificar el problema",
                          desc: "Anotar síntomas, códigos de error o pitidos. Determinar cuándo ocurre el problema.",
                          icon: AlertCircle,
                        },
                        {
                          step: 2,
                          title: "Consultar códigos BIOS",
                          desc: "Si hay pitidos, identificar tipo de BIOS y consultar tabla correspondiente.",
                          icon: Volume2,
                        },
                        {
                          step: 3,
                          title: "Verificar conexiones básicas",
                          desc: "Revisar cables de alimentación, periféricos y conexiones internas.",
                          icon: Cpu,
                        },
                        {
                          step: 4,
                          title: "Aislar el componente",
                          desc: "Probar componentes individualmente para identificar el defectuoso.",
                          icon: HelpCircle,
                        },
                        {
                          step: 5,
                          title: "Aplicar solución",
                          desc: "Reemplazar, reparar o reconfigurar el componente problemático.",
                          icon: Wrench,
                        },
                        {
                          step: 6,
                          title: "Verificar funcionamiento",
                          desc: "Probar el sistema completamente para confirmar que el problema está resuelto.",
                          icon: CheckCircle2,
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.step} className="flex items-start gap-4 relative group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-200 relative z-10">
                              {item.step}
                            </div>
                            <div className="flex-1 pt-1 bg-muted/50 p-4 rounded-lg group-hover:bg-accent transition-colors duration-200">
                              <div className="flex items-center gap-2 mb-1">
                                <Icon className="w-5 h-5 text-primary" />
                                <h4 className="text-lg font-semibold text-foreground">
                                  {item.title}
                                </h4>
                              </div>
                              <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card className="border-border overflow-hidden h-full">
                  <img 
                    src={troubleshootImage} 
                    alt="Troubleshooting Process" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Card>
              </div>
            </div>
          </div>

          {/* Common Problems */}
          <div id="problemas" className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              Problemas Frecuentes y Soluciones
            </h3>

            <Accordion type="single" collapsible className="space-y-4">
              {commonProblems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`problem-${index}`}
                  className="bg-card border-border rounded-lg px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      {item.problem}
                    </div>
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
