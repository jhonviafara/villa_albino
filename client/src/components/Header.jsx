import React, { useState } from 'react';
import LogoImage from './LogoImage';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="p-4 bg-green-600">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LogoImage />
          <h1 className="text-white text-2xl font-bold ml-2">Villa Albino</h1> {/* Nuevo: Nombre del club */}
        </div>
        
        {/* Menú principal para pantallas medianas y grandes */}
        <nav className="hidden md:flex ml-4">
          <ul className="flex space-x-4">
            <li><a href="#inicio" className="text-white">Inicio</a></li>
            <li><a href="#resultados" className="text-white">Resultados</a></li>
            <li><a href="#fotos" className="text-white">Fotos</a></li>
            <li><a href="#proximos-partidos" className="text-white">Próximos Partidos</a></li>
            <li><a href="#noticias" className="text-white">Noticias</a></li>
            <li><a href="#contacto" className="text-white">Contacto</a></li>
          </ul>
        </nav>
        
        {/* Botón de menú para pantallas pequeñas */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="text-white">
            {!showMenu ? 'Menú' : 'Cerrar'}
          </button>
        </div>
        
        {/* Menú desplegable para pantallas pequeñas */}
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2">
            <li><a href="#inicio" className="text-white">Inicio</a></li>
            <li><a href="#resultados" className="text-white">Resultados</a></li>
            <li><a href="#fotos" className="text-white">Fotos</a></li>
            <li><a href="#proximos-partidos" className="text-white">Próximos Partidos</a></li>
            <li><a href="#acerca-del-club" className="text-white">Acerca del Club</a></li>
            <li><a href="#contacto" className="text-white">Contacto</a></li>
            <li><a href="#iniciar-sesion" className="text-white">Iniciar Sesión</a></li>
          </ul>
        </div>
        
        {/* Botón de Iniciar Sesión para pantallas medianas y grandes */}
        <div className="hidden md:block">
          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Iniciar Sesión</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
