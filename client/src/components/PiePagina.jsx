

import React from 'react';
import LogoImage from './LogoImage';

const PieDePagina = () => {
  return (
    <footer className="bg-green-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
        </div>
        <div>
          {/* Aquí podrían ir los enlaces a redes sociales del club */}
        </div>
        <LogoImage/>
        <div className="text-white text-center">© {new Date().getFullYear()} Villa Albino. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default PieDePagina;
