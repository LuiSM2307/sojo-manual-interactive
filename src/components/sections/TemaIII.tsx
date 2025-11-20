import { Download, Shield, Trash2, Settings, RefreshCw, Database, CheckCircle, Wrench, AlertTriangle, HardDrive, Maximize2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import systemWorkingImg from "@/assets/software/system-working.jpg";
import toolsImg from "@/assets/software/tools.jpg";
import cleanupImg from "@/assets/software/cleanup.jpg";
import updatesImg from "@/assets/software/updates.jpg";
import antivirusImg from "@/assets/software/antivirus.jpg";
import diskOptimizationImg from "@/assets/software/disk-optimization.jpg";
import repairImg from "@/assets/software/repair.jpg";
import backupImg from "@/assets/software/backup.jpg";
import registryImg from "@/assets/software/registry.jpg";

const TemaIII = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toolsData = [
    {
      icon: Wrench,
      title: "Herramientas de Windows",
      description: "Utilidades integradas del sistema",
      tools: [
        { name: "Liberador de espacio", use: "Elimina archivos temporales y caché" },
        { name: "Desfragmentador de disco", use: "Optimiza el acceso a datos en HDD" },
        { name: "Windows Defender", use: "Protección antivirus y antimalware" },
        { name: "Administrador de tareas", use: "Monitoreo de recursos del sistema" },
        { name: "Visor de eventos", use: "Registro de errores y advertencias" },
      ],
    },
    {
      icon: Download,
      title: "Software Recomendado",
      description: "Herramientas de terceros profesionales",
      tools: [
        { name: "CCleaner", use: "Limpieza profunda del sistema" },
        { name: "Malwarebytes", use: "Detección avanzada de malware" },
        { name: "TreeSize", use: "Análisis detallado de espacio en disco" },
        { name: "HWMonitor", use: "Monitoreo de temperaturas" },
        { name: "Crystal Disk Info", use: "Estado de salud de discos" },
      ],
    },
  ];

  const preventiveProcedures = [
    {
      title: "Preparación del Entorno",
      description: "Configurar el espacio de trabajo antes del mantenimiento",
      image: systemWorkingImg,
      steps: [
        {
          title: "Verificar funcionamiento del equipo",
          details: "Encender el equipo y verificar que el sistema operativo carga correctamente. Observar si hay mensajes de error o comportamientos anormales."
        },
        {
          title: "Cerrar todos los programas",
          details: "Guardar todo el trabajo y cerrar todas las aplicaciones abiertas. Asegurarse de no tener documentos sin guardar."
        },
        {
          title: "Desconectar dispositivos externos",
          details: "Quitar USB, discos externos, impresoras y otros periféricos. Dejar solo teclado y mouse conectados."
        },
        {
          title: "Crear punto de restauración",
          details: "Buscar 'Crear punto de restauración' en inicio. Clic en 'Crear' y asignar un nombre descriptivo con fecha."
        },
        {
          title: "Verificar espacio disponible",
          details: "Abrir 'Este equipo' y verificar que la unidad C: tenga al menos 10GB libres para el proceso de mantenimiento."
        },
      ],
    },
    {
      title: "Limpieza de Archivos Temporales",
      description: "Eliminar datos innecesarios del sistema",
      image: cleanupImg,
      steps: [
        {
          title: "Ejecutar liberador de espacio",
          details: "Buscar 'Liberador de espacio' en inicio. Seleccionar unidad C: y esperar el análisis. Marcar todas las casillas disponibles."
        },
        {
          title: "Limpiar archivos del sistema",
          details: "En liberador de espacio, clic en 'Limpiar archivos del sistema'. Marcar 'Actualizaciones de Windows anteriores' y 'Archivos temporales'."
        },
        {
          title: "Vaciar papelera de reciclaje",
          details: "Clic derecho en Papelera de reciclaje del escritorio > Vaciar papelera. Confirmar la eliminación permanente."
        },
        {
          title: "Limpiar carpeta de descargas",
          details: "Abrir carpeta Descargas. Revisar y eliminar archivos innecesarios. Mover archivos importantes a carpetas apropiadas."
        },
        {
          title: "Eliminar archivos temporales manualmente",
          details: "Presionar Win+R, escribir %temp% y Enter. Seleccionar todo (Ctrl+A) y eliminar. Algunos archivos en uso no se eliminarán."
        },
      ],
    },
    {
      title: "Actualización del Sistema",
      description: "Mantener el sistema y software actualizados",
      image: updatesImg,
      steps: [
        {
          title: "Verificar actualizaciones de Windows",
          details: "Ir a Configuración > Windows Update > Buscar actualizaciones. Descargar e instalar todas las actualizaciones disponibles."
        },
        {
          title: "Actualizar Microsoft Store",
          details: "Abrir Microsoft Store > Biblioteca > Obtener actualizaciones. Esperar a que todas las aplicaciones se actualicen."
        },
        {
          title: "Actualizar drivers del sistema",
          details: "Abrir Administrador de dispositivos. Clic derecho en dispositivos importantes > Actualizar controlador > Buscar automáticamente."
        },
        {
          title: "Actualizar navegadores web",
          details: "Abrir cada navegador instalado y verificar actualizaciones en su menú de configuración. Chrome, Firefox, Edge, etc."
        },
        {
          title: "Reiniciar el sistema",
          details: "Después de instalar actualizaciones importantes, reiniciar el equipo para aplicar cambios completamente."
        },
      ],
    },
    {
      title: "Análisis de Seguridad",
      description: "Detectar y eliminar amenazas de seguridad",
      image: antivirusImg,
      steps: [
        {
          title: "Actualizar definiciones de antivirus",
          details: "Abrir Windows Security > Protección contra virus y amenazas > Buscar actualizaciones de protección."
        },
        {
          title: "Ejecutar análisis rápido",
          details: "En Windows Security > Protección contra virus y amenazas > Análisis rápido. Esperar a que termine (5-10 minutos)."
        },
        {
          title: "Realizar análisis completo",
          details: "Opciones de examen > Examen completo > Examinar ahora. Puede tomar 1-2 horas. Ejecutar cuando no se use el equipo."
        },
        {
          title: "Verificar firewall",
          details: "Windows Security > Firewall y protección de red. Verificar que esté activado para redes públicas y privadas."
        },
        {
          title: "Revisar resultados",
          details: "Revisar amenazas detectadas. Seguir recomendaciones de cuarentena o eliminación de archivos sospechosos."
        },
      ],
    },
    {
      title: "Optimización de Disco",
      description: "Mejorar el rendimiento del almacenamiento",
      image: diskOptimizationImg,
      steps: [
        {
          title: "Identificar tipo de disco",
          details: "Abrir 'Desfragmentar y optimizar unidades'. Verificar si el disco es HDD (requiere desfragmentación) o SSD (requiere TRIM)."
        },
        {
          title: "Desfragmentar HDD",
          details: "Si es HDD: seleccionar unidad C: > Optimizar. El proceso puede tomar 30 minutos a varias horas según fragmentación."
        },
        {
          title: "Optimizar SSD",
          details: "Si es SSD: el sistema ejecutará comando TRIM automáticamente. No desfragmentar SSD, reduce su vida útil."
        },
        {
          title: "Configurar optimización automática",
          details: "En optimizar unidades > Activar 'Optimización programada'. Configurar frecuencia semanal."
        },
        {
          title: "Verificar salud del disco",
          details: "Usar herramientas como CrystalDiskInfo para verificar estado SMART y temperatura del disco."
        },
      ],
    },
  ];

  const correctiveProcedures = [
    {
      title: "Reparación del Sistema",
      description: "Solucionar errores y archivos corruptos",
      image: repairImg,
      steps: [
        {
          title: "Ejecutar SFC (System File Checker)",
          details: "Abrir CMD como administrador. Ejecutar: sfc /scannow. Esperar a que termine (20-30 minutos). Corrige archivos del sistema dañados."
        },
        {
          title: "Reparar imagen de Windows con DISM",
          details: "En CMD como administrador ejecutar: DISM /Online /Cleanup-Image /RestoreHealth. Repara componentes de Windows."
        },
        {
          title: "Verificar disco con CHKDSK",
          details: "Ejecutar: chkdsk C: /f /r. Programará verificación al reiniciar. Corrige errores de disco y sectores defectuosos."
        },
        {
          title: "Usar herramienta de solución de problemas",
          details: "Ir a Configuración > Sistema > Solucionar problemas > Otros solucionadores. Ejecutar los relevantes al problema."
        },
        {
          title: "Restaurar sistema si persiste",
          details: "Si los problemas continúan, buscar 'Restaurar sistema'. Elegir punto de restauración anterior al problema."
        },
      ],
    },
    {
      title: "Eliminación de Malware",
      description: "Detectar y remover software malicioso",
      image: antivirusImg,
      steps: [
        {
          title: "Iniciar en modo seguro",
          details: "Mantener Shift al hacer clic en Reiniciar. Solución de problemas > Opciones avanzadas > Configuración de inicio > Modo seguro."
        },
        {
          title: "Ejecutar Windows Defender Offline",
          details: "Windows Security > Protección contra virus > Opciones de examen > Examen sin conexión de Microsoft Defender. Reinicia y escanea antes de cargar Windows."
        },
        {
          title: "Usar Malwarebytes",
          details: "Descargar e instalar Malwarebytes. Ejecutar análisis completo en modo seguro. Eliminar todas las amenazas detectadas."
        },
        {
          title: "Eliminar programas sospechosos",
          details: "Panel de control > Programas > Desinstalar. Buscar software desconocido o instalado recientemente sin autorización."
        },
        {
          title: "Restablecer navegadores",
          details: "En cada navegador: Configuración > Restablecer configuración. Elimina extensiones maliciosas y configuraciones alteradas."
        },
      ],
    },
    {
      title: "Recuperación de Datos",
      description: "Backup y restauración de información",
      image: backupImg,
      steps: [
        {
          title: "Crear backup completo",
          details: "Configuración > Actualización y seguridad > Copia de seguridad > Agregar unidad. Seleccionar disco externo."
        },
        {
          title: "Usar historial de archivos",
          details: "Activar 'Historial de archivos' para backup automático de documentos, imágenes y escritorio en disco externo."
        },
        {
          title: "Crear imagen del sistema",
          details: "Panel de control > Copias de seguridad > Crear imagen del sistema. Copia completa del disco para restauración total."
        },
        {
          title: "Recuperar archivos eliminados",
          details: "Usar herramientas como Recuva para recuperar archivos eliminados permanentemente si aún no se sobrescribieron."
        },
        {
          title: "Restaurar desde backup",
          details: "Configuración > Copia de seguridad > Buscar una copia de seguridad antigua. Seleccionar fecha y archivos a restaurar."
        },
      ],
    },
    {
      title: "Optimización del Registro",
      description: "Limpiar y reparar el registro de Windows",
      image: registryImg,
      steps: [
        {
          title: "Crear backup del registro",
          details: "Antes de cualquier cambio: Win+R > regedit > Archivo > Exportar. Guardar backup completo del registro."
        },
        {
          title: "Usar CCleaner para registro",
          details: "Abrir CCleaner > Registro > Buscar problemas. Revisar problemas encontrados > Reparar seleccionados."
        },
        {
          title: "Limpiar entradas huérfanas",
          details: "El limpiador de registro elimina referencias a software desinstalado y rutas inválidas que ralentizan el sistema."
        },
        {
          title: "No modificar registro manualmente",
          details: "Evitar editar registro sin conocimientos avanzados. Cambios incorrectos pueden causar inestabilidad o impedir inicio."
        },
        {
          title: "Verificar mejoras de rendimiento",
          details: "Después de limpieza, reiniciar y verificar si hay mejoras en velocidad de inicio y respuesta general."
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
          <div id="introduccion">
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
          </div>

          {/* Tools Section */}
          <div id="herramientas" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Wrench className="w-7 h-7 text-primary" />
              Herramientas Necesarias
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {toolsData.map((category, index) => (
                <Card key={index} className="border-border card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="p-3 rounded-lg bg-accent/50 border border-border">
                          <div className="font-semibold text-sm text-foreground mb-1">{tool.name}</div>
                          <div className="text-xs text-muted-foreground">{tool.use}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Preventive Maintenance */}
          <div id="preventivo" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <Shield className="w-7 h-7 text-primary" />
              Guías de Mantenimiento Preventivo
            </h3>
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-muted">
                {preventiveProcedures.map((procedure, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    {procedure.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {preventiveProcedures.map((procedure, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-border overflow-hidden">
                    <div className="relative group cursor-pointer h-64 w-full overflow-hidden">
                      <img 
                        src={procedure.image} 
                        alt={procedure.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        onClick={() => setSelectedImage(procedure.image)}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground p-2 rounded-full">
                          <Maximize2 className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        {procedure.title}
                      </CardTitle>
                      <CardDescription>{procedure.description}</CardDescription>
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

          {/* Corrective Maintenance */}
          <div id="correctivo" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <AlertTriangle className="w-7 h-7 text-primary" />
              Guías de Mantenimiento Correctivo
            </h3>
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-muted">
                {correctiveProcedures.map((procedure, index) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    {procedure.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {correctiveProcedures.map((procedure, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-border overflow-hidden">
                    <div className="relative group cursor-pointer h-64 w-full overflow-hidden">
                      <img 
                        src={procedure.image} 
                        alt={procedure.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        onClick={() => setSelectedImage(procedure.image)}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground p-2 rounded-full">
                          <Maximize2 className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="w-6 h-6 text-primary" />
                        {procedure.title}
                      </CardTitle>
                      <CardDescription>{procedure.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {procedure.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="p-4 rounded-lg bg-destructive/10 hover:bg-destructive/20 transition-colors border border-destructive/20">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-sm font-bold">
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

          {/* Verification Section */}
          <div id="verificacion" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center flex items-center justify-center gap-2">
              <CheckCircle className="w-7 h-7 text-primary" />
              Verificación Final
            </h3>
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-primary-soft">
                <CardHeader>
                  <CardTitle className="text-center">Lista de Verificación Post-Mantenimiento</CardTitle>
                  <CardDescription className="text-center">Confirme que el sistema funciona correctamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        Sistema Operativo
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>El sistema inicia sin errores</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Todas las actualizaciones instaladas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Espacio en disco liberado (mín. 20%)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Seguridad
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Antivirus actualizado y activo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Sin amenazas detectadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Firewall habilitado</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                        <HardDrive className="w-5 h-5 text-primary" />
                        Rendimiento
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Sistema responde rápidamente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Programas abren sin demora</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Disco optimizado</span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-background border border-border">
                      <h4 className="font-semibold mb-3 text-foreground flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" />
                        Aplicaciones
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Programas actualizados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Navegadores funcionando correctamente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">✓</span>
                          <span>Software innecesario eliminado</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-full p-2">
          <div className="relative w-full">
            <img 
              src={selectedImage || ""} 
              alt="Vista ampliada"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TemaIII;