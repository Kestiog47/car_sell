"use client";

import { useState, useMemo } from "react";
import { cars, filterCategories, getCarImage } from "@/lib/data";
import RevealWrapper from "@/components/RevealWrapper";

export default function Inventory() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return cars;
    return cars.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="inventory" id="inventory">
      <RevealWrapper>
        <div className="section-header">
          <p className="section-label">Curated Collection</p>
          <h2 className="section-title">臻选车源</h2>
          <div className="section-line" />
          <p className="section-desc">
            每一台座驾皆经我们严格甄选，确保品质、历史与稀缺性的完美统一。
          </p>
        </div>
      </RevealWrapper>

      <RevealWrapper>
        <div className="filter-tabs">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-tab${activeFilter === cat.key ? " active" : ""}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </RevealWrapper>

      <div className="car-grid" key={activeFilter}>
        {filtered.map((car) => (
          <RevealWrapper key={car.id}>
            <div className="car-card">
              <div className="car-card-image">
                <div
                  className="img-placeholder"
                  style={{
                    backgroundImage: `url('${getCarImage(car.brand, car.name)}?w=600&q=80')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <span className="car-card-badge">{car.badge}</span>
              </div>
              <div className="car-card-body">
                <p className="car-card-brand">{car.brand}</p>
                <h3 className="car-card-name">{car.name}</h3>
                <div className="car-card-specs">
                  <span className="car-spec">
                    <span className="car-spec-icon">📅</span> {car.year}
                  </span>
                  <span className="car-spec">
                    <span className="car-spec-icon">🛞</span> {car.mileage}
                  </span>
                  <span className="car-spec">
                    <span className="car-spec-icon">⚙️</span> {car.engine}
                  </span>
                </div>
                <div className="car-card-footer">
                  <span className="car-price">
                    {car.price} <small>CNY</small>
                  </span>
                  <a href="#contact" className="btn btn-ghost">
                    咨询详情
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
