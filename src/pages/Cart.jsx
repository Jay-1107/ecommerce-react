import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  Lock,
  ShoppingBag,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CheckoutSuccess from "../components/ui/CheckoutSuccess";
import EmptyCart from "../components/ui/EmptyCart";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } =
    useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    setShowCheckoutSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowCheckoutSuccess(false);
    clearCart();
  };

  // Calculation with fixed values from reference design logic if needed,
  // but using dynamic values from context.
  // Reference has: Subtotal, Shipping ($5.00), Tax ($3.88 for $48.50 subtotal ~ 8%).
  const shipping = 5.0;
  const taxRate = 0.08;
  const tax = cartTotal * taxRate;
  const grandTotal = cartTotal + shipping + tax;

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 font-display pt-20">
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 py-8 md:px-8 lg:px-12 lg:py-12">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left Column: Cart Items */}
            <div className="flex-1 w-full lg:w-[70%]">
              <div className="flex items-baseline justify-between mb-6">
                <h1 className="text-text-main dark:text-text-light text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.033em] font-display">
                  Your Cart
                </h1>
                <span className="text-text-muted font-medium font-sans">
                  {cartItems.length} items
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <AnimatePresence initial={false}>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-300"
                    >
                      <Link
                        to={`/product/${item.id}`}
                        state={{
                          selectedSize: item.selectedSize,
                          selectedGrind: item.selectedGrind,
                          quantity: item.quantity,
                        }}
                        className="shrink-0 relative"
                      >
                        <div
                          className="bg-center bg-no-repeat bg-cover rounded-xl size-24 sm:size-32 shadow-inner bg-gray-100 dark:bg-black/20 hover:opacity-80 transition-opacity"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        ></div>
                      </Link>

                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex justify-between items-start gap-4">
                          <Link
                            to={`/product/${item.id}`}
                            state={{
                              selectedSize: item.selectedSize,
                              selectedGrind: item.selectedGrind,
                              quantity: item.quantity,
                            }}
                            className="flex-1 hover:text-primary transition-colors"
                          >
                            <h3 className="text-text-main dark:text-text-light text-lg font-bold leading-tight mb-1 font-display">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="text-right">
                            <p className="text-text-main dark:text-text-light text-lg font-bold font-display">
                              {item.price}
                            </p>
                          </div>
                        </div>

                        <div className="mt-2">
                          <p className="text-text-muted text-sm mb-1 font-sans">
                            {item.tag || "Premium Roast"}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.selectedSize && (
                              <p className="text-text-muted text-xs bg-background-light dark:bg-background-dark inline-block px-2 py-1 rounded-md font-sans">
                                {item.selectedSize}
                              </p>
                            )}
                            {item.selectedGrind && (
                              <p className="text-text-muted text-xs bg-background-light dark:bg-background-dark inline-block px-2 py-1 rounded-md font-sans">
                                {item.selectedGrind}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-end justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-border-light dark:border-white/5 rounded-lg bg-background-light dark:bg-background-dark">
                              <button
                                onClick={() =>
                                  updateQuantity(item.uniqueId || item.id, -1)
                                }
                                className="size-8 flex items-center justify-center text-text-main dark:text-text-light hover:text-primary hover:bg-white dark:hover:bg-white/5 rounded-l-lg transition-colors"
                              >
                                <Minus size={18} />
                              </button>
                              <input
                                className="w-10 p-0 text-center bg-transparent border-none focus:ring-0 text-sm font-semibold text-text-main dark:text-text-light"
                                min="1"
                                type="number"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                onClick={() =>
                                  updateQuantity(item.uniqueId || item.id, 1)
                                }
                                className="size-8 flex items-center justify-center text-text-main dark:text-text-light hover:text-primary hover:bg-white dark:hover:bg-white/5 rounded-r-lg transition-colors"
                              >
                                <Plus size={18} />
                              </button>
                            </div>
                            <button
                              onClick={() =>
                                removeFromCart(item.uniqueId || item.id)
                              }
                              className="flex items-center gap-1 text-xs font-medium text-text-muted hover:text-red-600 dark:hover:text-red-400 transition-colors ml-2 group/delete font-sans"
                            >
                              <Trash2
                                size={18}
                                className="group-hover/delete:fill-current"
                              />
                              <span className="hidden sm:inline">Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-[30%] shrink-0 lg:sticky lg:top-32">
              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-black/40 p-6 md:p-8">
                <h2 className="text-xl font-bold text-text-main dark:text-text-light mb-6 font-display">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 font-sans">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Subtotal</span>
                    <span className="font-semibold text-text-main dark:text-text-light">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Estimated Shipping</span>
                    <span className="font-semibold text-text-main dark:text-text-light">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Estimated Tax</span>
                    <span className="font-semibold text-text-main dark:text-text-light">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-dashed border-border-light dark:border-white/5 my-4"></div>

                <div className="flex justify-between items-center mb-8 font-display">
                  <span className="text-lg font-bold text-text-main dark:text-text-light">
                    Total
                  </span>
                  <span className="text-2xl font-extrabold text-primary">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                <div className="mb-6 font-sans">
                  <label className="block text-xs font-semibold text-text-muted mb-2 uppercase tracking-wide">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 rounded-lg border-border-light dark:border-white/5 bg-background-light dark:bg-background-dark text-text-main dark:text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary px-3 py-2 placeholder:text-text-muted/50 outline-none transition-all"
                    />
                    <button className="px-4 py-2 bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-white/5 text-text-main dark:text-text-light text-sm font-bold rounded-lg transition-colors border border-transparent dark:border-white/5">
                      Apply
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group font-display"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-text-muted font-sans">
                  <Lock size={16} />
                  <span>Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {showCheckoutSuccess && (
        <CheckoutSuccess
          isOpen={showCheckoutSuccess}
          onClose={handleCloseSuccess}
        />
      )}
    </div>
  );
};

export default Cart;
