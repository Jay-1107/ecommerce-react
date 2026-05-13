import { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Menu from "./components/sections/Menu";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Cart from "./pages/Cart";
import ShopCollections from "./pages/ShopCollections";
import ExploreMenu from "./pages/ExploreMenu";
import ProductDetails from "./pages/ProductDetails";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Menu />
    <Gallery />
    <Contact />
  </>
);

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { motion, AnimatePresence } from "framer-motion";

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-main dark:text-text-light font-sans selection:bg-primary selection:text-white transition-colors duration-300 overflow-x-hidden">
      {!hideHeaderFooter && <Navbar />}
      <main className="flex flex-col relative w-full">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop" element={<ShopCollections />} />
            <Route path="/menu" element={<ExploreMenu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

export default App;
