import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaClipboardList, FaUsers, FaWrench, FaSignOutAlt } from "react-icons/fa";

const ManageProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    { id: 1, name: "Tensiometre", price: "100 MAD", stock: 50, image: "https://via.placeholder.com/100" },
    { id: 2, name: "masque", price: "150 MAD", stock: 30, image: "https://via.placeholder.com/100" },
    { id: 3, name: "thermométre", price: "200 MAD", stock: 10, image: "https://via.placeholder.com/100" },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleAddProduct = () => {
    const newId = products.length + 1;
    setProducts([...products, { ...newProduct, id: newId }]);
    setNewProduct({ name: "", price: "", stock: "", image: "" }); // Reset form
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({ ...product });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleSaveEdit = () => {
    setProducts(products.map((product) => (product.id === editingProduct.id ? newProduct : product)));
    setEditingProduct(null);
    setNewProduct({ name: "", price: "", stock: "", image: "" });
  };

  const handleLogout = () => {
    navigate("/Login");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white h-screen flex-shrink-0">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          Santé Matériel
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
              <FaHome className="text-xl" />
              <Link to="/dashboard">Tableau de Bord</Link>
            </li>
            <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
              <FaClipboardList className="text-xl" />
              <Link to="/ManageProductsPage">Gérer le Produit</Link>
            </li>
            <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
              <FaUsers className="text-xl" />
              <Link to="/VisitorsPage">Visiteurs</Link>
            </li>
            <li className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
              <FaWrench className="text-xl" />
              <Link to="/OrdresPage">Ordres</Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 w-full bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            <FaSignOutAlt className="text-xl" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Gérer les Produits</h1>

        {/* Add or Edit Product Form */}
        <div className="mb-4">
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            placeholder="Nom du Produit"
            className="px-4 py-2 border rounded-lg w-full mb-2"
          />
          <input
            type="text"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            placeholder="Prix du Produit"
            className="px-4 py-2 border rounded-lg w-full mb-2"
          />
          <input
            type="number"
            value={newProduct.stock}
            onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
            placeholder="Quantité en Stock"
            className="px-4 py-2 border rounded-lg w-full mb-2"
          />
          <input
            type="text"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            placeholder="URL de l'Image"
            className="px-4 py-2 border rounded-lg w-full mb-2"
          />
          <button
            onClick={editingProduct ? handleSaveEdit : handleAddProduct}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {editingProduct ? "Sauvegarder les modifications" : "Ajouter un Produit"}
          </button>
        </div>

        {/* Product Table */}
        <table className="w-full table-fixed border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="w-1/12 px-4 py-2 border">ID</th>
      <th className="w-2/12 px-4 py-2 border">Nom</th>
      <th className="w-2/12 px-4 py-2 border">Prix</th>
      <th className="w-2/12 px-4 py-2 border">Stock</th>
      <th className="w-3/12 px-4 py-2 border">Image</th>
      <th className="w-2/12 px-4 py-2 border">Actions</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id} className="hover:bg-gray-50">
        <td className="px-4 py-3 border text-center">{product.id}</td>
        <td className="px-4 py-3 border">{product.name}</td>
        <td className="px-4 py-3 border text-center">{product.price}</td>
        <td className="px-4 py-3 border text-center">{product.stock}</td>
        <td className="px-4 py-3 border text-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 mx-auto object-cover border rounded"
          />
        </td>
        <td className="px-4 py-3 border text-center">
          <button
            onClick={() => handleEditProduct(product)}
            className="block px-3 py-1 mb-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 w-full"
          >
            Modifier
          </button>
          <button
            onClick={() => handleDeleteProduct(product.id)}
            className="block px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 w-full"
          >
            Supprimer
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default ManageProductsPage;
