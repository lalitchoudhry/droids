export default function GeometricBg() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Left geometric panel */}
      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-r from-gray-50/80 to-transparent transform skew-x-[12deg] origin-top-right backdrop-blur-sm" />
      </div>

      {/* Right geometric panel */}
      <div className="absolute right-0 top-0 h-full bg-gradient-to-l from-gray-100 to-gray-50">
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-l from-gray-50/80 to-transparent transform -skew-x-[12deg] origin-top-left backdrop-blur-sm" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-l border-black" />
          ))}
        </div>
      </div>
    </div>
  );
}
