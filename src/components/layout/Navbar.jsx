import { useState, useEffect } from "react";
import { Coffee, ShoppingBag, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();
  const { isAuthenticated, currentUser, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/#about" },
    { name: "Menu", href: "/#menu" },
    { name: "Shop", href: "/shop" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    // If it's an anchor link and we are already on home, scroll to it
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-border-light dark:border-white/5 py-4 shadow-sm dark:shadow-none"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-600 to-orange-800 text-white shadow-lg shadow-primary/20 shrink-0">
              <Coffee size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="xs:block sm:text-lg md:text-xl font-bold tracking-tight text-text-main dark:text-white font-display">
              Espresso <span className="text-primary">&</span> Co.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => {
                  if (
                    link.href.startsWith("/#") &&
                    location.pathname === "/#"
                  ) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 rounded-full cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {isAuthenticated ? (
              <div className="group relative flex items-center">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-600 to-orange-800 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-primary/30">
                  <span className="font-bold font-display text-sm tracking-widest uppercase">
                    {currentUser?.name ? currentUser.name.charAt(0) : "U"}
                  </span>
                </button>
                {/* User Dropdown */}
                <div className="absolute top-12 right-0 w-48 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-white/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <div className="p-3 border-b border-border-light dark:border-white/5 bg-background-light dark:bg-background-dark/50">
                    <p className="text-sm font-bold text-text-main dark:text-text-light truncate font-display">
                      {currentUser?.name || "User"}
                    </p>
                    <p className="text-xs text-text-muted truncate font-sans">
                      {currentUser?.email}
                    </p>
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-sans"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border-light dark:border-white/10 bg-white dark:bg-white/5 text-text-muted hover:border-primary/50 hover:text-primary dark:hover:text-white hover:bg-primary/10 transition-all duration-300 shadow-sm dark:shadow-none hover:scale-105"
                title="Log In / Sign Up"
              >
                <User size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            )}

            <Link
              to="/cart"
              className="group relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border-light dark:border-white/10 bg-white dark:bg-white/5 text-text-muted hover:border-primary/50 hover:text-primary dark:hover:text-white hover:bg-primary/10 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <ShoppingBag size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-background-dark">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              aria-label="Toggle Theme"
              onClick={toggleTheme}
              className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border transition-all duration-300
                ${
                  theme === "light"
                    ? "bg-white border-border-light text-text-main hover:bg-surface-light hover:text-primary shadow-sm"
                    : "bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-white shadow-[0_0_15px_rgba(212,115,17,0.15)] hover:shadow-[0_0_20px_rgba(212,115,17,0.4)]"
                }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${theme === "light" ? "fill-0" : "fill-1"}`}
              >
                {theme === "light" ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <button
              className="md:hidden flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border-light dark:border-white/10 bg-white dark:bg-white/5 text-text-muted hover:text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background-light/98 dark:bg-background-dark/98 backdrop-blur-xl md:hidden"
          >
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-text-muted hover:text-primary dark:hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => {
                    if (
                      link.href.startsWith("/#") &&
                      location.pathname === "/"
                    ) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="text-2xl font-bold text-text-main dark:text-white hover:text-primary transition-colors font-display"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
