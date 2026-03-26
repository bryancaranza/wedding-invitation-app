import Banner from "@/assets/images/banner.jpg";
import Logo from "@/assets/images/logo-plain.png"; // Use a separate logo if needed
import { entourage } from "@/lib/constants";
import { titleCase } from "@/lib/utils";
import React from "react";

const Entourage = () => {
  return (
    <section className="relative w-full text-black text-center">
      {/* Banner Image */}
      <div className="absolute top-0 left-0 w-full h-52 overflow-hidden z-0">
        <img
          src={Banner}
          alt="Prenup Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section Content */}
      <div className="relative z-10 pt-48 pb-12 px-6 bg-white/80">
        <div>
          {/* Optional Logo */}
          <img src={Logo} alt="Logo" className="mx-auto w-64 h-auto" />

          <h2 className="text-3xl font-serif mb-12">Entourage</h2>

          {/* Parents */}
          <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Parents of the Bride</h3>
              {entourage.parents.bride.map((pair, i) => (
                <p key={i}>{titleCase(pair.name)}</p>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Parents of the Groom</h3>
              {entourage.parents.groom.map((pair, i) => (
                <p key={i}>{titleCase(pair.name)}</p>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principal Sponsors */}
            <div className="max-w-3xl">
              <h3 className="text-xl col-span-2 font-semibold mb-4">
                Principal Sponsors
              </h3>
              <div className="grid grid-cols-2 max-w-md mx-auto gap-4">
                {entourage.principalSponsors.map((pair, i) => {
                  const isSolo = !pair.male || !pair.female;

                  if (isSolo) {
                    return (
                      <p key={i} className="col-span-2 text-center">
                        {titleCase(pair.male || pair.female)}
                      </p>
                    );
                  }

                  return (
                    <React.Fragment key={i}>
                      <p className="text-right">{titleCase(pair.male)}</p>
                      <p className="text-left">{titleCase(pair.female)}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Secondary Sponsors */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Secondary Sponsors</h3>
              {entourage.secondarySponsors.map((pair, i) => (
                <div key={i} className="mb-2 pb-4">
                  <p className=" font-semibold">{pair.role}</p>
                  <div className="grid grid-cols-2 max-w-md mx-auto gap-4">
                    <p className=" text-right">{titleCase(pair.male)}</p>
                    <p className=" text-left">
                      {titleCase(pair.female)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bestman / Maid of Honor */}
          {partnerMap(entourage.bestmanMaid, 'Bestman & Maid of Honor')}
          
          {/* Groomsmen / Bridesmaids */}
          {partnerMap(entourage.groomsmenBridesmaids, 'Groomsmen & Bridesmaids')}

          {/* Ring */}
          {soloMap(entourage.ringBearer, 'Ring Bearer')}

          {/* Coin */}
          {soloMap(entourage.coinBearer, 'Coin Bearer')}

          {/* Bible */}
          {nameMap(entourage.bible, 'Bible')}
          {/* Banner */}
          {nameMap(entourage.banners, 'Banners')}
          {/* Flowers */}
          {partnerMap(entourage.flowers, 'Flowers')}
        </div>
      </div>
    </section>
  );
};

const soloMap = (name: string, title: string) => (
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className=" pb-4">
        {titleCase(name)}
      </p>
    </div>
  )

const nameMap = (arr: any[], title: string) => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-col gap-4 justify-center">{arr.map(p => {
          return (
            <p className="">
              {titleCase(p.name)}
            </p>
          )
        })}</div>
    </div>
  )
}

const partnerMap = (arr: any[], title: string) => (
          <div className="max-w-4xl mx-auto mb-12 grid grid-cols-2 gap-4">
            <h3 className="text-xl col-span-2 font-semibold">
              {title}
            </h3>
            {arr.map((pair, i) => (
              <React.Fragment key={i}>
                <p className=" text-right">{titleCase(pair.male)}</p>
                <p className=" text-left">{titleCase(pair.female)}</p>
              </React.Fragment>
            ))}
          </div>
)

export default Entourage;
