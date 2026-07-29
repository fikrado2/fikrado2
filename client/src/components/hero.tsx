import { motion } from "framer-motion";
import { Shield, Lock, Eye, Rocket, BookOpen, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const certs = [
  { label: "ISO 27001 Certified",                   color: "border-green-500/40 text-green-400" },
  { label: "CCNA",                                  color: "border-blue-500/40 text-blue-400" },
  { label: "OffSec Certified Professional (OSCP)",  color: "border-red-500/40 text-red-400" },
  { label: "Security+ Certified",                   color: "border-yellow-400/20 text-yellow-300" },
];
import ThreeBackground from "@/components/three-background";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
};

const Counter = ({ target, label }: { target: string; label: string }) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-black gradient-text">{target}</div>
    <div className="text-xs text-slate-400 mt-1 tracking-widest uppercase">{label}</div>
  </div>
);

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden scanlines"
      style={{ background: "linear-gradient(135deg,#03080f 0%,#060d1a 50%,#03080f 100%)" }}
    >
      <ThreeBackground />
      <div className="absolute inset-0 cyber-grid opacity-60" style={{ zIndex: 1 }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(251,191,36,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 pt-28 pb-16 relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black leading-tight mb-6"
            >
              <span className="gradient-text text-glow-yellow">{t("hero.title1")}</span>
              <br />
              <span className="text-white">{t("hero.title2")}</span>
              <br />
              <span className="gradient-text-cyan text-glow-cyan">{t("hero.title3")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <button
                onClick={() => scrollTo("services")}
                className="btn-3d group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base
                  bg-yellow-400 text-slate-900 hover:bg-yellow-300 glow-yellow transition-all duration-300"
              >
                <Rocket size={20} className="group-hover:rotate-12 transition-transform" />
                {t("hero.cta1")}
              </button>
              <button
                onClick={() => scrollTo("books")}
                className="btn-3d group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base
                  glass border border-yellow-400/30 text-yellow-400
                  hover:border-yellow-400/60 hover:bg-yellow-400/10 transition-all duration-300"
              >
                <BookOpen size={20} />
                {t("hero.cta2")}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-10 border-t border-yellow-400/10 pt-8"
            >
              <Counter target="500+" label={t("hero.stat1")} />
              <Counter target="6+" label={t("hero.stat2")} />
              <Counter target="24/7" label={t("hero.stat3")} />
            </motion.div>
          </div>

          {/* Right 3D panel */}
          <motion.div
            initial={{ opacity: 0, rotateY: -30, x: 60 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 55 }}
            className="hidden lg:block"
            style={{ perspective: 1200 }}
          >
            <div
              className="relative rounded-2xl glass glow-yellow animate-float p-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Corner accents */}
              {["tl", "tr", "bl", "br"].map((c) => (
                <div
                  key={c}
                  className={`absolute w-6 h-6 border-yellow-400/60 ${
                    c === "tl" ? "top-3 left-3 border-t-2 border-l-2 rounded-tl-sm" :
                    c === "tr" ? "top-3 right-3 border-t-2 border-r-2 rounded-tr-sm" :
                    c === "bl" ? "bottom-3 left-3 border-b-2 border-l-2 rounded-bl-sm" :
                                 "bottom-3 right-3 border-b-2 border-r-2 rounded-br-sm"
                  }`}
                />
              ))}

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[Shield, Lock, Eye].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.12, rotateY: 15 }}
                    className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl h-20 flex items-center justify-center
                      hover:bg-yellow-400/20 transition-all cursor-pointer"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Icon className="text-yellow-400" size={28} />
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold gradient-text mb-3">{t("hero.fullSecurity")}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t("hero.securityDesc")}
              </p>

              {[
                { label: "Network Security", pct: 97 },
                { label: "Threat Detection", pct: 94 },
                { label: "Data Protection", pct: 99 },
              ].map(({ label, pct }) => (
                <div key={label} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">{label}</span>
                    <span className="text-yellow-400 font-bold">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.3, delay: 0.8 }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg,#fbbf24,#22d3ee)" }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t("hero.systemOnline")}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-14 border-t border-yellow-400/10 pt-8"
        >
          <p className="text-center text-xs text-slate-500 tracking-widest uppercase mb-5">
            {t("hero.certsTitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certs.map(({ label, color }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full glass border text-xs font-semibold tracking-wide ${color}`}
              >
                <Award size={13} className="shrink-0 opacity-80" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top,#03080f,transparent)", zIndex: 5 }}
      />
    </section>
  );
}
