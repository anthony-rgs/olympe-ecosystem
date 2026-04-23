// state = "default" | "available" | "progress"

const stateStyles = {
  default: {
    border: "1px solid var(--border)",
    color: "var(--muted)",
  },
  available: {
    border: "1px solid var(--pill-available-border)",
    color: "var(--pill-available-color)",
  },
  progress: {
    border: "1px solid rgba(245, 158, 11, 0.3)",
    background: "rgba(245, 158, 11, 0.12)",
    color: "#F59E0B",
  },
};

const dotColor = {
  available: "bg-[var(--pill-available-color)]",
  progress: "bg-amber-400",
};

export default function Pill({ state = "default", label, style }) {
  const styles = { ...(stateStyles[state] ?? stateStyles.default), ...style };

  return (
    <div
      style={styles}
      className="inline-flex items-center gap-1.75 text-[11px] leading-3.25 tracking-[0.09em] uppercase px-3.5 py-1.75 rounded-full border w-fit min-w-fit"
    >
      {state !== "default" && (
        <span
          className={`size-1.5 rounded-full animate-pulse ${dotColor[state]}`}
        />
      )}
      {label}
    </div>
  );
}
