import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear session
    navigate("/login"); // redirect to login
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-lg font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:text-yellow-400">
            Dashboard
          </Link>
          <Link to="/loans" className="block hover:text-yellow-400">
            Loans
          </Link>
          <Link to="/users" className="block hover:text-yellow-400">
            Users
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left hover:text-yellow-400"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
