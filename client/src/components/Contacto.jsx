import React from 'react';

const Contacto = () => {
  const informacionContacto = {
    direccion: 'Calle Principal 123, Ciudad, País',
    telefono: '+1234567890',
    correo: 'info@clubdeportivo.com'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario
  };

  return (
    <section id="contacto" className="py-8 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='text-white'>
            <h3 className="text-lg font-bold mb-2">Información de Contacto</h3>
            <p><strong>Dirección:</strong> {informacionContacto.direccion}</p>
            <p><strong>Teléfono:</strong> {informacionContacto.telefono}</p>
            <p><strong>Correo Electrónico:</strong> {informacionContacto.correo}</p>
            {/* Aquí podrías agregar un mapa utilizando la API de Google Maps */}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">Formulario de Contacto</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
                <input type="email" id="correo" name="correo" className="mt-1 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="4" className="mt-1 p-2 w-full bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-green-500" required></textarea>
              </div>
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
