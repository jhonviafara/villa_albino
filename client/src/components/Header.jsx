import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useHistory
import LogoImage from './LogoImage';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navegate = useNavigate(); // Inicializamos useHistory

  const handleLogout = () => {
    // Redirige al usuario a la página de inicio de sesión
    navegate('/'); // Cambia '/login' por la ruta de tu página de inicio de sesión
  };

  return (
    <div className="bg-green-600 p-4 border-white border border-gray-300 shadow-md rounded-md p-4 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <LogoImage />
          <h1 className="text-white text-2xl font-bold ml-2">Villa Albino</h1>
        </div>

        {/* Menú principal para pantallas medianas y grandes */}
        <nav className="hidden md:flex ml-4">
          <ul className="flex space-x-4">
            <li><a href="#categorias" className="text-white">categorias</a></li>
            <li><a href="#resultados" className="text-white">Resultados</a></li>
            <li><a href="#proximos-partidos" className="text-white">Próximos Partidos</a></li>
            <li><a href="#lista-jugadores" className="text-white">listado de jugadores</a></li>
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
          </ul>
        </div>

        {/* Botón de Cerrar Sesión para pantallas medianas y grandes */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={handleLogout} // Agregamos la función aquí
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
            shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm 
            px-5 py-2.5 text-center me-2 mb-2"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
