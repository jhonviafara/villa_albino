import React from 'react';

const ProximosPartidos = () => {
  const upcomingMatches = [
    {
      date: '2024-06-15',
      time: '18:00',
      location: 'Estadio Principal',
      opponent: 'Equipo A'
    },
    {
      date: '2024-06-20',
      time: '15:30',
      location: 'Estadio Secundario',
      opponent: 'Equipo B'
    },
    {
        date: '2024-07-20',
        time: '20:30',
        location: 'Estadio Secundario',
        opponent: 'Equipo C'
      },
    // Agrega más objetos aquí con información de otros partidos
  ];

  return (
    <div className="py-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Próximos Partidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingMatches.map((match, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-lg font-semibold mb-2">{match.opponent}</p>
              <p className="text-gray-600 mb-1">{match.date} - {match.time}</p>
              <p className="text-gray-600 mb-2">{match.location}</p>
              {/* Aquí puedes agregar un botón para más detalles del partido */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProximosPartidos;
