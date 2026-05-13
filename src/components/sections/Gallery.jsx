import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Eye, X } from "lucide-react";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3ALxCdqxYMpk9hdn6-TyrFn9JiYXneXKn0k5cIOirSZ2oGsprT4TcsG2XneWtdS2Os-j24b5SRHNqaKj6F79jeK93TeQQXTZJpLSn-05UCXwzBrSV2sIh7SwG48heGFp3qAFkmFJYC2A3Mk3lQ9Z-UzjcQex1UrOvvALBuIP9keFR-kkrdxVH4BItwCN3hMZYFl7KDkB0pUQLZtfeUVSYRfSoPYt9l1S7A97mOxhvi0gqYtxA_faVfNQPgGXv9WHWwXY0EsOi6w",
    alt: "Barista pouring latte art",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf89a8kS9N2BX_tmlMI3WcoHKPKMsmNVRsh508A89FwTbJnNMZgY6nUNL83j6-06XeNiGwsMgPbHEPRkilyM993BDBMZjrb9N2IOvdAueGswkOlrMDqXMUTMaeGiIOLn--M0C8A01V4_ycrTOA6x78rfAYHyMcClDcqqup4KQgA6EOJtCy5lXDf6BzWuHuuB9aR4UpimTO0cLf1Ez_eRwU9-L1HyIt3NqzNvYBCJHy7339At7TXw0TY-abgi56U6mxszhzmQVoEg",
    alt: "Close up of coffee beans",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvZtIVV0gq6YPIHfyP9nSEVAL24LB8azIh5cvYVhcttln-AXrt-sYB2xXwBD666wpVS6nq5vpSjGsSvMlUCv0m7tbGF-YcIfuMNtLwhDGlhI9pWVuQLi_5GT66qsA9c56UjwQqPBaIjizJMk29osYINV7bRgNJ3lOGNiF0_HiKYCkiVjhY33N5-rh3XCuFOibZ_Bp0BoCMjlme9UwCrldVs-T560IoaXiH1aE5Bb31h8uNEtloTrdW_fCYsaZ3YgJXbsNiA-P1A",
    alt: "Cozy coffee shop interior",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOw-JNaFsbY-rzJQkXL8eUM6XjTqWIE5uqsSRtEpPk0DZ-977LV2WFGNOhl8URTxa-Y2GNjAsjurfNczjeA-BU0gzz38GPNF9yaeC0IZHKz5Hc5-mrOlV2tKkZdxCZVy3ze0gUECFb-vqnycAFExNQc-p0unqu9whLzUn5l8O-oPpl9oQeM6yRQUEID7RbdJKUxOnagLxw0nJeZiqjv4FyTInDaV94h6SYaSXNOpOFp1qFR5IBU77DVUmz9kiLUmyQ_Rp_iTutkA",
    alt: "Coffee grinder with beans",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_T6-SpmUjE6R_OlluL6EzjMxZ2jEhfBxltvKk43KPTfFfqGMiR8RlzJ1gMOCt7fSz7aGqVgwyzP9ue8COlrzQuG7P6RKvukF63pCd51rad4xwMAphJ8oOjj2B78MWLy4sITAItOY67odzsYeMjdpXgjWe3D2Oauc77I4_MNA9oiGS2rc5AyQ7BWa_5KlO1jktyb1x_Yta4S85yNkRJASg8dLaMQE3Dd1dzId6hIEHYlG0mmuWs8EVjuAyI17MaW6kafTC4Ck-ig",
    alt: "Coffee cup on a wooden table",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-EA_e8KJzHIxgLfIaaIhkrXL0ecAWmM8-zo1SUR-iosKbtB_uu42QzJpaawO4-f-Yznbm-2QeyhsfdxIRyOXaDVG6oEK7LO4F0qpl-DvWLG85XppNZQ22_BGk9dWfJioC92VJZtyBowmEnZcJXKuxweKR4CVMhYRq307U64rJMkb0Xs16-3K7CuVa0_evMLhAOGOPV9iHEdr2G7ZYGWJ9enHYec7DqZxV-30poBnahaHZyMqlPR0qslZuXMF9_kzfxZP7DG2bOw",
    alt: "Friends drinking coffee",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    // <section
    //   id="gallery"
    //   className="py-24 bg-background-light dark:bg-surface-dark relative overflow-hidden transition-colors duration-300"
    // >
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    //     <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
    //       <motion.div
    //         initial={{ opacity: 0, x: -20 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.6 }}
    //       >
    //         <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">
    //           Visual Journey
    //         </span>
    //         <h2 className="text-3xl font-bold text-text-main dark:text-white mt-2 font-display">
    //           Moments of Brew
    //         </h2>
    //       </motion.div>

    //       <motion.a
    //         initial={{ opacity: 0, x: 20 }}
    //         whileInView={{ opacity: 1, x: 0 }}
    //         viewport={{ once: true }}
    //         transition={{ duration: 0.6 }}
    //         href="#"
    //         className="text-text-muted hover:text-primary font-medium flex items-center gap-2 transition-colors group"
    //       >
    //         <Instagram size={20} />
    //         Follow on Instagram
    //         <span className="group-hover:translate-x-1 transition-transform duration-300">
    //           →
    //         </span>
    //       </motion.a>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {galleryImages.map((image, index) => (
    //         <motion.div
    //           key={index}
    //           initial={{ opacity: 0, scale: 0.9 }}
    //           whileInView={{ opacity: 1, scale: 1 }}
    //           viewport={{ once: true }}
    //           transition={{ duration: 0.5, delay: index * 0.1 }}
    //           className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer border border-border-light dark:border-white/5 bg-white dark:bg-background-dark shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
    //           onClick={() => setSelectedImage(image)}
    //         >
    //           <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-sm duration-300">
    //             <Eye
    //               className="text-white scale-50 group-hover:scale-100 transition-transform duration-300"
    //               size={32}
    //             />
    //           </div>
    //           <img
    //             src={image.src}
    //             alt={image.alt}
    //             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    //             loading="lazy"
    //           />
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Image Modal */}
    //   <AnimatePresence>
    //     {selectedImage && (
    //       <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
    //         <motion.div
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           className="absolute inset-0 bg-black/90 backdrop-blur-lg"
    //           onClick={() => setSelectedImage(null)}
    //         />
    //         <motion.div
    //           initial={{ opacity: 0, scale: 0.9 }}
    //           animate={{ opacity: 1, scale: 1 }}
    //           exit={{ opacity: 0, scale: 0.9 }}
    //           transition={{ type: "spring", damping: 25, stiffness: 300 }}
    //           className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-2xl"
    //         >
    //           <button
    //             onClick={() => setSelectedImage(null)}
    //             className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md border border-white/10"
    //           >
    //             <X size={24} />
    //           </button>
    //           <img
    //             src={selectedImage.src}
    //             alt={selectedImage.alt}
    //             className="w-full h-full object-contain max-h-[90vh] bg-black"
    //           />
    //         </motion.div>
    //       </div>
    //     )}
    //   </AnimatePresence>
    // </section>

    <section
      id="gallery"
      className="py-20 md:py-24 bg-background-light dark:bg-surface-dark relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">
              Visual Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-main dark:text-white mt-2 font-display">
              Moments of Brew
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#"
            className="text-text-muted hover:text-primary font-medium flex items-center gap-2 transition-colors group bg-white/50 dark:bg-white/5 px-4 py-2 rounded-full border border-border-light dark:border-white/10 md:bg-transparent md:border-none md:p-0"
          >
            <Instagram size={18} />
            <span className="text-sm sm:text-base">Follow on Instagram</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.a>
        </div>

        {/* Stylish Grid: Mobile par 2 columns, Desktop par 3 */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 items-start">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-border-light dark:border-white/5 bg-white dark:bg-background-dark shadow-md hover:shadow-xl transition-all duration-500 
            aspect-square sm:aspect-[4/3] 
            ${index % 2 === 1 ? "mt-6 sm:mt-0" : ""}`}
              onClick={() => setSelectedImage(image)}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/40 md:bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[2px] md:backdrop-blur-sm duration-300">
                <div className="bg-white/20 p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/30">
                  <Eye
                    className="text-white scale-75 group-hover:scale-100 transition-transform duration-300"
                    size={24}
                  />
                </div>
              </div>

              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal (Responsive) */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-screen w-full flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-[70] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-xl border border-white/20"
              >
                <X size={20} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
