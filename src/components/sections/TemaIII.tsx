import { Download, Shield, Trash2, Settings, RefreshCw, Database, CheckCircle, Wrench, AlertTriangle, HardDrive, Maximize2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toolsData = [
    {
      icon: Wrench,
      title: "Herramientas de Windows XP",
      description: "Utilidades integradas del sistema operativo",
      tools: [
        { name: "Liberador de espacio en disco", use: "Elimina archivos temporales, caché y componentes innecesarios" },
        { name: "Desfragmentador de disco", use: "Reorganiza los datos en el HDD para un acceso más rápido" },
        { name: "Administrador de tareas", use: "Monitoreo de procesos y uso de recursos del sistema (Ctrl+Alt+Supr)" },
        { name: "Restaurar sistema", use: "Permite volver a un estado anterior del sistema en caso de fallos" },
        { name: "Comprobación de errores (chkdsk)", use: "Verifica y repara errores en el disco duro" },
      ],
    },
    {
      icon: Download,
      title: "Software Recomendado",
      description: "Herramientas compatibles con Windows XP MiniOS",
      tools: [
        { name: "Panda USB Vaccine", use: "Protección contra virus provenientes de memorias USB/pendrives" },
        { name: "3DP Chip", use: "Detección e instalación automática de drivers del sistema" },
        { name: "Supermium", use: "Navegador web moderno compatible con Windows XP" },
        { name: "CCleaner (v5.63)", use: "Limpieza de archivos temporales y optimización del registro" },
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
          details: "Encender el equipo y verificar que Windows XP MiniOS carga correctamente. Observar si hay mensajes de error o comportamientos anormales durante el inicio."
        },
        {
          title: "Cerrar todos los programas",
          details: "Guardar todo el trabajo y cerrar todas las aplicaciones abiertas. Asegurarse de no tener documentos sin guardar."
        },
        {
          title: "Desconectar dispositivos externos",
          details: "Quitar USB, discos externos y otros periféricos. Dejar solo teclado y mouse conectados."
        },
        {
          title: "Crear punto de restauración",
          details: "Ir a Inicio > Todos los programas > Accesorios > Herramientas del sistema > Restaurar sistema. Seleccionar 'Crear un punto de restauración' y asignar un nombre descriptivo."
        },
        {
          title: "Verificar espacio disponible",
          details: "Abrir 'Mi PC' y hacer clic derecho en la unidad C: > Propiedades. Verificar que haya suficiente espacio libre para el mantenimiento."
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
          details: "Ir a Inicio > Accesorios > Herramientas del sistema > Liberador de espacio en disco. Seleccionar unidad C: y marcar todas las casillas disponibles."
        },
        {
          title: "Eliminar archivos temporales manualmente",
          details: "Presionar Win+R, escribir %temp% y Enter. Seleccionar todo (Ctrl+A) y eliminar. Algunos archivos en uso no se podrán eliminar."
        },
        {
          title: "Vaciar papelera de reciclaje",
          details: "Clic derecho en la Papelera de reciclaje del escritorio > Vaciar papelera de reciclaje. Confirmar la eliminación permanente."
        },
        {
          title: "Limpiar carpeta de descargas",
          details: "Abrir la carpeta Mis documentos y revisar archivos innecesarios. Eliminar instaladores ya utilizados y archivos temporales."
        },
        {
          title: "Usar CCleaner para limpieza profunda",
          details: "Abrir CCleaner > Limpiador > Analizar > Ejecutar limpiador. Elimina caché de navegador, archivos temporales y registros obsoletos."
        },
      ],
    },
    {
      title: "Instalación de Drivers",
      description: "Mantener los controladores del hardware actualizados",
      image: updatesImg,
      steps: [
        {
          title: "Ejecutar 3DP Chip",
          details: "Abrir 3DP Chip para detectar automáticamente el hardware del equipo y los drivers faltantes o desactualizados."
        },
        {
          title: "Instalar drivers necesarios",
          details: "Desde 3DP Chip, descargar e instalar los controladores recomendados para cada componente de hardware detectado."
        },
        {
          title: "Verificar Administrador de dispositivos",
          details: "Clic derecho en Mi PC > Propiedades > Hardware > Administrador de dispositivos. Verificar que no haya dispositivos con signos de exclamación amarillos."
        },
        {
          title: "Instalar drivers manualmente si es necesario",
          details: "Para dispositivos no reconocidos: clic derecho > Actualizar controlador > Instalar desde ubicación específica si se tiene el CD de drivers."
        },
        {
          title: "Reiniciar el sistema",
          details: "Después de instalar los controladores, reiniciar el equipo para que los cambios surtan efecto correctamente."
        },
      ],
    },
    {
      title: "Protección contra Virus USB",
      description: "Prevenir infecciones desde memorias extraíbles",
      image: antivirusImg,
      steps: [
        {
          title: "Instalar Panda USB Vaccine",
          details: "Descargar e instalar Panda USB Vaccine. Es un programa ligero y gratuito diseñado para proteger contra virus de autorun en pendrives."
        },
        {
          title: "Vacunar el equipo",
          details: "En Panda USB Vaccine, hacer clic en 'Vacunar equipo' para deshabilitar la función de autorun del sistema, previniendo ejecuciones automáticas maliciosas."
        },
        {
          title: "Vacunar memorias USB",
          details: "Insertar cada pendrive y hacer clic en 'Vacunar USB' para crear un archivo AUTORUN.INF protegido que impide la propagación de virus."
        },
        {
          title: "Revisar pendrives antes de abrir archivos",
          details: "Siempre abrir el pendrive desde Mi PC haciendo doble clic, nunca desde la ventana de autorun. Verificar que no haya archivos ocultos sospechosos."
        },
        {
          title: "Mantener la protección activa",
          details: "Verificar periódicamente que Panda USB Vaccine sigue activo. Es una protección pasiva que no consume recursos del sistema."
        },
      ],
    },
    {
      title: "Optimización de Disco",
      description: "Mejorar el rendimiento del almacenamiento HDD",
      image: diskOptimizationImg,
      steps: [
        {
          title: "Abrir Desfragmentador de disco",
          details: "Ir a Inicio > Accesorios > Herramientas del sistema > Desfragmentador de disco. Seleccionar la unidad C:."
        },
        {
          title: "Analizar el disco",
          details: "Hacer clic en 'Analizar' para ver el nivel de fragmentación. Si es mayor al 10%, se recomienda desfragmentar."
        },
        {
          title: "Desfragmentar la unidad",
          details: "Hacer clic en 'Desfragmentar'. El proceso puede tomar de 30 minutos a varias horas dependiendo del tamaño y fragmentación del disco."
        },
        {
          title: "Ejecutar comprobación de errores",
          details: "Clic derecho en la unidad C: > Propiedades > Herramientas > Comprobar ahora. Marcar ambas casillas y programar para el próximo reinicio."
        },
        {
          title: "Verificar resultado",
          details: "Tras la desfragmentación, analizar nuevamente para confirmar que la fragmentación se redujo significativamente."
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
               Software y Sistemas
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
              <TabsList className="flex w-full overflow-x-auto bg-muted justify-start md:grid md:grid-cols-5 md:justify-center">
                {preventiveProcedures.map((procedure, index) => (
                  <TabsTrigger key={index} value={index.toString()} className="flex-shrink-0">
                    {procedure.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {preventiveProcedures.map((procedure, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-border overflow-hidden">
                    <div className="relative group h-64 w-full overflow-hidden">
                      <img 
                        src={procedure.image} 
                        alt={procedure.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedImage(procedure.image)}
                      >
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
              <TabsList className="flex w-full overflow-x-auto bg-muted justify-start md:grid md:grid-cols-4 md:justify-center">
                {correctiveProcedures.map((procedure, index) => (
                  <TabsTrigger key={index} value={index.toString()} className="flex-shrink-0">
                    {procedure.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {correctiveProcedures.map((procedure, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="border-border overflow-hidden">
                    <div className="relative group h-64 w-full overflow-hidden">
                      <img 
                        src={procedure.image} 
                        alt={procedure.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center cursor-pointer"
                        onClick={() => setSelectedImage(procedure.image)}
                      >
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
        <DialogContent className="w-[100vw] h-[100vh] md:max-w-[92vw] md:max-h-[90vh] md:w-auto md:h-auto p-2 md:p-6 overflow-hidden bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage || ""} 
              alt="Vista ampliada"
              className="max-w-[95vw] max-h-[95vh] md:max-w-full md:max-h-[80vh] object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Continue Button */}
      <div className="container mx-auto px-4">
        <div className="mt-12 mb-12 text-center">
          <button
            onClick={() => navigate("/tema-iv")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Continúa aquí
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemaIII;