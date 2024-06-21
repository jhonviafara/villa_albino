import React, { useState } from 'react';
import LogoImage from './LogoImage';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-green-600 p-4 border-white border border-gray-300 shadow-md rounded-md p-4" > {/* Añade la clase border-white para el borde blanco */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <LogoImage/>
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li><a href="#inicio" className='text-black'>Inicio</a></li>
              <li><a href="#resultados" className='text-black'>Resultados</a></li>
              <li><a href="#fotos" className='text-black'>Fotos</a></li>
              <li><a href="#proximos-partidos" className='text-black'>Próximos Partidos</a></li>
              <li><a href="#acerca-del-club" className='text-black'>Acerca del Club</a></li>
              <li><a href="#contacto" className='text-black'>Contacto</a></li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="text-black">
            {!showMenu ? 'Menú' : 'Cerrar'}
          </button>
        </div>
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2">
            <li><a href="#inicio" className='text-black'>Inicio</a></li>
            <li><a href="#resultados" className='text-black'>Resultados</a></li>
            <li><a href="#fotos" className='text-black'>Fotos</a></li>
            <li><a href="#proximos-partidos" className='text-black'>Próximos Partidos</a></li>
            <li><a href="#acerca-del-club" className='text-black'>Acerca del Club</a></li>
            <li><a href="#contacto" className='text-black'>Contacto</a></li>
            <li><a href="#iniciar-sesion" className='text-black'>Iniciar Sesiòn</a></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="bg-white text-black px-4 py-2 rounded-lg">Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
