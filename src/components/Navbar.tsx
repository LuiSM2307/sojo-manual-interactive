import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoInstitucional from "@/assets/logo-institucional.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "introduccion", label: "Introducción" },
    { 
      id: "tema-i", 
      label: "Tema I", 
      submenu: [
        { id: "datos-institucion", label: "Datos de la Institución" },
        { id: "sobre-manual", label: "Sobre el Manual" },
        { id: "conceptos", label: "Conceptos Básicos" },
      ]
    },
    { 
      id: "tema-ii", 
      label: "Tema II", 
      submenu: [
        { id: "tema-ii", label: "Hardware - Introducción" },
        { id: "componentes", label: "Componentes Principales" },
        { id: "guias-hardware", label: "Guías Paso a Paso" },
      ]
    },
    { 
      id: "tema-iii", 
      label: "Tema III", 
      submenu: [
        { id: "tema-iii", label: "Software - Introducción" },
        { id: "tareas-software", label: "Tareas de Mantenimiento" },
        { id: "procedimientos-software", label: "Procedimientos Detallados" },
      ]
    },
    { 
      id: "tema-iv", 
      label: "Tema IV", 
      submenu: [
        { id: "tema-iv", label: "Diagnóstico - Introducción" },
        { id: "codigos-bios", label: "Códigos BIOS" },
        { id: "diagnostico", label: "Procedimientos de Diagnóstico" },
        { id: "problemas-frecuentes", label: "Problemas Frecuentes" },
      ]
    },
    { id: "conclusion", label: "Conclusión" },
    { id: "glosario", label: "Glosario" },
    { id: "desarrolladores", label: "Desarrolladores", isLink: true, path: "/desarrolladores" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoInstitucional} 
              alt="Logo U.E.N. Vicente Emilio Sojo" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground">U.E.N. Vicente Emilio Sojo</h1>
              <p className="text-xs text-muted-foreground">Manual Técnico Interactivo</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground hover:text-primary">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border z-50">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.id}
                        onClick={() => scrollToSection(subItem.id)}
                        className="cursor-pointer hover:bg-accent"
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.isLink ? (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => window.location.href = item.path}
                  className="text-foreground hover:text-primary"
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary"
                >
                  {item.label}
                </Button>
              )
            )}
            
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              className="text-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="hidden lg:block py-4 animate-fade-in">
            <Input
              type="text"
              placeholder="Buscar en el manual..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md mx-auto"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            <div className="px-4 pb-3">
              <Input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            {navItems.map((item) => (
              <div key={item.id}>
                {item.submenu ? (
                  <div className="border-b border-border last:border-0">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-3 hover:bg-accent transition-colors text-foreground font-medium"
                    >
                      {item.label}
                    </button>
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => scrollToSection(subItem.id)}
                        className="w-full text-left px-8 py-2 hover:bg-accent transition-colors text-muted-foreground text-sm"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                ) : item.isLink ? (
                  <button
                    onClick={() => window.location.href = item.path}
                    className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b border-border last:border-0 text-foreground"
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b border-border last:border-0 text-foreground"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
