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
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const maxParticles = 100; 

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
      const maxLife = Math.random() * 20 + 30; 

      return {
        x,
        y,
        size,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        life: maxLife,
        maxLife,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dx = mouseRef.current.x - prevMouseRef.current.x;
      const dy = mouseRef.current.y - prevMouseRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) * 0.05; 

      // Limit particle creation rate
      if (speed > 0.3 && particlesRef.current.length < maxParticles) {
        particlesRef.current.push(
          createParticle(mouseRef.current.x, mouseRef.current.y, speed * 0.3)
        );
      }

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life--;

        const lifeRatio = particle.life / particle.maxLife;
        const alpha = Math.min(0.5, lifeRatio); 
        const size = Math.max(particle.size * lifeRatio, 0.1);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(4, 191, 138, ${alpha})`;
        ctx.fill();

        return particle.life > 0;
      });

      prevMouseRef.current = { ...mouseRef.current };
    };


    const animationInterval = setInterval(animate, 1000 / 24); 

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(animationInterval);
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
