import { useEffect, useState } from 'react';

const useScroll = (): { isScrollVisible: boolean } => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollHeight > innerHeight && scrollY > innerHeight) {
        setIsScrollVisible(true);
      } else {
        setIsScrollVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrollVisible };
};

export default useScroll;
