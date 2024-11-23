import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaProductHunt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    products: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); // Ajout de l'état pour la soumission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true); // Définir l'état à true lorsque le formulaire est soumis
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      products: '',
    });
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-300">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 transition-all duration-300 hover:text-cyan-500 hover:scale-105">
          Contactez-nous
        </h1>

        {/* Afficher un message de confirmation après soumission */}
        {isSubmitted && (
          <div className="bg-green-100 text-green-800 p-4 mb-6 rounded-md text-center">
            <p>Merci pour votre message ! Nous vous répondrons sous peu.</p>
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          {/* Name Field */}
          <div className="flex items-center space-x-3">
            <FaUser className="text-gray-700 text-xl" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre Nom"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-gray-700 text-xl" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre Email"
            />
          </div>

          {/* Phone Field */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-gray-700 text-xl" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Votre Téléphone"
            />
          </div>

          {/* Products Field */}
          <div className="flex items-center space-x-3">
            <FaProductHunt className="text-gray-700 text-xl" />
            <textarea
              id="products"
              name="products"
              value={formData.products}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Dites-nous quels produits vous souhaitez."
            />
          </div>

          {/* Message Field */}
          <div className="flex items-center space-x-3">
            <FaPaperPlane className="text-gray-700 text-xl" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Votre message (facultatif)"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg py-2 px-6 hover:bg-blue-700 transition duration-200"
            >
              Envoyer
            </button>
            <button
              type="button"
              onClick={() => setFormData({ name: '', email: '', phone: '', message: '', products: '' })}
              className="bg-gray-600 text-white rounded-lg py-2 px-6 hover:bg-gray-700 transition duration-200"
            >
              Réinitialiser
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
