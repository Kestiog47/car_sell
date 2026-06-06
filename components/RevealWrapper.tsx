"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

export default function RevealWrapper({
  children,
  threshold = 0.15,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " visible" : ""}${className ? " " + className : ""}`}
    >
      {children}
    </div>
  );
}
