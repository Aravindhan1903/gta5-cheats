import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function PrivacyPolicyPage() {
  return (
    <PageShell eyebrow="Legal" title="Privacy Policy">
      <p className="text-xs text-muted/70">Last updated: July 2026</p>

      <p>
        GTA Cheats ("we", "this site") is a static reference website. This policy explains
        what little data is involved when you visit.
      </p>

      <h2 className="text-stencil mt-2 text-lg text-paper">Information we collect</h2>
      <p>
        This site has no accounts, no forms that submit to a server, and no database. We
        don't collect names, emails, or any personal information through normal use of the
        site. The Contact page uses a plain <code>mailto:</code> link — any information you
        choose to send goes directly to our inbox, not through this website.
      </p>

      <h2 className="text-stencil mt-2 text-lg text-paper">Cookies & analytics</h2>
      <p>
        The site itself does not set cookies. If analytics or advertising is added in the
        future, this section will be updated to name the provider and explain what's
        collected before it goes live.
      </p>

      <h2 className="text-stencil mt-2 text-lg text-paper">Hosting & third parties</h2>
      <p>
        This site is hosted on Vercel, which may log standard server data (such as IP
        address and request timestamps) for security and performance purposes, under
        Vercel's own privacy policy. Fonts are loaded from Google Fonts, which may log
        request data under Google's privacy policy.
      </p>

      <h2 className="text-stencil mt-2 text-lg text-paper">Children's privacy</h2>
      <p>
        This site does not knowingly collect information from anyone, including children
        under 13, since it collects no personal data by design.
      </p>

      <h2 className="text-stencil mt-2 text-lg text-paper">Changes to this policy</h2>
      <p>
        If what this site collects ever changes, this page will be updated with a new "last
        updated" date.
      </p>

      <h2 className="text-stencil mt-2 text-lg text-paper">Contact</h2>
      <p>
        Questions about this policy can be sent through the{" "}
        <Link to="/contact" className="text-accent underline underline-offset-2">
          Contact
        </Link>{" "}
        page.
      </p>
    </PageShell>
  );
}
