import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const coffeeProducts = [
  {
    id: 1,
    name: "Velvet Espresso",
    price: "$14.50",
    tag: "Dark Roast",
    description:
      "Rich notes of dark chocolate and dried fruit. Perfect for espresso lovers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
  },
  {
    id: 2,
    name: "Midnight Roast",
    price: "$16.00",
    tag: "Ex. Dark",
    description:
      "Smoky and intense with a smooth finish. Our boldest blend yet.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
  },
  {
    id: 3,
    name: "Morning Bliss",
    price: "$15.00",
    tag: "Light Roast",
    description:
      "Bright citrus notes with a floral aroma. The perfect wake-up call.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
  },
  {
    id: 4,
    name: "Caramel Drizzle",
    price: "$18.00",
    tag: "Med. Roast",
    description:
      "Smooth caramel and vanilla flavors. Naturally sweet and comforting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
  },
  {
    id: 5,
    name: "Cold Brew Blend",
    price: "$15.50",
    tag: "Blend",
    description:
      "Coarsely ground for slow steeping. Low acidity, high caffeine kick.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
  },
  {
    id: 6,
    name: "Decaf Delight",
    price: "$14.00",
    tag: "Med. Roast",
    description:
      "All the flavor, none of the jitters. Swiss water process decaffeination.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
  },
];

import { useCart } from "../../context/CartContext";

const Menu = () => {
  const { addToCart } = useCart();
  return (
    <section
      id="menu"
      className="py-24 bg-background-light dark:bg-background-dark relative transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-light dark:via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">
              Selection
            </span>
            <h2 className="text-4xl font-bold text-text-main dark:text-white font-display mb-4">
              Signature Blends
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              Explore our curated selection of premium roasts, designed to
              elevate your morning ritual.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-surface-dark border border-border-light dark:border-white/5 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 duration-300 shadow-sm dark:shadow-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="aspect-square w-full overflow-hidden bg-accent-light dark:bg-accent-dark/30 p-8 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain object-center transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors duration-300 font-display">
                      {product.name}
                    </h3>
                    <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg text-sm">
                      {product.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-text-muted line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-border-light dark:border-white/5">
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider bg-background-light dark:bg-background-dark/50 px-2 py-1 rounded">
                      {product.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-text-muted text-sm font-bold transition-colors">
                        Details
                        <ArrowRight size={14} />
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="flex items-center gap-2 rounded-full bg-surface-dark text-white dark:bg-white px-4 py-2 text-sm font-bold dark:text-background-dark transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 active:scale-95 duration-200"
                      >
                        Add to Cart
                        <ShoppingBag size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors text-lg group"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
