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
                <span>Urb. La Mora Av. 01 cruce con Av. 02. Municipio José Félix Ribas, La Victoria, Aragua</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-light" />
                <span>0412-0464320 - 0244-3228699</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-light" />
                <span>vicenteemiliosojo2015@gmail.com</span>
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
              <div className="bg-secondary-foreground/5 p-3 rounded-lg hover:bg-secondary-foreground/10 transition-colors">
                <p className="font-semibold text-sm">Luis Antonio Mendoza Pérez</p>
                <p className="text-xs text-secondary-foreground/70">Líder de Proyecto & Desarrollador Principal</p>
              </div>
              <div className="bg-secondary-foreground/5 p-3 rounded-lg hover:bg-secondary-foreground/10 transition-colors">
                <p className="font-semibold text-sm">Jared Jesús Mejías Cordovez</p>
                <p className="text-xs text-secondary-foreground/70">Especialista en Mantenimiento</p>
              </div>
              <div className="bg-secondary-foreground/5 p-3 rounded-lg hover:bg-secondary-foreground/10 transition-colors">
                <p className="font-semibold text-sm">Ignacio José Prieto Espinoza</p>
                <p className="text-xs text-secondary-foreground/70">Técnico de Mantenimiento</p>
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
                href="https://github.com/LuiSM2307/sojo-manual-interactive/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-primary-light transition-colors flex items-center justify-center"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:vicenteemiliosojo2015@gmail.com"
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
            <p>• Benchimol, D. (2010). <em>Técnico Hardware desde cero</em>. RedUSERS.</p>
            <p>• Carbaillero, G. (2010). <em>Técnico Profesional de PC</em>. RedUSERS.</p>
            <p>• Cekit. (2001). <em>Curso práctico de mantenimiento, reparación, actualización e instalación de computadoras</em>. Editorial Cekit.</p>
            <p>• Gómez Valero, J. R. (2009). <em>Manual de Mantenimiento Preventivo y Correctivo para Computadores</em>. Recuperado de <a href="https://masterkarmona.files.wordpress.com/2014/08/manual-preventivo.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">https://masterkarmona.files.wordpress.com/2014/08/manual-preventivo.pdf</a></p>
            <p>• IONOS. (s. f.). <em>Pitidos de la BIOS: qué significan los tonos de señal</em>. IONOS Digital Guide. Recuperado de <a href="https://www.ionos.com/es-us/digitalguide/servidores/know-how/pitidos-de-la-bios/" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">https://www.ionos.com/es-us/digitalguide/servidores/know-how/pitidos-de-la-bios/</a></p>
            <p>• Sosa Cruz J. M. (s.f.). <em>Mantenimiento de Equipo de Cómputo Básico</em>. Yo aprendo Informáticos Unidos.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
