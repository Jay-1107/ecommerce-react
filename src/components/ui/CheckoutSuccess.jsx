import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Check, X, ArrowRight } from "lucide-react";

const CheckoutSuccess = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onClose();
    navigate("/");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-background-light dark:bg-background-dark rounded-3xl shadow-2xl overflow-hidden border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-muted hover:text-primary transition-colors p-1 z-10"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center px-8 py-12 text-center relative">
              {/* Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-primary/10 blur-[60px]" />

              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl transform scale-150 animate-pulse" />
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary shadow-[0_0_20px_rgba(212,115,17,0.4)]">
                  <Check className="text-white" size={40} strokeWidth={3} />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-text-main dark:text-white leading-tight mb-2 font-display">
                Thank You for Your Order!
              </h2>

              <p className="text-sm font-medium text-text-muted mb-6 uppercase tracking-wider">
                Order #{Math.floor(100000 + Math.random() * 900000)}
              </p>

              <div className="w-16 h-1 bg-border-light dark:bg-white/10 rounded-full mb-8" />

              <p className="text-base text-text-main/80 dark:text-white/80 leading-relaxed mb-8 max-w-sm">
                Your beans are being roasted and will be with you shortly. You
                will receive an email confirmation momentarily.
              </p>

              <button
                onClick={handleContinueShopping}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Continue Shopping</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-sm text-primary hover:text-primary-hover font-bold underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all"
                >
                  View Order Details
                </a>
              </div>
            </div>

            <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutSuccess;
