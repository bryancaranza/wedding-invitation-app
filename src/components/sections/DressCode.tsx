import React, { useEffect, useRef, useState } from "react";
import paletteImg from "@/assets/images/colors.png";
import { dressCodeGroups } from "@/lib/constants";

interface DressCode {
  role: string;
  image?: string;
  male?: string;
  female?: string;
  both?: string;
  extraNotes?: string;
  maxWidth?: number;
}

/* =========================
   🔹 Fade In Hook
========================= */
const useFadeIn = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return { ref, visible };
};

/* =========================
   🔹 Fade Wrapper
========================= */
const FadeIn: React.FC<{
  children: React.ReactNode;
  visible: boolean;
  delay?: number;
}> = ({ children, visible, delay = 0 }) => {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
};

/* =========================
   🔹 Hover Tilt Image
========================= */
const HoverImage: React.FC<{
  src: string;
  alt: string;
  maxWidth?: number;
}> = ({ src, alt, maxWidth }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 6;
    const rotateX = -(y / rect.height - 0.5) * 6;

    const moveX = (x / rect.width - 0.5) * 4;
    const moveY = (y / rect.height - 0.5) * 4;

    setStyle({
      transform: `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)
        translate(${moveX}px, ${moveY}px)
      `,
    });
  };

  const reset = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0) rotateY(0) scale(1)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="mx-auto mt-3 mb-4"
      style={{ maxWidth: maxWidth ? `${maxWidth}rem` : "36rem" }}
    >
      <div className="overflow-hidden rounded-lg duration-300">
        <img
          src={src}
          alt={alt}
          className="w-full object-cover transition-transform duration-300 ease-out"
          style={style}
        />
      </div>
    </div>
  );
};

/* =========================
   🔹 Main Component
========================= */
const DressCode = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-black/40 backdrop-blur-md text-center text-white"
    >
      {/* Header */}
      <FadeIn visible={visible}>
        <h2 className="text-3xl font-serif mb-6 tracking-wide">
          Dress Code
        </h2>
      </FadeIn>

      {/* Palette */}
      <FadeIn visible={visible} delay={100}>
        <div className="mb-12">
          <img
            src={paletteImg}
            alt="Color Palette"
            className="mx-auto w-full max-w-[13rem] rounded-lg object-cover opacity-90"
          />
        </div>
      </FadeIn>

      {/* Groups */}
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {dressCodeGroups.map((group: DressCode, i: number) => (
          <FadeIn key={i} visible={visible} delay={i * 120}>
            <h3 className="font-serif text-2xl mb-4 tracking-wide">
              {group.role}
            </h3>

            {/* Text */}
            {group.both ? (
              <p className="text-sm mb-2 opacity-90">
                <span className="font-semibold">Male / Female:</span>{" "}
                {group.both}
              </p>
            ) : (
              <div className="flex flex-col md:flex-row justify-center gap-6 text-sm mb-2">
                <p>
                  <span className="font-semibold">Gents:</span>{" "}
                  {group.male}
                </p>
                <p>
                  <span className="font-semibold">Ladies:</span>{" "}
                  {group.female}
                </p>
              </div>
            )}

            {/* Image */}
            {group.image && (
              <HoverImage
                src={group.image}
                alt={group.role}
                maxWidth={group.maxWidth}
              />
            )}

            {/* Notes */}
            {group.extraNotes && (
              <p className="max-w-md mx-auto text-sm opacity-80 mt-2">
                {group.extraNotes}
              </p>
            )}

            {/* Divider */}
            <div className="mt-10 flex justify-center">
              <div className="w-24 h-[1px] bg-white/30" />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default DressCode;