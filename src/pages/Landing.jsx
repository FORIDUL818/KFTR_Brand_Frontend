import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("login"); // login | register

  const toggleModal = () => setOpen(!open);

  const switchMode = (type) => setMode(type);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="text-xl font-bold tracking-wide">
          🛍️ ShopVerse
        </div>

        <button
          onClick={() => setOpen(true)}
          className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
        >
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Build Your Online Store <br /> Like a Pro 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Launch your e-commerce business with modern UI, fast performance, and conversion-focused design.
        </motion.p>

        <motion.button
          onClick={() => {
            setMode("register");
            setOpen(true);
          }}
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold"
        >
          Start Free Trial
        </motion.button>
      </section>

      {/* Floating Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        alt="ecommerce"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-16 rounded-2xl w-[80%] md:w-[50%] shadow-2xl"
      />

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 w-full max-w-md rounded-2xl p-6 relative border border-white/10"
            >
              {/* Close */}
              <button
                onClick={toggleModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X />
              </button>

              {/* Toggle Tabs */}
              <div className="flex mb-6 bg-gray-800 rounded-full p-1">
                <button
                  onClick={() => switchMode("login")}
                  className={`w-1/2 py-2 rounded-full transition ${
                    mode === "login" ? "bg-white text-black" : "text-white"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => switchMode("register")}
                  className={`w-1/2 py-2 rounded-full transition ${
                    mode === "register" ? "bg-white text-black" : "text-white"
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Forms */}
              <AnimatePresence mode="wait">
                {mode === "login" ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <input
                      className="w-full p-3 rounded-lg bg-gray-800 outline-none"
                      placeholder="Email"
                    />
                    <input
                      className="w-full p-3 rounded-lg bg-gray-800 outline-none"
                      placeholder="Password"
                      type="password"
                    />
                    <button className="w-full bg-white text-black py-3 rounded-lg font-semibold">
                      Login
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      No account?{" "}
                      <span
                        onClick={() => setMode("register")}
                        className="text-white cursor-pointer"
                      >
                        Register
                      </span>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <input
                      className="w-full p-3 rounded-lg bg-gray-800 outline-none"
                      placeholder="Full Name"
                    />
                    <input
                      className="w-full p-3 rounded-lg bg-gray-800 outline-none"
                      placeholder="Email"
                    />
                    <input
                      className="w-full p-3 rounded-lg bg-gray-800 outline-none"
                      placeholder="Password"
                      type="password"
                    />
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold">
                      Create Account
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      Already have account?{" "}
                      <span
                        onClick={() => setMode("login")}
                        className="text-white cursor-pointer"
                      >
                        Login
                      </span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}