import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaClipboardList, FaUsers, FaWrench, FaSignOutAlt } from "react-icons/fa";

const VisitorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const visitors = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Actif" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactif" },
    { id: 3, name: "Mark Lee", email: "mark@example.com", status: "Actif" },
  ];

  const filteredVisitors = visitors.filter(
    (visitor) =>
      visitor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    // Add any necessary cleanup code here, such as clearing auth tokens
    navigate("/login"); // Navigate to the Login page
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
            className="flex items-center gap-3 px-4 py-2 w-full bg-red-600 text-white rounded-lg hover:bg-red-700"
            onClick={handleLogout} // Trigger handleLogout on click
          >
            <FaSignOutAlt className="text-xl" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Gestion des Visiteurs</h1>

        {/* Search Bar */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un visiteur"
            className="px-4 py-2 border rounded-lg w-1/2"
          />
        </div>

        {/* Visitors Table */}
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">ID Visiteur</th>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Statut</th>
            </tr>
          </thead>
          <tbody>
            {filteredVisitors.map((visitor, index) => (
              <tr
                key={visitor.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                } hover:bg-gray-200`}
              >
                <td className="px-4 py-2">{visitor.id}</td>
                <td className="px-4 py-2">{visitor.name}</td>
                <td className="px-4 py-2">{visitor.email}</td>
                <td
                  className={`px-4 py-2 ${
                    visitor.status === "Actif" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {visitor.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitorsPage;
