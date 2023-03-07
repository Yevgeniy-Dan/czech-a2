import React, { useState, useEffect } from "react";

type KeyType = {
  key: number;
  isOpen: boolean;
};

const useKeyOpen = (count: number) => {
  const [keys, setKeys] = useState<KeyType[]>([]);

  useEffect(() => {
    const keyArray = Array.from({ length: count }, (v, k) => {
      return { isOpen: false, key: k };
    });
    setKeys(keyArray);
  }, [count]);

  const getValue = (key: number) => {
    return keys.find((k) => k.key === key)?.isOpen;
  };

  const toggleKey = (key: number) => {
    const updatedKeys = [...keys];
    const objIndex = updatedKeys.findIndex((k) => k.key === key);
    updatedKeys[objIndex].isOpen = !updatedKeys[objIndex].isOpen;
    setKeys(updatedKeys);
  };

  return { keys, toggleKey, getValue };
};

export default useKeyOpen;
