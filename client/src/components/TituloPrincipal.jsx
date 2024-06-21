import React from "react";
import Foto from "../assets/Foto-Titulo.jpg"; 


const TituloPrincipal = () => {
  return (
    <div className="hero min-h-screen border border-gray-300 shadow-md rounded-md p-4" style={{backgroundImage: `url(${Foto})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Villa Albino</h1>
          <p className="mb-5">Club de Futbol oriundo de la ciudad de Ensenada</p>
          <button className="btn btn-primary">Mas Informacion</button>
        </div>
      </div>
    </div>
  );
};

export default TituloPrincipal;