import psGroup from "@/assets/images/attire1.png";
import gmGroup from "@/assets/images/attire2.png";
import paletteImg from "@/assets/images/pallete.png";

const dressCodeGroups = [
  {
    role: "Principal Sponsors",
    image: psGroup,
    male: "Barong & Black Pants",
    female: "Modern Filipiniana",
  },
  {
    role: "Groomsmen",
    image: gmGroup,
    male: "Black Suit & Slacks",
    female: "Olive Green Silk Long Gown",
  },
  {
    role: "Guests",
    image: null,
    male: "Formal Attire within Dress Code",
    female: "Formal Attire within Dress Code",
  },
];

const DressCode = () => {
  return (
    <section className="py-20 px-6 bg-black/40 backdrop-blur-md text-center text-white">
      <h2 className="text-3xl font-serif mb-6">Dress Code</h2>

      {/* Color palette image */}
      <div className="mb-12">
        <img
          src={paletteImg}
          alt="Color Palette"
          className="mx-auto w-full max-w-md rounded-lg shadow-md object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {dressCodeGroups.map((group, i) => (
          <div key={i}>
            <h3 className="font-semibold text-2xl mb-6">{group.role}</h3>

            {group.image && (
              <img
                src={group.image}
                alt={group.role}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4 object-cover"
              />
            )}

            <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
              <div>
                <p className="font-semibold">Male:</p>
                <p>{group.male}</p>
              </div>
              <div>
                <p className="font-semibold">Female:</p>
                <p>{group.female}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DressCode;
