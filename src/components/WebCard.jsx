import { useState } from "react";
import ImageModal from "./ImageModal";
import useReveal from "@/hooks/useReveal";
import Pill from "./Pill";

export default function WebCard({
  index,
  project,
  title,
  inProgress = false,
  stack = [],
  links = [],
  metrics = [],
  images = [],
  gradient,
}) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const multi = images.length > 1;
  const { ref, visible } = useReveal(140);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((i) => (i + 1) % images.length);
  };

  return (
    <>
      <article
        ref={ref}
        className="group border border-(--border) rounded-(--radius) overflow-hidden hover:border-(--border-hover) transition-[border-color] duration-400 ease-out"
        style={{
          opacity: visible ? undefined : 0,
          transform: visible ? "translateZ(0)" : "translateY(18px)",
          animation: visible
            ? "slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) both"
            : undefined,
          WebkitTransform: visible ? "translateZ(0)" : "translateY(18px)",
        }}
      >
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 min-h-100">
          {/* Info */}
          <div className="max-[900px]:order-2">
            <div className="flex flex-col justify-between gap-3.5 p-11 max-[900px]:p-7.5 h-full">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2.5 justify-center">
                  <span className="text-[12px] h-fit font-semibold tracking-[0.12em] text-(--muted)">
                    {index}
                  </span>
                  {inProgress && (
                    <Pill
                      state="progress"
                      label="En cours de développement"
                      style={{
                        padding: "5px 12px",
                        fontSize: "10px",
                        fontWeight: 600,
                      }}
                    />
                  )}
                </div>

                <div className="max-[900px]:hidden flex gap-6">
                  {links
                    .filter((l) => l.link)
                    .map(({ label, link }) => (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener"
                        className="min-w-fit relative text-[12px] font-semibold leading-[1.08] text-(--muted) hover:text-(--fg) transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-(--fg) after:transition-[width] after:duration-300 hover:after:w-full"
                      >
                        {label}
                      </a>
                    ))}
                </div>
              </div>

              <div className="grid gap-2">
                <p className="text-[12px] text-(--muted)">{project}</p>
                <h3
                  className="font-semibold leading-[1.08] text-(--fg)"
                  style={{ fontSize: "clamp(22px, 2.8vw, 40px)" }}
                >
                  {title}
                </h3>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-widest uppercase px-2.75 py-1 border border-(--border) rounded-full text-(--muted)"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-8">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-0.75"
                  >
                    <span className="text-[30px] font-extrabold tracking-[-0.04em] text-(--muted)">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-(--muted) leading-[1.35] max-w-32.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile links — below metrics */}
              {links.filter((l) => l.link).length > 0 && (
                <div className="min-[900px]:hidden flex gap-3">
                  {links
                    .filter((l) => l.link)
                    .map(({ label, link }) => (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex h-7.25 items-center gap-1.75 w-fit border border-(--border) rounded-full px-3.75 py-1.75 text-[11px] tracking-[0.08em] uppercase text-(--muted) no-underline whitespace-nowrap transition-all duration-300 hover:bg-(--fg) hover:text-(--bg) hover:border-(--fg)"
                      >
                        {label}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 transition-transform duration-300"
                        >
                          <path d="M2 12L12 2M12 2H4M12 2V10" />
                        </svg>
                      </a>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Visual — group/vis for isolated hover */}
          <div
            className="group/vis relative overflow-hidden cursor-pointer max-[900px]:order-1 max-[900px]:min-h-64"
            onClick={() => setModalOpen(true)}
          >
            <div
              className="absolute inset-0"
              style={{ background: gradient }}
            />

            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-900 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/vis:scale-[1.04] z-1"
                style={{ opacity: i === current ? 1 : 0 }}
              />
            ))}

            {/* Expand button */}
            <div className="absolute bottom-6 right-6 z-10 w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover/vis:bg-white group-hover/vis:border-white group-hover/vis:text-black">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover/vis:rotate-90"
              >
                <path d="M1 4.5V1h3.5M11 7.5V11H7.5M7.5 1H11v3.5M4.5 11H1V7.5" />
              </svg>
            </div>

            {/* Arrows — visible on hover, only if multiple images */}
            {multi && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev(e);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white opacity-0 group-hover/vis:opacity-100 transition-opacity duration-200 hover:bg-black/60"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 2L4 7l5 5" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white opacity-0 group-hover/vis:opacity-100 transition-opacity duration-200 hover:bg-black/60"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 2l5 5-5 5" />
                  </svg>
                </button>
              </>
            )}

            {/* Dots */}
            {multi && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrent(i);
                    }}
                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      background:
                        i === current
                          ? "rgba(255,255,255,0.95)"
                          : "rgba(255,255,255,0.35)",
                      transform: i === current ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      {modalOpen && (
        <ImageModal
          images={images}
          startIndex={current}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
