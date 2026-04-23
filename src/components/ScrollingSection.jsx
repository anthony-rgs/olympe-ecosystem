import { useState } from "react";
import { FretteIcon } from "@/assets/icons";

const items = [
  "Artémis",
  "Héraclès",
  "Owl",
  "Élysium",
  "Athéna",
  "Sisyphe",
  "Hermès",
  "Ambrosia",
  "Orphée",
  "Atlas",
  "Héphaïstos",
  "Cerbère",
];

const doubled = [...items, ...items];

export default function ScrollingSection() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="border-y border-(--border) py-3.5 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inline-flex whitespace-nowrap"
        style={{
          animation: "marquee 28s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {doubled.map((name, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-14 font-syne text-[11px] font-semibold tracking-[0.12em] uppercase text-(--muted) px-7 h-[13.5px]"
          >
            {name}
            <span className="text-(--border-hover) h-[13.5px] w-[13.5px] flex items-center">
              <FretteIcon />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
