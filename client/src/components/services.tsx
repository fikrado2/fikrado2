import { motion } from "framer-motion";
import { Shield, GraduationCap, Globe, Code, Cloud, Headphones } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const services = [
  {
    icon: Shield,
    titleKey: "services.s1.title",
    descKey: "services.s1.desc",
    detailKey: "services.s1.detail",
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.3)",
  },
  {
    icon: GraduationCap,
    titleKey: "services.s2.title",
    descKey: "services.s2.desc",
    detailKey: "services.s2.detail",
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.3)",
  },
  {
    icon: Globe,
    titleKey: "services.s3.title",
    descKey: "services.s3.desc",
    detailKey: "services.s3.detail",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.3)",
  },
  {
    icon: Code,
    titleKey: "services.s4.title",
    descKey: "services.s4.desc",
    detailKey: "services.s4.detail",
    color: "#34d399",
    glow: "rgba(52,211,153,0.3)",
  },
  {
    icon: Cloud,
    titleKey: "services.s5.title",
    descKey: "services.s5.desc",
    detailKey: "services.s5.detail",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.3)",
  },
  {
    icon: Headphones,
    titleKey: "services.s6.title",
    descKey: "services.s6.desc",
    detailKey: "services.s6.detail",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.3)",
  },
];

interface FlipCardProps {
  service: (typeof services)[number];
  index: number;
}

function FlipCard({ service, index }: FlipCardProps) {
  const { t } = useI18n();
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-3d-container h-64"
    >
      <div className="card-3d-inner">
        {/* Front */}
        <div
          className="card-3d-front glass flex flex-col items-center justify-center p-8 text-center"
          style={{ border: `1px solid ${service.color}25` }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all"
            style={{
              background: `${service.color}15`,
              boxShadow: `0 0 20px ${service.glow}`,
            }}
          >
            <Icon size={30} style={{ color: service.color }} />
          </div>
          <h3
            className="text-lg font-bold mb-3 tracking-wide"
            style={{ color: service.color }}
          >
            {t(service.titleKey)}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">{t(service.descKey)}</p>
          <div className="mt-4 text-xs text-slate-500 tracking-widest uppercase">
            {t("services.hoverHint")}
          </div>
        </div>

        {/* Back */}
        <div
          className="card-3d-back flex flex-col items-center justify-center p-8 text-center"
          style={{
            background: `linear-gradient(135deg, ${service.color}20 0%, #060d1a 100%)`,
            border: `1px solid ${service.color}40`,
            boxShadow: `0 0 40px ${service.glow}`,
          }}
        >
          <Icon size={36} className="mb-4" style={{ color: service.color }} />
          <h3 className="text-lg font-bold mb-3 tracking-wide" style={{ color: service.color }}>
            {t(service.titleKey)}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{t(service.detailKey)}</p>
          <button
            className="mt-5 px-5 py-2 rounded-lg text-xs font-bold tracking-wider transition-all"
            style={{
              background: service.color,
              color: "#03080f",
            }}
            onClick={() =>
              window.open("https://wa.me/252634048063", "_blank")
            }
          >
            {t("services.details")}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useI18n();
  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#03080f 0%,#060d1a 50%,#03080f 100%)" }}
    >
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-yellow-400/20">
            <Shield size={14} className="text-yellow-400" />
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">
              {t("services.badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
            {t("services.title")}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FlipCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
