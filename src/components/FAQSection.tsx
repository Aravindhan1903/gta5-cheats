import { useState } from "react";
import { faqs } from "../data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-28 border-t border-line px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-dim">
          FAQ
        </span>
        <h2 id="faq-heading" className="text-stencil mt-2 text-3xl text-paper sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-7 flex flex-col gap-2.5">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-line bg-panel"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <span className="text-sm font-semibold text-paper sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-lg text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-5 sm:text-[0.95rem]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
