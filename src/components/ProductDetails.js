import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./Product";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!product) {
    navigate("/");
    return null;
  }

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity });
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/panier");
  };

  const handleClose = () => {
    navigate("/product");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      {/* Détails du produit */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image du produit */}
          <div className="lg:w-1/2 p-6">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Infos produit */}
          <div className="p-8 w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-gray-600 text-lg mb-6">{product.details}</p>
            <p className="text-3xl text-blue-600 font-semibold mb-6">{product.price} </p>

            {/* Quantité */}
            <div className="flex items-center mb-8">
              <span className="text-lg font-medium text-gray-700 mr-4">Quantité :</span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-5 py-3 bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min="1"
                  className="w-20 text-center text-gray-900 font-medium text-xl border-l border-r border-gray-300"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-6">
              <button
                onClick={handleAddToCart}
                className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Ajouter au Panier
              </button>
              <button
                onClick={handleClose}
                className="px-8 py-4 bg-gray-500 text-white text-lg font-medium rounded-lg hover:bg-gray-600 transition"
              >
                Retour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
