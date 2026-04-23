export default function Eyebrow({ label, style }) {
  return (
    <div className="uppercase w-fit text-[11px] tracking-[0.14em] text-(--muted)" style={style}>
      {label}
    </div>
  );
}
