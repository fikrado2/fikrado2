import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Globe, ChevronDown, Linkedin, Github, Youtube, Send } from "lucide-react";
import { useI18n, LANGUAGES } from "@/lib/i18n";
import { XLogo } from "@/components/x-logo";

import fikradoLogo from "@assets/logo_main.webp";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [langOpen, setLangOpen] = useState(false);
  const [glowing, setGlowing] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setGlowing(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const NAV = [
    { label: t("nav.home"), id: "home" },
    { label: t("nav.services"), id: "services" },
    { label: t("nav.books"), id: "books" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = ["home", "services", "books", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) setActive(id);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  const pickLang = (code: string) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <>
      {/* Full-page blur + radial glow overlay while translate button glows */}
      <AnimatePresence>
        {glowing && (
          <>
            {/* Backdrop blur + dark tint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-40 pointer-events-none"
              style={{
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                background: "rgba(0,0,0,0.5)",
              }}
            />
            {/* Giant pulsing radial yellow glow from top-right (where the button lives) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{
                opacity: [0, 0.85, 0.55, 0.85, 0.55, 0],
                scale: [0.2, 1, 0.95, 1.05, 1, 1.1],
              }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="fixed z-40 pointer-events-none"
              style={{
                top: "-20vh",
                right: "-10vw",
                width: "120vw",
                height: "140vh",
                background:
                  "radial-gradient(ellipse at 80% 10%, rgba(250,204,21,0.55) 0%, rgba(250,204,21,0.18) 35%, rgba(250,204,21,0.04) 60%, transparent 75%)",
                filter: "blur(40px)",
              }}
            />
          </>
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark border-b border-yellow-400/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollTo("home")}
            >
              <div className="relative">
                <img
                  src={fikradoLogo}
                  alt="Fikrado Security"
                  className="h-12 w-12 rounded-xl object-contain glow-yellow"
                />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse" />
              </div>
              <div>
                <div className="text-base font-black gradient-text tracking-wider">FIKRADO</div>
                <div className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">Security</div>
              </div>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    active === id ? "text-yellow-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                  {active === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                    />
                  )}
                </button>
              ))}

              {/* Social media links (desktop) */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/120893904/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/fikrado-orgnasation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://x.com/fikrado1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
                  aria-label="X"
                >
                  <XLogo size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@fikrad0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://t.me/Fikrado_Sec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-yellow-400 transition-colors duration-300"
                  aria-label="Telegram"
                >
                  <Send size={18} />
                </a>
              </div>

              {/* Language switcher (desktop) */}
              <div className="relative">
                <motion.button
                  onClick={() => { setLangOpen((v) => !v); setGlowing(false); }}
                  animate={glowing ? {
                    boxShadow: [
                      "0 0 0px rgba(250,204,21,0)",
                      "0 0 18px rgba(250,204,21,0.9)",
                      "0 0 6px rgba(250,204,21,0.5)",
                      "0 0 22px rgba(250,204,21,1)",
                      "0 0 6px rgba(250,204,21,0.5)",
                    ],
                    scale: [1, 1.07, 1, 1.07, 1],
                  } : { boxShadow: "0 0 0px rgba(250,204,21,0)", scale: 1 }}
                  transition={glowing ? { duration: 1.6, repeat: 2, ease: "easeInOut" } : { duration: 0.4 }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg glass transition-colors duration-300 ${
                    glowing ? "text-yellow-400 border border-yellow-400/60" : "text-slate-200 hover:text-yellow-400 border border-transparent"
                  }`}
                  aria-label="Change language"
                >
                  <Globe size={16} className={glowing ? "animate-spin" : ""} style={glowing ? { animationDuration: "3s" } : {}} />
                  <span className="text-xs font-semibold tracking-wide">{glowing ? "Translate" : currentLang.flag}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                  />
                </motion.button>
                <AnimatePresence>
                  {langOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setLangOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 mt-2 w-44 z-50 glass-dark rounded-xl border border-yellow-400/15 shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden"
                      >
                        {LANGUAGES.map((l) => (
                          <button
                            key={l.code}
                            onClick={() => pickLang(l.code)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${
                              l.code === lang
                                ? "text-yellow-400 bg-yellow-400/10"
                                : "text-slate-300 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span className="text-base leading-none">{l.flag}</span>
                            <span className="font-medium">{l.label}</span>
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow-400 text-slate-900
                  font-bold text-sm glow-yellow hover:bg-yellow-300 transition-all duration-300"
              >
                <Shield size={16} />
                {t("nav.contact")}
              </motion.button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg glass text-yellow-400"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 z-40 glass-dark border-b border-yellow-400/15 py-6 px-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`text-left py-2 px-4 rounded-lg font-medium transition-all ${
                    active === id
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}

              {/* Language switcher (mobile) */}
              <div className="py-2 px-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider mb-2">
                  <Globe size={14} />
                  <span>Translate the website</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => pickLang(l.code)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        l.code === lang
                          ? "text-yellow-400 bg-yellow-400/10 border border-yellow-400/30"
                          : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <span className="text-base leading-none">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Social media links (mobile) */}
              <div className="py-2 px-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider mb-3">
                  <span>Follow Us</span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/120893904/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://github.com/fikrado-orgnasation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://x.com/fikrado1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="X"
                  >
                    <XLogo size={22} />
                  </a>
                  <a
                    href="https://www.youtube.com/@fikrad0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube size={22} />
                  </a>
                  <a
                    href="https://t.me/Fikrado_Sec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="Telegram"
                  >
                    <Send size={22} />
                  </a>
                </div>
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 py-3 px-4 rounded-lg bg-yellow-400 text-slate-900 font-bold text-sm glow-yellow"
              >
                {t("nav.contact")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
