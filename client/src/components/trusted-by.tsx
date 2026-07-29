import { motion } from "framer-motion";
import { Award } from "lucide-react";
import somaliBooksLogo from "@assets/SOMALI_BOOKS.jpg";
import ethiopiaMinTechLogo from "@assets/ETHIOPIA_MINSTERY_OF_TECHNOLOGY.jpg";
import eardipWorldBankLogo from "@assets/EARDIP_WORLDBANK_PROJECT.jpg";
import stratosphereLogo from "@assets/Stratosphere_Aeronautics.png";
import KeynanLogo from "@assets/Keynan.png";
import { useI18n } from "@/lib/i18n";

const clients = [
  { name: "Somali Books", logo: somaliBooksLogo },
  { name: "Ethiopia Ministry of Technology", logo: ethiopiaMinTechLogo },
  { name: "EARDIP – Ministry of ICT Somaliland", logo: eardipWorldBankLogo },
  { name: "Stratosphere Aeronautics", logo: stratosphereLogo },
  { name: "Keynan Watch And Optical", logo: KeynanLogo },
];

// Duplicate for seamless infinite scroll
const track = [...clients, ...clients, ...clients];

export default function TrustedBy() {
  const { t } = useI18n();

  return (
    <section
      id="trusted-by"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#03080f 0%,#07111f 50%,#03080f 100%)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Gradient edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg,#03080f,transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg,#03080f,transparent)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-yellow-400/20">
            <Award size={14} className="text-yellow-400" />
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">
              {t("trusted.badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
            {t("trusted.title")}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("trusted.subtitle")}
          </p>
        </motion.div>
      </div>

      {/* Scrolling marquee track — full-width, outside container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-12 w-max animate-marquee">
          {track.map((client, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 group flex-shrink-0"
            >
              {/* Logo circle with yellow glow */}
              <div
                className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-400/30 transition-all duration-500 group-hover:border-yellow-400 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4),0_0_60px_rgba(251,191,36,0.2)]"
                style={{ boxShadow: "0 0 15px rgba(251,191,36,0.2)" }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Name */}
              <p className="text-center text-xs font-semibold text-slate-400 max-w-[130px] leading-snug group-hover:text-yellow-300 transition-colors duration-300">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
