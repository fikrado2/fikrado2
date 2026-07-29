import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface VideoItem {
  id: string;
  title: string;
}

const videos: VideoItem[] = [
  {
    id: "JNIudfkfPvk",
    title: "Hacker Somali 101: Casharkii 1aad qaabka si qarsoon khadka loo isticmalo",
  },
  {
    id: "l10Uzd5OJO8",
    title: "Hacker Somali 101: Casharkii 2 side loo isticmala linux iyo terminal",
  },
  {
    id: "w27o7uAPwfY",
    title: "Hacker Somali 101: Casharkii 3aad barshada networking oo ku salaysan hacking",
  },
];

const getThumb = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export default function VideoCarousel() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % videos.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + videos.length) % videos.length);
  }, []);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  // Pause auto-rotate when modal is open
  useEffect(() => {
    if (modalVideo) {
      const timer = setInterval(() => {}, 0);
      return () => clearInterval(timer);
    }
  }, [modalVideo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (modalVideo) {
        if (e.key === "Escape") setModalVideo(null);
        return;
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, modalVideo]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <>
      <section
        id="videos"
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(180deg,#03080f 0%,#060d1a 50%,#03080f 100%)" }}
      >
        <div className="absolute inset-0 cyber-grid opacity-20" />

        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(251,191,36,0.04)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(34,211,238,0.04)" }}
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
              <Youtube size={14} className="text-yellow-400" />
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-semibold">
                {t("videos.badge")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">
              {t("videos.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t("videos.subtitle")}
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PLitkOsATRLv-8MO-QbKwVsSBxBblhx3Hf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-red-500 hover:text-red-400 transition-colors font-medium"
            >
              <Youtube size={16} />
              Hacker Somali 101 Playlist
            </a>
          </motion.div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Cards container */}
            <div className="relative h-[280px] md:h-[340px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute w-full max-w-xl mx-auto"
                >
                  <VideoCard
                    video={videos[current]}
                    onPlay={() => setModalVideo(videos[current])}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20
                w-11 h-11 rounded-full glass border border-yellow-400/20 flex items-center justify-center
                text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all duration-300"
              aria-label="Previous video"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20
                w-11 h-11 rounded-full glass border border-yellow-400/20 flex items-center justify-center
                text-yellow-400 hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all duration-300"
              aria-label="Next video"
            >
              <ChevronRight size={22} />
            </button>

            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-yellow-400"
                      : "w-2 bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal player */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && setModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl"
            >
              {/* Close button */}
              <button
                onClick={() => setModalVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full glass border border-white/10
                  flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              {/* Video title */}
              <h3 className="text-white text-base md:text-lg font-bold mb-3 line-clamp-2">
                {modalVideo.title}
              </h3>

              {/* Responsive iframe */}
              <div className="relative w-full overflow-hidden rounded-xl border border-yellow-400/20"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1&rel=0`}
                  title={modalVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function VideoCard({ video, onPlay }: { video: VideoItem; onPlay: () => void }) {
  const [thumbError, setThumbError] = useState(false);
  const thumb = thumbError
    ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
    : getThumb(video.id);

  return (
    <div
      className="group cursor-pointer rounded-2xl overflow-hidden glass border border-yellow-400/15
        hover:border-yellow-400/40 transition-all duration-500"
      style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden bg-slate-900" style={{ aspectRatio: "16 / 9" }}>
        <img
          src={thumb}
          alt={video.title}
          onError={() => setThumbError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600/90 flex items-center justify-center
              shadow-2xl opacity-80 group-hover:opacity-100 group-hover:bg-red-500 transition-all duration-300"
            style={{ boxShadow: "0 0 30px rgba(255,0,0,0.4)" }}
          >
            <Play size={28} className="text-white ml-1" fill="white" />
          </motion.div>
        </div>

        {/* YouTube badge */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-red-600/90 text-white text-[10px] font-bold tracking-wider flex items-center gap-1">
          <Youtube size={11} />
          YouTube
        </div>
      </div>

      {/* Title */}
      <div className="p-3">
        <h3 className="text-white text-xs md:text-sm font-bold leading-snug line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
          {video.title}
        </h3>
      </div>
    </div>
  );
}
