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
      { label: "Page d'accueil", image: "/images/elysium-preview-home.png" },
      {
        label: "Toutes les musiques",
        image: "/images/elysium-preview-titles.png",
      },
      {
        label: "Tous les artistes",
        image: "/images/elysium-preview-artists.png",
      },
      {
        label: "Un artiste sélectionné",
        image: "/images/elysium-preview-artist.png",
      },
      { label: "Tous les albums", image: "/images/elysium-preview-albums.png" },
      {
        label: "Un album sélectionné",
        image: "/images/elysium-preview-album.png",
      },
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
      {
        label: "Section d'accueil",
        image: "/images/hephaistos-preview-home.png",
      },
      {
        label: "Sélectionner un template et un mode",
        image: "/images/hephaistos-preview-templates.png",
      },
      {
        label: "Configuration",
        image: "/images/hephaistos-preview-configuration.png",
      },
      {
        label: "Sélectionner une source vidéo",
        image: "/images/hephaistos-preview-youtube.png",
      },
      {
        label: "Importer un json",
        image: "/images/hephaistos-preview-json.png",
      },
      {
        label: "Sélectionner des musiques à plus de 1 milliard d'écoute",
        image: "/images/hephaistos-preview-billions-club.png",
      },
      {
        label: "Suivi de la création de la vidéo",
        image: "/images/hephaistos-preview-download.png",
      },
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
