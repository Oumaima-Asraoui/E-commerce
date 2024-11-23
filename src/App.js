import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Product';
import Panier from './components/Panier';
import ProductDetails from './components/ProductDetails';
import Paiement from './components/Paiement';
import Login from './components/Login'; // Importer la page de connexion
import Dashboard from './components/Dashboard';
import OrdresPage from './components/OrdresPage';
import VisitorsPage from './components/VisitorsPage';
import ManageProductsPage from './components/ManageProductsPage';
import Livraison from './components/Livraison';


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
          <Route path="/OrdresPage" element={<OrdresPage />} />
        <Route path="/VisitorsPage" element={<VisitorsPage />} />
        <Route path="/ManageProductsPage" element={<ManageProductsPage />} />
        <Route path="/livraison" element={<Livraison />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
