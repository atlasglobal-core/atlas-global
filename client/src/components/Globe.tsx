import { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    let animationId: number;
    let rotation = 0;

    const drawGlobe = () => {
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      // Clear canvas
      ctx.fillStyle = 'transparent';
      ctx.clearRect(0, 0, width, height);

      // Draw glow effect
      const glowGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.3);
      glowGradient.addColorStop(0, 'rgba(157, 78, 221, 0.2)');
      glowGradient.addColorStop(0.5, 'rgba(58, 134, 255, 0.1)');
      glowGradient.addColorStop(1, 'rgba(58, 134, 255, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw globe sphere
      const sphereGradient = ctx.createRadialGradient(centerX - radius * 0.3, centerY - radius * 0.3, 0, centerX, centerY, radius);
      sphereGradient.addColorStop(0, 'rgba(100, 200, 255, 0.4)');
      sphereGradient.addColorStop(0.5, 'rgba(58, 134, 255, 0.3)');
      sphereGradient.addColorStop(1, 'rgba(30, 80, 200, 0.2)');
      ctx.fillStyle = sphereGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw globe outline
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw continents (simplified)
      ctx.fillStyle = 'rgba(100, 200, 255, 0.3)';
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.6)';
      ctx.lineWidth = 1.5;

      // North America
      ctx.beginPath();
      ctx.arc(centerX - radius * 0.4, centerY - radius * 0.2, radius * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // South America
      ctx.beginPath();
      ctx.arc(centerX - radius * 0.35, centerY + radius * 0.25, radius * 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Europe/Africa
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.1, centerY - radius * 0.1, radius * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Asia
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.35, centerY - radius * 0.15, radius * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Australia
      ctx.beginPath();
      ctx.arc(centerX + radius * 0.4, centerY + radius * 0.3, radius * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Draw connection points
      const points = [
        { x: centerX - radius * 0.4, y: centerY - radius * 0.2 }, // North America
        { x: centerX + radius * 0.1, y: centerY - radius * 0.1 }, // Europe
        { x: centerX + radius * 0.35, y: centerY - radius * 0.15 }, // Asia
        { x: centerX + radius * 0.4, y: centerY + radius * 0.3 }, // Australia
      ];

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(58, 134, 255, 0.3)';
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // Draw pulsing nodes
      ctx.fillStyle = 'rgba(157, 78, 221, 0.8)';
      points.forEach((point, index) => {
        const pulse = Math.sin(rotation + index) * 2 + 4;
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulse, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw outer ring
      ctx.strokeStyle = 'rgba(58, 134, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2);
      ctx.stroke();

      rotation += 0.01;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    const handleResize = () => {
      const newRect = canvas.getBoundingClientRect();
      canvas.width = newRect.width * dpr;
      canvas.height = newRect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
