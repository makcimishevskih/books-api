import { useEffect, useState, MutableRefObject, useRef } from 'react';

const useDropdownIsOpen = (): {
  isOpen: boolean;
  handleIsOpen: (isOpen: boolean) => void;
  refWrapper: MutableRefObject<HTMLInputElement | null>;
} => {
  const [isOpen, setIsOpen] = useState(false);

  const refWrapper = useRef<HTMLInputElement | null>(null);

  const handleIsOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (refWrapper.current && !refWrapper.current.contains(e.target as Node)) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return {
    isOpen,
    refWrapper,
    handleIsOpen,
  };
};

export default useDropdownIsOpen;
