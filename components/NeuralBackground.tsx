"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 65;
    const connectionDist = 120;

    const colors = [
      "rgba(34, 229, 154, ", // Green
      "rgba(102, 224, 255, ", // Cyan
      "rgba(122, 92, 255, ",  // Purple
    ];

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < maxParticles; i++) {
        // Random color index biased towards green & cyan
        const colorIdx = Math.random() > 0.8 ? 2 : Math.random() > 0.5 ? 1 : 0;
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          // Extremely slow velocity for ambient feel
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 2 + 1,
          color: colors[colorIdx],
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      // Deep black background with 0.1 opacity for slight trails (looks smoother)
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw connections first
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Gradient connection line between the two node colors
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, p1.color + alpha + ")");
            grad.addColorStop(1, p2.color + alpha + ")");
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color.includes("34,") ? "#22E59A" : p.color.includes("102,") ? "#66E0FF" : "#7A5CFF";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for line performance
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      {/* Deep ambient glow overlays */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-revy-purple/5 blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[30%] right-[10%] w-[600px] h-[600px] rounded-full bg-revy-cyan/5 blur-[180px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-[60%] left-[40%] w-[400px] h-[400px] rounded-full bg-revy-green/3 blur-[130px] mix-blend-screen pointer-events-none" />
    </div>
  );
}
