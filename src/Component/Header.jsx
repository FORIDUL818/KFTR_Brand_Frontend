import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LogOut } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6 border-b border-gray-800 relative">

      {/* Left Title */}
      <h1 className="text-lg font-bold">
        Admin Dashboard
      </h1>

      {/* Right Button */}
      <div className="relative">

        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
        >
          Logout
        </button>

        {/* Dropdown Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-3 w-48 bg-gray-800 border border-gray-700 rounded-xl shadow-lg overflow-hidden"
            >
              {/* Profile */}
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition">
                <User size={18} />
                Profile
              </button>

              {/* Logout */}
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-600 transition text-red-400">
                <LogOut size={18} />
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}