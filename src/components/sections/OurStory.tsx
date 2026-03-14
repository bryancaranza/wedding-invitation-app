import { storyImages } from "@/lib/constants";
import { useEffect, useState, useRef } from "react";
const animations = [
  "animate-slide-left",
  "animate-slide-right",
  "animate-slide-up",
  "animate-slide-down",
  "animate-zoom-in",
  "animate-zoom-out",
];

const OurStory = () => {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(animations[0]);
  const textRef = useRef<HTMLDivElement>(null);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % storyImages.length);
      setAnimation(animations[Math.floor(Math.random() * animations.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND SLIDESHOW */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {storyImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`${animation} w-full h-full`}>
              <img
                src={img}
                className="w-full h-full object-cover scale-[1.25]"
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* SCROLLABLE TEXT */}
      <div
        ref={textRef}
        className="relative z-10 h-full max-w-3xl mx-auto px-6 py-10 flex flex-col justify-center space-y-6 overflow-y-auto text-white font-serif text-lg"
      >
        <h2 className="text-4xl text-center mb-6">Our Story</h2>
        <p className="text-sm leading-loose">
          From a chance meeting, something unexpected quietly blossomed between
          us. What began over a simple coffee, accompanied by shared
          conversation and quiet moments, grew into a friendship filled with
          laughter, trust, and countless cherished memories. Over time, our bond
          deepened, teaching us the true meaning of choosing one another
          <br /> day after day, in every way.
        </p>
        <p className="text-sm leading-loose">
          As we embark on this next chapter of our lives, we do so with grateful
          hearts and unwavering faith in the journey ahead. Surrounded by the
          love of our family and friends, we joyfully invite you to witness and
          celebrate the day we vow forever to each other, a day where our story
          continues, hand in hand, as we unite in marriage.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
