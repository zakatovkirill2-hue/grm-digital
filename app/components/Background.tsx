export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Сетка */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Зеленое свечение */}
      <div
        className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.08) 35%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
