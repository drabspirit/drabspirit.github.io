'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  createdAt: number;
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const createParticle = (x: number, y: number, speed: number) => {
      const angle = Math.random() * Math.PI * 2;
      const size = Math.random() * 3 + 2;
      const maxLife = Math.random() * 40 + 80;

      return {
        x,
        y,
        size,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        life: maxLife,
        maxLife,
        createdAt: Date.now(),
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      const dx = mouseRef.current.x - prevMouseRef.current.x;
      const dy = mouseRef.current.y - prevMouseRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) * 0.1;

      if (speed > 0.1) {
        const particlesToAdd = Math.min(Math.floor(speed), 3);
        for (let i = 0; i < particlesToAdd; i++) {
          particlesRef.current.push(
            createParticle(mouseRef.current.x, mouseRef.current.y, speed * 0.2)
          );
        }
      }

      particlesRef.current = particlesRef.current.filter((particle) => {
        const age = now - particle.createdAt;
        if (age > 10000) return false;

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life--;

        const lifeRatio = particle.life / particle.maxLife;
        const ageRatio = Math.max(0, 1 - age / 10000);
        const alpha = lifeRatio * 0.6 * ageRatio;
        
        const size = Math.max(particle.size * lifeRatio, 0.1);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(4, 191, 138, ${alpha})`;
        ctx.fill();

        if (Math.random() < 0.1) {
          const sparkSize = Math.max(size * 0.5, 0.1);
          ctx.beginPath();
          ctx.arc(
            particle.x + (Math.random() - 0.5) * 10,
            particle.y + (Math.random() - 0.5) * 10,
            sparkSize,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(4, 191, 138, ${alpha * 0.5})`;
          ctx.fill();
        }

        return particle.life > 0;
      });

      prevMouseRef.current = { ...mouseRef.current };
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}