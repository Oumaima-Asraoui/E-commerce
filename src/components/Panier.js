import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Panier = () => {
  const [cart, setCart] = useState([]); 
  const [cartQuantity, setCartQuantity] = useState(0); // Suivi du nombre de produits dans le panier
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setCartQuantity(savedCart.reduce((total, product) => total + product.quantity, 0)); // Mise à jour de la quantité totale
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    setCartQuantity(updatedCart.reduce((total, product) => total + product.quantity, 0)); // Mise à jour de la quantité
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: quantity } : product
    );
    setCart(updatedCart);
    setCartQuantity(updatedCart.reduce((total, product) => total + product.quantity, 0)); // Mise à jour de la quantité
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price);
      const quantity = parseInt(product.quantity);

      if (!isNaN(price) && !isNaN(quantity)) {
        return total + (price * quantity); 
      }
      return total; 
    }, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Le panier est vide !");
      return;
    }
    navigate("/paiement");
  };

  const handleBackToProducts = () => {
    navigate("/Product");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-lg">Votre panier est vide</p>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 p-6 border-b border-gray-200">Votre Panier</h2>

          <div className="space-y-6 p-6">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between border-b pb-4 mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-cyan-600 font-bold text-xl mt-2">{product.price}</p>
                </div>

                <div className="w-24">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                    min="1"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500 transition duration-200"
                  />
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gray-50 rounded-b-xl shadow-inner">
            <div className="flex justify-between text-2xl font-semibold">
              <p>Total :</p>
              <p>{calculateTotal().toFixed(2)} MAD</p>
            </div>
          </div>

          <div className="p-6 flex justify-end items-center gap-4">
  <button
    onClick={handleCheckout}
    className="px-8 py-4 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 transition duration-300"
  >
    Payer
  </button>
  <button
    onClick={handleBackToProducts}
    className="px-8 py-4 bg-cyan-400 text-white rounded-lg shadow-md hover:bg-teal-400 transition duration-300"
  >
    Retour aux Produits
  </button>
</div>

        </div>
      )}
    </div>
  );
};

export default Panier;
