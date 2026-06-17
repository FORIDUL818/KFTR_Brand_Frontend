import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full h-24 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white flex items-center border-t border-white/10">
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="leading-tight">
          <h1 className="text-lg font-bold tracking-wide">
            🛒 ShopVerse
          </h1>
          <p className="text-gray-400 text-xs">
            Modern React UI • Built with care
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-lg">
          <FaGithub className="cursor-pointer hover:text-white hover:scale-110 transition" />
          <FaTwitter className="cursor-pointer hover:text-sky-400 hover:scale-110 transition" />
          <FaInstagramSquare className="cursor-pointer hover:text-pink-400 hover:scale-110 transition" />
          <IoMdMail className="cursor-pointer hover:text-emerald-400 hover:scale-110 transition" />
        </div>

        {/* Right text */}
        <div className="text-xs text-gray-500 hidden md:block">
          © {new Date().getFullYear()} All rights reserved
        </div>
      </motion.div>
      
    </footer>
  );
}