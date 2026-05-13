import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Send } from "lucide-react";

const ContactInfoItem = ({ icon: Icon, title, content }) => (
  <div className="flex gap-6 group">
    <div className="h-12 w-12 rounded-xl bg-background-light dark:bg-background-dark flex items-center justify-center text-primary shrink-0 border border-border-light dark:border-white/10 group-hover:border-primary/50 group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-md">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-text-main dark:text-white font-bold text-lg">
        {title}
      </h4>
      <div className="text-text-muted mt-1 leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-background-light dark:bg-background-dark relative transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white dark:bg-surface-dark border border-border-light dark:border-white/5 overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/50">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="order-last lg:order-none p-10 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-r border-border-light dark:border-white/5 relative">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">
                  Get in touch
                </span>
                <h2 className="text-3xl font-bold text-text-main dark:text-white mb-10 font-display">
                  Visit Our Roastery
                </h2>

                <div className="space-y-10">
                  <ContactInfoItem
                    icon={MapPin}
                    title="Location"
                    content={`123 Brew St, Espresso District\nSeattle, WA 98101`}
                  />
                  <ContactInfoItem
                    icon={Mail}
                    title="Contact"
                    content={`hello@coffeebreak.com\n+1 (555) 123-4567`}
                  />
                  <ContactInfoItem
                    icon={Clock}
                    title="Hours"
                    content={`Mon-Fri: 7am - 7pm\nSat-Sun: 8am - 6pm`}
                  />
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="order-first lg:order-none p-10 lg:p-16 bg-black/[0.02] dark:bg-white/[0.02]">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2 font-display">
                  Send us a message
                </h3>
                <p className="text-text-muted mb-8 text-sm">
                  Have a question or wholesale inquiry? Fill out the form below.
                </p>

                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-text-main dark:text-text-light mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full rounded-xl bg-white dark:bg-background-dark border border-border-light dark:border-white/10 text-text-main dark:text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-muted/30 transition-shadow shadow-sm dark:shadow-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-text-main dark:text-text-light mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl bg-white dark:bg-background-dark border border-border-light dark:border-white/10 text-text-main dark:text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-muted/30 transition-shadow shadow-sm dark:shadow-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-text-main dark:text-text-light mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="How can we help?"
                      className="w-full rounded-xl bg-white dark:bg-background-dark border border-border-light dark:border-white/10 text-text-main dark:text-white px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-muted/30 transition-shadow resize-none shadow-sm dark:shadow-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-primary py-4 px-6 text-white font-bold hover:bg-primary-hover transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95 duration-200 flex items-center justify-center gap-2 shadow-sm"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
