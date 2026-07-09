export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "achievements",
    question: "Can cheat codes disable achievements?",
    answer:
      "Yes. Activating any cheat code turns off achievements and trophies for the rest of that play session. Reload a clean save that never used a cheat to re-enable them.",
  },
  {
    id: "story-mode",
    question: "Can I use cheats in story mode?",
    answer:
      "Yes, every code on this page works in GTA 5's single-player story mode. They're entered as controller combos on console, typed into the console on PC, or dialed on the in-game phone.",
  },
  {
    id: "gta-online",
    question: "Do cheat codes work in GTA Online?",
    answer:
      "No. Cheat codes are disabled entirely in GTA Online, and attempting to force them in can get your account flagged or banned. They only function in story mode.",
  },
  {
    id: "money-cheats",
    question: "Are money cheats available?",
    answer:
      "No. There has never been a cheat code for unlimited or free cash in GTA 5. In-game money still has to come from missions, heists, or the stock market.",
  },
  {
    id: "phone-cheats",
    question: "How do phone cheats work?",
    answer:
      "Open your character's in-game phone, go to the dial pad, and enter the number listed for the cheat you want. It works the same way on PC, PS4, PS5, and Xbox.",
  },
  {
    id: "missions",
    question: "Why won't a cheat activate during a mission?",
    answer:
      "Several cheats — including invincibility, moon gravity, and skyfall — are blocked during missions and some restricted areas. You'll see a \"Cheat Denied\" message if one can't be used right now.",
  },
  {
    id: "reset",
    question: "How do I turn cheats off again?",
    answer:
      "Most toggle cheats turn off if you re-enter the same code. For a full reset, including restoring achievements, reload a save that was made before you used any cheats.",
  },
];
