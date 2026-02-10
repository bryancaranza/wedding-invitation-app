import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import ReactHowler from "react-howler";

const Home = () => {
  const [blur, setBlur] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Scroll-based blur
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBlur(Math.min(scrollY / 200, 10));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay muted first
  const [canPlay, setCanPlay] = useState(false);
  useEffect(() => {
    const handleUserInteraction = () => setCanPlay(true);
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);
    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (canPlay) {
      setIsPlaying(true);
    }
  }, [canPlay]);

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* REACT HOWLER AUDIO */}
      {canPlay && (
        <ReactHowler
          src="src/assets/music/wedding-theme-song.mp3"
          playing={isPlaying}
          loop
          volume={0.2}
        />
      )}

      {/* MUSIC TOGGLE BUTTON */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-4 right-4 z-50 bg-white/70 text-black p-3 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
      {/* FIXED BACKGROUND */}
      <div
        className="fixed inset-0 bg-prenup-bg bg-cover bg-center bg-no-repeat"
        style={{ filter: `blur(${blur}px)` }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 text-white">
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif text-xl sm:text-2xl">
            please join us in celebrating the wedding of
          </p>

          <div className="my-4 border-t-2 border-white w-72 mx-auto" />

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <p className="font-scriptina text-6xl sm:text-7xl md:text-9xl">
              Jessa
            </p>
            <p className="font-scriptina text-3xl sm:text-4xl md:text-5xl mt-6">
              &
            </p>
            <p className="font-scriptina text-6xl sm:text-7xl md:text-9xl">
              Cha
            </p>
          </div>

          <div className="my-4 border-t-2 border-white w-72 mx-auto" />

          <p className="font-serif text-lg sm:text-xl mt-4">
            Saturday, May 23, 2026 | St. Peter Parish Church
          </p>
        </section>

        {/* MESSAGE */}
        <section className="py-20 px-6 bg-black/40 backdrop-blur-md text-center">
          <p className="max-w-2xl mx-auto font-serif">
            With joyful hearts, we invite you to share in the celebration of our
            love as we begin our new life together.
          </p>
        </section>

        {/* WEDDING DETAILS */}
        <section className="py-20 px-6 bg-white/80 text-black text-center">
          <h2 className="text-3xl font-serif mb-6">Wedding Details</h2>
          <p>Saturday, December 14, 2026</p>
          <p>2:00 PM</p>
          <p className="mt-4 font-semibold">St. Peter Parish Church</p>
          <p>Reception to follow</p>
        </section>

        {/* LOCATION */}
        <section className="py-20 px-6 bg-black/40 backdrop-blur-md text-center">
          <h2 className="text-3xl font-serif mb-6">Location</h2>

          <div className="max-w-3xl mx-auto">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30876.998521535403!2d121.08239434638669!3d14.67722088811289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b097521d278b%3A0xd7c5d145e19c38c!2sSt.%20Peter%20Parish%3A%20Shrine%20of%20Leaders%20(Diocese%20of%20Novaliches)!5e0!3m2!1sen!2sph!4v1770741696466!5m2!1sen!2sph"
              loading="lazy"
            />
          </div>
        </section>

        {/* FAMILY */}
        <section className="py-20 px-6 bg-white/80 text-black text-center">
          <h2 className="text-3xl font-serif mb-6">Family</h2>
          <p>Parents of the Bride and Groom</p>
        </section>

        {/* NINONG & NINANG */}
        <section className="py-20 px-6 bg-black/40 backdrop-blur-md text-center">
          <h2 className="text-3xl font-serif mb-6">Ninong & Ninang</h2>
          <p>List of sponsors goes here</p>
        </section>

        {/* ENTOURAGE */}
        <section className="py-20 px-6 bg-white/80 text-black text-center">
          <h2 className="text-3xl font-serif mb-6">Entourage</h2>
          <p>Bridesmaids, Groomsmen, Flower Girls</p>
        </section>

        {/* DRESS CODE */}
        <section className="py-20 px-6 bg-black/40 backdrop-blur-md text-center">
          <h2 className="text-3xl font-serif mb-6">Dress Code</h2>
          <p>Formal / Semi-Formal Attire</p>
          <p className="mt-2">Preferred Colors: Beige, Sage, Cream</p>
        </section>

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
