import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "The Roaster's Choice",
    subtitle: "Signature Series",
    description:
      "Hand-picked selections by our master roasters, featuring unique profiles and rare beans.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDM08Uh-GfvzIfK9jSylO2ZFykEZ_xIfRMHRTx5oB4NCzo-CqH-Z5cggStGwYUJgcjsiyvGL415U-5irUo8Gt9ory5rdapHMMObiaxKlm7nhmvL7gkKxARR2HJY9bNh2VajrvHFTsX_zESOIh5o0tvsPidaC5dIbBDF-PvoJanEOJxXCIYLXA5qOn8T_9PKBXjJ6C8Wzv0oDRgOAqTMSo4k2W94_rau-OTPKaZKCyVJpJdekfRBvyMYis_i4HBCl_ITxL9nWzR4nw",
    large: false,
  },
  {
    title: "Morning Essentials",
    subtitle: "Daily Rituals",
    description:
      "Bright, energetic blends designed to wake up your senses and start your day right.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    large: false,
  },
  {
    title: "Seasonal Blends",
    subtitle: "Limited Edition",
    description:
      "Flavors inspired by the changing seasons, available only for a short time.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    large: false,
  },
  {
    title: "Single Origin Series",
    subtitle: "Global Origins",
    description:
      "Experience the distinct terroir of the world's finest coffee regions, from Ethiopia to Colombia.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD38VojN5QxMUUifTeUz5xpsRV7FaD84VCmJYqKT_vjuSln3nZP4e60cGOzmSWAgVdPpUuQXt0I9aFFHHjpXIFFvVDgbY-Yl9AHfOc3IljAMEhYxHXptnOpgJCRF2-IE9dzQR19N8E9q-L2ClTWabLhu_ap5NSw5hF6i8ttpGKiJ8gjNrJOawRg9fNWrNZ2BCXbxi1KdLPo1hH3pw3_VPrfg7DQEh0h3BggZuAG92eX1A4i1YhKGWLuhYi8hejYPk870NXqvmFgng",
    large: true,
  },
  {
    title: "Decaf Selection",
    subtitle: "Uncompromised Taste",
    description:
      "Swiss Water Process decaffeinated beans that never sacrifice flavor for comfort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    large: false,
  },
  {
    title: "Cold Brew Kits",
    subtitle: "Refresh & Revive",
    description:
      "Everything you need to create smooth, refreshing cold brew at home.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    large: false,
  },
  {
    title: "Brewing Equipment",
    subtitle: "Essential Gear",
    description:
      "Elevate your home brewing setup with our curated selection of grinders, kettles, and presses.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOw-JNaFsbY-rzJQkXL8eUM6XjTqWIE5uqsSRtEpPk0DZ-977LV2WFGNOhl8URTxa-Y2GNjAsjurfNczjeA-BU0gzz38GPNF9yaeC0IZHKz5Hc5-mrOlV2tKkZdxCZVy3ze0gUECFb-vqnycAFExNQc-p0unqu9whLzUn5l8O-oPpl9oQeM6yRQUEID7RbdJKUxOnagLxw0nJeZiqjv4FyTInDaV94h6SYaSXNOpOFp1qFR5IBU77DVUmz9kiLUmyQ_Rp_iTutkA",
    large: true,
  },
];

const ShopCollections = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-surface-dark py-20 lg:py-28 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-white to-white dark:via-surface-dark dark:to-surface-dark"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[300px] w-[300px] rounded-full bg-orange-900/10 blur-[80px]"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            Premium Selections
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-main dark:text-text-light tracking-tight mb-6 font-display">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Collections
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-muted leading-relaxed">
            From single-origin treasures to our signature house blends, discover
            the perfect roast for every moment of your day.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="bg-background-light dark:bg-background-dark py-12 lg:py-20 relative transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`group relative h-[420px] w-full overflow-hidden rounded-2xl border border-border-light dark:border-border-dark shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/40 block ${item.large ? "lg:col-span-2" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div
                  className={`absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ${item.large ? "max-w-lg" : ""}`}
                >
                  <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2">
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 h-0 group-hover:h-auto overflow-hidden">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold group-hover:text-primary transition-colors">
                    Shop Collection{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="bg-white dark:bg-surface-dark border-t border-border-light dark:border-border-dark py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-text-main dark:text-white mb-2 font-display">
              Not sure what to choose?
            </h2>
            <p className="text-text-muted">
              Take our coffee quiz to find your perfect match.
            </p>
          </div>
          <button className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-all hover:-translate-y-0.5 active:scale-95 hover:bg-primary-hover hover:shadow-[0_4px_20px_rgba(212,115,17,0.4)]">
            Take the Quiz
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopCollections;
