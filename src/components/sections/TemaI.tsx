import { Building, History, Eye, MapPin, FileText, Target, Lightbulb, Wrench, Calendar, Award, GraduationCap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import fachadaInstitucion from "@/assets/fachada-institucion.jpg";
import mantenimientoImg from "@/assets/concepts/mantenimiento.jpg";
import sistemasInformaticosImg from "@/assets/concepts/sistemas-informaticos.jpg";
import tiposMantenimientoImg from "@/assets/concepts/tipos-mantenimiento.jpg";

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
              Comienza Aquí
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

            {/* Reseña Histórica - Full Width */}
            <Card className="card-hover border-border mb-8 overflow-hidden bg-gradient-to-br from-card to-card/50">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <History className="w-7 h-7 text-primary" />
                  Reseña Histórica
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-8 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={fachadaInstitucion} 
                    alt="Fachada de la Unidad Educativa Nacional Vicente Emilio Sojo" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Línea vertical */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

                  <div className="space-y-8">
                    {/* 1987 - Creación */}
                    <div className="relative pl-20 animate-fade-in group">
                      <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-background group-hover:ring-primary/20 transition-all">
                        <Calendar className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-primary/5 rounded-lg p-5 border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-primary">1987</span>
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Fundación</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Creación de la Escuela</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          En septiembre de 1987 se crea la Escuela Básica Nacional Vicente Emilio Sojo (III etapa) por decisión del Ministerio de Educación, 
                          en el marco de la conmemoración del centenario del nacimiento del insigne músico venezolano Don Vicente Emilio Sojo. 
                          Inicia actividades administrativas el 16 de septiembre y pedagógicas el 1 de octubre en el turno de la tarde 
                          en los espacios de la E.B.N. Miguel Ángel Álvarez del sector La Mora I.
                        </p>
                      </div>
                    </div>

                    {/* 1987-1991 - Conflictos y lucha */}
                    <div className="relative pl-20 animate-fade-in group" style={{ animationDelay: '0.1s' }}>
                      <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center ring-4 ring-background group-hover:ring-accent/20 transition-all">
                        <Users className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <div className="bg-accent/10 rounded-lg p-5 border border-accent/30 hover:border-accent/50 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-foreground">1987-1991</span>
                          <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">Lucha</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Años de Perseverancia</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Durante 4 años sobrevinieron conflictos en lo pedagógico y académico. La Sub Directora Licenciada María Cardozo, 
                          junto con representantes, estudiantes, obreros y docentes, lograron conquistar un lote de terreno 
                          donde se construiría la planta física del liceo.
                        </p>
                      </div>
                    </div>

                    {/* 1994 - Fundación del Liceo */}
                    <div className="relative pl-20 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
                      <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-background group-hover:ring-primary/20 transition-all">
                        <Award className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-primary/5 rounded-lg p-5 border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-primary">1994</span>
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Hito Histórico</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Sede Propia y Nueva Era</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          El Gobernador Carlos Tablante funda oficialmente el liceo. En diciembre de 1994 se muda la E.B.N. Vicente Emilio Sojo 
                          a su sede propia. Se crean clubes de mantenimiento, disciplina, biblioteca, cruz roja, danzas, ciencia, deportes y la Banda Show. 
                          Se inician actividades con el apoyo de FAJES y PROVIVE.
                        </p>
                      </div>
                    </div>

                    {/* 1997 - Ciclo Diversificado */}
                    <div className="relative pl-20 animate-fade-in group" style={{ animationDelay: '0.3s' }}>
                      <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center ring-4 ring-background group-hover:ring-accent/20 transition-all">
                        <GraduationCap className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <div className="bg-accent/10 rounded-lg p-5 border border-accent/30 hover:border-accent/50 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-foreground">1997</span>
                          <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">Expansión</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Apertura del Ciclo Diversificado</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Se apertura el ciclo diversificado con la mención Ciencias, introduciendo una nueva oportunidad de estudio 
                          en el Municipio José Félix Ribas del Estado Aragua, consolidando la institución como referente educativo regional.
                        </p>
                      </div>
                    </div>

                    {/* Actualidad - Liceo Piloto */}
                    <div className="relative pl-20 animate-fade-in group" style={{ animationDelay: '0.4s' }}>
                      <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ring-4 ring-background group-hover:ring-primary/20 transition-all shadow-lg">
                        <Award className="w-4 h-4 text-primary-foreground animate-pulse" />
                      </div>
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-5 border border-primary/30 hover:border-primary/50 hover:shadow-lg transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Actualidad</span>
                          <span className="text-xs bg-gradient-to-r from-primary to-accent text-primary-foreground px-2 py-1 rounded-full">Presente</span>
                        </div>
                        <h4 className="font-semibold text-lg mb-2 text-foreground">Liceo Piloto en Transformación</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          La Unidad Educativa Nacional Vicente Emilio Sojo es un liceo piloto para los diferentes cambios educativos 
                          propuestos por el Ministerio del Poder Popular para la Educación, participando activamente en el 
                          Proceso de Transformación Pedagógica Curricular en Educación Media.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visión y Misión */}
            <div className="grid md:grid-cols-1 gap-6 mb-8">
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
                      <p className="text-muted-foreground">
                        Ser una institución educativa de excelencia, reconocida a nivel regional y nacional 
                        por su compromiso con la formación integral de estudiantes capaces de transformar 
                        la sociedad. Aspiramos a consolidarnos como un centro de referencia en innovación 
                        educativa y desarrollo tecnológico, preparando ciudadanos competentes que contribuyan 
                        al progreso de Venezuela y enfrenten con éxito los desafíos del siglo XXI.
                      </p>
                    </TabsContent>
                    <TabsContent value="mision" className="mt-4">
                      <p className="text-muted-foreground">
                        Formar ciudadanos íntegros con sólidos valores éticos, morales y cívicos, dotados 
                        de capacidades académicas y tecnológicas que les permitan desenvolverse exitosamente 
                        en la sociedad. Nos comprometemos a brindar una educación de calidad que promueva 
                        el pensamiento crítico, la creatividad y el desarrollo de competencias necesarias 
                        para la vida personal y profesional, contribuyendo así al desarrollo sostenible de 
                        nuestra comunidad y del país.
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
                    <p>
                      <strong className="text-foreground">Dirección:</strong>{" "}
                      <a 
                        href="https://maps.app.goo.gl/qzZGqozNBSDkjh597" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Urb. La Mora Av. 01 cruce con Av. 02. Municipio José Félix Ribas
                      </a>
                    </p>
                    <p><strong className="text-foreground">Ciudad:</strong> La Victoria</p>
                    <p><strong className="text-foreground">Estado:</strong> Aragua</p>
                    <p><strong className="text-foreground">Teléfono:</strong> 0412-0464320 - 0244-3228699</p>
                    <p><strong className="text-foreground">Dpto. de Evaluación:</strong> 0244-9958021</p>
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
                    <p><strong className="text-foreground">Niveles:</strong> Bachillerato</p>
                    <p><strong className="text-foreground">Dependencia:</strong> Ministerio del Poder Popular para la Educación</p>
                    <p><strong className="text-foreground">RIF:</strong> G-20006016-6</p>
                    <p><strong className="text-foreground">Email:</strong> vicenteemiliosojo2015@gmail.com</p>
                    <p><strong className="text-foreground">Código Estadístico:</strong> 1-50923</p>
                    <p><strong className="text-foreground">Código DEA:</strong> S3485DO5O5</p>
                    <p><strong className="text-foreground">Código:</strong> 007913768</p>
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

            <Card className="card-hover border-border mb-8 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors">
                    <h5 className="font-semibold text-xl mb-4 text-primary flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Objetivo General
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Proporcionar una guía técnica completa, clara y práctica para el mantenimiento
                      preventivo y correctivo de los equipos informáticos de la institución,
                      garantizando su óptimo funcionamiento.
                    </p>
                  </div>
                  <div className="bg-accent/50 p-6 rounded-lg border border-border hover:border-primary/20 transition-colors">
                    <h5 className="font-semibold text-xl mb-4 text-primary">Objetivos Específicos</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3 group">
                        <span className="text-primary mt-1 group-hover:scale-110 transition-transform">•</span>
                        <span>Estandarizar procedimientos de mantenimiento</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="text-primary mt-1 group-hover:scale-110 transition-transform">•</span>
                        <span>Capacitar al personal técnico</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="text-primary mt-1 group-hover:scale-110 transition-transform">•</span>
                        <span>Prevenir fallas y extender vida útil de equipos</span>
                      </li>
                      <li className="flex items-start gap-3 group">
                        <span className="text-primary mt-1 group-hover:scale-110 transition-transform">•</span>
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
              <AccordionItem value="item-1" className="bg-gradient-to-br from-card to-card/50 border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  ¿Qué es mantenimiento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={mantenimientoImg} 
                      alt="Concepto de mantenimiento" 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="leading-relaxed">
                    El mantenimiento es el conjunto de acciones técnicas y administrativas destinadas a
                    conservar o restablecer un sistema o equipo a un estado en el cual pueda cumplir con
                    su función requerida. Incluye actividades de inspección, limpieza, lubricación,
                    ajuste, calibración y reparación.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gradient-to-br from-card to-card/50 border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  ¿Qué es mantenimiento de un sistema informático?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={sistemasInformaticosImg} 
                      alt="Mantenimiento de sistemas informáticos" 
                      className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="leading-relaxed">
                    Es el conjunto de procedimientos técnicos aplicados tanto al hardware como al software
                    de un equipo de computación, con el objetivo de garantizar su correcto funcionamiento,
                    prevenir fallas, optimizar su rendimiento y prolongar su vida útil. Abarca desde la
                    limpieza física de componentes hasta la actualización de sistemas operativos y aplicaciones.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gradient-to-br from-card to-card/50 border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  Tipos de mantenimiento
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={tiposMantenimientoImg} 
                      alt="Tipos de mantenimiento" 
                      className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-5 rounded-lg border border-primary/20 hover:border-primary/30 hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench className="w-5 h-5 text-primary" />
                        <h5 className="font-semibold text-lg text-primary">Preventivo</h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Acciones planificadas y periódicas para prevenir fallas y garantizar el
                        funcionamiento óptimo del sistema. Incluye limpieza, actualización y
                        verificación de componentes.
                      </p>
                    </div>
                    <div className="bg-accent/50 p-5 rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <Wrench className="w-5 h-5 text-primary" />
                        <h5 className="font-semibold text-lg text-primary">Correctivo</h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
