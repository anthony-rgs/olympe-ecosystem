import { useState, useEffect } from "react";
import Pill from "./Pill";
import useFitText from "@/hooks/useFitText";
import Eyebrow from "./Eyebrow";
import ScrollHint from "./ScrollHint";

export default function HeroSection() {
  const { containerRef, fontSize } = useFitText("Orchestration");
  const [mobile, setMobile] = useState(() => window.innerWidth <= 900);

  useEffect(() => {
    const ro = new ResizeObserver(() => setMobile(window.innerWidth <= 900));
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="h-screen min-h-screen px-11 pb-14 max-[900px]:px-7.5 max-[900px]:pb-16 flex items-end"
    >
      <ScrollHint style={{ animation: "fadeIn 0.6s ease 0.9s both" }} />

      <div className="h-fit w-full">
        <div>
          <div className="overflow-hidden">
            <Eyebrow
              label="Architecture & flux de données"
              style={{
                animation:
                  "slideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both",
              }}
            />
          </div>

          <div
            ref={containerRef}
            id="title"
            className="font-syne mt-5 mb-12 leading-none font-extrabold"
            style={{ fontSize: fontSize ? `${fontSize}px` : undefined }}
          >
            <div className="overflow-hidden">
              <p
                style={{
                  animation: "slideUp 2s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                Olympe
              </p>
            </div>
            <div className="overflow-hidden">
              <p
                style={{
                  animation:
                    "slideUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both",
                }}
              >
                Orchestration
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
          <p
            className="max-w-90 text-[15px] font-light text-(--muted) flex flex-col justify-end leading-[1.65]"
            style={{
              animation:
                "slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both",
            }}
          >
            Olympe automatise la donnée musicale, du scraping à la génération de
            vidéo
            <br />
            Des services inspirés des dieux grecs, orchestrés en continu
          </p>
          <div className="flex flex-col items-end max-[900px]:items-start gap-2.5">
            <Pill
              state="available"
              label="En fonctionnement"
              style={{
                animation: mobile
                  ? "slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both"
                  : "slideLeftFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both",
              }}
            />
            <Pill
              label="Automatisation"
              style={{
                animation: mobile
                  ? "slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both"
                  : "slideLeftFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both",
              }}
            />
            <Pill
              label="Système distribué"
              style={{
                animation: mobile
                  ? "slideUpFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.0s both"
                  : "slideLeftFade 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.0s both",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
