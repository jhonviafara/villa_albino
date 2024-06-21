import React from 'react';

const UltimosResultados = () => {
  const results = [
    { rival: 'Equipo A', marcador: '3-2', fecha: '01/06/2024' },
    { rival: 'Equipo B', marcador: '1-1', fecha: '28/05/2024' },
    { rival: 'Equipo C', marcador: '2-0', fecha: '26/05/2024' },
    { rival: 'Equipo D', marcador: '2-0', fecha: '27/05/2024' },
  ];

  return (
    <section className="p-4 md:p-6 lg:p-8 xl:p-10 border border-gray-300 shadow-md rounded-md p-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-white">Últimos Resultados</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {results.map((result, index) => (
          <li key={index} className="bg-white rounded-lg shadow-md p-4">
            <span className="font-bold block">{result.rival}</span>
            <span className="text-gray-600 block">{result.marcador}</span>
            <span className="text-gray-600 block">{result.fecha}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UltimosResultados;
