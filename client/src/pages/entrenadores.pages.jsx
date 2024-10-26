import { useEffect, useState } from 'react';
import { FaPlay, FaExclamationTriangle, FaBan } from 'react-icons/fa';
import Logo from "../assets/Logo-Club.png";

function PlanillaEPages() {
  const [entrenadores, setEntrenadores] = useState([]);

  async function obtenerEntrenadores() {
    const res = await getEntrenadores();
    console.log(res);
    setEntrenadores(res);
  }

  useEffect(() => {
    obtenerEntrenadores();
  }, []);

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Jugando':
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
          Lista de Entrenadores
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-left text-sm"> 
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th className="py-2 px-3 border-b font-semibold">Nombre</th>
                <th className="py-2 px-3 border-b font-semibold">Apellido</th>
                <th className="py-2 px-3 border-b font-semibold">Categoria</th>
              </tr>
            </thead>
            <tbody>
              {entrenadores.map((entrenador) => {
                return (
                  <tr key={jugador.id} className={`hover:bg-gray-100 ${bgColor}`}>
                    <td className="py-2 px-3 border-b text-gray-800">{entrenador.name}</td> 
                    <td className="py-2 px-3 border-b text-gray-800">{entrenador.apellido}</td>
                    <td className={`py-2 px-3 border-b flex items-center ${textColor}`}></td>
                    <td className="py-2 px-3 border-b text-gray-800">{entrenador.categoria}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlanillaEPages;
