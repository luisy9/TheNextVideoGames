import { useState } from 'react';

export const usePlataform = () => {
  const [num, setNum] = useState(null);
  const plataformUse = (plataform) => {
    for (const plataforma of plataform) {
      if (plataforma.nombre_plataform === 'PlayStation') {
        setNum(1);
      } else if (plataforma.nombre_plataform === 'Xbox') {
        setNum(2);
      } else if (plataforma.nombre_plataform === 'nintendo') {
        setNum(3);
      }
    }
  };

  return {
    num,
    plataformUse,
  };
};
