import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import brancardImg from '../assets/Brancard.jpg'; 
import Stéthoscope from '../assets/Stéthoscope.jpg';
import ThermomètreDigital from '../assets/Thermomètre Digital.jpg';
import MasquesChirurgicaux from '../assets/Masques Chirurgicaux.jpg';
import GantsMédicaux from '../assets/Gants Médicaux.jpg';
import Défibrillateur from '../assets/Défibrillateur.jpg';
import Otoscope from '../assets/Otoscope.jpg';
import Masqueàoxygène from '../assets/Masque à oxygène.jpg';
import Tensiomètre from '../assets/Tensiomètre.jpg';
import Fauteuilroulant from '../assets/Fauteuil roulant.jpg';
import SondeUrinaire from '../assets/Sonde Urinaire.jpg';
import Tableopération from '../assets/Table opération.jpg';
import Glucomètre from '../assets/Glucomètre.jpg';
import Oxymètre from '../assets/Oxymètre.jpg';
import ECGPortable from '../assets/ECG Portable.jpg';
import Bistouri  from '../assets/Bistouri Stérile.jpg';
import ThermometreInfrarouge from '../assets/Thermomètre Infrarouge.jpg';
import LampeExamen from '../assets/LampeExamen.jpg';
import SystemePerfusion from '../assets/Système de Perfusion.jpg';
import CiseauxChirurgicaux  from '../assets/CiseauxChirurgicaux.jpg';
import KitSuture  from '../assets/Kit de Suture.jpg';
import PesePersonne  from '../assets/Pèse-personne Médical.jpg';
import SacUrgence from '../assets/Sac dUrgence Médical.jpg';

export const products = [
  {
    id: 1,
    name: "Stéthoscope",
    description: "Stéthoscope de haute qualité pour diagnostic.",
    details: "Un stéthoscope de qualité supérieure avec une excellente acoustique. Idéal pour les médecins généralistes, les pédiatres et les étudiants en médecine. Fabriqué avec des matériaux durables, il assure des diagnostics précis.",
    price: "200 MAD",
    img: Stéthoscope,
  },
  {
    id: 2,
    name: "Thermomètre Digital",
    description: "Mesure rapide et précise.",
    details: "Ce thermomètre digital offre une mesure de température rapide et fiable. Il est conçu pour un usage domestique et médical. Équipé d'un écran LCD facile à lire.",
    price: "150 MAD",
    img: ThermomètreDigital,
  },
  {
    id: 3,
    name: "Tensiomètre",
    description: "Pour mesurer la tension artérielle.",
    details: "Tensiomètre électronique avec affichage numérique clair et précis. Parfait pour surveiller la tension artérielle à domicile. Fourni avec un brassard confortable.",
    price: "500 MAD",
    img: Tensiomètre,
  },
  {
    id: 4,
    name: "Masques Chirurgicaux",
    description: "Boîte de 50 masques.",
    details: "Boîte de 50 masques chirurgicaux à usage unique. Fabriqués en matériaux respirants et hypoallergéniques pour garantir une protection optimale contre les particules.",
    price: "70 MAD",
    img: MasquesChirurgicaux,
  },
  {
    id: 5,
    name: "Gants Médicaux",
    description: "Boîte de 100 gants jetables.",
    details: "Gants en latex non poudrés, parfaits pour un usage médical ou domestique. Offrent une protection contre les contaminants et sont confortables à porter.",
    price: "80 MAD",
    img: GantsMédicaux,
  },
  {
    id: 6,
    name: "Défibrillateur",
    description: "Défibrillateur portable pour urgences.",
    details: "Défibrillateur automatisé portable (DAE) avec guidage vocal pour les urgences. Facile à utiliser pour sauver des vies lors d'arrêts cardiaques.",
    price: "15000 MAD",
    img: Défibrillateur,
  },
  {
    id: 7,
    name: "Brancard",
    description: "Brancard mobile pour transport de patients.",
    details: "Brancard pliable en aluminium avec roues pivotantes. Équipé de sangles de sécurité pour le transport des patients en toute sérénité.",
    price: "2000 MAD",
    img: brancardImg,
  },
  {
    id: 8,
    name: "Otoscope",
    description: "Pour examen des oreilles.",
    details: "Otoscope compact avec éclairage LED pour une meilleure visibilité. Permet un diagnostic précis des infections ou anomalies auriculaires.",
    price: "400 MAD",
    img: Otoscope,
  },
  {
    id: 9,
    name: "Masque à oxygène",
    description: "Masque pour apport d'oxygène.",
    details: "Masque en PVC transparent, conçu pour une administration efficace de l'oxygène. Livré avec un tube à oxygène anti-écrasement.",
    price: "60 MAD",
    img: Masqueàoxygène,
  },
  {
    id: 10,
    name: "Fauteuil roulant",
    description: "Fauteuil roulant pliable.",
    details: "Fauteuil roulant léger et pliable avec repose-pieds ajustables. Idéal pour une utilisation quotidienne et un transport facile.",
    price: "3000 MAD",
    img: Fauteuilroulant,
  },
  {
    id: 11,
    name: "Sonde Urinaire",
    description: "Sonde stérile à usage unique.",
    details: "Sonde urinaire en latex, stérile et jetable. Conçue pour un usage sûr dans les environnements médicaux.",
    price: "20 MAD",
    img: SondeUrinaire,
  },
  {
    id: 12,
    name: "Table d'opération",
    description: "Table multi-positions pour opérations.",
    details: "Table d'opération polyvalente avec inclinaison ajustable. Convient aux procédures chirurgicales dans divers domaines médicaux.",
    price: "12000 MAD",
    img: Tableopération,
  },
  {
    id: 13,
    name: "Glucomètre",
    description: "Appareil de mesure du taux de sucre.",
    details: "Glucomètre compact avec bandelettes réactives pour une mesure rapide et précise du taux de glucose.",
    price: "250 MAD",
    img: Glucomètre,
  },
  {
    id: 14,
    name: "Oxymètre",
    description: "Pour mesurer la saturation en oxygène.",
    details: "Oxymètre de pouls portable avec affichage LED pour surveiller la saturation en oxygène et le pouls.",
    price: "120 MAD",
    img: Oxymètre,
  },
  {
    id: 15,
    name: "ECG Portable",
    description: "Appareil de mesure d'ECG portable.",
    details: "ECG portable pour un diagnostic rapide des anomalies cardiaques. Compact et facile à utiliser.",
    price: "8000 MAD",
    img: ECGPortable,
  },
];


const Product = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
<div className="min-h-screen bg-gray-50 py-6 px-4">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 transition-all duration-300 hover:text-cyan-500 hover:scale-105">
    Nos Produits Médicaux
  </h1>

  {/* Barre de recherche */}
  <div className="mb-9 text-center">
    <input
      type="text"
      placeholder="Rechercher un produit..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="px-9 py-3 border border-gray-300 rounded-full w-full max-w-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
    />
  </div>

  {/* Grille des produits avec espace sur les côtés */}
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading ? (
        <div className="col-span-full text-center">
          <p>Chargement des produits...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-contain p-2"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h3>
              <p className="text-md text-gray-600 line-clamp-2">{product.description}</p>
              <p className="text-blue-500 font-bold text-sm mt-4">{product.price}</p>
              <button
                onClick={() => navigate(`/ProductDetails/${product.id}`)}
                className="mt-5 px-7 py-2 bg-blue-500 text-white rounded-full text-xL hover:bg-blue-600 transition duration-200"
              >
               +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-full">Aucun produit ne correspond à votre recherche.</p>
      )}
    </div>
  </div>
</div>




  );
};

export default Product;
