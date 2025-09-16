import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  GraduationCap,
  // Code2,
  Mail,
  Lightbulb,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "About", icon: User, href: "#about" },
    // { name: 'Skills', icon: Code2, href: '#skills' },
    { name: "Education", icon: GraduationCap, href: "#education" },
    { name: "Projects", icon: Briefcase, href: "#projects" },
    { name: "Services", icon: Lightbulb, href: "#services" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-blue-600 text-white md:hidden shadow-lg hover:bg-blue-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-4 py-2 mx-2 rounded-full hover:bg-blue-600/20 transition-colors flex items-center gap-2"
              >
                <item.icon size={18} />
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween" }}
        className="fixed inset-y-0 right-0 w-64 bg-gray-900/95 backdrop-blur-sm shadow-lg z-40 md:hidden"
      >
        <div className="flex flex-col items-center pt-20 h-full">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-4 py-3 w-full text-center hover:bg-blue-600/20 transition-colors flex items-center justify-center gap-2"
            >
              <item.icon size={18} />
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
