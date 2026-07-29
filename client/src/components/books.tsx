import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ShoppingCart } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import programmingBook from "@assets/20250510_113058.png";
import computerBook from "@assets/20250510_114039.png";
import aiBook from "@assets/20250510_123812.png";
import linuxBook from "@assets/linux.png";
import chatgptBook from "@assets/photo_2025-05-26_15-34-10.jpg";
import hackingBook from "@assets/hacking.jpg";

const books = [
  { image: programmingBook, title: "Isbar Programming Macalin La'aan", author: "Yahye Abdirahman", tag: "Programming" },
  { image: computerBook,    title: "Isbar Computer Macalin La'aan",    author: "Yahye Abdirahman", tag: "Computer" },
  { image: aiBook,          title: "Isbar AI Macalin La'aan 2",        author: "Yahye Abdirahman", tag: "AI" },
  { image: linuxBook,       title: "Isbar Linux Macalin La'aan",       author: "Yahye Abdirahman", tag: "Linux" },
  { image: chatgptBook,     title: "Isbar ChatGPT Macalin La'aan",     author: "M Yasin Faratoon", tag: "ChatGPT" },
  { image: hackingBook,     title: "Isbar Hacking Macalin La'aan",     author: "Yahye Abdirahman", tag: "Hacking" },
];

const tagColors: Record<string, string> = {
  Programming: "#fbbf24",
  Computer: "#22d3ee",
  AI: "#a78bfa",
  Linux: "#34d399",
  ChatGPT: "#f472b6",
  Hacking: "#fb923c",
};

function BookCard({ book, index }: { book: (typeof books)[number]; index: number }) {
  const { t } = useI18n();
  const [hovered, setHovered] = useState(false);
  const color = tagColors[book.tag] ?? "#fbbf24";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          rotateY: hovered ? 5 : 0,
          rotateX: hovered ? -5 : 0,
          scale: hovered ? 1.04 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.2) 100%)",
          border: `1px solid ${hovered ? color + "50" : "rgba(251,191,36,0.12)"}`,
          boxShadow: hovered ? `0 20px 60px ${color}25, 0 0 0 1px ${color}20` : "none",
          transformStyle: "preserve-3d",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Book image with 3D depth */}
        <div className="relative overflow-hidden bg-slate-900/50 p-6 flex justify-center">
          <motion.img
            src={book.image}
            alt={book.title}
            className="w-32 h-44 object-cover rounded-lg shadow-2xl"
            animate={{
              rotateY: hovered ? 8 : 0,
              y: hovered ? -6 : 0,
              boxShadow: hovered
                ? `8px 16px 40px rgba(0,0,0,0.6), 0 0 20px ${color}40`
                : "0 8px 30px rgba(0,0,0,0.4)",
            }}
            transition={{ duration: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          />

          {/* Tag badge */}
          <div
            className="absolute top-4 right-4 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider"
            style={{ background: color + "25", color, border: `1px solid ${color}40` }}
          >
            {book.tag}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-sm text-white mb-1 leading-snug">{book.title}</h3>
          <p className="text-slate-500 text-xs mb-4">{book.author}</p>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => window.open("https://wa.me/252634048063", "_blank")}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold
              transition-all duration-300"
            style={{
              background: hovered ? "#25d366" : "rgba(37,211,102,0.15)",
              color: hovered ? "#fff" : "#25d366",
              border: "1px solid rgba(37,211,102,0.3)",
            }}
          >
            <ShoppingCart size={15} />
            {t("books.orderNow")}
          </motion.button>
        </div>

        {/* Shimmer on hover */}
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${color}08 0%, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Books() {
  const { t } = useI18n();
  return (
    <section
      id="books"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060d1a 0%,#03080f 50%,#060d1a 100%)" }}
    >
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(251,191,36,0.04)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(34,211,238,0.04)" }}
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
            <BookOpen size={14} className="text-yellow-400" />
            <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">
              {t("books.badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">{t("books.title")}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("books.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((b, i) => (
            <BookCard key={i} book={b} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.open("https://wa.me/252634048063", "_blank")}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base
              bg-green-500 text-white hover:bg-green-400 transition-all duration-300"
            style={{ boxShadow: "0 0 30px rgba(37,211,102,0.3)" }}
          >
            <ShoppingCart size={20} />
            {t("books.orderAll")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
