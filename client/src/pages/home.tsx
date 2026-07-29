import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import TrustedBy from "@/components/trusted-by";
import Team from "@/components/team";
import Books from "@/components/books";
import VideoCarousel from "@/components/video-carousel";
import Contact from "@/components/contact";
import PdfBrochure from "@/components/pdf-brochure";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <TrustedBy />
      <Team />
      <Books />
      <VideoCarousel />
      <Contact />
      <PdfBrochure />
      <Footer />
    </div>
  );
}
