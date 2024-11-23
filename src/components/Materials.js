import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Materials = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const { materials } = location.state || {};

 
  if (!materials) {
    return (
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-4">Erreur: Matériaux non trouvés.</h2>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 inline-block bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
        >
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 ">Matériels Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {materials.map((material, index) => (
          <div key={index} className="border rounded-lg p-4 shadow">
            <img src={material.image} alt={material.name} className="mb-2" />
            <h3 className="font-semibold">{material.name}</h3>
            <p>{material.description}</p>
            <p className="text-blue-600">{material.price}</p>
          </div>
        ))}
      </div>
      <a
        href="/"
        className="mt-4 inline-block bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
      >
        Retour
      </a>
    </div>
  );
};

export default Materials;
