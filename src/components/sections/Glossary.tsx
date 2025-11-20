import { useState, useEffect } from "react";
import { BookOpen, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface GlossaryProps {
  initialSearch?: string;
}

const Glossary = ({ initialSearch = "" }: GlossaryProps) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  useEffect(() => {
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const terms = [
    { term: "BIOS", definition: "Basic Input/Output System. Sistema básico de entrada/salida que inicializa el hardware durante el proceso de arranque." },
    { term: "Driver", definition: "Controlador de software que permite al sistema operativo comunicarse con dispositivos de hardware." },
    { term: "Firmware", definition: "Software permanente grabado en la memoria de solo lectura de un dispositivo hardware." },
    { term: "Desfragmentación", definition: "Proceso de reorganizar archivos en un disco duro para mejorar el rendimiento del sistema." },
    { term: "Malware", definition: "Software malicioso diseñado para dañar o infiltrarse en un sistema sin el consentimiento del usuario." },
    { term: "POST", definition: "Power-On Self-Test. Prueba automática que realiza el sistema al encenderse para verificar componentes hardware." },
    { term: "RAM", definition: "Random Access Memory. Memoria de acceso aleatorio utilizada para almacenar datos temporalmente mientras el equipo está encendido." },
    { term: "Registro de Windows", definition: "Base de datos jerárquica que almacena configuraciones y opciones del sistema operativo Windows." },
    { term: "Sectores defectuosos", definition: "Áreas dañadas en un disco duro que ya no pueden almacenar datos de forma confiable." },
    { term: "SSD", definition: "Solid State Drive. Dispositivo de almacenamiento que utiliza memoria flash, más rápido que los discos duros tradicionales." },
    { term: "Temperatura térmica", definition: "Medida de calor generado por componentes electrónicos durante su funcionamiento." },
    { term: "Actualización", definition: "Proceso de instalar versiones más recientes de software para mejorar funcionalidad, seguridad o rendimiento." },
    { term: "Caché", definition: "Memoria de alta velocidad que almacena datos frecuentemente utilizados para acceso rápido." },
    { term: "Partición", definition: "División lógica de un disco duro que funciona como unidad independiente." },
    { term: "USB", definition: "Universal Serial Bus. Estándar de conexión para periféricos y transferencia de datos." },
    { term: "CPU", definition: "Central Processing Unit. Unidad central de procesamiento que ejecuta instrucciones y realiza cálculos." },
    { term: "GPU", definition: "Graphics Processing Unit. Procesador especializado en renderizado de gráficos y video." },
    { term: "HDD", definition: "Hard Disk Drive. Disco duro tradicional que almacena datos en discos magnéticos giratorios." },
    { term: "Motherboard", definition: "Placa base que conecta todos los componentes del sistema y permite su comunicación." },
    { term: "Overclock", definition: "Aumentar la velocidad de funcionamiento de un componente por encima de sus especificaciones de fábrica." },
    { term: "Backup", definition: "Copia de seguridad de datos importantes para prevenir pérdida de información." },
    { term: "Firewall", definition: "Sistema de seguridad que controla el tráfico de red entrante y saliente." },
    { term: "TRIM", definition: "Comando que permite al sistema operativo informar a un SSD qué bloques de datos ya no están en uso." },
    { term: "Bootloader", definition: "Programa que carga el sistema operativo durante el arranque del equipo." },
    { term: "UEFI", definition: "Unified Extensible Firmware Interface. Reemplazo moderno del BIOS tradicional." },
    { term: "Thermal Paste", definition: "Pasta térmica que mejora la transferencia de calor entre CPU y disipador." },
    { term: "PSU", definition: "Power Supply Unit. Fuente de alimentación que convierte corriente alterna en corriente continua." },
    { term: "Antivirus", definition: "Software diseñado para detectar, prevenir y eliminar malware del sistema." },
    { term: "Chipset", definition: "Conjunto de circuitos integrados que gestionan la comunicación entre CPU y otros componentes." },
    { term: "SATA", definition: "Serial ATA. Interfaz de conexión para dispositivos de almacenamiento." },
  ];

  const filteredTerms = terms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glosario" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Terminología Técnica</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Glosario de Términos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra definiciones claras de los términos técnicos utilizados en este manual
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar término..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item, index) => (
                <Card
                  key={index}
                  className="card-hover border-border animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {item.term}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.definition}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-muted-foreground">
                  No se encontraron términos que coincidan con tu búsqueda
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
