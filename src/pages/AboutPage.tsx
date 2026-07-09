import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell eyebrow="About" title="About GTA Cheats">
      <p>
        GTA Cheats is a fan-made reference site built for one job: getting you the correct
        GTA 5 cheat code as fast as possible, on whatever platform you're playing —
        PC, PS5, PS4, Xbox One, or Xbox Series X/S.
      </p>
      <p>
        No accounts, no pop-ups, no auto-playing video, no walls of ads between you and the
        code you need. Every cheat is laid out in a simple card with the exact input, a
        one-tap copy button, and a plain-language description of what it actually does — so
        you're not left guessing whether "TOOLUP" gives you weapons or turns you into a
        turtle.
      </p>
      <p>
        The site is built and maintained independently. Codes are checked against multiple
        current sources and updated when Rockstar changes anything. If you spot a code that
        doesn't work, let us know on the{" "}
        <Link to="/contact" className="text-accent underline underline-offset-2">
          Contact
        </Link>{" "}
        page.
      </p>
      <p>
        Grand Theft Auto V, GTA V, Rockstar Games, and all related trademarks belong to their
        respective owners. This site is not affiliated with or endorsed by Rockstar Games or
        Take-Two Interactive.
      </p>
    </PageShell>
  );
}
