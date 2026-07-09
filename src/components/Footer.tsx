import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <span className="text-stencil text-lg text-paper">GTA Cheats</span>

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link to="/about" className="text-xs font-medium text-muted transition-colors hover:text-accent">
            About
          </Link>
          <Link
            to="/privacy-policy"
            className="text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            Privacy Policy
          </Link>
          <Link to="/contact" className="text-xs font-medium text-muted transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>

        <p className="max-w-xl text-xs leading-relaxed text-muted">
          Fan-made reference site for Grand Theft Auto V cheat codes. Not affiliated with,
          endorsed by, or sponsored by Rockstar Games or Take-Two Interactive. Grand Theft
          Auto V and GTA V are trademarks of their respective owners.
        </p>
        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} GTA Cheats. Cheats work in story mode only and disable
          achievements for the session.
        </p>
      </div>
    </footer>
  );
}
