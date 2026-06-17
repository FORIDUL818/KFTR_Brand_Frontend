

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`bg-gray-900 text-white flex-shrink-0 transition-all duration-300 ${
        open ? "w-64" : "w-16"
      }`}
    >
      {/* Top toggle button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {open && <h1 className="text-lg font-bold">Menu</h1>}

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-700"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Nav items */}
      <nav className="p-2 space-y-2">
        <NavLink
          to="/home"
          className="block p-3 rounded hover:bg-gray-700"
        >
          {open ? "Dashboard" : "D"}
        </NavLink>

        <NavLink
          to="/home/users"
          className="block p-3 rounded hover:bg-gray-700"
        >
          {open ? "Users" : "U"}
        </NavLink>

        <NavLink
          to="/home/products"
          className="block p-3 rounded hover:bg-gray-700"
        >
          {open ? "Products" : "P"}
        </NavLink>

        <NavLink
          to="/home/orders"
          className="block p-3 rounded hover:bg-gray-700"
        >
          {open ? "Orders" : "O"}
        </NavLink>
      </nav>
    </aside>
  );
}