import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "../data";
import logo from "../assets/logo.png";

export const Navbar = ({ onRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b-2 border-[#0F172A]" : "bg-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-20" : "h-28 sm:h-[220px]"}`}>
        <button onClick={() => go("#home")} data-testid="logo" className="flex items-center">
          <img
            src={logo}
            alt="La Neuron – STEAM Academy"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-12 sm:h-16" : "h-24 sm:h-[200px]"}`}
          />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.href}
              data-testid={`nav-${n.href.replace("#", "")}`}
              onClick={() => go(n.href)}
              className="px-3 py-2 text-sm font-bold text-[#0F172A] rounded-full hover:bg-[#E0E7FF] transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-register-btn"
            onClick={onRegister}
            className="hidden sm:inline-flex ln-btn ln-btn-primary !px-5 !py-2.5 !text-sm"
          >
            Enquire Now
          </button>
          <button
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl border-2 border-[#0F172A] bg-white"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-b-2 border-[#0F172A]"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <button
                  key={n.href}
                  onClick={() => go(n.href)}
                  className="text-left px-3 py-3 font-bold rounded-xl hover:bg-[#E0E7FF]"
                >
                  {n.label}
                </button>
              ))}
              <button onClick={onRegister} className="ln-btn ln-btn-primary mt-2">
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
