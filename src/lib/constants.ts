import prenup2 from "@/assets/images/prenup2.jpg";
import prenup3 from "@/assets/images/prenup3.jpg";
import prenup from "@/assets/images/prenup.jpg";
import ceremonyImg from "@/assets/images/stpeter.jpg";
import receptionImg from "@/assets/images/reception.jpg";
import dinnerImg from "@/assets/images/dinner.jpg";
import cocktailsImg from "@/assets/images/cocktail.jpg";
import partyImg from "@/assets/images/party.jpg";

export const timeline = [
  { time: "1:00 PM", event: "Ceremony", image: ceremonyImg },
  { time: "3:00 PM", event: "Reception", image: receptionImg },
  { time: "5:00 PM", event: "Early Dinner", image: dinnerImg },
  { time: "5:30 PM", event: "Cocktails", image: cocktailsImg },
  { time: "7:00 PM", event: "Party", image: partyImg },
];

export const storyImages = [prenup2, prenup3, prenup];

export const entourage = {
  bride: "CARANZA, JESSABELLE, B",
  groom: "DAUAG, CHARLIE JR., F",
  parents: {
    bride: [
      { role: "Father", name: "Mr. CARANZA, FRANKIE V." },
      { role: "Mother", name: "Ms. CARANZA, ERLINDA B." },
    ],
    groom: [
      { role: "Father", name: "Mr. DAUAG, CHARLIE, M." },
      { role: "Mother", name: "Ms. DAUAG, MYLENE F." },
    ],
  },
  principalSponsors: [
    { male: "Mr. ALGIRE, MARLON", female: "Ms. ALGIRE, DULCE" },
    { male: "Mr. BANCOD, CLARENCE", female: "Ms. MARIANO, LUNINGNING" },
    { male: "Dr. ONGSIAKO, RAMON MARIO", female: "Ms. TUAZON, MAYBOURNE STAR" },
    { male: "Mr. PEÑOLIO, FRANCISCO", female: "Ms. PENOLIO, PURITA" },
    { male: "Dr. ALCANTARA, BRICCIO", female: "Ms. BUSTENERA, JENNILYN" },
    { male: "Mr. PEÑA, CHRISTOPHER", female: "Ms. SAN ADRES, NIÑA" },
    { male: "Mr. DAUAG, DEREK", female: "Ms. DAUAG, CENIZA" },
    { male: "Mr. GARCIA, NELSON", female: "Ms. ALMENDRAL, RIZA" },
    { male: "Mr. DAUAG, RANDY", female: "Ms. MALATE, CHERRYL" },
    { male: "Mr. CARANZA, PIO", female: "Ms. MARASIGAN, ABLYN" },
  ],
  secondarySponsors: [
    {
      role: "Candle Pair",
      male: "Mr. FRIANEZA, EDGIE MAR",
      female: "Mr. RACHACHOT, DAYE",
    },
    {
      role: "Veil 2 Girls",
      male: "Ms. DAUAG, CHARLENE",
      female: "Mr. CARANZA, MAY ANN",
    },
    {
      role: "Cord Pair",
      male: "Mr. CASTILLO, REYMART",
      female: "Mr. CASTILLO, SOPHIA",
    },
  ],
  bestmanMaid: [{ male: "Mr. CARANZA, BRYAN", female: "Ms. CARANZA, MAY ANN" }],
  groomsmenBridesmaids: [
    { male: "Mr. EUGENIO, KARL", female: "Ms. CARANZA, MARY JOYCE" },
    { male: "Mr. FRIANEZA, EDGIE MAR", female: "Ms. RACHACHOT, DAYE" },
    { male: "Mr. CARILLO, MARC WINDEN", female: "Ms. BARRAMEDA, MERICEL" },
    { male: "Mr. PABIA, ALJUN E.", female: "Ms. DE LEOZ, RAYA ISABEL" },
    { male: "Mr. ABAD, JERSON", female: "Ms. DAUAG, CHARLENE" },
    { male: "Mr. DAUAG, CHRISTIAN", female: "Ms. RACELIS, MARY GRACE" },
    { male: "Mr. TUMINEZ, CLARENCE", female: "Ms. ALALID, CHARLENE" },
    { male: "Mr. CASTILLO, REYMART", female: "Ms. CASTILLO, SOPHIA" },
    { male: "Mr. CARANZA, REYMARK", female: "Ms. BIANDO, MARY GRACE" },
  ],
  bearers: [
    { role: "Ring (Boy)", name: "Mr. DAUAG, MICO ZYRUS" },
    { role: "Coin (Boy)", name: "Mr. DAUAG, GABRIEL" },
    { role: "Banner", name: "Mr. Caranza, Lawrence" },
    { role: "Banner", name: "Mr. Caranza, Bjay Clarence" },
    { role: "Flower Girls", name: "Ms. DAUAG, JAZZ CAIRENE" },
    { role: "Flower Girls", name: "Ms. AICELLE" },
  ],
};

export const faqs = [
  {
    question: "RSVP Deadline? 🗓️",
    answer:
      "We kindly ask that you confirm your attendance by May 3, 2026. This helps us ensure your seat and meal are perfectly prepared. We hope you can join us!",
  },
  {
    question: "Can I bring a plus one? 👤",
    answer:
      "Due to the limited capacity of our venue, we are only able to accommodate the guests specifically listed on your invitation. We hope you understand and look forward to celebrating this special day with you.",
  },
  {
    question: "Gift preferences? 🎁",
    answer:
      "We are truly grateful to have you join us in celebrating this special day! Your presence is the greatest gift we could ask for. Should you wish to honor us with a token, we would deeply appreciate monetary gifts or well-wishes to help us begin our new journey together. Digital gifts can be sent via [GCash/Bank Name], and a gift box will also be available at the venue.",
  },
  {
    question: "Where can we park? 🚗",
    answer:
      "For your convenience, Ceremony guest pay parking is located beside the St. Peter Parish: Shrine of leaders. We recommend arriving a little early to ensure a smooth parking process before the ceremony begins. During Reception, there are also parking spaces.",
  },
  {
    question: "Are children allowed at the event? 👧",
    answer:
      "In order to allow all our guests a night of relaxation, we have chosen an ADULTS-ONLY setting for our wedding. Exceptions are made only for children who are part of the wedding entourage. We appreciate your understanding and hope this allows you to enjoy the evening to the fullest!",
  },
];
