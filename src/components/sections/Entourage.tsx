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
    className="tracking-wide opacity-0 translate-y-3 animate-fadeInUp font-sanserif font-semibold"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    {children}
  </p>
);

// Section
const Section: React.FC<{ title?: string; children: React.ReactNode; isSecondary?: boolean }> = ({
  title,
  children,
  isSecondary = false
}) => {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`max-w-4xl mx-auto mb-10 text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {title && (
        <h3 className={` ${isSecondary ? 'font-semibold text-xl' : 'font-extrabold text-2xl'} font-serif tracking-wide mb-4 text-neutral-800`}>
          {title}
        </h3>
      )}

      <div className="font-scriptina">
        {children}
      </div>
    </div>
  );
};

// Pair List (2 columns + animated)
const PairList: React.FC<{ data: Person[] }> = ({ data }) => (
  <div className="grid grid-cols-2 gap-x-6 gap-y-2 max-w-xl mx-auto">
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

const ColumnDiv: React.FC<{ children: any }> = ({ children }) => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-6xl mx-auto max-w-md:gap-8">{children}</div>
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
      <div className="relative z-10 pt-60 pb-16 px-6">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto w-96 h-auto mb-6 opacity-90"
        />

        <h2 className="text-4xl font-extrabold font-serif tracking-widest mb-12">
          Entourage
        </h2>

        {/* ORDER */}

        <ColumnDiv>
          <Section title="Groom">
            <SingleName name={entourage.groom} />
          </Section>

          <Section title="Bride">
            <SingleName name={entourage.bride} />
          </Section>
        </ColumnDiv>
        
        <ColumnDiv>
          <Section title="Parents of the Groom">
            <NameList data={entourage.parents.groom} />
          </Section>

          <Section title="Parents of the Bride">
            <NameList data={entourage.parents.bride} />
          </Section>
        </ColumnDiv>

        <Section title="Principal Sponsors">
          <PairList data={entourage.principalSponsors} />
        </Section>

        <ColumnDiv>
          <Section title="Best Man">
            <PairList data={entourage.bestmanMaid.map(p => ({ male: p.male }))} />
          </Section>
          <Section title="Maid of Honor">
            <PairList data={entourage.bestmanMaid.map(p => ({ female: p.female }))} />
          </Section>
        </ColumnDiv>

        <Section title="Groomsmen & Bridesmaids">
          <PairList data={entourage.groomsmenBridesmaids} />
        </Section>
        
        <Section title="Secondary Sponsors">
          <br />
          <ColumnDiv>
            {entourage.secondarySponsors.map((item) => (
              <Section title={item.role} isSecondary>
                <PairList data={[item]} />
              </Section>
            ))}
          </ColumnDiv>
          <br />
        </Section>


        <div className="-mt-10">
          <Section title="Banners">
            <NameList data={entourage.banners} />
          </Section>
        </div>
        <Section title="Escorts & Flowers">
          <PairList data={entourage.flowers} />
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