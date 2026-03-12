import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load and hash changes
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 100;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busqueda?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setShowSearch(false);
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "introduccion", label: "Inicio", path: "/" },
    { 
      id: "tema-i", 
      label: "Introducción", 
      path: "/tema-i",
      submenu: [
        { id: "datos-institucion", label: "Datos de la Institución", path: "/tema-i#datos-institucion" },
        { id: "sobre-manual", label: "Sobre el Manual", path: "/tema-i#sobre-manual" },
        { id: "conceptos", label: "Conceptos Básicos", path: "/tema-i#conceptos" },
      ]
    },
    { 
      id: "tema-ii", 
      label: "Hardware", 
      path: "/tema-ii",
      submenu: [
        { id: "introduccion-hw", label: "Hardware - Introducción", path: "/tema-ii#introduccion" },
        { id: "guias-hardware", label: "Guías de Mantenimiento", path: "/tema-ii#guias" },
        { id: "componentes", label: "Componentes Principales", path: "/tema-ii#componentes" },
      ]
    },
    { 
      id: "tema-iii", 
      label: "Tema III", 
      path: "/tema-iii",
      submenu: [
        { id: "introduccion-sw", label: "Software - Introducción", path: "/tema-iii#introduccion" },
        { id: "herramientas-sw", label: "Herramientas Necesarias", path: "/tema-iii#herramientas" },
        { id: "preventivo-sw", label: "Mantenimiento Preventivo", path: "/tema-iii#preventivo" },
        { id: "correctivo-sw", label: "Mantenimiento Correctivo", path: "/tema-iii#correctivo" },
        { id: "verificacion-sw", label: "Verificación Final", path: "/tema-iii#verificacion" },
      ]
    },
    { 
      id: "tema-iv", 
      label: "Tema IV", 
      path: "/tema-iv",
      submenu: [
        { id: "introduccion-diag", label: "Diagnóstico - Introducción", path: "/tema-iv#introduccion" },
        { id: "codigos-bios", label: "Códigos BIOS", path: "/tema-iv#codigos" },
        { id: "diagnostico", label: "Procedimientos de Diagnóstico", path: "/tema-iv#diagnostico" },
        { id: "problemas-frecuentes", label: "Problemas Frecuentes", path: "/tema-iv#problemas" },
      ]
    },
    { id: "conclusion", label: "Conclusión", path: "/conclusion" },
    { id: "glosario", label: "Glosario", path: "/glosario" },
    { id: "desarrolladores", label: "Desarrolladores", path: "/desarrolladores" },
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
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logoInstitucional} 
              alt="Logo U.E.N. Vicente Emilio Sojo" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground">U.E.N. Vicente Emilio Sojo</h1>
              <p className="text-xs text-muted-foreground">Manual Técnico Interactivo</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) =>
              item.submenu ? (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`text-foreground hover:text-primary ${location.pathname === item.path ? 'text-primary' : ''}`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border z-50">
                    {item.submenu.map((subItem, index) => (
                      <DropdownMenuItem
                        key={subItem.id}
                        onClick={() => {
                          // Si es la primera opción, ir al inicio de la página
                          if (index === 0) {
                            navigate(item.path);
                            setTimeout(() => window.scrollTo(0, 0), 100);
                          } else {
                            // Si ya estamos en la página, forzar la navegación hash
                            if (location.pathname === item.path) {
                              const hash = subItem.path.split('#')[1];
                              if (hash) {
                                const element = document.querySelector(`#${hash}`);
                                if (element) {
                                  const elementPosition = element.getBoundingClientRect().top;
                                  const offsetPosition = elementPosition + window.pageYOffset - 100;
                                  
                                  window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                  });
                                }
                              }
                            } else {
                              navigate(subItem.path);
                            }
                          }
                        }}
                        className="cursor-pointer hover:bg-accent"
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => navigate(item.path)}
                  className={`text-foreground hover:text-primary ${location.pathname === item.path ? 'text-primary' : ''}`}
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
          <form onSubmit={handleSearch} className="hidden lg:block py-4 animate-fade-in">
            <Input
              type="text"
              placeholder="Buscar en todo el manual..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md mx-auto"
            />
          </form>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute left-4 right-4 top-full mt-2 z-[100] animate-fade-in bg-background border border-border rounded-lg shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto">
            <form onSubmit={handleSearch} className="px-4 py-3 border-b border-border sticky top-0 bg-background z-10">
              <Input
                type="text"
                placeholder="Buscar en todo el manual..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </form>
            <div className="py-2">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.submenu ? (
                    <div className="border-b border-border last:border-0">
                      <button
                        onClick={() => {
                          navigate(item.path);
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-accent transition-colors text-foreground font-medium"
                      >
                        {item.label}
                      </button>
                      {item.submenu.map((subItem, index) => (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            if (index === 0) {
                              navigate(item.path);
                              setTimeout(() => window.scrollTo(0, 0), 100);
                            } else {
                              if (location.pathname === item.path) {
                                const hash = subItem.path.split('#')[1];
                                if (hash) {
                                  const element = document.querySelector(`#${hash}`);
                                  if (element) {
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - 100;
                                    
                                    window.scrollTo({
                                      top: offsetPosition,
                                      behavior: 'smooth'
                                    });
                                  }
                                }
                              } else {
                                navigate(subItem.path);
                              }
                            }
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-8 py-2 hover:bg-accent transition-colors text-muted-foreground text-sm"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b border-border last:border-0 text-foreground"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
