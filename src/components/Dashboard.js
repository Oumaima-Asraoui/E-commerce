import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Importer useNavigate et Link
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { FaHome, FaClipboardList, FaUsers, FaWrench, FaSignOutAlt } from "react-icons/fa";

import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login");
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Ventes Mensuelles",
        data: [150, 200, 250, 300, 400, 450, 500],
        borderColor: "#4D96FF",
        backgroundColor: "rgba(77, 150, 255, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const visitorData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Visiteurs Mensuels",
        data: [100, 150, 200, 300, 400, 500, 600],
        backgroundColor: ["#88E0EF", "#4D96FF", "#A78BFA", "#FCD34D", "#FF7F50", "#7CFC00", "#6A5ACD"],
      },
    ],
  };

  const doughnutData = {
    labels: ["Livré", "En attente", "Annulé"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#88E0EF", "#4D96FF", "#EF4444"],
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
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

        {/* Logout button */}
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

      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-blue-100 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Tableau de Bord</h1>
        </header>

        <main className="p-6">
          {/* Main Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
              <h3 className="text-lg font-medium text-blue-500">Produits Vendus</h3>
              <p className="text-4xl font-bold text-green-500 mt-2">3,200</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
              <h3 className="text-lg font-medium text-blue-500">Revenus Mensuels</h3>
              <p className="text-4xl font-bold text-yellow-500 mt-2">150,000 MAD</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
              <h3 className="text-lg font-medium text-blue-500">Commandes en Cours</h3>
              <p className="text-4xl font-bold text-blue-500 mt-2">450</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-500 mb-4">Ventes Mensuelles</h2>
              <Line data={lineData} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-500 mb-4">Visiteurs Mensuels</h2>
              <Bar data={visitorData} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-blue-500 mb-4">Statut des Commandes</h2>
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
