import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaClipboardList, FaUsers, FaWrench, FaSignOutAlt } from "react-icons/fa";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fakeOrders = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      customer: `Customer ${index + 1}`,
      total: Math.floor(Math.random() * 500 + 50),
      products: [
        { title: `Product A${index + 1}`, price: Math.random() * 100 },
        { title: `Product B${index + 1}`, price: Math.random() * 100 },
      ],
      status: ["Pending", "Shipped", "Delivered"][
        Math.floor(Math.random() * 3)
      ],
    }));
    setOrders(fakeOrders);
  }, []);

  const handleLogout = () => {
    navigate("/login"); // Redirect to login page on logout
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
              <Link to="/Orders">Ordres</Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-700">
          <button
            className="flex items-center gap-3 px-4 py-2 w-full bg-red-600 text-white rounded-lg hover:bg-red-700"
            onClick={handleLogout} // Call the handleLogout function on click
          >
            <FaSignOutAlt className="text-xl" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Orders</h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg border">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-center">ID</th>
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-right">Total</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-left">Products</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="px-4 py-3 text-center">{order.id}</td>
                  <td className="px-4 py-3 text-left">{order.customer}</td>
                  <td className="px-4 py-3 text-right">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        order.status === "Pending"
                          ? "bg-cyan-300 text-cyan-800"
                          : order.status === "Shipped"
                          ? "bg-blue-200 text-blue-800"
                          : "bg-teal-200 text-green-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-left">
                    {order.products.map((product, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        {product.title} (${product.price.toFixed(2)})
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
