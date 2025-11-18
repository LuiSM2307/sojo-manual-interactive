import { Download, Shield, Trash2, Settings, RefreshCw, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      steps: [
        "Verificar espacio en disco disponible",
        "Revisar uso de CPU y memoria RAM",
        "Identificar procesos que consumen recursos",
        "Verificar temperatura del sistema",
      ],
    },
    {
      title: "Limpieza de Archivos",
      description: "Eliminar datos innecesarios para liberar espacio",
      steps: [
        "Ejecutar Liberador de espacio en disco",
        "Eliminar archivos temporales de Windows",
        "Limpiar descargas antiguas",
        "Vaciar papelera de reciclaje",
      ],
    },
    {
      title: "Mantenimiento de Software",
      description: "Mantener aplicaciones actualizadas y optimizadas",
      steps: [
        "Actualizar sistema operativo",
        "Actualizar aplicaciones instaladas",
        "Desinstalar programas no utilizados",
        "Verificar licencias de software",
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
          <div className="mb-12">
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
          <div className="mb-12">
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
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle>{procedure.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{procedure.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {procedure.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                              {stepIndex + 1}
                            </div>
                            <p className="text-muted-foreground pt-1">{step}</p>
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
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Windows</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Liberador de espacio en disco (integrado)</li>
                    <li>• Desfragmentador de disco (integrado)</li>
                    <li>• Windows Defender (integrado)</li>
                    <li>• CCleaner (terceros)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Multiplataforma</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Malwarebytes (antimalware)</li>
                    <li>• Revo Uninstaller (desinstalación)</li>
                    <li>• TreeSize (análisis de espacio)</li>
                    <li>• HWMonitor (monitoreo)</li>
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
