import { timeline } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";

const WeddingDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoverRef = useRef(false); // track hover state

  // Auto-progress timeline
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverRef.current) {
        setCurrentIndex((prev) => (prev + 1) % timeline.length);
      }
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-white/80 text-black text-center">
      <h2 className="text-3xl font-serif mb-10">Wedding Program</h2>

      <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
        {/* Timeline */}
        <div className="flex-1 max-w-md space-y-6 text-left">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 cursor-pointer"
              onMouseEnter={() => {
                hoverRef.current = true;
                setCurrentIndex(index);
              }}
              onMouseLeave={() => {
                hoverRef.current = false;
              }}
            >
              <span
                className={`font-semibold w-24 ${
                  currentIndex === index ? "text-rose-600" : ""
                }`}
              >
                {item.time}
              </span>
              <p
                className={`transition-colors duration-300 ${
                  currentIndex === index ? "text-rose-600 font-semibold" : ""
                }`}
              >
                {item.event}
              </p>
            </div>
          ))}
        </div>

        {/* Image display */}
        <div className="flex-1">
          <img
            src={timeline[currentIndex].image}
            alt={timeline[currentIndex].event}
            className="w-full h-64 object-cover rounded-xl shadow-lg transition-all duration-500"
          />
        </div>
      </div>

      {/* Note */}
      <p className="mt-10 max-w-2xl mx-auto text-sm font-serif">
        The program will commence promptly according to the scheduled timeline.
        We kindly request your arrival on time, or preferably a few minutes
        earlier. Your punctuality will be sincerely appreciated.
      </p>
    </section>
  );
};

export default WeddingDetails;
