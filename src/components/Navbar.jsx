import { useState, useEffect } from "react";

const links = ["Architecture", "Interfaces", "Contact"];

export default function Navbar({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [narrow, setNarrow] = useState(() => window.innerWidth <= 1140);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() => setNarrow(window.innerWidth <= 1140));
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);

  return (
    <nav
      className="fixed z-50 flex justify-between items-center transition-all duration-[0.45s] ease-in-out"
      style={
        scrolled
          ? {
              top: "16px",
              left: narrow ? "10%" : "22%",
              right: narrow ? "10%" : "22%",
              gap: "48px",
              padding: "14px 36px",
              borderRadius: "100px",
              background:
                theme === "light"
                  ? "rgba(240, 237, 229, 0.85)"
                  : "rgba(12, 12, 11, 0.80)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow:
                theme === "light"
                  ? "0 4px 24px rgba(0, 0, 0, 0.10)"
                  : "0 4px 24px rgba(0, 0, 0, 0.25)",
            }
          : {
              top: 0,
              left: 0,
              right: 0,
              padding: "22px 44px",
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }
      }
    >
      {/* Logo */}
      <a
        href="#hero"
        className="font-syne text-[15px] font-extrabold tracking-[-0.02em] text-(--fg)"
        style={{ animation: "fadeIn 0.6s ease 0.2s both" }}
      >
        olympe
      </a>

      {/* Right */}
      <div className="flex items-center gap-9">
        <ul className="max-[900px]:hidden flex gap-7 list-none">
          {links.map((item) => (
            <li
              key={item}
              style={{ animation: `fadeIn 0.6s ease 0.2s both` }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-[12px] tracking-widest uppercase text-(--muted) hover:text-(--fg) transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-(--fg) after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={onToggle}
          className="flex items-center gap-1.75 border border-(--border) rounded-full px-3.75 py-1.75 text-[11px] tracking-[0.08em] uppercase text-(--muted) hover:bg-(--fg) hover:text-(--bg) hover:border-(--fg) transition-all duration-300"
          style={{ animation: "fadeIn 0.6s ease 0.2s both" }}
        >
          <span className="text-[13px]">◑</span>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
