import Invitation from "@/components/sections/Invitation";
import Location from "@/components/sections/Location";
import OurStory from "@/components/sections/OurStory";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import ReactHowler from "react-howler";
import WeddingDetails from "@/components/sections/WeddingDetails";
import Entourage from "@/components/sections/Entourage";
import DressCode from "@/components/sections/DressCode";
import FAQs from "@/components/sections/FAQs";

const Home = () => {
  const [blur, setBlur] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  // Scroll-based blur
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBlur(Math.min(scrollY / 200, 10));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll while intro is active
  useEffect(() => {
    if (isIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isIntro]);

  // Handle Enter Button
  const handleEnter = () => {
    setCanPlay(true);
    setIsPlaying(true);
    setIsIntro(false);

    // scroll to next section
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* AUDIO */}
      {canPlay && (
        <ReactHowler
          src="/music/wedding-theme-song.mp3"
          playing={isPlaying}
          loop
          volume={0.2}
        />
      )}

      {/* MUSIC TOGGLE */}
      {!isIntro && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed bottom-4 right-4 z-50 bg-white/70 text-black p-3 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
      )}

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-prenup-bg bg-cover bg-center bg-no-repeat"
        style={{ filter: `blur(${blur}px)` }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 text-white">
        {/* HERO */}
        <Invitation isIntro={isIntro} handleEnter={handleEnter} />

        {/* OUR STORY */}
        <OurStory />

        {/* WEDDING DETAILS */}
        <WeddingDetails />

        {/* LOCATION */}
        <Location />

        {/* Entourage */}
        <Entourage />

        {/* DRESS CODE */}
        <DressCode />

        {/* FAQ */}
        <FAQs />

        {/* RSVP */}
        <section className="py-20 px-6 bg-white/80 text-black text-center">
          <h2 className="text-3xl font-serif mb-6">RSVP</h2>

          <div className="max-w-3xl mx-auto">
            <iframe
              className="w-full h-[900px] rounded-lg"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfLHQxM4V7pCaMLODtwGB6QBzI_VR85QgQfKcbLgrh1PDV-og/viewform?embedded=true"
              title="RSVP Form"
            />
          </div>
        </section>

        {/* THANK YOU */}
        <section className="py-20 px-6 bg-black/60 backdrop-blur-md text-center">
          <p className="font-serif">
            Thank you for being part of our love story 🤍
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
