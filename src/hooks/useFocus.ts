import { useRef, useCallback, MutableRefObject } from 'react';

const useFocus = (): { inputRef: MutableRefObject<HTMLInputElement | null>; handleFocusOnClick: () => void } => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocusOnClick = useCallback(() => {
    inputRef?.current?.focus();
  }, [inputRef]);

  return {
    inputRef,
    handleFocusOnClick,
  };
};

export default useFocus;
