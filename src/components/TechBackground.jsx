
"use client";

import { useEffect, useRef } from "react";

export default function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationId;
    let nodes = [];
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        115,
        Math.max(45, Math.floor((width * height) / 11500))
      );

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
        warm: Math.random() > 0.91,
      }));
    };

    const drawBackground = () => {
      // Very subtle white-blue base
      const base = ctx.createLinearGradient(0, 0, width, height);
      base.addColorStop(0, "rgba(239, 247, 255, 0.24)");
      base.addColorStop(0.5, "rgba(255, 255, 255, 0.04)");
      base.addColorStop(1, "rgba(224, 242, 254, 0.22)");

      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      // Soft blue ambient glow
      const glow1 = ctx.createRadialGradient(
        width * 0.78, height * 0.22, 0,
        width * 0.78, height * 0.22, width * 0.42
      );
      glow1.addColorStop(0, "rgba(56, 189, 248, 0.10)");
      glow1.addColorStop(1, "rgba(56, 189, 248, 0)");

      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(
        width * 0.12, height * 0.78, 0,
        width * 0.12, height * 0.78, width * 0.38
      );
      glow2.addColorStop(0, "rgba(59, 130, 246, 0.08)");
      glow2.addColorStop(1, "rgba(59, 130, 246, 0)");

      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      // Restrained warm accent
      const warmGlow = ctx.createRadialGradient(
        width * 0.88, height * 0.72, 0,
        width * 0.88, height * 0.72, width * 0.2
      );
      warmGlow.addColorStop(0, "rgba(251, 146, 60, 0.055)");
      warmGlow.addColorStop(1, "rgba(251, 146, 60, 0)");

      ctx.fillStyle = warmGlow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGrid = () => {
      const spacing = 48;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(59, 130, 246, 0.045)";
      ctx.lineWidth = 0.6;

      for (let x = 0; x < width; x += spacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y < height; y += spacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.stroke();
    };

    const drawConnections = () => {
      const maxDistance = Math.min(175, width * 0.14);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.23;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37, 143, 235, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Moving data packet along the connection
            const progress = (frame * 0.003 + i * 0.137 + j * 0.071) % 1;
            const px = a.x + dx * progress;
            const py = a.y + dy * progress;

            ctx.beginPath();
            ctx.arc(px, py, 1.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(34, 211, 238, ${opacity * 2.8})`;
            ctx.shadowBlur = 9;
            ctx.shadowColor = "#38bdf8";
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }
    };

    const drawNodes = () => {
      nodes.forEach((node) => {
        const pulse = (Math.sin(frame * 0.035 + node.phase) + 1) / 2;
        const color = node.warm ? "251, 146, 60" : "14, 165, 233";

        // Outer pulse ring
        ctx.beginPath();
        ctx.arc(
          node.x,
          node.y,
          node.radius + pulse * 5,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(${color}, ${0.07 + pulse * 0.09})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Glowing node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${0.35 + pulse * 0.5})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = node.warm ? "#fb923c" : "#38bdf8";
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const drawScanner = () => {
      const y = (frame * 0.35) % (height + 120) - 60;
      const gradient = ctx.createLinearGradient(0, y - 35, 0, y + 35);

      gradient.addColorStop(0, "rgba(56, 189, 248, 0)");
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.035)");
      gradient.addColorStop(1, "rgba(56, 189, 248, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, y - 35, width, 70);
    };

    const animate = () => {
      frame += 1;

      ctx.clearRect(0, 0, width, height);

      drawBackground();
      drawGrid();

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -10 || node.x > width + 10) node.vx *= -1;
        if (node.y < -10 || node.y > height + 10) node.vy *= -1;
      });

      drawConnections();
      drawNodes();
      drawScanner();

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

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
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
