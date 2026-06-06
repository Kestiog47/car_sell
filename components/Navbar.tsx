"use client";

import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { href: "#home", label: "首页" },
  { href: "#inventory", label: "臻选车源" },
  { href: "#services", label: "尊享服务" },
  { href: "#about", label: "关于我们" },
  { href: "#contact", label: "预约品鉴" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      closeMobile();
    },
    [closeMobile]
  );

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          P<span>RESTIGE</span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            style={
              mobileOpen
                ? {
                    transform: "rotate(45deg) translate(5px, 5px)",
                  }
                : undefined
            }
          />
          <span style={mobileOpen ? { opacity: 0 } : undefined} />
          <span
            style={
              mobileOpen
                ? {
                    transform: "rotate(-45deg) translate(5px, -5px)",
                  }
                : undefined
            }
          />
        </div>
      </nav>

      <div className={`mobile-nav${mobileOpen ? " active" : ""}`}>
        <ul className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
