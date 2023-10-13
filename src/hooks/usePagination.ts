import { useCallback, useState } from 'react';

const usePagination = (totalBooks: number) => {
  const [offset, setOffset] = useState(0);

  const handleOffset = () => {
    if (offset === totalBooks) return;

    if (offset + 30 >= totalBooks) {
      setOffset((offset) => totalBooks - offset);
    } else {
      setOffset((offset) => offset + 30);
    }
  };

  const handleOffsetToValue = useCallback(
    (value: number) => {
      setOffset(value);
    },
    [offset],
  );

  return { offset, handleOffset, handleOffsetToValue };
};

export default usePagination;
