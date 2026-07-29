import { motion } from "framer-motion";
import { Users, ShieldCheck, BrainCircuit, Award } from "lucide-react";
import fteamPhoto from "@assets/fikrado_sec.png";
import { useI18n } from "@/lib/i18n";

const stats = [
  { value: "7+", labelKey: "team.stat1" },
  { value: "10+", labelKey: "team.stat2" },
  { value: "500+", labelKey: "team.stat3" },
  { value: "5+", labelKey: "team.stat4" },
];

const highlights = [
  {
    icon: ShieldCheck,
    image: null,
    titleKey: "team.h1.title",
    descKey: "team.h1.desc",
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.25)",
  },
  {
    icon: BrainCircuit,
    image: null,
    titleKey: "team.h2.title",
    descKey: "team.h2.desc",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.25)",
  },
  {
    icon: null,
    image: `${import.meta.env.BASE_URL}image.png`,
    titleKey: "team.h3.title",
    descKey: "team.h3.desc",
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.3)",
  },
];

export default function Team() {
  const { t } = useI18n();

  return (
    <section
      id="team"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060d1a 0%,#03080f 50%,#060d1a 100%)" }}
    >
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-yellow-400/20">
            <Users size={14} className="text-yellow-400" />
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">
              {t("team.badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
            {t("team.title")}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("team.subtitle")}
          </p>
        </motion.div>

        {/* Team photo — glowing rectangular frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative max-w-4xl mx-auto mb-20"
        >
          {/* Rotating glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(251,191,36,0.0), rgba(251,191,36,0.55), rgba(34,211,238,0.55), rgba(34,211,238,0.0), rgba(251,191,36,0.0))",
              filter: "blur(26px)",
              maskImage: "linear-gradient(black, black)",
              WebkitMaskImage: "linear-gradient(black, black)",
            }}
          />

          {/* Static outer glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse-glow"
            style={{
              boxShadow:
                "0 0 60px rgba(251,191,36,0.35), 0 0 120px rgba(34,211,238,0.2)",
            }}
          />

          {/* Image frame */}
          <div
            className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/40"
            style={{
              boxShadow:
                "0 0 0 4px rgba(3,8,15,0.9), 0 0 30px rgba(251,191,36,0.3)",
            }}
          >
            <img
              src={fteamPhoto}
              alt="Fikrado Security Team"
              className="w-full h-auto object-cover"
              style={{ display: "block" }}
            />
          </div>

          {/* Corner accents */}
          {(["tl", "tr", "bl", "br"] as const).map((c) => (
            <div
              key={c}
              className={`absolute w-8 h-8 border-yellow-400/50 pointer-events-none ${
                c === "tl" ? "top-3 left-3 border-t-2 border-l-2 rounded-tl-sm" :
                c === "tr" ? "top-3 right-3 border-t-2 border-r-2 rounded-tr-sm" :
                c === "bl" ? "bottom-3 left-3 border-b-2 border-l-2 rounded-bl-sm" :
                              "bottom-3 right-3 border-b-2 border-r-2 rounded-br-sm"
              }`}
            />
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map(({ value, labelKey }, i) => (
            <motion.div
              key={labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass rounded-xl p-6 text-center border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="text-3xl font-black gradient-text mb-1">{value}</div>
              <div className="text-xs text-slate-400 tracking-widest uppercase">{t(labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map(({ icon: Icon, image, titleKey, descKey, color, glow }, i) => (
            <motion.div
              key={titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02]"
              style={{
                borderColor: `${color}20`,
                boxShadow: `0 0 0 1px ${color}15`,
              }}
              whileHover={{ boxShadow: `0 0 40px ${glow}, 0 0 0 1px ${color}40` }}
            >
              {image ? (
                <div className="mb-5">
                  <div
                    className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400/50"
                    style={{ boxShadow: `0 0 20px ${glow}` }}
                  >
                    <img src={image} alt="Founder" className="w-full h-full object-cover" />
                  </div>
                </div>
              ) : (
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}15`, boxShadow: `0 0 20px ${glow}` }}
                >
                  {Icon && <Icon size={26} style={{ color }} />}
                </div>
              )}
              <h3 className="text-lg font-bold mb-3 tracking-wide" style={{ color }}>
                {t(titleKey)}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{t(descKey)}</p>

              {image && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {["ISO 27001", "CCNA", "OSCP", "Security+", "Business Master"].map((cert) => (
                    <span
                      key={cert}
                      className="text-[10px] font-bold tracking-wider px-2 py-1 rounded-md border"
                      style={{ color, borderColor: `${color}40`, background: `${color}10` }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              )}

              {!image && (
                <div className="mt-6 flex items-center gap-2">
                  <Award size={12} style={{ color }} className="opacity-70" />
                  <span className="text-xs tracking-widest uppercase" style={{ color, opacity: 0.7 }}>
                    Fikrado Security
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
