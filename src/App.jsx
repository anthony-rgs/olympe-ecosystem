import { useState, useEffect } from "react";
import { HeroSection, Navbar, ScrollingSection } from "@/components";
import "./index.css";
import { BackendSection, FooterSection, FrontendSection } from "./components";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "dark",
  );
  const [heroReady, setHeroReady] = useState(false);
  const [footerReady, setFooterReady] = useState(false);
  const ready = heroReady && footerReady;

  useEffect(() => {
    document.documentElement.dataset.theme = theme === "light" ? "light" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <main
      data-loading={ready ? undefined : "true"}
      style={{
        opacity: ready ? 1 : 0,
        pointerEvents: ready ? "auto" : "none",
        transition: "opacity 0.4s ease",
      }}
    >
      <Navbar
        theme={theme}
        onToggle={toggle}
      />
      <HeroSection onReady={() => setHeroReady(true)} />
      <ScrollingSection />
      <BackendSection />
      <FrontendSection />
      <FooterSection onReady={() => setFooterReady(true)} />
    </main>
  );
}
