import SectionTitle from "./SectionTitle";
import WebCard from "./WebCard";

const projects = [
  {
    index: "01",
    inProgress: false,
    project: "Élysium",
    title: "Spotify Billions Club",
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
      { label: "voir le code", link: "https://elysium-code.olympe.center" },
      { label: "voir le site", link: "https://elysium.olympe.center" },
    ],
    metrics: [
      { value: "1260", label: "musiques" },
      { value: "770", label: "artistes" },
      { value: "1000", label: "albums" },
    ],
    images: [
      "/images/elysium-preview-home.png",
      "/images/elysium-preview-titles.png",
      "/images/elysium-preview-albums.png",
      "/images/elysium-preview-album.png",
      "/images/elysium-preview-artists.png",
      "/images/elysium-preview-artist.png",
    ],
  },
  {
    index: "02",
    inProgress: true,
    project: "Héphaïstos",
    title: "Studio de création vidéo",
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
      { label: "voir le code", link: "https://hephaistos-code.olympe.center" },
      { label: "voir le site", link: "https://hephaistos.olympe.center" },
    ],
    metrics: [
      { value: "4", label: "templates" },
      { value: "5", label: "mins" },
      { value: "100%", label: "personnalisable" },
      { value: "∞", label: "clips" },
    ],
    images: [
      "/images/hephaistos-preview-home.png",
      "/images/hephaistos-preview-configuration.png",
      "/images/hephaistos-preview-youtube.png",
      "/images/hephaistos-preview-download.png",
    ],
  },
];

export default function FrontendSection() {
  return (
    <section
      className="py-30 px-11 max-[900px]:py-16 max-[900px]:px-7.5"
      id="interfaces"
    >
      <SectionTitle
        eyebrow="Frontend"
        title="Interfaces"
      />
      <div className="flex flex-col gap-4 mt-16">
        {projects.map((project) => (
          <WebCard
            key={project.index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
