import { useState } from "react";
import Eyebrow from "./Eyebrow";
import useFitText from "@/hooks/useFitText";
import useReveal from "@/hooks/useReveal";
import useExternalTarget from "@/hooks/useExternalTarget";

const EMAIL = "ringressi.anthony@gmail.com";

const links = [
  { label: "Email", href: `mailto:${EMAIL}` },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anthony-ringressi/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/anthony-rgs", external: true },
];

export default function FooterSection() {
  const [copied, setCopied] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  const target = useExternalTarget();
  const { containerRef, fontSize } = useFitText(
    "Télécharger mon cv",
    "800 100px Syne",
    70,
  );
  const { ref: revealRef, visible } = useReveal(120);
  const { ref: refBar, visible: vBar } = useReveal(120);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="px-11 pt-30 pb-20 max-[900px]:px-7.5 max-[900px]:pt-16"
    >
      <Eyebrow label="CONTACT" />

      {/* Headline */}
      <div
        ref={(el) => {
          containerRef.current = el;
          revealRef.current = el;
        }}
        className="font-syne font-extrabold tracking-[-0.045em] leading-[0.88] my-14 max-[900px]:my-10 max-[900px]:grid max-[900px]:gap-3"
        style={{
          fontSize: fontSize ? `${fontSize}px` : "clamp(52px, 9vw, 130px)",
        }}
      >
        <span className="overflow-hidden block">
          <span
            className="block"
            style={{
              transform: visible ? undefined : "translateY(110%)",
              animation: visible
                ? "slideUp 2s cubic-bezier(0.16, 1, 0.3, 1) both"
                : undefined,
            }}
          >
            Anthony Ringressi
          </span>
        </span>
        <div className="overflow-hidden pb-1">
          <a
            href="/images/cv-ringressi-anthony.pdf"
            target={target}
            rel="noopener"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              color: hovered ? "var(--accent)" : "var(--fg)",
              position: "relative",
              display: "inline-block",
              transform: visible ? undefined : "translateY(110%)",
              animation: visible
                ? "slideUp 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both"
                : undefined,
            }}
          >
            Voir mon CV{" "}
            <svg
              width="0.7em"
              height="0.7em"
              viewBox="0 0 18 18"
              fill="none"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginBottom: "0.12em",
              }}
            >
              <path
                d="M3 15L15 3M15 3H5M15 3V13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                position: "absolute",
                bottom: -5,
                left: 0,
                height: "3px",
                width: hovered ? "100%" : "0",
                background: "var(--accent)",
                transition: "width 0.3s ease",
              }}
            />
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div
        ref={refBar}
        className="flex justify-between items-end border-(--border) pt-9 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-8"
      >
        {/* Left — email + location */}
        <div
          className="flex flex-col gap-1"
          style={{
            opacity: vBar ? undefined : 0,
            transform: vBar ? undefined : "translateY(32px)",
            animation: vBar
              ? "slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) both"
              : undefined,
          }}
        >
          <div
            className="flex items-center gap-2"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <p className="text-[13px] text-(--muted) leading-[1.7]">{EMAIL}</p>
            <button
              onClick={copyEmail}
              aria-label="Copy email"
              className="text-(--muted) hover:text-(--fg) p-0.5"
              style={{
                opacity: emailHovered || copied ? 1 : 0,
                transition: "opacity 0.3s ease, color 0.2s ease",
              }}
            >
              {copied ? (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  stroke="var(--pill-available-color)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 7l3 3 6-6" />
                </svg>
              ) : (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="4.5"
                    y="4.5"
                    width="7"
                    height="7"
                    rx="1.2"
                  />
                  <path d="M1.5 8.5V2.5a1 1 0 0 1 1-1h6" />
                </svg>
              )}
            </button>
          </div>
          <p className="text-[13px] text-(--muted) leading-[1.7]">
            Paris, France
          </p>
        </div>

        {/* Right — social links */}
        <div
          className="flex gap-6"
          style={{
            opacity: vBar ? undefined : 0,
            transform: vBar ? undefined : "translateY(32px)",
            animation: vBar
              ? "slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both"
              : undefined,
          }}
        >
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? target : undefined}
              rel={external ? "noopener" : undefined}
              className="text-[11px] tracking-widest uppercase text-(--muted) hover:text-(--fg) transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-[11px] text-(--muted) mt-8 pt-8 border-t border-(--border) text-center">
        © 2026 Anthony Ringressi • Design by{" "}
        <a
          href="https://www.linkedin.com/in/david-rodriguez-product-designer/"
          target={target}
          rel="noopener"
          className="text-[11px] tracking-widest text-(--muted) hover:text-(--fg) transition-colors duration-300 underline"
        >
          David Rodriguez
        </a>
      </p>
    </section>
  );
}
