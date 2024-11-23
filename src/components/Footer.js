import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import backgroundImage from '../assets/ton_image.jpg';

const Footer = () => (
  <footer
    className="relative text-white mt-auto"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* L'ajout d'un overlay noir plus sombre */}
    <div className="absolute inset-0 bg-cyan-600 bg-opacity-90 bg-gradient-to-r from-blue-500 to-blue-700 text-white" />
    
    <div className="relative z-10 py-12 px-6 text-center">
      <p className="text-lg mb-4">© 2024 SantéMatériel. Tous droits réservés.</p>
      <p className="text-sm mb-6">Votre partenaire pour du matériel médical de qualité, disponible 24/7.</p>
      
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-white hover:text-blue-500 transition-transform transform hover:scale-110 text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-blue-400 transition-transform transform hover:scale-110 text-2xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-pink-500 transition-transform transform hover:scale-110 text-2xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-white hover:text-blue-700 transition-transform transform hover:scale-110 text-2xl" />
        </a>
      </div>
      
      <div className="space-x-6 text-sm">
        <a href="/" className="hover:text-gray-300">À propos de nous</a>
        <a href="Product" className="hover:text-gray-300">Nos Services</a>
        <a href="Contact" className="hover:text-gray-300">Contactez-nous</a>
      </div>

      <div className="mt-6 text-xs text-gray-300">
        <p>Adresse : 123 Rue du Médical, Casablanca, Maroc</p>
        <p>Email : contact@santemateriel.com</p>
        <p>Phone : +212 123-456-789</p>
      </div>
    </div>
  </footer>
);

export default Footer;
