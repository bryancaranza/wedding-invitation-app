import { date } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface InvitationProps {
  isIntro: boolean;
  handleEnter: () => void;
}

const Invitation = ({ isIntro, handleEnter }: InvitationProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <p className="font-serif text-xl sm:text-2xl">
        please join us in celebrating the wedding of
      </p>

      <div className="flex items-center justify-center gap-4 sm:gap-6 py-4">
        <p className="font-scriptina text-6xl sm:text-7xl md:text-9xl">Jessa</p>
        <p className="font-scriptina text-3xl sm:text-4xl md:text-5xl mt-6">
          &
        </p>
        <p className="font-scriptina text-6xl sm:text-7xl md:text-9xl">
          Charlie
        </p>
      </div>

      <p className="font-serif text-lg sm:text-xl mt-6">
        {formatDate(date, "EEEE, MMMM d, yyyy")} <br /> St. Peter Parish Church
      </p>

      {/* ENTER BUTTON */}
      {isIntro && (
        <button
          onClick={handleEnter}
          className="mt-12 mb-10 px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all tracking-widest"
        >
          OPEN INVITATION
        </button>
      )}

      {/* SCROLL ARROW */}
      {!isIntro && (
        <div className="absolute bottom-10 animate-bounce text-3xl">↓</div>
      )}
    </section>
  );
};

export default Invitation;
