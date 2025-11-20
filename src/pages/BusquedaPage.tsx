import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const BusquedaPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<Array<{
    title: string;
    path: string;
    content: string;
    section: string;
  }>>([]);

  // Contenido del manual para búsqueda
  const manualContent = [
    {
      title: "Introducción al Manual",
      path: "/#introduccion",
      section: "Introducción",
      content: "Manual técnico interactivo de mantenimiento de computadoras para la U.E.N. Vicente Emilio Sojo"
    },
    {
      title: "Datos de la Institución",
      path: "/tema-i#datos-institucion",
      section: "Tema I",
      content: "U.E.N. Vicente Emilio Sojo - Información institucional, historia y ubicación"
    },
    {
      title: "Sobre el Manual",
      path: "/tema-i#sobre-manual",
      section: "Tema I",
      content: "Objetivos, alcance y estructura del manual técnico de mantenimiento"
    },
    {
      title: "Conceptos Básicos",
      path: "/tema-i#conceptos",
      section: "Tema I",
      content: "Hardware, software, mantenimiento preventivo y correctivo, sistema operativo, drivers, BIOS"
    },
    {
      title: "Hardware - Componentes",
      path: "/tema-ii#componentes",
      section: "Tema II - Hardware",
      content: "Procesador CPU, RAM, disco duro, placa madre, fuente de poder, tarjeta gráfica, monitor, teclado, mouse"
    },
    {
      title: "Guías de Mantenimiento de Hardware",
      path: "/tema-ii#guias",
      section: "Tema II - Hardware",
      content: "Limpieza de componentes, instalación de hardware, reemplazo de piezas, mantenimiento preventivo"
    },
    {
      title: "Software - Mantenimiento",
      path: "/tema-iii#tareas",
      section: "Tema III - Software",
      content: "Actualización del sistema operativo, antivirus, limpieza de archivos temporales, desfragmentación, optimización"
    },
    {
      title: "Procedimientos de Software",
      path: "/tema-iii#procedimientos",
      section: "Tema III - Software",
      content: "Instalación de programas, actualización de drivers, configuración de seguridad, backup de datos"
    },
    {
      title: "Diagnóstico y Solución de Problemas",
      path: "/tema-iv#diagnostico",
      section: "Tema IV - Diagnóstico",
      content: "Códigos BIOS, problemas comunes, diagnóstico de hardware y software, herramientas de diagnóstico"
    },
    {
      title: "Códigos BIOS",
      path: "/tema-iv#codigos",
      section: "Tema IV - Diagnóstico",
      content: "Interpretación de pitidos, códigos de error POST, diagnóstico de arranque"
    },
    {
      title: "Problemas Frecuentes",
      path: "/tema-iv#problemas",
      section: "Tema IV - Diagnóstico",
      content: "Solución de errores comunes, pantallas azules, problemas de arranque, lentitud del sistema"
    }
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const filtered = manualContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query) ||
          item.section.toLowerCase().includes(query)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="pt-20 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4 text-gradient">
                Buscar en el Manual
              </h1>
              <p className="text-muted-foreground mb-8">
                Encuentra información rápidamente en todas las secciones del manual
              </p>
              
              {/* Search Input */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar hardware, software, mantenimiento..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                  autoFocus
                />
              </div>
            </div>

            {/* Results */}
            {searchQuery.trim() ? (
              <div className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  {results.length > 0
                    ? `Se encontraron ${results.length} resultado${results.length !== 1 ? 's' : ''}`
                    : "No se encontraron resultados"}
                </p>
                
                {results.map((result, index) => (
                  <Link key={index} to={result.path}>
                    <Card className="card-hover cursor-pointer animate-fade-in hover:border-primary transition-colors">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 text-foreground hover:text-primary transition-colors">
                              {result.title}
                            </CardTitle>
                            <p className="text-sm text-primary font-medium mb-2">
                              {result.section}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {result.content}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground animate-fade-in">
                <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Escribe algo para buscar en el manual</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BusquedaPage;
