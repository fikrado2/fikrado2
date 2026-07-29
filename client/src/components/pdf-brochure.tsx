import { useState } from "react";
import { FileText, Download, Eye, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function PdfBrochure() {
  const { t } = useI18n();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const pdfPath = `${import.meta.env.BASE_URL}FIKRADO_SECURITY.pdf`;

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #d4af37 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1a3a5c 0%, transparent 50%)"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-3">
              {t("pdf.badge")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("pdf.title")}
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
              {t("pdf.desc")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* PDF card preview */}
            <div className="w-full max-w-2xl bg-[#0f0f0f] border border-[#d4af37]/20 rounded-2xl overflow-hidden shadow-2xl group hover:border-[#d4af37]/50 transition-all duration-300">
              {/* Header bar */}
              <div className="flex items-center gap-3 px-5 py-3 bg-[#d4af37]/10 border-b border-[#d4af37]/20">
                <FileText className="w-5 h-5 text-[#d4af37]" />
                <span className="text-white text-sm font-medium tracking-wide">FIKRADO_SECURITY.pdf</span>
                <span className="ml-auto text-gray-500 text-xs">{t("pdf.pages")}</span>
              </div>

              {/* Thumbnail preview */}
              <div className="relative bg-[#111] aspect-[4/3] flex items-center justify-center overflow-hidden">
                <iframe
                  src={`${pdfPath}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-0 pointer-events-none"
                  title="PDF preview"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 px-5 py-4">
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-[#d4af37]/40 text-[#d4af37] rounded-lg text-sm font-medium hover:bg-[#d4af37]/10 transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  {t("pdf.preview")}
                </button>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#d4af37] text-black rounded-lg text-sm font-semibold hover:bg-[#c49b2a] transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  {t("pdf.download")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen preview modal */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setIsPreviewOpen(false)}
        >
          {/* Modal toolbar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#0a0a0a] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#d4af37]" />
              <span className="text-white text-sm font-medium">FIKRADO_SECURITY.pdf</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 bg-[#d4af37] text-black rounded-lg text-sm font-semibold hover:bg-[#c49b2a] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                {t("pdf.download")}
              </a>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF viewer */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src={`${pdfPath}#toolbar=1&navpanes=1`}
              className="w-full h-full border-0"
              title="Fikrado Security Brochure"
            />
          </div>
        </div>
      )}
    </>
  );
}
