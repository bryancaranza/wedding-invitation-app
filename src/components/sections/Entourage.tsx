import React, { useEffect, useRef, useState } from "react";
import Banner from "@/assets/images/banner.jpg";
import Logo from "@/assets/images/logo-plain.png";
import { entourage } from "@/lib/constants";
import { titleCase } from "@/lib/utils";

// Types
type Person = {
  name?: string;
  male?: string;
  female?: string;
  role?: string;
};

// Fade-in hook (section)
const useFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

// Animated Text (per name)
const FadeText: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => (
  <p
    className="font-serif tracking-wide opacity-0 translate-y-3 animate-fadeInUp"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    {children}
  </p>
);

// Section
const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`max-w-xl mx-auto mb-12 text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {title && (
        <h3 className="text-xl font-serif tracking-wide mb-4 text-neutral-800">
          {title}
        </h3>
      )}

      {children}

      <div className="mt-8 flex justify-center">
        <div className="w-24 h-[1px] bg-neutral-400/40" />
      </div>
    </div>
  );
};

// Pair List (2 columns + animated)
const PairList: React.FC<{ data: Person[] }> = ({ data }) => (
  <div className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-lg mx-auto">
    {data.map((pair, i) => {
      const isSolo = !pair.male || !pair.female;

      if (isSolo) {
        return (
          <div key={i} className="col-span-2 text-center">
            <FadeText delay={i * 100}>
              {titleCase(pair.male || pair.female || "")}
            </FadeText>
          </div>
        );
      }

      return (
        <React.Fragment key={i}>
          <div className="text-right">
            <FadeText delay={i * 100}>
              {titleCase(pair.male!)}
            </FadeText>
          </div>
          <div className="text-left">
            <FadeText delay={i * 100 + 50}>
              {titleCase(pair.female!)}
            </FadeText>
          </div>
        </React.Fragment>
      );
    })}
  </div>
);

// Name List
const NameList: React.FC<{ data: Person[] }> = ({ data }) => (
  <div className="flex flex-col gap-2">
    {data.map((p, i) => (
      <FadeText key={i} delay={i * 100}>
        {titleCase(p.name || "")}
      </FadeText>
    ))}
  </div>
);

// Single Name
const SingleName: React.FC<{ name: string }> = ({ name }) => (
  <FadeText>{titleCase(name)}</FadeText>
);

const Entourage = () => {
  return (
    <section className="relative w-full text-neutral-800 bg-white/50 text-center overflow-hidden">
      {/* 🌸 Floral Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_top_left,#d6a77a_0%,transparent_40%),radial-gradient(circle_at_bottom_right,#a3b18a_0%,transparent_40%)]" />

      {/* Banner */}
      <div className="absolute top-0 left-0 w-full h-56 overflow-hidden z-0">
        <img
          src={Banner}
          alt="Prenup Banner"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-52 pb-16 px-6">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto w-56 h-auto mb-6 opacity-90"
        />

        <h2 className="text-4xl font-serif tracking-widest mb-12">
          Entourage
        </h2>

        {/* ORDER */}

        <Section title="Best Man">
          <PairList data={entourage.bestmanMaid.map(p => ({ male: p.male }))} />
        </Section>

        <Section title="Parents of the Groom">
          <NameList data={entourage.parents.groom} />
        </Section>

        <Section title="Groom">
          <SingleName name={entourage.groom} />
        </Section>

        <Section title="Principal Sponsors">
          <PairList data={entourage.principalSponsors} />
        </Section>

        <Section title="Secondary Sponsors">
          {entourage.secondarySponsors.map((item, i) => (
            <div key={i} className="mb-4">
              <p className="text-sm font-semibold mb-1">{item.role}</p>
              <PairList data={[item]} />
            </div>
          ))}
        </Section>

        <Section title="Groomsmen & Bridesmaids">
          <PairList data={entourage.groomsmenBridesmaids} />
        </Section>

        <Section title="Ring Bearer">
          <SingleName name={entourage.ringBearer} />
        </Section>

        <Section title="Coin Bearer">
          <SingleName name={entourage.coinBearer} />
        </Section>

        <Section title="Bible">
          <NameList data={entourage.bible} />
        </Section>

        <Section title="Banners">
          <NameList data={entourage.banners} />
        </Section>

        <Section title="Flowers">
          <PairList data={entourage.flowers} />
        </Section>

        <Section title="Maid of Honor">
          <PairList data={entourage.bestmanMaid.map(p => ({ female: p.female }))} />
        </Section>

        <Section title="Parents of the Bride">
          <NameList data={entourage.parents.bride} />
        </Section>

        <Section title="Bride">
          <SingleName name={entourage.bride} />
        </Section>
      </div>

      {/* ✨ Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Entourage;