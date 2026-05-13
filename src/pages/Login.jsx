import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const pageTransition = {
  initial: { opacity: 0, scale: 0.98, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -10 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const fadeSlideUp = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeSlideRight = {
  initial: { opacity: 0, x: -25 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const result = login(email, password);
    if (result.success) {
      navigate("/cart");
    } else {
      setError(result.message);
    }
  };

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className="flex flex-col lg:flex-row min-h-screen h-screen w-full bg-[#12100E] font-display text-[#FDFBF7] antialiased lg:overflow-hidden overflow-y-auto"
    >
      {/* Left Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="hidden lg:block lg:w-1/2 relative bg-[#1c1816] overflow-hidden group"
      >
        <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/30"></div>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          alt="Pouring coffee"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-110 transition-transform duration-1000 group-hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDdlfJ5uTON5D70pat7uqYSwt7y1YSjhkmRXsfrJyphjhMHlW3-sMGDKjv6GJQb9_at_DPdX8PiV_8P8zGE9MTPTEa2DBOo4S1ZgC3l16SGYiHVeH4XUXKpVaJKO9CU3mFiW97jZkAMNer10bYkvX6Q88Y6n-7vw79gqw5T_-A0eoony1r2X4cj3QsoNtKNaW2zFeeBZRKRGxCAilGfAHXzqdZioCVnp_9Bp6rRbcwg3_WALR3V0-nJjzikrW4pfWqWgDHs3wQ"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 xl:p-12">
          <motion.div
            variants={fadeSlideRight}
            initial="initial"
            animate="animate"
          >
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-orange-600 to-orange-800 text-white shadow-lg shadow-primary/20">
                <Coffee size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-text-main dark:text-white font-display">
                Espresso <span className="text-primary">&</span> Co.
              </span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="text-white text-2xl xl:text-3xl font-bold leading-tight max-w-lg mb-4 xl:mb-6">
              "Crafting the perfect cup is both an art and a daily ritual."
            </blockquote>
            <p className="text-white/80 text-base xl:text-lg">
              Experience the finest roasts delivered to your door.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center p-6 sm:p-12 lg:px-12 xl:px-24 lg:py-8 bg-[#12100E] relative overflow-y-auto lg:overflow-hidden">
        {/* Subtle animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-72 h-72 bg-[#b86114]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 30, -25, 0],
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#c48b48]/5 rounded-full blur-3xl"
          />
        </div>

        <Link
          to="/"
          className="lg:hidden absolute top-6 left-6 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-3xl text-[#b86114]">
            coffee
          </span>
          <span className="font-bold text-xl text-[#FDFBF7]">Coffee Co.</span>
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-6 right-6 lg:top-8 lg:right-10 pt-4 px-2 lg:pt-0"
        >
          <p className="text-sm text-[#e6dec8]">
            Don't have an account?
            <Link
              to="/signup"
              className="font-bold text-[#b86114] hover:text-[#e88a2a] transition-all duration-300 ml-1 hover:underline underline-offset-4 decoration-[#b86114]/50"
            >
              Sign Up
            </Link>
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full max-w-md space-y-6 lg:space-y-8 mt-12 lg:mt-0 pb-10 lg:pb-0 relative z-10"
        >
          <motion.div
            variants={fadeSlideUp}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#FDFBF7] tracking-tight mb-1 lg:mb-2">
              Welcome Back
            </h1>
            <p className="text-[#e6dec8]/70 text-sm xl:text-base">
              Please enter your details to sign in.
            </p>
          </motion.div>

          <motion.form
            variants={fadeSlideUp}
            className="space-y-4 xl:space-y-5"
            onSubmit={handleLogin}
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-red-400 bg-red-400/10 border border-red-400/50 rounded-xl p-3 text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            <motion.div variants={fadeSlideUp}>
              <label
                className="block text-sm font-semibold text-[#FDFBF7] mb-1.5"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#e6dec8]/50 group-focus-within/input:text-[#b86114] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  className="block w-full pl-11 pr-3 py-2.5 xl:py-3 bg-[#1c1816] border border-[#3a322c] rounded-xl text-[#FDFBF7] placeholder:text-[#e6dec8]/30 focus:outline-none focus:ring-2 focus:ring-[#b86114]/50 focus:border-[#b86114] focus:shadow-[0_0_15px_rgba(184,97,20,0.15)] transition-all duration-300 shadow-sm hover:border-[#4a423c]"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <label
                className="block text-sm font-semibold text-[#FDFBF7] mb-1.5"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#e6dec8]/50 group-focus-within/input:text-[#b86114] transition-colors duration-300">
                  <span className="material-symbols-outlined text-[20px]">
                    lock
                  </span>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full pl-11 pr-11 py-2.5 xl:py-3 bg-[#1c1816] border border-[#3a322c] rounded-xl text-[#FDFBF7] placeholder:text-[#e6dec8]/30 focus:outline-none focus:ring-2 focus:ring-[#b86114]/50 focus:border-[#b86114] focus:shadow-[0_0_15px_rgba(184,97,20,0.15)] transition-all duration-300 shadow-sm font-mono hover:border-[#4a423c]"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#e6dec8]/50 hover:text-[#FDFBF7] transition-all duration-300 hover:scale-110"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeSlideUp}
              className="flex items-center justify-between pt-1 lg:pt-0"
            >
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 border border-[#3a322c] rounded bg-[#1c1816] text-[#b86114] focus:ring-[#b86114]/40 focus:ring-offset-0 cursor-pointer transition-all duration-200"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  className="ml-2 text-sm text-[#e6dec8] cursor-pointer"
                  htmlFor="remember-me"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-[#b86114] hover:text-[#e88a2a] transition-all duration-300 hover:underline underline-offset-4 decoration-[#b86114]/50"
              >
                Forgot Password?
              </a>
            </motion.div>

            <motion.div variants={fadeSlideUp}>
              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                  boxShadow: "0 8px 25px rgba(196, 139, 72, 0.35)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full flex justify-center items-center gap-2 py-3 xl:py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-[#c48b48]/20 text-sm font-bold text-white bg-gradient-to-r from-[#c48b48] to-[#b86114] hover:from-[#d49a57] hover:to-[#c97320] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#12100E] focus:ring-[#c48b48] transition-all duration-300 mt-2"
              >
                Sign In
              </motion.button>
            </motion.div>
          </motion.form>

          <motion.div variants={fadeSlideUp} className="relative mt-4 xl:mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#3a322c]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#12100E] text-[#e6dec8]/60">
                Or continue with
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeSlideUp}
            className="grid grid-cols-2 gap-3 xl:gap-4 mt-4 xl:mt-6"
          >
            <motion.button
              type="button"
              whileHover={{ y: -2, borderColor: "rgba(184, 97, 20, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full px-4 py-2.5 xl:py-3 border border-[#3a322c] rounded-xl shadow-sm bg-[#1c1816] text-sm font-medium text-[#FDFBF7] hover:bg-[#25201d] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3a322c]"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.53-6.033-5.652 c0-3.122,2.701-5.652,6.033-5.652c1.489,0,2.82,0.512,3.878,1.35l2.861-2.92C17.502,3.614,15.158,2.71,12.545,2.71 C7.28,2.71,3.013,6.71,3.013,11.644c0,4.935,4.267,8.934,9.532,8.934c4.891,0,8.88-3.32,9.888-8.176h-9.888V10.239z"></path>
              </svg>
              Google
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ y: -2, borderColor: "rgba(184, 97, 20, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full px-4 py-2.5 xl:py-3 border border-[#3a322c] rounded-xl shadow-sm bg-[#1c1816] text-sm font-medium text-[#FDFBF7] hover:bg-[#25201d] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3a322c]"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fill="#1877F2"
                ></path>
              </svg>
              Facebook
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeSlideUp}
            className="mt-8 text-center lg:hidden"
          >
            <p className="text-sm text-[#e6dec8]">
              <a
                href="#"
                className="text-[#e6dec8]/70 hover:text-[#b86114] transition-all duration-300 text-xs mr-4"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#e6dec8]/70 hover:text-[#b86114] transition-all duration-300 text-xs"
              >
                Terms of Service
              </a>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="hidden lg:flex absolute bottom-6 w-full justify-between px-10 text-xs text-[#e6dec8]/40"
        >
          <p>© 2024 Coffee Co.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-[#b86114] transition-all duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-[#b86114] transition-all duration-300"
            >
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
