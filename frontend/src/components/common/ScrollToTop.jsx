import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);          //Every page scroll from top on navigation
  }, [pathname]);

  return null;
};

export default ScrollToTop;
