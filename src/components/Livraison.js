import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/Home.jpg";

const Livraison = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sauvegarder les informations de livraison dans le localStorage ou l'envoyer au backend
    const shippingDetails = { fullName, address, city, postalCode, phone };
    localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));

    // Aller à la page Paiement
    navigate("/paiement");
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-7 bg-black opacity-2 blur-lg"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>

      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden relative z-10">
        <h2 className="text-3xl font-semibold text-cyan-800 text-center py-6">
          Adresse de Livraison
        </h2>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">Nom complet</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">Adresse</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                placeholder="123 Rue Exemple"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-medium">Ville</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                  placeholder="Casablanca"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 text-sm font-medium">Code Postal</label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                  placeholder="20000"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">Téléphone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                placeholder="+212 6 12 34 56 78"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-cyan-400 from-green-400 to-teal-500 text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg focus:outline-none"
          >
            Suivant : Paiement
          </button>
        </form>
      </div>
    </div>
  );
};

export default Livraison;
