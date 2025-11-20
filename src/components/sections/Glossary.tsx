import { useState, useEffect, useMemo } from "react";
import { BookOpen, Search, Hash, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GlossaryProps {
  initialSearch?: string;
}

interface Term {
  term: string;
  definition: string;
  category?: string;
}

const Glossary = ({ initialSearch = "" }: GlossaryProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const terms: Term[] = [
    // A
    { term: "Actualización", definition: "Proceso de instalar versiones más recientes de software para mejorar funcionalidad, seguridad o rendimiento.", category: "Software" },
    { term: "Antivirus", definition: "Software diseñado para detectar, prevenir y eliminar malware del sistema.", category: "Seguridad" },
    { term: "AMI BIOS", definition: "American Megatrends BIOS. Uno de los fabricantes más comunes de sistemas BIOS.", category: "Hardware" },
    
    // B
    { term: "Backup", definition: "Copia de seguridad de datos importantes para prevenir pérdida de información.", category: "Software" },
    { term: "BIOS", definition: "Basic Input/Output System. Sistema básico de entrada/salida que inicializa el hardware durante el proceso de arranque.", category: "Hardware" },
    { term: "BSOD", definition: "Blue Screen of Death. Pantalla azul de error crítico en Windows que indica fallo del sistema.", category: "Software" },
    { term: "Bootloader", definition: "Programa que carga el sistema operativo durante el arranque del equipo.", category: "Software" },
    
    // C
    { term: "Caché", definition: "Memoria de alta velocidad que almacena datos frecuentemente utilizados para acceso rápido.", category: "Hardware" },
    { term: "CPU", definition: "Central Processing Unit. Unidad central de procesamiento que ejecuta instrucciones y realiza cálculos.", category: "Hardware" },
    { term: "Chipset", definition: "Conjunto de circuitos integrados que gestionan la comunicación entre CPU y otros componentes.", category: "Hardware" },
    { term: "CHKDSK", definition: "Herramienta de Windows para verificar y reparar errores del sistema de archivos en discos.", category: "Software" },
    { term: "CMOS", definition: "Complementary Metal-Oxide Semiconductor. Memoria que almacena configuraciones del BIOS.", category: "Hardware" },
    
    // D
    { term: "Desfragmentación", definition: "Proceso de reorganizar archivos en un disco duro para mejorar el rendimiento del sistema.", category: "Software" },
    { term: "Driver", definition: "Controlador de software que permite al sistema operativo comunicarse con dispositivos de hardware.", category: "Software" },
    { term: "DMA", definition: "Direct Memory Access. Acceso directo a memoria que permite transferir datos sin intervención del CPU.", category: "Hardware" },
    { term: "DVD Drive", definition: "Unidad óptica para leer y escribir discos DVD.", category: "Hardware" },
    
    // E
    { term: "ESD", definition: "Electrostatic Discharge. Descarga electrostática que puede dañar componentes electrónicos.", category: "Hardware" },
    
    // F
    { term: "Firmware", definition: "Software permanente grabado en la memoria de solo lectura de un dispositivo hardware.", category: "Hardware" },
    { term: "Firewall", definition: "Sistema de seguridad que controla el tráfico de red entrante y saliente.", category: "Seguridad" },
    { term: "Fuente de Alimentación", definition: "Componente que convierte corriente alterna en corriente continua para alimentar el PC.", category: "Hardware" },
    
    // G
    { term: "GPU", definition: "Graphics Processing Unit. Procesador especializado en renderizado de gráficos y video.", category: "Hardware" },
    { term: "Gabinete", definition: "Carcasa metálica que contiene y protege los componentes internos de la computadora.", category: "Hardware" },
    
    // H
    { term: "HDD", definition: "Hard Disk Drive. Disco duro tradicional que almacena datos en discos magnéticos giratorios.", category: "Hardware" },
    { term: "Hardware", definition: "Componentes físicos y tangibles de un sistema informático.", category: "General" },
    
    // I
    { term: "IDE", definition: "Integrated Drive Electronics. Interfaz antigua para conectar dispositivos de almacenamiento.", category: "Hardware" },
    
    // L
    { term: "Limpieza de Disco", definition: "Herramienta para eliminar archivos temporales y liberar espacio en el disco duro.", category: "Software" },
    
    // M
    { term: "Malware", definition: "Software malicioso diseñado para dañar o infiltrarse en un sistema sin el consentimiento del usuario.", category: "Seguridad" },
    { term: "Mantenimiento Correctivo", definition: "Reparación de equipos después de que ha ocurrido una falla o problema.", category: "Mantenimiento" },
    { term: "Mantenimiento Preventivo", definition: "Acciones planificadas para evitar fallas futuras en el sistema.", category: "Mantenimiento" },
    { term: "Memtest", definition: "Herramienta de diagnóstico para probar la memoria RAM en busca de errores.", category: "Software" },
    { term: "Motherboard", definition: "Placa base que conecta todos los componentes del sistema y permite su comunicación.", category: "Hardware" },
    { term: "Monitor", definition: "Dispositivo de salida que muestra la interfaz visual del sistema operativo y aplicaciones.", category: "Hardware" },
    { term: "Mouse", definition: "Dispositivo señalador que permite interactuar con la interfaz gráfica del sistema.", category: "Hardware" },
    
    // O
    { term: "Overclock", definition: "Aumentar la velocidad de funcionamiento de un componente por encima de sus especificaciones de fábrica.", category: "Hardware" },
    { term: "Optimización", definition: "Proceso de mejorar el rendimiento del sistema mediante ajustes de configuración.", category: "Software" },
    
    // P
    { term: "Partición", definition: "División lógica de un disco duro que funciona como unidad independiente.", category: "Software" },
    { term: "Pasta Térmica", definition: "Compuesto que mejora la transferencia de calor entre CPU y disipador.", category: "Hardware" },
    { term: "POST", definition: "Power-On Self-Test. Prueba automática que realiza el sistema al encenderse para verificar componentes hardware.", category: "Hardware" },
    { term: "PSU", definition: "Power Supply Unit. Fuente de alimentación que convierte corriente alterna en corriente continua.", category: "Hardware" },
    { term: "Phoenix BIOS", definition: "Fabricante de sistemas BIOS conocido por sus códigos de pitido específicos.", category: "Hardware" },
    
    // R
    { term: "RAM", definition: "Random Access Memory. Memoria de acceso aleatorio utilizada para almacenar datos temporalmente mientras el equipo está encendido.", category: "Hardware" },
    { term: "Registro de Windows", definition: "Base de datos jerárquica que almacena configuraciones y opciones del sistema operativo Windows.", category: "Software" },
    { term: "ROM", definition: "Read-Only Memory. Memoria de solo lectura que contiene firmware permanente.", category: "Hardware" },
    
    // S
    { term: "SATA", definition: "Serial ATA. Interfaz de conexión para dispositivos de almacenamiento.", category: "Hardware" },
    { term: "Sectores Defectuosos", definition: "Áreas dañadas en un disco duro que ya no pueden almacenar datos de forma confiable.", category: "Hardware" },
    { term: "Sistema Operativo", definition: "Software principal que gestiona el hardware y permite ejecutar aplicaciones.", category: "Software" },
    { term: "Software", definition: "Conjunto de programas e instrucciones que controlan el funcionamiento del hardware.", category: "General" },
    { term: "SSD", definition: "Solid State Drive. Dispositivo de almacenamiento que utiliza memoria flash, más rápido que los discos duros tradicionales.", category: "Hardware" },
    { term: "Sobrecalentamiento", definition: "Condición donde los componentes alcanzan temperaturas excesivas que pueden causar daños.", category: "Hardware" },
    
    // T
    { term: "Tarjeta de Red", definition: "Componente que permite la conexión del equipo a una red de comunicaciones.", category: "Hardware" },
    { term: "Teclado", definition: "Dispositivo de entrada que permite introducir texto y comandos al sistema.", category: "Hardware" },
    { term: "Temperatura Térmica", definition: "Medida de calor generado por componentes electrónicos durante su funcionamiento.", category: "Hardware" },
    { term: "TRIM", definition: "Comando que permite al sistema operativo informar a un SSD qué bloques de datos ya no están en uso.", category: "Software" },
    
    // U
    { term: "UEFI", definition: "Unified Extensible Firmware Interface. Reemplazo moderno del BIOS tradicional.", category: "Hardware" },
    { term: "USB", definition: "Universal Serial Bus. Estándar de conexión para periféricos y transferencia de datos.", category: "Hardware" },
    
    // V
    { term: "Ventilador", definition: "Dispositivo de refrigeración que disipa el calor generado por componentes del sistema.", category: "Hardware" },
    { term: "Virus", definition: "Tipo de malware que se replica e infecta archivos del sistema.", category: "Seguridad" },
  ];

  // Sort terms alphabetically
  const sortedTerms = useMemo(() => {
    return [...terms].sort((a, b) => a.term.localeCompare(b.term, 'es'));
  }, []);

  // Filter terms based on search and selected letter
  const filteredTerms = useMemo(() => {
    let filtered = sortedTerms;
    
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedLetter) {
      filtered = filtered.filter(
        (item) => item.term.charAt(0).toUpperCase() === selectedLetter
      );
    }
    
    return filtered;
  }, [sortedTerms, searchTerm, selectedLetter]);

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: Term[] } = {};
    filteredTerms.forEach((term) => {
      const letter = term.term.charAt(0).toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  // Get available letters
  const availableLetters = useMemo(() => {
    const letters = new Set(sortedTerms.map(term => term.term.charAt(0).toUpperCase()));
    return Array.from(letters).sort();
  }, [sortedTerms]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLetter(null);
  };

  return (
    <section id="glosario" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Terminología Técnica</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Glosario de Términos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Encuentra definiciones claras de los términos técnicos utilizados en este manual
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">{sortedTerms.length}</strong> términos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">{availableLetters.length}</strong> categorías
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 animate-fade-in">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar término o definición..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-12 h-12 text-base"
              />
              {(searchTerm || selectedLetter) && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={clearFilters}
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
            
            {/* Active Filters */}
            {selectedLetter && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-sm text-muted-foreground">Filtrando por:</span>
                <Badge variant="secondary" className="gap-2">
                  Letra {selectedLetter}
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-destructive" 
                    onClick={() => setSelectedLetter(null)}
                  />
                </Badge>
              </div>
            )}
          </div>

          {/* Alphabet Navigation */}
          <Card className="mb-8 border-border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Hash className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Navegación Alfabética</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {alphabet.map((letter) => {
                  const isAvailable = availableLetters.includes(letter);
                  const isSelected = selectedLetter === letter;
                  
                  return (
                    <Button
                      key={letter}
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      className={`w-10 h-10 p-0 font-semibold ${!isAvailable && !isSelected ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                      disabled={!isAvailable && !isSelected}
                      onClick={() => setSelectedLetter(isSelected ? null : letter)}
                    >
                      {letter}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Terms by Letter */}
          {Object.keys(groupedTerms).length > 0 ? (
            <div className="space-y-12">
              {Object.keys(groupedTerms).sort().map((letter) => (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-24 animate-fade-in">
                  {/* Letter Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-primary-foreground">{letter}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Letra {letter}</h3>
                      <p className="text-sm text-muted-foreground">
                        {groupedTerms[letter].length} {groupedTerms[letter].length === 1 ? 'término' : 'términos'}
                      </p>
                    </div>
                  </div>

                  {/* Terms Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {groupedTerms[letter].map((item, index) => (
                      <Card
                        key={index}
                        className="border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h4 className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                              {item.term}
                            </h4>
                            {item.category && (
                              <Badge variant="secondary" className="text-xs shrink-0">
                                {item.category}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.definition}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Card className="border-border">
              <CardContent className="p-12 text-center">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No se encontraron términos
                </h3>
                <p className="text-muted-foreground mb-4">
                  No hay términos que coincidan con tu búsqueda
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Limpiar filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Glossary;