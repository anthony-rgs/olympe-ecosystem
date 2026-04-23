import Eyebrow from "./Eyebrow";
import useReveal from "@/hooks/useReveal";

export default function SectionTitle({ eyebrow, title, className = "mb-16" }) {
  const { ref, visible } = useReveal(140);

  return (
    <div
      ref={ref}
      className={`pb-5 border-b border-(--border) grid gap-2 ${className}`}
    >
      <Eyebrow label={eyebrow} />
      <h2
        className="font-syne font-extrabold tracking-[-0.045em] leading-[0.88]"
        style={{ fontSize: "clamp(28px, 8vw, 110px)" }}
      >
        <span className="overflow-hidden block">
          <span
            style={{
              display: "block",
              transform: visible ? undefined : "translateY(110%)",
              animation: visible
                ? "slideUp 1.6s cubic-bezier(0.16, 1, 0.3, 1) both"
                : undefined,
            }}
          >
            {title}
          </span>
        </span>
      </h2>
    </div>
  );
}
