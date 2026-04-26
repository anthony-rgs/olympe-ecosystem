import { useState, useEffect } from "react";

export default function ImageModal({ images, startIndex = 0, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            className="absolute rounded-lg max-w-[90vw] max-h-[90vh] object-contain transition-opacity duration-400"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 2L4 7l5 5" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 2l5 5-5 5" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
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

        {/* Counter */}
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.12em] uppercase text-white/50">
          {current + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
