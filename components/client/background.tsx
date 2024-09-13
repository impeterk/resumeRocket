"use client";
import { useState, useEffect } from "react";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
      }}
    />
  );
}
