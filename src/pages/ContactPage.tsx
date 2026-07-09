import PageShell from "../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Get in Touch">
      <p>
        Found a cheat code that's wrong or out of date? Have a suggestion for the site?
        Send a message and we'll take a look.
      </p>
      <p>
        <a
          href="mailto:hello@gtacheats.example"
          className="inline-block rounded-lg border border-line bg-panel px-4 py-3 font-mono text-sm text-accent transition-colors hover:border-accent-dim"
        >
          hello@gtacheats.example
        </a>
      </p>
      <p className="text-xs text-muted/70">
        Replace this address with your real support email before launch. This is a static
        site with no backend, so there's no contact form here — email is the fastest way to
        reach us.
      </p>
    </PageShell>
  );
}
