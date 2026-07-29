import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

import { XLogo } from "@/components/x-logo";

import fikradoLogo from "@assets/logo_main.webp";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
};

const links = [
  { labelKey: "nav.home", id: "home" },
  { labelKey: "nav.services", id: "services" },
  { labelKey: "nav.books", id: "books" },
  { labelKey: "nav.contact", id: "contact" },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{ background: "linear-gradient(180deg,#060d1a 0%,#02050c 100%)" }}
    >
      {/* Top divider */}
      <div className="section-divider mb-16" />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(251,191,36,0.04)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5 cursor-pointer" onClick={() => scrollTo("home")}>
              <img
                src={fikradoLogo}
                alt="Fikrado Security"
                className="h-12 w-12 rounded-xl object-contain glow-yellow"
              />
              <div>
                <div className="text-base font-black gradient-text tracking-wider text-glow-yellow">FIKRADO</div>
                <div className="text-[10px] text-slate-500 tracking-[0.2em] uppercase text-glow-yellow">Security</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 text-glow-yellow">
              {t("footer.desc")}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: XLogo,    href: "https://x.com/fikrado1" },
                { Icon: Github,    href: "https://github.com/fikrado-orgnasation" },
                { Icon: Linkedin,  href: "https://www.linkedin.com/company/120893904/" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 text-glow-yellow
                    hover:text-yellow-400 hover:border-yellow-400/30 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold text-yellow-400 tracking-widest uppercase mb-5 text-glow-yellow">
              {t("footer.quickLinks")}
            </h4>
            <div className="space-y-3">
              {links.map(({ labelKey, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group text-glow-yellow"
                >
                  <span
                    className="w-4 h-px bg-slate-600 group-hover:bg-yellow-400 group-hover:w-6 transition-all duration-300"
                  />
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold text-yellow-400 tracking-widest uppercase mb-5 text-glow-yellow">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              {[
                { Icon: Mail,   text: "fikrado1@gmail.com" },
                { Icon: Phone,  text: "+252 63 4048063\n+251 984858498" },
                { Icon: MapPin, text: "Masala, Hargeisa, Somaliland\n10th Kabele, Jijiga, Ethiopia" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-400 text-glow-yellow">
                  <Icon size={15} className="text-yellow-400 mt-0.5 shrink-0" />
                  <span className="whitespace-pre-line">{text}</span>
                </div>
              ))}
            </div>

            {/* Security badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg glass border border-green-400/20">
              <Shield size={14} className="text-green-400 text-glow-yellow" />
              <span className="text-xs text-green-400 text-glow-yellow">ISO 27001 Certified</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 text-glow-yellow">
          <a
            href="https://fikrado2.github.io/fikrado/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-wrap justify-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span>{t("footer.poweredBy")}</span>
            <img src={fikradoLogo} alt="Fikrado Security" className="h-4 w-auto inline-block" />
            <span className="font-bold tracking-wide">
              <span className="text-yellow-400 text-glow-yellow">FIKRADO</span>
              <span className="text-white"> SECURITY</span>
            </span>
          </a>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-500 text-glow-yellow">{t("footer.allSystems")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
