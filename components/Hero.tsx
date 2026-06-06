"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { heroSlidesData } from "@/lib/data";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlidesData.length);
  }, []);

  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(next, 6000);
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

  // Generate particles on mount
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 8 + "s";
      particle.style.animationDuration = 6 + Math.random() * 10 + "s";
      container.appendChild(particle);
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        {heroSlidesData.map((url, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? " active" : ""}`}
            style={{
              backgroundImage: `url('${url}')`,
            }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-slide-dots">
        {heroSlidesData.map((_, i) => (
          <span
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <div className="hero-particles" ref={particlesRef} />

      <div className="hero-content">
        <p className="hero-subtitle">Since 1998 · 全球限量 · 只为极少数</p>
        <h1 className="hero-title">
          驾驭<span>非凡</span>
        </h1>
        <p className="hero-desc">
          PRESTIGE MOTORS
          汇聚全球顶级豪华品牌，为每一位独具品味的您，甄选独一无二的座驾杰作。
        </p>
        <div className="hero-buttons">
          <a href="#inventory" className="btn btn-primary">
            探索臻选车源
          </a>
          <a href="#contact" className="btn btn-outline">
            预约私密品鉴
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
