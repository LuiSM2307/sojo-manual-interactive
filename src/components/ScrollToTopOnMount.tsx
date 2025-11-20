import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Solo hacer scroll al inicio para estas páginas específicas
    const pagesWithAutoScroll = ["/", "/conclusion", "/glosario", "/busqueda", "/desarrolladores"];
    
    if (pagesWithAutoScroll.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTopOnMount;
