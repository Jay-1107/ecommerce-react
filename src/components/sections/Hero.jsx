import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Star, Clock, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });

  useEffect(() => {
    if (inView) {
      motionValue.set(parseFloat(value));
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          latest.toFixed(value % 1 !== 0 ? 1 : 0) + suffix;
      }
    });
  }, [springValue, value, suffix]);

  return (
    <span
      ref={ref}
      className="text-3xl font-bold text-text-main dark:text-white font-display mb-1"
    >
      0{suffix}
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-orange-900/10 blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white dark:bg-surface-dark border border-border-light dark:border-white/10 text-primary text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
                Premium Selection
              </span>
              <h1 className="text-5xl font-extrabold tracking-tight text-text-main dark:text-white sm:text-6xl lg:text-7xl leading-[1.1] font-display">
                Experience the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  Art
                </span>{" "}
                of Brewing
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-lg text-text-muted leading-relaxed"
            >
              Sustainably sourced, artisan roasted beans delivered directly to
              your door. Taste the difference of passion in every cup, crafted
              for the true connoisseur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                to="/shop"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 active:scale-95 duration-200"
              >
                Shop Collections
              </Link>
              <Link
                to="/menu"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border-light dark:border-white/10 bg-white dark:bg-white/5 px-8 text-base font-bold text-text-muted hover:text-primary dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/10 hover:border-primary/30 active:scale-95 duration-200 shadow-sm dark:shadow-none"
              >
                Explore Menu
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 pt-8 border-t border-border-light dark:border-white/10 mt-4"
            >
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Coffee size={16} />
                </div>
                <Counter value={100} suffix="%" />
                <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                  Arabica Beans
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Clock size={16} />
                </div>
                <Counter value={24} suffix="h" />
                <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                  Fresh Roast
                </span>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Star size={16} />
                </div>
                <Counter value={4.9} />
                <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                  Star Rating
                </span>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 h-full min-h-[400px] lg:min-h-[600px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl opacity-40 animate-pulse" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border-light dark:border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-background-light/80 dark:from-background-dark/80 via-transparent to-transparent z-10" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM08Uh-GfvzIfK9jSylO2ZFykEZ_xIfRMHRTx5oB4NCzo-CqH-Z5cggStGwYUJgcjsiyvGL415U-5irUo8Gt9ory5rdapHMMObiaxKlm7nhmvL7gkKxARR2HJY9bNh2VajrvHFTsX_zESOIh5o0tvsPidaC5dIbBDF-PvoJanEOJxXCIYLXA5qOn8T_9PKBXjJ6C8Wzv0oDRgOAqTMSo4k2W94_rau-OTPKaZKCyVJpJdekfRBvyMYis_i4HBCl_ITxL9nWzR4nw"
                alt="Pouring hot water over coffee grounds"
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 z-20 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border border-border-light dark:border-white/10 p-4 rounded-2xl shadow-xl max-w-[200px] hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 bg-green-500/20 rounded-full text-green-400">
                    <Coffee size={16} />
                  </div>
                  <span className="text-sm font-bold text-text-main dark:text-white">
                    Eco-Friendly
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Ethically sourced from sustainable farms worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
