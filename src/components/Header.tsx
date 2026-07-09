import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-ink">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
              <path
                d="M4 12l3-7h10l3 7-3 7H7l-3-7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-stencil text-lg tracking-wide text-paper sm:text-xl">
            GTA Cheats
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <Link
            to="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-panel hover:text-paper"
          >
            Home
          </Link>
          <Link
            to="/#faq"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-panel hover:text-paper"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
