import { Download, Shield, Trash2, Settings, RefreshCw, Database, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import systemUpdateImg from "@/assets/software/system-update.jpg";
import optimizationImg from "@/assets/software/optimization.jpg";
import securityImg from "@/assets/software/security.jpg";

const TemaIII = () => {
  const maintenanceTypes = [
    {
      icon: RefreshCw,
      title: "Actualizaciones",
      tasks: [
        "Actualizar sistema operativo regularmente",
        "Mantener drivers actualizados",
        "Actualizar software antivirus",
        "Aplicar parches de seguridad",
      ],
    },
    {
      icon: Trash2,
      title: "Limpieza",
      tasks: [
        "Eliminar archivos temporales",
        "Limpiar caché del navegador",
        "Desinstalar programas no utilizados",
        "Vaciar papelera de reciclaje",
      ],
    },
    {
      icon: Database,
      title: "Optimización",
      tasks: [
        "Desfragmentar disco duro (HDD)",
        "Optimizar SSD con TRIM",
        "Limpiar registro de Windows",
        "Gestionar programas de inicio",
      ],
    },
    {
      icon: Shield,
      title: "Seguridad",
      tasks: [
        "Escanear con antivirus/antimalware",
        "Actualizar definiciones de virus",
        "Revisar configuración de firewall",
        "Realizar copias de seguridad",
      ],
    },
  ];

  const preventiveProcedures = [
    {
      title: "Análisis del Sistema",
      description: "Verificar estado general y detectar problemas potenciales",
      image: systemUpdateImg,
      steps: [
        {
          title: "Verificar espacio en disco",
          details: "Abrir 'Este equipo' y revisar capacidad disponible. Se recomienda mantener al menos 20% libre."
        },
        {
          title: "Revisar uso de recursos",
          details: "Presionar Ctrl+Shift+Esc para abrir Administrador de Tareas. Verificar uso de CPU, RAM y disco."
        },
        {
          title: "Identificar procesos problemáticos",
          details: "En Administrador de Tareas, ordenar por uso de CPU/RAM. Investigar procesos que consuman más del 50%."
        },
        {
          title: "Verificar temperatura",
          details: "Usar HWMonitor o Core Temp. CPU no debe superar 80°C en uso normal."
        },
        {
          title: "Revisar eventos del sistema",
          details: "Abrir Visor de Eventos (eventvwr.msc) y revisar errores críticos recientes."
        },
      ],
    },
    {
      title: "Limpieza de Archivos",
      description: "Eliminar datos innecesarios para liberar espacio",
      image: optimizationImg,
      steps: [
        {
          title: "Liberador de espacio en disco",
          details: "Buscar 'Liberador de espacio' en inicio. Seleccionar unidad C: y marcar todas las casillas."
        },
        {
          title: "Archivos temporales de Windows",
          details: "Ir a Configuración > Sistema > Almacenamiento > Archivos temporales. Eliminar todos."
        },
        {
          title: "Limpiar carpeta de descargas",
          details: "Revisar carpeta Descargas y eliminar archivos innecesarios o mover a otra ubicación."
        },
        {
          title: "Vaciar papelera de reciclaje",
          details: "Clic derecho en Papelera de reciclaje > Vaciar papelera de reciclaje."
        },
        {
          title: "Limpiar caché de navegadores",
          details: "Chrome: Ctrl+Shift+Del. Firefox: Ctrl+Shift+Del. Seleccionar todo el período."
        },
      ],
    },
    {
      title: "Mantenimiento de Software",
      description: "Mantener aplicaciones actualizadas y optimizadas",
      image: securityImg,
      steps: [
        {
          title: "Actualizar Windows",
          details: "Ir a Configuración > Windows Update > Buscar actualizaciones. Instalar todas las disponibles."
        },
        {
          title: "Actualizar drivers",
          details: "Usar Device Manager o software como Driver Booster. Priorizar GPU, chipset y audio."
        },
        {
          title: "Actualizar aplicaciones",
          details: "Abrir Microsoft Store o verificar actualizaciones en cada programa instalado."
        },
        {
          title: "Desinstalar programas no usados",
          details: "Configuración > Aplicaciones > Aplicaciones y características. Ordenar por tamaño y fecha."
        },
        {
          title: "Gestionar inicio de Windows",
          details: "Administrador de Tareas > Inicio. Deshabilitar programas innecesarios para acelerar arranque."
        },
      ],
    },
  ];

  return (
    <section id="tema-iii" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Tema III
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Mantenimiento de Software
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Procedimientos para optimizar el rendimiento y seguridad del sistema operativo y aplicaciones
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-12 border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Download className="w-7 h-7 text-primary" />
                ¿Qué es el Mantenimiento de Software?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El mantenimiento de software comprende todas las actividades relacionadas con la
                actualización, optimización y limpieza del sistema operativo y las aplicaciones instaladas
                en un equipo. Su objetivo es garantizar el funcionamiento eficiente, seguro y estable del
                sistema, previniendo errores, vulnerabilidades y degradación del rendimiento.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-primary-soft p-4 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Preventivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Actualizaciones, optimización y limpieza programadas regularmente
                  </p>
                </div>
                <div className="bg-accent p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-primary mb-2">Correctivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Resolución de errores, eliminación de malware y reparación del sistema
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Tasks */}
          <div id="tareas-software" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Principales Tareas de Mantenimiento
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {maintenanceTypes.map((type, index) => (
                <Card
                  key={index}
                  className="card-hover border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center">
                        <type.icon className="w-5 h-5 text-primary" />
                      </div>
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procedures Tabs */}
          <div id="procedimientos-software" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Settings className="w-7 h-7 text-primary" />
              Procedimientos Detallados
            </h3>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted">
                {preventiveProcedures.map((_, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    Paso {index + 1}
                  </TabsTrigger>
                ))}
              </TabsList>

              {preventiveProcedures.map((procedure, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-border overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={procedure.image} 
                        alt={procedure.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        {procedure.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{procedure.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {procedure.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors border border-border">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                                {stepIndex + 1}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                                <p className="text-sm text-muted-foreground">{step.details}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Tools Recommendation */}
          <Card className="border-primary/20 bg-primary-soft">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Download className="w-6 h-6" />
                Herramientas Recomendadas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Windows (Integradas)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Liberador de espacio:</strong> Limpia archivos temporales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Desfragmentador:</strong> Optimiza HDD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Windows Defender:</strong> Antivirus integrado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Administrador de Tareas:</strong> Monitoreo de recursos</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Terceros (Recomendadas)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>CCleaner:</strong> Limpieza avanzada de sistema</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>Malwarebytes:</strong> Detección de malware</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>TreeSize:</strong> Análisis de espacio en disco</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong>HWMonitor:</strong> Monitoreo de temperaturas</span>
                    </li>
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

export default TemaIII;
