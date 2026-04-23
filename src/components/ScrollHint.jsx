export default function ScrollHint({ style }) {
  return (
    <div className="absolute top-28 right-11 flex flex-col items-center gap-2.5" style={style}>
      <span className="w-px h-16 bg-(--border) relative overflow-hidden">
        <span
          className="absolute inset-0 bg-(--accent)"
          style={{ animation: "gauge 2.4s ease-in-out infinite" }}
        />
      </span>

      <p
        className="text-[9px] tracking-[0.18em] text-(--muted)"
        style={{ writingMode: "vertical-lr" }}
      >
        SCROLL
      </p>
    </div>
  );
}
