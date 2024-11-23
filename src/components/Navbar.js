import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCartPlus,
  FaBars,
  FaTimes,
  FaHome,
  FaTags,
  FaPhoneAlt,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import logo from "../assets/Logo.png";

const Menus = [
  { id: 1, name: "Home", link: "/", icon: <FaHome /> },
  { id: 2, name: "Products", link: "/product", icon: <FaTags /> },
  { id: 3, name: "Contact", link: "/contact", icon: <FaPhoneAlt /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const quantity = savedCart.reduce((total, product) => total + product.quantity, 0);
    setCartQuantity(quantity);
  };

  useEffect(() => {
    updateCartQuantity();
    const handleStorageChange = () => {
      updateCartQuantity();
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo Santé" className="w-12 h-12 mr-3" />
          <Link to="/" className="font-bold text-2xl sm:text-3xl tracking-wide">
            Santé Matériel
          </Link>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center space-x-6">
            {Menus.map((menu) => (
              <li key={menu.id} className="flex items-center gap-2">
                <Link
                  to={menu.link}
                  className="hover:text-gray-300 duration-200 text-lg flex items-center"
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/login" className="flex items-center text-lg hover:text-gray-300">
            <FaUser className="text-xl" />
            <span className="ml-2">Login</span>
          </Link>
          <Link to="/panier" className="relative flex items-center">
            <FaShoppingCart className="text-2xl" />
            {cartQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-gray-700 focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>
          {/* Menu Items */}
          <ul className="space-y-6">
            {Menus.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="flex items-center text-lg font-semibold hover:text-blue-500 gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Login and Cart */}
          <div className="mt-8">
            <Link
              to="/login"
              className="flex items-center text-lg font-semibold hover:text-blue-500 gap-3 mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUser className="text-xl" />
              <span>Login</span>
            </Link>
            <Link
              to="/panier"
              className="relative flex items-center text-lg font-semibold hover:text-blue-500 gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart className="text-xl" />
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartQuantity}
                </span>
              )}
              <span>Panier</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
