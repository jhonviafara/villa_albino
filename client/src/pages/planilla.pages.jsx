import { useEffect, useState } from 'react';
import { FaPlay, FaExclamationTriangle, FaBan } from 'react-icons/fa';
import Logo from "../assets/Logo-Club.png";
//import { getJugadores } from '../services/lista.services';
import { get } from '../services/utils.services';

function PlanillaPages() {
  const [jugadores, setJugadores] = useState([]);

  async function obtenerJugadores() {
    const res = await get("/planilla-jugadores");
    console.log(res);
    setJugadores(res);
  }

  useEffect(() => {
    obtenerJugadores();

  }, []);

  const getStatusStyles = (estado) => {
    switch (estado) {
      case 'Activo':
        return { bgColor: 'bg-green-100', textColor: 'text-green-600', icon: <FaPlay /> };
      case 'Lesionado':
        return { bgColor: 'bg-red-100', textColor: 'text-red-600', icon: <FaExclamationTriangle /> };
      case 'No juega':
        return { bgColor: 'bg-gray-100', textColor: 'text-gray-600', icon: <FaBan /> };
      default:
        return { bgColor: 'bg-white', textColor: 'text-black', icon: null };
    }
  };

  return (
    <div className="bg-green-700 min-h-screen flex flex-col items-center">
      <img src={Logo} alt="Logo" className="w-32 my-2 drop-shadow-lg" /> 

      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-2xl"> 
        <h2 className="text-center text-xl font-semibold py-3 text-gray-700">
          Lista de Jugadores
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-left text-sm"> 
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th className="py-2 px-3 border-b font-semibold">Nombre</th>
                <th className="py-2 px-3 border-b font-semibold">apellido</th>
                <th className="py-2 px-3 border-b font-semibold">edad</th>
                <th className="py-2 px-3 border-b font-semibold">categoria</th>
                <th className="py-2 px-3 border-b font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {jugadores ? jugadores.map((jugador,index) => {
                const { bgColor, textColor, icon } = getStatusStyles(jugador.estado);
                return (
                  <tr key={index} className={`hover:bg-gray-100 ${bgColor}`}>
                    <td className="py-2 px-3 border-b text-gray-800">{jugador.nombre}</td> 
                    <td className="py-2 px-3 border-b text-gray-800">{jugador.apellido}</td>
                    <td className="py-2 px-3 border-b text-gray-800">{jugador.edad}</td>
                    <td className="py-2 px-3 border-b text-gray-800">{jugador.categoria_nombre}</td>
                    <td className="py-2 px-3 border-b text-gray-800">{icon}{jugador.estado}</td>
                    <td className={`py-2 px-3 border-b flex items-center ${textColor}`}>
                    
                    </td>
                  </tr>
                );
              }):(<tr> 
                <td></td>
              <td>no hay jugaadores para mostrar</td>
              <td></td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlanillaPages;
