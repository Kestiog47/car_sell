import { brands } from "@/lib/data";

export default function BrandStrip() {
  return (
    <div className="brand-strip">
      <div className="brand-track">
        {brands.map((brand, i) => (
          <span key={`a-${i}`} className="brand-item">
            {brand}
          </span>
        ))}
        {brands.map((brand, i) => (
          <span key={`b-${i}`} className="brand-item">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
