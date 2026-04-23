import { useEffect, useRef, useState } from "react";

export default function useReveal(offsetPx = 120) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: `0px 0px -${offsetPx}px 0px` }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [offsetPx]);

  return { ref, visible };
}
