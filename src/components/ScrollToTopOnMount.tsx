import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // SIEMPRE hacer scroll al inicio cuando cambias de página
    // El sistema de anclas del Navbar se encarga de posicionar después
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
