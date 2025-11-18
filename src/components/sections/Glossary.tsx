import { useState } from "react";
import { BookOpen, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const terms = [
    {
      term: "BIOS",
      definition: "Basic Input/Output System. Sistema básico de entrada/salida que inicializa el hardware durante el proceso de arranque.",
    },
    {
      term: "Driver",
      definition: "Controlador de software que permite al sistema operativo comunicarse con dispositivos de hardware.",
    },
    {
      term: "Firmware",
      definition: "Software permanente grabado en la memoria de solo lectura de un dispositivo hardware.",
    },
    {
      term: "Desfragmentación",
      definition: "Proceso de reorganizar archivos en un disco duro para mejorar el rendimiento del sistema.",
    },
    {
      term: "Malware",
      definition: "Software malicioso diseñado para dañar o infiltrarse en un sistema sin el consentimiento del usuario.",
    },
    {
      term: "POST",
      definition: "Power-On Self-Test. Prueba automática que realiza el sistema al encenderse para verificar componentes hardware.",
    },
    {
      term: "RAM",
      definition: "Random Access Memory. Memoria de acceso aleatorio utilizada para almacenar datos temporalmente mientras el equipo está encendido.",
    },
    {
      term: "Registro de Windows",
      definition: "Base de datos jerárquica que almacena configuraciones y opciones del sistema operativo Windows.",
    },
    {
      term: "Sectores defectuosos",
      definition: "Áreas dañadas en un disco duro que ya no pueden almacenar datos de forma confiable.",
    },
    {
      term: "SSD",
      definition: "Solid State Drive. Dispositivo de almacenamiento que utiliza memoria flash, más rápido que los discos duros tradicionales.",
    },
    {
      term: "Temperatura térmica",
      definition: "Medida de calor generado por componentes electrónicos durante su funcionamiento.",
    },
    {
      term: "Actualización",
      definition: "Proceso de instalar versiones más recientes de software para mejorar funcionalidad, seguridad o rendimiento.",
    },
    {
      term: "Caché",
      definition: "Memoria de alta velocidad que almacena datos frecuentemente utilizados para acceso rápido.",
    },
    {
      term: "Partición",
      definition: "División lógica de un disco duro que funciona como unidad independiente.",
    },
    {
      term: "USB",
      definition: "Universal Serial Bus. Estándar de conexión para periféricos y transferencia de datos.",
    },
  ];

  const filteredTerms = terms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glosario" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              Glosario
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Glosario de Términos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Definiciones de términos técnicos utilizados en este manual
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar término..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base border-border"
              />
            </div>
          </div>

          {/* Terms List */}
          <div className="space-y-4">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item, index) => (
                <Card
                  key={index}
                  className="card-hover border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          {item.term}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.definition}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="border-border">
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No se encontraron términos que coincidan con tu búsqueda.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
