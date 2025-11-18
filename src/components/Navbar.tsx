import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoInstitucional from "@/assets/logo-institucional.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { id: "tema-ii", label: "Tema II - Hardware" },
    { id: "tema-iii", label: "Tema III - Software" },
    { id: "tema-iv", label: "Tema IV - Diagnóstico" },
    { id: "conclusion", label: "Conclusión" },
    { id: "glosario", label: "Glosario" },
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
                  <DropdownMenuContent className="bg-card border-border">
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
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
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
