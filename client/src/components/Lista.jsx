import { FaPlay, FaBan, FaExclamationTriangle } from 'react-icons/fa';

const PlayersTable = () => {
  const players = [
    { id: 1, name: 'Juan Pérez', category: 'Sub-18', status: 'Jugando' },
    { id: 2, name: 'María López', category: 'Sub-20', status: 'Lesionado' },
    { id: 3, name: 'Carlos García', category: 'Sub-18', status: 'Jugando' },
    { id: 4, name: 'Sofía Martínez', category: 'Sub-20', status: 'No juega' },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Jugando':
        return { background: 'bg-green-200', icon: <FaPlay className="text-green-600" /> };
      case 'Lesionado':
        return { background: 'bg-red-200', icon: <FaExclamationTriangle className="text-red-600" /> };
      case 'No juega':
        return { background: 'bg-gray-200', icon: <FaBan className="text-gray-600" /> };
      default:
        return { background: 'bg-white', icon: null };
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600 text-black">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl">
        <h2 className="text-center text-2xl font-semibold py-4">Lista de Jugadores</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-2 px-4 border-b text-left">Nombre</th>
                <th className="py-2 px-4 border-b text-left">Categoría</th>
                <th className="py-2 px-4 border-b text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => {
                const { background, icon } = getStatusStyles(player.status);
                return (
                  <tr key={player.id} className={`hover:bg-gray-100 ${background}`}>
                    <td className="py-2 px-4 border-b">{player.name}</td>
                    <td className="py-2 px-4 border-b">{player.category}</td>
                    <td className="py-2 px-4 border-b flex items-center">
                      {icon} <span className="ml-2">{player.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayersTable;
