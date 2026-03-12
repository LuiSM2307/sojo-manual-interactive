import { ArrowDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoInstitucional from "@/assets/logo-institucional.png";

const Hero = () => {
  const scrollToIntroduction = () => {
    const element = document.getElementById("introduccion");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-soft">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-2 rounded-full mb-8 animate-slide-up">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Manual Técnico Educativo</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Manual Técnico</span>
            <br />
            <span className="text-foreground">Interactivo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Mantenimiento Preventivo y Correctivo
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            de Hardware y Software
          </p>

          {/* Institution */}
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-lg px-6 py-4 mb-8 shadow-md">
            <img 
              src={logoInstitucional} 
              alt="Logo Institucional" 
              className="w-16 h-16 object-contain"
            />
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">Unidad Educativa Nacional</p>
              <p className="text-2xl font-bold text-primary">"Vicente Emilio Sojo"</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              onClick={scrollToIntroduction}
              className="bg-cta text-cta-foreground hover:bg-cta-hover transition-all transform hover:scale-105 shadow-lg text-lg px-8 py-6 rounded-full font-bold"
            >
              Explorar Manual
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: "4", label: "Temas" },
              { number: "10+", label: "Secciones" },
              { number: "50+", label: "Conceptos" },
              { number: "100%", label: "Interactivo" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
