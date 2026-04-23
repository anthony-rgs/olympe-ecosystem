import { useEffect, useRef, useState } from "react";

export default function useFitText(text, font = "800 100px Syne", extraPx = 0) {
  const containerRef = useRef(null);
  const [fontSize, setFontSize] = useState(null);

  useEffect(() => {
    const probe = document.createElement("span");
    probe.style.cssText =
      "position:fixed;top:-9999px;left:-9999px;visibility:hidden;white-space:nowrap;pointer-events:none;font:" +
      font;
    probe.textContent = text;
    document.body.appendChild(probe);

    const calculate = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = probe.offsetWidth + extraPx;
      if (textWidth > 0) setFontSize((containerWidth / textWidth) * 100);
    };

    const observer = new ResizeObserver(calculate);
    if (containerRef.current) observer.observe(containerRef.current);

    document.fonts.ready.then(calculate);

    return () => {
      observer.disconnect();
      document.body.removeChild(probe);
    };
  }, [text, font]);

  return { containerRef, fontSize };
}
