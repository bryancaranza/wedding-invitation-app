import { date, timeline } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Countdown } from "../custom/Countdown";

const WeddingDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const hoverRef = useRef(false);

  // Auto-progress timeline
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverRef.current) {
        changeImage((prev) => (prev + 1) % timeline.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeImage = (newIndex: number | ((prev: number) => number)) => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 200);
  };

  return (
    <section className="py-20 px-6 bg-white/50 text-black text-center">
      <div className="w-full max-w-3xl mx-auto px-6 flex flex-col gap-12">
        <h2 className="text-3xl font-serif">Wedding Program</h2>
        <Countdown targetDate={String(new Date(date))} />
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
          {/* Timeline */}
          <div className="flex-1">
            <p className="text-xl text-left pb-4">
              {formatDate(date, "EEEE, MMMM d, yyyy")}
            </p>
            <div className="flex-1 max-w-md space-y-6 text-left">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 cursor-pointer group"
                  onMouseEnter={() => {
                    hoverRef.current = true;
                    changeImage(index);
                  }}
                  onMouseLeave={() => {
                    hoverRef.current = false;
                  }}
                >
                  <span
                    className={`font-semibold w-24 transition-all ${
                      currentIndex === index
                        ? "text-rose-600 drop-shadow-md"
                        : "group-hover:drop-shadow-md"
                    }`}
                  >
                    {item.time}
                  </span>

                  <p
                    className={`transition-all duration-300 ${
                      currentIndex === index
                        ? "text-rose-600 font-semibold drop-shadow-md"
                        : "group-hover:drop-shadow-md"
                    }`}
                  >
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image display */}
          <div className="flex-1 relative">
            <img
              src={timeline[currentIndex].image}
              alt={timeline[currentIndex].event}
              className={`w-full h-64 object-cover rounded-xl drop-shadow-xl transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Note */}
        <p className="mt-16 max-w-2xl mx-auto text-sm font-serif">
          The program will commence promptly according to the scheduled
          timeline. We kindly request your arrival on time, or preferably a few
          minutes earlier. Your punctuality will be sincerely appreciated.
        </p>
      </div>
    </section>
  );
};

export default WeddingDetails;
