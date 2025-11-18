import { Mail, MapPin, Phone, BookOpen, Github, Linkedin } from "lucide-react";
import logoInstitucional from "@/assets/logo-institucional.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Institution Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoInstitucional} 
                alt="Logo U.E.N. Vicente Emilio Sojo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">U.E.N. Vicente Emilio Sojo</h3>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Institución educativa comprometida con la excelencia académica y tecnológica.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span>[Dirección de la institución]</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-light" />
                <span>[Teléfono de contacto]</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-light" />
                <span>[email@institucion.edu]</span>
              </div>
            </div>
          </div>

          {/* About Manual */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary-light" />
              Sobre el Manual
            </h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Manual Técnico Interactivo diseñado para facilitar el mantenimiento de sistemas
              informáticos en nuestra institución educativa.
            </p>
            <div className="space-y-2 text-sm">
              <p><strong className="text-primary-light">Versión:</strong> 1.0</p>
              <p><strong className="text-primary-light">Última actualización:</strong> {currentYear}</p>
              <p><strong className="text-primary-light">Tipo:</strong> Manual Interactivo Web</p>
            </div>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-bold text-lg mb-4">Desarrolladores</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Este manual fue desarrollado por estudiantes y personal técnico de la institución.
            </p>
            <div className="space-y-3">
              <div className="bg-secondary-foreground/5 p-3 rounded-lg">
                <p className="font-semibold text-sm">[Nombre del Desarrollador 1]</p>
                <p className="text-xs text-secondary-foreground/70">Estudiante / Técnico</p>
              </div>
              <div className="bg-secondary-foreground/5 p-3 rounded-lg">
                <p className="font-semibold text-sm">[Nombre del Desarrollador 2]</p>
                <p className="text-xs text-secondary-foreground/70">Estudiante / Técnico</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70 text-center md:text-left">
              © {currentYear} U.E.N. Vicente Emilio Sojo. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary-light transition-colors flex items-center justify-center"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary-light transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary-light transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
          <h4 className="font-semibold mb-3 text-sm">Referencias Bibliográficas</h4>
          <div className="text-xs text-secondary-foreground/70 space-y-1">
            <p>• Manual de Mantenimiento de Computadoras - [Autor/Fuente]</p>
            <p>• Guía Técnica de Hardware - [Autor/Fuente]</p>
            <p>• Documentación Oficial BIOS - AMI, Award, Phoenix</p>
            <p>• Mejores Prácticas en Mantenimiento de Sistemas - [Autor/Fuente]</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
