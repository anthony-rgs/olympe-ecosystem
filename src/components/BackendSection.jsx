import { useRef, useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import useReveal from "@/hooks/useReveal";

const detailHeading =
  "text-[10px] tracking-[0.14em] uppercase text-(--muted) mb-3 font-bold";
const listItem = "flex justify-between items-baseline gap-12 pt-[14px]";
const itemLeft = "flex flex-col gap-2";
const itemCompany =
  "font-syne text-[14px] font-bold tracking-[-0.01em] text-(--fg)";
const itemRole = "text-[12px] text-(--muted)";
const bioParagraph =
  "font-light leading-[1.62] text-(--muted) [&_strong]:font-light [&_strong]:text-(--fg)";
const bioParagraphStyle = { fontSize: "clamp(17px, 1.7vw, 18px)" };

const docker = [
  {
    service: "Cerbère",
    description: "Reverse proxy & HTTPS",
    stack: ["Caddy 2"],
    links: [],
  },
  {
    service: "Athéna",
    description: "Base de données",
    stack: ["PostgreSQL 16"],
    links: [],
  },
  {
    service: "Artémis",
    description: "Scraper Spotify, Apple Music et Deezer",
    stack: ["Python", "Playwright", "Chromium"],
    links: [
      { label: "voir le code", link: "https://github.com/anthony-rgs/artemis" },
    ],
  },
  {
    service: "Owl",
    description: "Ingestion JSON → DB",
    stack: ["Python"],
    links: [],
  },
  {
    service: "Héraclès",
    description: "Runner de scripts",
    stack: ["Python", "Docker socket"],
    links: [],
  },
  {
    service: "Sisyphe",
    description: "Cron / scheduler",
    stack: ["Shell", "Docker socket"],
    links: [],
  },
  {
    service: "Hermès",
    description: "API REST",
    stack: ["Python", "FastAPI"],
    links: [],
  },
  {
    service: "Orphée",
    description: "Génération vidéo",
    stack: ["FastAPI", "FFmpeg", "yt-dlp", "Deno"],
    links: [],
  },
  {
    service: "Altas",
    description: "Serveur OVH qui accueille tout le Docker",
    stack: ["Ubuntu", "Docker Compose"],
    links: [],
  },
];

const interfaces = [
  {
    project: "Élysium",
    description:
      "Interface de visualisation des morceaux Spotify dépassant 1 milliard de streams. Classements, statistiques artistes, exploration des données collectées par Artemis",
    stack: [
      "React18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Jest",
    ],
    links: [
      { label: "voir le site", link: "https://spotify-billions.club/" },
      { label: "voir le code", link: "https://github.com/anthony-rgs/elysium" },
    ],
  },
  {
    project: "Héphaïstos",
    description:
      "Interface de configuration et de génération des vidéos par Orphée. Paramétrage du contenu, prévisualisation et déclenchement du pipeline de rendu",
    stack: [
      "React19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Shadcn/UI",
      "Qrcode.React",
    ],
    links: [
      { label: "voir le site", link: "https://vexia.studio/" },
      { label: "voir le code", link: "https://github.com/anthony-rgs/hephaistos" },
    ],
  },
];

const extension = [
  {
    name: "Ambrosia",
    description:
      "Extension Chrome qui capture et transmet les cookies YouTube à Orphée via Hephaïstos.",
    stack: ["JS", "Manifest V3"],
    links: [
      { label: "voir l'extension", link: "https://chromewebstore.google.com/detail/ambrosia/jpabbbaemgkidilifjlfdnpniphihgle?authuser=0&hl=fr" },
      {
        label: "voir le code",
        link: "https://github.com/anthony-rgs/ambrosia",
      },
    ],
  },
];

const anim = (visible, delay = 0) => ({
  opacity: visible ? undefined : 0,
  transform: visible ? undefined : "translateY(18px)",
  animation: visible
    ? `slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both`
    : undefined,
});

function ServiceItem({ name, description, links, stack }) {
  return (
    <li className="border-b border-(--border) pb-3.5 grid gap-2">
      <div className={listItem}>
        <div className={itemLeft}>
          <span className={itemCompany}>{name}</span>
          <span className={itemRole}>{description}</span>
          <div className="flex flex-wrap gap-2">
            {stack.map((el) => (
              <span
                key={el}
                className="text-[9px] h-5.75 flex items-center tracking-[0.08em] uppercase text-(--muted) border border-(--border) px-2.5 py-1 rounded-full"
              >
                {el}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 min-w-fit">
          {links
            .filter((l) => l.link)
            .map(({ label, link }) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noopener"
                className="relative text-[12px] text-(--muted) after:absolute after:bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-(--fg) after:transition-[width] after:duration-300 hover:after:w-full hover:text-(--fg)"
              >
                {label}
              </a>
            ))}
        </div>
      </div>
    </li>
  );
}

export default function BackendSection() {
  const stickyRef = useRef(null);
  const titleRef = useRef(null);
  const [stickyHeight, setStickyHeight] = useState(0);
  const [titleHeight, setTitleHeight] = useState(0);
  const [mobile, setMobile] = useState(() => window.innerWidth <= 900);

  const { ref: ref1, visible: v1 } = useReveal(140);
  const { ref: ref2, visible: v2 } = useReveal(140);
  const { ref: ref3, visible: v3 } = useReveal(140);
  const { ref: ref4, visible: v4 } = useReveal(140);
  const { ref: refCTA, visible: vCTA } = useReveal(140);
  const { ref: refDocker, visible: vDocker } = useReveal(140);
  const { ref: refInterfaces, visible: vInterfaces } = useReveal(140);
  const { ref: refExtension, visible: vExtension } = useReveal(140);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (stickyRef.current) setStickyHeight(stickyRef.current.offsetHeight);
      if (titleRef.current) setTitleHeight(titleRef.current.offsetHeight);
      setMobile(window.innerWidth <= 900);
    });
    if (stickyRef.current) ro.observe(stickyRef.current);
    if (titleRef.current) ro.observe(titleRef.current);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, []);

  const rightColMarginTop =
    !mobile && stickyHeight > 0 ? -(stickyHeight - titleHeight - 80) : 0;

  return (
    <section
      className="pb-30 px-11 max-[900px]:pb-16 max-[900px]:px-7.5"
      id="architecture"
    >
      <div
        ref={stickyRef}
        className="z-20"
        style={{
          position: mobile ? "static" : "sticky",
          top: 0,
          pointerEvents: "none",
        }}
      >
        <div
          ref={titleRef}
          className="pt-30 max-[900px]:pt-16 bg-(--bg)"
        >
          <SectionTitle
            eyebrow="système"
            title="Architecture"
            className="mb-0"
          />
        </div>

        <div
          className={
            mobile ? "mt-10" : "grid grid-cols-[1.1fr_0.9fr] gap-x-20 mt-20"
          }
        >
          <div
            className="flex flex-col gap-6"
            style={{ pointerEvents: "auto" }}
          >
            <p
              ref={ref1}
              className={bioParagraph}
              style={{ ...bioParagraphStyle, ...anim(v1) }}
            >
              <strong>Olympe est un système Docker modulaire</strong>, conçu
              pour automatiser la collecte et l'exploitation de données
              musicales à grande échelle.
            </p>
            <p
              ref={ref2}
              className={bioParagraph}
              style={{ ...bioParagraphStyle, ...anim(v2) }}
            >
              <strong>Artemis scrape chaque nuit</strong> les morceaux dépassant
              1 milliard de streams sur Spotify. Les données sont structurées,
              ingérées en base, et exposées via une API.
            </p>
            <p
              ref={ref3}
              className={bioParagraph}
              style={{ ...bioParagraphStyle, ...anim(v3) }}
            >
              <strong>Elysium les met en scène</strong> dans une interface web
              inspirée de Spotify — classements, statistiques, exploration.
            </p>
            <p
              ref={ref4}
              className={bioParagraph}
              style={{ ...bioParagraphStyle, ...anim(v4) }}
            >
              <strong>Orphée génère automatiquement</strong> des vidéos courtes
              au format TikTok à partir de l'interface Héphaistos. Ambrosia, une
              extension Chrome, maintient les cookies YouTube frais pour que le
              pipeline ne soit jamais bloqué.
            </p>
            <a
              ref={refCTA}
              href="https://github.com/anthony-rgs/olympe"
              target="_blank"
              rel="noopener"
              className="group inline-flex h-7.25 items-center gap-1.75 w-fit border border-(--border) rounded-full px-3.75 py-1.75 text-[11px] tracking-[0.08em] uppercase text-(--muted) no-underline whitespace-nowrap transition-all duration-300 hover:bg-(--fg) hover:text-(--bg) hover:border-(--fg)"
              style={anim(vCTA)}
            >
              Voir le code de Olympe
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M2 12L12 2M12 2H4M12 2V10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className={mobile ? "" : "grid grid-cols-[1.1fr_0.9fr] gap-x-20"}
        style={{
          marginTop: mobile ? 40 : rightColMarginTop,
          pointerEvents: "none",
        }}
      >
        <div
          className={`${mobile ? "" : "col-start-2"} flex flex-col gap-10`}
          style={{ pointerEvents: "auto" }}
        >
          <div
            ref={refDocker}
            style={anim(vDocker)}
          >
            <h3 className={detailHeading}>Docker</h3>
            <ul>
              {docker.map((item) => (
                <ServiceItem
                  key={item.service}
                  name={item.service}
                  description={item.description}
                  links={item.links}
                  stack={item.stack}
                />
              ))}
            </ul>
          </div>

          <div
            ref={refInterfaces}
            style={anim(vInterfaces)}
          >
            <h3 className={detailHeading}>Interfaces</h3>
            <ul>
              {interfaces.map((item) => (
                <ServiceItem
                  key={item.project}
                  name={item.project}
                  description={item.description}
                  links={item.links}
                  stack={item.stack}
                />
              ))}
            </ul>
          </div>

          <div
            ref={refExtension}
            style={anim(vExtension)}
          >
            <h3 className={detailHeading}>Extension</h3>
            <ul>
              {extension.map((item) => (
                <ServiceItem
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  links={item.links}
                  stack={item.stack}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
