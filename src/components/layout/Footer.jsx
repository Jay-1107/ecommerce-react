import { Coffee, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-surface-dark border-t border-border-light dark:border-white/5 pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-2">
              <Coffee size={28} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-text-main dark:text-white font-display">
              Espresso & Co.
            </span>
            <p className="text-text-muted max-w-sm text-sm leading-relaxed">
              Premium coffee roasted with passion and served with love. Join our
              community of coffee lovers.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-background-dark border border-border-light dark:border-white/10 text-text-muted hover:text-white hover:border-primary hover:bg-primary transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center w-full border-t border-border-light dark:border-white/5 pt-8">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Refund Policy",
              "Shipping Info",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-text-muted hover:text-primary transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-sm text-text-muted/40">
            &copy; 2024 Espresso & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
