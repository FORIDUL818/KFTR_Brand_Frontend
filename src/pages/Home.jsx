import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ShoppingBag,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLogoutOpen(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Logged out successfully 🚀");
    }, 1500);
  };

  const menu = [
    { name: "Dashboard", icon: Home },
    { name: "Products", icon: ShoppingBag },
    { name: "Profile", icon: User },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-950 text-white">

      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 250 : 80 }}
        className="bg-gray-900 border-r border-white/10 p-4 flex flex-col"
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          {sidebarOpen && (
            <h1 className="text-xl font-bold">🛒 ShopAdmin</h1>
          )}

          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu />
          </button>
        </div>

        {/* Menu */}
        <div className="space-y-2">
          {menu.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer"
            >
              <item.icon size={20} />
              {sidebarOpen && <span>{item.name}</span>}
            </motion.div>
          ))}
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-semibold">Dashboard</h2>

          <button
            onClick={() => setLogoutOpen(true)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg flex items-center gap-2"
          >
            <LogOut size={18} /> Logout
          </button>
        </header>

        {/* Content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-gray-900 p-6 rounded-xl">📊 Sales</div>
            <div className="bg-gray-900 p-6 rounded-xl">🛍️ Orders</div>
            <div className="bg-gray-900 p-6 rounded-xl">👤 Users</div>
          </motion.div>
        </main>
      </div>

      {/* Logout Modal */}
      <AnimatePresence>
        {logoutOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 p-6 rounded-xl w-80 relative"
            >
              {/* Close */}
              <button
                onClick={() => setLogoutOpen(false)}
                className="absolute top-3 right-3"
              >
                <X />
              </button>

              <h2 className="text-lg font-bold mb-4">
                Are you sure?
              </h2>

              <p className="text-gray-400 mb-6">
                You can go to profile or logout from here.
              </p>

              <div className="flex flex-col gap-3">
                <button className="bg-blue-500 py-2 rounded-lg">
                  Go to Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 py-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}