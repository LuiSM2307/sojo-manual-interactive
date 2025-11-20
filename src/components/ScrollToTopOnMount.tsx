import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnMount = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Siempre hacer scroll al inicio cuando cambias de página
    // Si hay un hash, el Navbar se encargará de posicionar después
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOnMount;
