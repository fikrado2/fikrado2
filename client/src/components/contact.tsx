import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const contacts = [
  {
    icon: Mail,
    titleKey: "contact.email.title",
    subKey: "contact.email.sub",
    value: "fikrado1@gmail.com",
    action: () => (window.location.href = "mailto:fikrado1@gmail.com"),
    color: "#fbbf24",
  },
  {
    icon: Phone,
    titleKey: "contact.phone.title",
    subKey: "contact.phone.sub",
    value: "+252 63 4048063\n+251 984858498",
    action: () => (window.location.href = "tel:+252634048063"),
    color: "#22d3ee",
  },
  {
    icon: MapPin,
    titleKey: "contact.location.title",
    subKey: "contact.location.sub",
    value: "Masala, Hargeisa, Somaliland\n10th Kabele, Jijiga, Ethiopia",
    action: null,
    color: "#a78bfa",
  },
];

function ContactCard({
  c,
  index,
}: {
  c: (typeof contacts)[number];
  index: number;
}) {
  const { t } = useI18n();
  const [hovered, setHovered] = useState(false);
  const Icon = c.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          rotateY: hovered ? 4 : 0,
          y: hovered ? -8 : 0,
        }}
        transition={{ duration: 0.3 }}
        onClick={() => c.action?.()}
        className="relative rounded-2xl p-8 text-center cursor-pointer group"
        style={{
          background: hovered
            ? `linear-gradient(145deg,${c.color}12 0%,rgba(0,0,0,0.3) 100%)`
            : "rgba(255,255,255,0.02)",
          border: `1px solid ${hovered ? c.color + "40" : "rgba(251,191,36,0.1)"}`,
          boxShadow: hovered ? `0 20px 60px ${c.color}20, 0 0 0 1px ${c.color}15` : "none",
          transformStyle: "preserve-3d",
          transition: "all 0.3s ease",
        }}
      >
        {/* Corner accents */}
        <div
          className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 rounded-tl transition-all duration-300"
          style={{ borderColor: hovered ? c.color : "rgba(251,191,36,0.2)" }}
        />
        <div
          className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 rounded-br transition-all duration-300"
          style={{ borderColor: hovered ? c.color : "rgba(251,191,36,0.2)" }}
        />

        <motion.div
          animate={{ rotateY: hovered ? 10 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{
            background: `${c.color}15`,
            boxShadow: hovered ? `0 0 30px ${c.color}40` : "none",
            transformStyle: "preserve-3d",
          }}
        >
          <Icon size={28} style={{ color: c.color }} />
        </motion.div>

        <h3 className="text-lg font-bold mb-1" style={{ color: c.color }}>
          {t(c.titleKey)}
        </h3>
        <p className="text-slate-500 text-sm mb-3">{t(c.subKey)}</p>
        <p className="text-white font-semibold text-sm whitespace-pre-line">{c.value}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#03080f 0%,#060d1a 100%)" }}
    >
      <div className="absolute inset-0 cyber-grid opacity-25" />

      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(251,191,36,0.04)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-yellow-400/20">
            <MessageCircle size={14} className="text-yellow-400" />
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">
              {t("contact.badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {contacts.map((c, i) => (
            <ContactCard key={i} c={c} index={i} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div
              className="absolute inset-0 rounded-2xl blur-xl"
              style={{ background: "rgba(37,211,102,0.3)", transform: "scale(1.1)" }}
            />
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://wa.me/252634048063", "_blank")}
              className="relative flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-white transition-all"
              style={{
                background: "linear-gradient(135deg,#25d366,#128c7e)",
                boxShadow: "0 0 40px rgba(37,211,102,0.4), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <MessageCircle size={24} />
              {t("contact.whatsapp")}
              <Send size={20} className="opacity-70" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
