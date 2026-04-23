export const ecosystem = {
  name: "Olympe",
  tagline: "L'écosystème",
  description:
    "Neuf services Docker, tous nommés d'après les dieux. Du scheduler jusqu'à l'API, chaque maillon a un rôle précis dans la chaîne.",
  components: [
    {
      name: "Hadès",
      role: "Serveur",
      tech: ["OVH VPS", "Docker Compose"],
      desc: "Héberge les neuf conteneurs, les volumes persistants et le réseau interne",
    },
    {
      name: "Sisyphe",
      role: "Scheduler",
      tech: ["Cron", "Docker"],
      desc: "Lance le cycle de collecte chaque nuit à heure fixe",
    },
    {
      name: "Héraclès",
      role: "Runner",
      tech: ["Python", "Shell"],
      desc: "Reçoit le signal de Sisyphe et exécute les scripts lourds",
    },
    {
      name: "Artémis",
      role: "Scraper",
      tech: ["Python", "Playwright", "Chromium"],
      desc: "Collecte tracks et métadonnées sur Spotify, Apple Music ou Deezer",
    },
    {
      name: "Owl",
      role: "Ingestion",
      tech: ["Python", "psycopg2"],
      desc: "Parse les JSON bruts et les insère dans Athéna",
    },
    {
      name: "Athéna",
      role: "Base de données",
      tech: ["PostgreSQL 16"],
      desc: "Stocke charts, métadonnées artistes et logs",
    },
    {
      name: "Hermès",
      role: "API REST",
      tech: ["Python", "FastAPI"],
      desc: "Sert les données à Elysium et Héphaïstos via REST",
    },
    {
      name: "Caddy",
      role: "Reverse Proxy",
      tech: ["Caddy", "TLS auto"],
      desc: "Gère le HTTPS et les certificats automatiquement",
    },
    {
      name: "Orphée",
      role: "Vidéo",
      tech: ["En développement"],
      desc: "Génère les vidéos et transmet les résultats à Héphaïstos",
    },
  ],
  stack: ["FastAPI", "PostgreSQL 16", "Docker Compose", "Cron", "OVH VPS"],
  photo: "/src/assets/olympe.jpg",
  photoAlt: "Nike de Samothrace, marbre héllénistique, Musée du Louvre, Paris",
};

export const repos = [
  {
    id: "artemis",
    name: "Artémis",
    deity: "Déesse de la chasse",
    role: "Scraper · Multi-plateforme",
    description:
      "Navigue les pages Spotify, Apple Music ou Deezer avec Playwright et Chromium. Une URL de playlist ou d'album suffit pour lancer la collecte.",
    stack: ["Python", "Playwright", "Chromium"],
    badge: "Dépôt séparé",
    badgeType: "repo",
    link: null,
    photo: "/src/assets/artemis.jpg",
    photoAlt: "Diane de Versailles, marbre, Musée du Louvre",
  },
  {
    id: "elysium",
    name: "Elysium",
    deity: "Séjour des âmes bienheureuses",
    role: "Front Data · React",
    description:
      "Explore les charts collectés par Artémis. State géré avec Redux Toolkit, requêtes via Axios.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Redux Toolkit",
      "Axios",
    ],
    badge: "Netlify",
    badgeType: "netlify",
    link: {
      url: "https://spotify-billions.club",
      label: "spotify-billions.club",
    },
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Venus_de_Milo_Louvre_Ma399_n4.jpg",
    photoAlt: "Vénus de Milo, marbre, Musée du Louvre",
  },
  {
    id: "hephaïstos",
    name: "Héphaïstos",
    deity: "Forgeron des dieux",
    role: "Front Vidéo · React",
    description:
      "Tableau de bord pour configurer et déclencher les générations via Orphée. Affiche les résultats en temps réel.",
    stack: ["React", "TypeScript", "Vite"],
    badge: "Netlify",
    badgeType: "netlify",
    link: null,
    photo: "/src/assets/hephaistos.jpg",
    photoAlt: "Apollon du Belvédère, marbre, Musées du Vatican",
  },
  {
    id: "ambrosia",
    name: "Ambrosia",
    deity: "La nourriture des dieux",
    role: "Extension Chrome · Auth",
    description:
      "Capture les cookies d'une session YouTube authentifiée et les transmet à Orphée pour accéder aux vidéos.",
    stack: ["JavaScript", "Chrome API", "Manifest V3"],
    badge: "Chrome Store",
    badgeType: "chrome",
    link: null,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Zeus_Otricoli_Pio-Clementino_Inv257.jpg",
    photoAlt: "Buste de Zeus Otricoli, marbre, Musées du Vatican",
  },
];
