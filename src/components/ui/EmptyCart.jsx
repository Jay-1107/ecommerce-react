import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4 text-center animate-fade-in">
      {/* Illustration Area - Using a styled container with icon as placeholder for the design's illustration */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-150" />
        <div className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface-dark/5 dark:bg-white/5 border border-border-dark/10 dark:border-white/10 shadow-xl">
          <ShoppingBag
            size={64}
            className="text-text-muted/50 dark:text-white/20"
            strokeWidth={1.5}
          />
        </div>
        {/* Floating elements for dynamic feel */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-primary/10 animate-bounce delay-700" />
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4 font-display"
      >
        Your Cart is Empty
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-text-muted text-base md:text-lg max-w-md mb-10 leading-relaxed"
      >
        Looks like you haven't added any of our premium coffees to your cart
        yet.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link
          to="/menu"
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group"
        >
          <span>Start Shopping</span>
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default EmptyCart;
