import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/Home.jpg"; // Assurez-vous que le chemin de l'image est correct

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Product"); // Adaptez ce chemin selon vos besoins
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden text-white">
      {/* Image d'arrière-plan animée */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 animate-moveBackground"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      />

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-5" />

      {/* Conteneur de contenu */}
      <div className="relative z-10 max-w-screen-l px-8 sm:px-10 lg:px-16 text-center">
        <div className="space-y-10">
          {/* Titre principal avec ombre légère */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-snug text-white shadow-md shadow-black">
            Bienvenue sur{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text hover:from-blue-600 hover:to-blue-400 transition-all duration-500 ease-in-out transform hover:scale-110">
              Santé Matériel
            </span>
            , votre destination de confiance pour les équipements médicaux de
            qualité.
          </h1>

          {/* Bouton avec ombre au survol */}
          <button
            onClick={handleNavigate}
            className="px-10 py-4 bg-blue-500 text-white rounded-full text-lg sm:text-xl lg:text-2xl font-semibold transition-all duration-300 hover:bg-blue-600 transform hover:scale-105 hover:shadow-2xl shadow-xl"
          >
            Découvrez Nos Produits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
