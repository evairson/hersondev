import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Scrolle jusqu'au dessus de l'élément (plus au dessus de 100px)
        window.scrollTo({
          top: element.offsetTop > 100 ? element.offsetTop - 100 : element.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      // Si pas de hash, scroll tout en haut
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
