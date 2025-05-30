import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use instant instead of smooth to prevent animation conflicts
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;