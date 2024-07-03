import React from 'react';

const Noticias = () => {
  return (
    <section className="py-8 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center text-white">Sección de Noticias/Actualizaciones</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Últimas noticias:</h3>
          {/* Ejemplo de una noticia */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h4 className="text-xl font-medium mb-2 text-gray-900">Nuevo fichaje: Nombre del jugador</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula tortor vel odio rhoncus, nec rutrum metus ultrices.</p>
            <a href="#" className="text-blue-500 mt-2 inline-block hover:underline">Leer más</a>
          </div>
          {/* Otras noticias similares */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h4 className="text-xl font-medium mb-2 text-gray-900">Nuevo patrocinador: Nombre de la empresa</h4>
            <p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <a href="#" className="text-blue-500 mt-2 inline-block hover:underline">Leer más</a>
          </div>
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h4 className="text-xl font-medium mb-2 text-gray-900">Preparativos para la nueva temporada</h4>
            <p className="text-gray-700">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
            <a href="#" className="text-blue-500 mt-2 inline-block hover:underline">Leer más</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
