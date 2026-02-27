import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 font-display text-lg md:text-xl font-bold tracking-wider text-white shrink-0"
            >
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">CYBERTHON</span>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 font-display text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-cyan-400 transition-colors duration-300 rounded-lg group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3dl_lrVXQTx8w13N5NKuiv7C17mDZztDtpii-nbZzScNJ4g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 font-display text-[11px] font-bold text-black uppercase tracking-[0.15em] bg-cyan-400 rounded-full transition-all duration-300 hover:bg-cyan-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(34,211,238,0.4)] shrink-0"
            >
              Join Cyberthon
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/80 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-xl font-bold tracking-[0.2em] uppercase text-white/80 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3dl_lrVXQTx8w13N5NKuiv7C17mDZztDtpii-nbZzScNJ4g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 px-8 py-3 bg-cyan-400 text-black font-display text-sm font-bold tracking-[0.15em] uppercase rounded-full shadow-[0_0_24px_rgba(34,211,238,0.4)]"
            >
              Join Cyberthon
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
