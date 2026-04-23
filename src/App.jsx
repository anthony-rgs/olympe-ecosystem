import { useState, useEffect } from "react";
import { HeroSection, Navbar, ScrollingSection } from "@/components";
import "./index.css";
import { BackendSection, FooterSection, FrontendSection } from "./components";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme === "light" ? "light" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <main>
      <Navbar
        theme={theme}
        onToggle={toggle}
      />
      <HeroSection />
      <ScrollingSection />
      <BackendSection />
      <FrontendSection />
      <FooterSection />
    </main>
  );
}
