import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaLock, FaTruck } from "react-icons/fa";
import HeroImg from "../assets/Home.jpg";

const Paiement = () => {
  const [step, setStep] = useState(1); // Étape actuelle
  const [deliveryDetails, setDeliveryDetails] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Succès du paiement

  const navigate = useNavigate();

  const handleDeliverySubmit = (e) => {
    e.preventDefault();
    if (
      deliveryDetails.fullName &&
      deliveryDetails.address &&
      deliveryDetails.city &&
      deliveryDetails.postalCode &&
      deliveryDetails.phone
    ) {
      setStep(2); // Passer à l'étape Paiement
    } else {
      alert("Veuillez remplir tous les champs de livraison.");
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false); // Arrête le traitement
      setPaymentSuccess(true); // Indique le succès
      localStorage.removeItem("cart"); // Vide le panier
      setTimeout(() => navigate("/"), 6000); // Redirige après 3 secondes
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>

      {/* Contenu principal */}
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden relative z-10">
        {/* Indicateur d'étape */}
        <div className="flex items-center justify-around py-4 bg-cyan-100 border-b-2 border-cyan-300">
          <div
            className={`flex items-center space-x-2 ${
              step === 1 ? "text-cyan-700 font-bold" : "text-gray-400"
            }`}
          >
            <FaTruck />
            <span>Livraison</span>
          </div>
          <div
            className={`flex items-center space-x-2 ${
              step === 2 ? "text-cyan-700 font-bold" : "text-gray-400"
            }`}
          >
            <FaLock />
            <span>Paiement</span>
          </div>
        </div>

        {step === 1 ? (
          <>
            {/* Étape : Livraison */}
            <h2 className="text-2xl font-semibold text-cyan-800 text-center py-6">
              Adresse de Livraison
            </h2>
            <form onSubmit={handleDeliverySubmit} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium">Nom complet</label>
                  <input
                    type="text"
                    value={deliveryDetails.fullName}
                    onChange={(e) =>
                      setDeliveryDetails({ ...deliveryDetails, fullName: e.target.value })
                    }
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium">Adresse</label>
                  <input
                    type="text"
                    value={deliveryDetails.address}
                    onChange={(e) =>
                      setDeliveryDetails({ ...deliveryDetails, address: e.target.value })
                    }
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    placeholder="123 Rue Exemple"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-medium">Ville</label>
                    <input
                      type="text"
                      value={deliveryDetails.city}
                      onChange={(e) =>
                        setDeliveryDetails({ ...deliveryDetails, city: e.target.value })
                      }
                      required
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      placeholder="Casablanca"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-medium">Code Postal</label>
                    <input
                      type="text"
                      value={deliveryDetails.postalCode}
                      onChange={(e) =>
                        setDeliveryDetails({ ...deliveryDetails, postalCode: e.target.value })
                      }
                      required
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      placeholder="20000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium">Téléphone</label>
                  <input
                    type="text"
                    value={deliveryDetails.phone}
                    onChange={(e) =>
                      setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })
                    }
                    required
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    placeholder="+212 6 12 34 56 78"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition"
              >
                Suivant : Paiement
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Étape : Paiement */}
            <h2 className="text-2xl font-semibold text-cyan-800 text-center py-6">
              Paiement Sécurisé
            </h2>
            {paymentSuccess ? (
              <div className="text-center text-green-500 font-bold text-xl">
                Paiement réussi ! Vous serez redirigé vers la page d'accueil...
              </div>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="p-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium">Numéro de carte</label>
                    <input
                      type="text"
                      value={paymentDetails.cardNumber}
                      onChange={(e) =>
                        setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })
                      }
                      required
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      placeholder="1234 5678 9101 1121"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-700 text-sm font-medium">Date d'expiration</label>
                      <input
                        type="text"
                        value={paymentDetails.expirationDate}
                        onChange={(e) =>
                          setPaymentDetails({ ...paymentDetails, expirationDate: e.target.value })
                        }
                        required
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                        placeholder="MM/AA"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-700 text-sm font-medium">CVV</label>
                      <input
                        type="text"
                        value={paymentDetails.cvv}
                        onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                        required
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg shadow hover:bg-cyan-600 transition"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Traitement..." : "Payer Maintenant"}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Paiement;
