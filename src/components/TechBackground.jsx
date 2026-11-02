"use client";

import { useEffect, useRef } from "react";

export default function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;
    let particles = [];
    let width = 0;
    let height = 0;
    let time = 0;

    // Brighter, icier colors to match the screenshot
    const colors = [
      "255, 145, 65", // Neon orange
      "255, 180, 105", // Amber
      "255, 225, 195", // Warm white
      "150, 205, 255", // Icy blue
      "255, 115, 45", // Bright orange
    ];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Increased particle count slightly for a denser network
      particles = Array.from(
        { length: Math.min(120, Math.floor(width / 10)) },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 0.8, // Slightly larger nodes
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
        }),
      );
    };

    const draw = () => {
      time += 0.008;

      // Base light blue background fill for readability
      ctx.fillStyle = "#eef5fd";
      ctx.fillRect(0, 0, width, height);

      // 1. Main central luminous glow (brighter and larger)
      const glow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.85,
      );

      glow.addColorStop(0, "rgba(255, 165, 95, 0.12)");
      glow.addColorStop(0.35, "rgba(255, 205, 165, 0.08)");
      glow.addColorStop(0.7, "rgba(220, 235, 255, 0.05)");
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // 2. Bottom-left icy blue accent glow
      const blueGlow = ctx.createRadialGradient(
        width * 0.15,
        height * 0.85,
        0,
        width * 0.15,
        height * 0.85,
        Math.max(width, height) * 0.7,
      );

      blueGlow.addColorStop(0, "rgba(255, 175, 105, 0.075)");
      blueGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = blueGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Top-right subtle glow
      const topRightGlow = ctx.createRadialGradient(
        width * 0.85,
        height * 0.15,
        0,
        width * 0.85,
        height * 0.15,
        Math.max(width, height) * 0.5,
      );
      topRightGlow.addColorStop(0, "rgba(200, 240, 255, 0.4)");
      topRightGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = topRightGlow;
      ctx.fillRect(0, 0, width, height);

      // 4. Very faint futuristic grid (made lighter to match screenshot)
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"; // White grid lines
      ctx.lineWidth = 0.5;

      const gridSize = 50;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 5. Floating luminous network particles and connecting lines
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.025;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const opacity = 0.6 + Math.sin(p.pulse) * 0.3;

        // Draw Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${p.color}, 1)`;
        ctx.fillStyle = `rgba(${p.color}, ${opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for lines

        // Draw Connections
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Increased distance threshold to 160
          if (distance < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);

            // Stronger line opacity, blending towards transparent
            ctx.strokeStyle = `rgba(235, 155, 105, ${
              0.17 * (1 - distance / 130)
            })`;

            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      // 6. Soft moving light scanner (kept from original, made brighter)
      const scanY = ((time * 25) % (height + 200)) - 100;

      const scan = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);

      scan.addColorStop(0, "rgba(255, 155, 85, 0)");
      scan.addColorStop(0.5, "rgba(255, 165, 95, 0.08)");
      scan.addColorStop(1, "rgba(255, 155, 85, 0)");

      ctx.fillStyle = scan;
      ctx.fillRect(0, scanY - 60, width, 120);

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
