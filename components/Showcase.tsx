"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { showcaseSlidesData } from "@/lib/data";
import RevealWrapper from "@/components/RevealWrapper";

export default function Showcase() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % showcaseSlidesData.length);
  }, []);

  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(next, 5000);
  }, [next]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  return (
    <section className="showcase" id="about">
      <div className="showcase-split">
        <div
          className="showcase-image"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {showcaseSlidesData.map((url, i) => (
            <div
              key={i}
              className={`showcase-slide${i === current ? " active" : ""}`}
              style={{
                backgroundImage: `url('${url}')`,
              }}
            />
          ))}
          <div className="showcase-slide-overlay" />
          <div className="showcase-dots">
            {showcaseSlidesData.map((_, i) => (
              <span
                key={i}
                className={`showcase-dot${i === current ? " active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
        <RevealWrapper>
          <div className="showcase-content">
            <p className="showcase-label">Our Heritage</p>
            <h2 className="showcase-title">传承与超越</h2>
            <p className="showcase-text">
              自1998年创立以来，PRESTIGE MOTORS
              始终致力于为亚洲顶级客户提供无与伦比的豪华汽车体验。我们不仅仅是汽车经销商，更是品味与生活方式的策展人。
              <br />
              <br />
              我们的每一台座驾都经过超过300项严苛检测，并由资深工匠进行手工级整备，确保交付到您手中的，是完美无瑕的艺术品。
            </p>
            <div className="showcase-stats">
              <div>
                <div className="stat-value">25+</div>
                <div className="stat-label">年行业传承</div>
              </div>
              <div>
                <div className="stat-value">500+</div>
                <div className="stat-label">全球稀有座驾</div>
              </div>
              <div>
                <div className="stat-value">98%</div>
                <div className="stat-label">客户满意度</div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
