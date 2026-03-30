import React, { useEffect, useRef, useState } from "react";

/* =========================
   🔹 Hook: useFadeIn
========================= */
export const useFadeIn = (options?: {
  threshold?: number;
  triggerOnce?: boolean;
}) => {
  const { threshold = 0.2, triggerOnce = true } = options || {};

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  return { ref, visible };
};

/* =========================
   🔹 FadeIn Wrapper
========================= */
export const FadeIn: React.FC<{
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  show?: boolean;
  delay?: number
}> = ({
  children,
  className = "",
  threshold = 0.2,
  triggerOnce = true,
  show,
  delay = 50
}) => {
  const { ref, visible } = useFadeIn({ threshold, triggerOnce });

  const isVisible = show ?? visible;

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${delay}ms`,
      }}
      className={`
        transition-all duration-700 ease-out
        will-change-transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/* =========================
   🔹 FadeItem (Stagger)
========================= */
export const FadeItem: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
      }}
      className={`fade-up ${className}`}
    >
      {children}
    </div>
  );
};