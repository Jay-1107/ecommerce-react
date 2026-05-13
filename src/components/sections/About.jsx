import { motion } from "framer-motion";
import { Sprout, Flame } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-background-light dark:bg-surface-dark relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] lg:h-[550px] w-full group order-2 lg:order-1"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-orange-900/20 opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border-light dark:border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-colors duration-500" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD38VojN5QxMUUifTeUz5xpsRV7FaD84VCmJYqKT_vjuSln3nZP4e60cGOzmSWAgVdPpUuQXt0I9aFFHHjpXIFFvVDgbY-Yl9AHfOc3IljAMEhYxHXptnOpgJCRF2-IE9dzQR19N8E9q-L2ClTWabLhu_ap5NSw5hF6i8ttpGKiJ8gjNrJOawRg9fNWrNZ2BCXbxi1KdLPo1hH3pw3_VPrfg7DQEh0h3BggZuAG92eX1A4i1YhKGWLuhYi8hejYPk870NXqvmFgng"
                alt="Close up of coffee beans being roasted"
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Our Origin
              </span>
              <h2 className="text-4xl font-bold text-text-main dark:text-white sm:text-5xl font-display mb-6">
                Cultivating Excellence
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />

              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>
                  We source the finest beans from sustainable farms around the
                  world, roasting them to perfection in small batches to bring
                  out their unique flavors and aromas. Our journey began with a
                  simple belief: great coffee connects people.
                </p>
                <p>
                  From the misty mountains of Ethiopia to the volcanic soils of
                  Guatemala, we travel the globe to find beans that tell a
                  story. Every cup you brew is a testament to our dedication to
                  quality, sustainability, and the art of roasting.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white dark:bg-white/5 border border-border-light dark:border-white/10 hover:border-primary/30 transition-colors duration-300 group shadow-sm dark:shadow-none">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                    <Sprout size={24} />
                  </div>
                  <div>
                    <h3 className="text-text-main dark:text-white font-bold text-lg mb-1">
                      Ethical Sourcing
                    </h3>
                    <p className="text-sm text-text-muted/80 leading-snug">
                      Direct trade ensures fair wages for farmers and
                      sustainable practices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 rounded-2xl bg-white dark:bg-white/5 border border-border-light dark:border-white/10 hover:border-primary/30 transition-colors duration-300 group shadow-sm dark:shadow-none">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                    <Flame size={24} />
                  </div>
                  <div>
                    <h3 className="text-text-main dark:text-white font-bold text-lg mb-1">
                      Artisan Roasting
                    </h3>
                    <p className="text-sm text-text-muted/80 leading-snug">
                      Small batches roasted daily for maximum freshness and
                      flavor profile.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
