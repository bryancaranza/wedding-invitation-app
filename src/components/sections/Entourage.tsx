import React from "react";
import Banner from "@/assets/images/banner.jpg";
import Logo from "@/assets/images/logo-plain.png"; // Use a separate logo if needed
import { entourage } from "@/lib/constants";
import { titleCase } from "@/lib/utils";

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
              <h3 className="font-semibold mb-4">Parents of the Bride</h3>
              {entourage.parents.bride.map((pair, i) => (
                <p key={i}>{titleCase(pair.name)}</p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold mb-4">Parents of the Groom</h3>
              {entourage.parents.groom.map((pair, i) => (
                <p key={i}>{titleCase(pair.name)}</p>
              ))}
            </div>
          </div>

          {/* Principal Sponsors */}
          <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="max-w-3xl">
              <h3 className="col-span-2 font-semibold mb-4">
                Principal Sponsors
              </h3>
              <div className="grid grid-cols-2 max-w-md mx-auto gap-4">
                {entourage.principalSponsors.map((pair, i) => (
                  <React.Fragment key={i}>
                    <p className="text-sm text-right">{titleCase(pair.male)}</p>
                    <p className="text-sm text-left">
                      {titleCase(pair.female)}
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Secondary Sponsors */}
            <div>
              <h3 className="font-semibold mb-4">Secondary Sponsors</h3>
              {entourage.secondarySponsors.map((pair, i) => (
                <div key={i} className="mb-2 pb-4">
                  <p className="text-sm font-semibold">{pair.role}</p>
                  <div className="grid grid-cols-2 max-w-md mx-auto gap-4">
                    <p className="text-sm text-right">{titleCase(pair.male)}</p>
                    <p className="text-sm text-left">
                      {titleCase(pair.female)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bestman / Maid of Honor */}
          <div className="max-w-4xl mx-auto mb-12 grid grid-cols-2 gap-4">
            <h3 className="col-span-2 font-semibold mb-4">
              Bestman / Maid of Honor
            </h3>
            {entourage.bestmanMaid.map((pair, i) => (
              <React.Fragment key={i}>
                <p className="text-sm text-right">{titleCase(pair.male)}</p>
                <p className="text-sm text-left">{titleCase(pair.female)}</p>
              </React.Fragment>
            ))}
          </div>

          {/* Groomsmen / Bridesmaids */}
          <div className="max-w-4xl mx-auto mb-12 grid grid-cols-2 gap-4">
            <h3 className="col-span-2 font-semibold mb-4">
              Groomsmen / Bridesmaids
            </h3>
            {entourage.groomsmenBridesmaids.map((pair, i) => (
              <React.Fragment key={i}>
                <p className="text-sm text-right">{titleCase(pair.male)}</p>
                <p className="text-sm text-left">{titleCase(pair.female)}</p>
              </React.Fragment>
            ))}
          </div>

          {/* Bearers */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-semibold mb-4">Bearers</h3>
            {entourage.bearers.map((pair, i) => (
              <p key={i} className="text-sm pb-4">
                {pair.role ? `${pair.role}: ` : ""} {titleCase(pair.name)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entourage;
