import React, { useEffect, useRef } from 'react';

export const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    // Estado para o céu noturno e constelação do topo
    let stars: {x: number, y: number, radius: number, twinkleSpeed: number, alphaOffset: number}[] = [];
    let constellationNodes: {x: number, y: number, vx: number, vy: number}[] = [];

    const initSky = () => {
      stars = [];
      // Estrelas apenas da metade (0.5) para a direita (1.0)
      for (let i = 0; i < 120; i++) {
        stars.push({
          x: canvas.width * 0.5 + Math.random() * (canvas.width * 0.5),
          y: Math.random() * (canvas.height * 0.8), 
          radius: Math.random() * 1.2,
          twinkleSpeed: Math.random() * 10 + 5,
          alphaOffset: Math.random() * Math.PI * 2
        });
      }
      
      constellationNodes = [];
      // Constelação apenas na metade direita superior
      for (let i = 0; i < 18; i++) {
        constellationNodes.push({
          x: canvas.width * 0.6 + Math.random() * (canvas.width * 0.4),
          y: Math.random() * (canvas.height * 0.7), 
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      const parent = canvas.parentElement;
      // Preenche toda a altura da seção Hero
      canvas.height = parent ? parent.clientHeight : window.innerHeight; 
      initSky();
    };

    window.addEventListener('resize', resize);
    resize();

    // Função que calcula o Alpha baseado na posição X (Fade in da esquerda pra direita)
    const getFadeAlpha = (x: number) => {
      const center = canvas.width * 0.5;
      if (x < center) return 0;
      // Gradiente suave que atinge 100% nos últimos 20% da direita
      return Math.min(1, Math.max(0, (x - center) / (canvas.width * 0.3)));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      // 1. Desenhar o Céu Noturno (Estrelas cintilantes com Fade In X)
      stars.forEach(star => {
        const fade = getFadeAlpha(star.x);
        if (fade > 0) {
          const alpha = (Math.sin(time * star.twinkleSpeed + star.alphaOffset) * 0.4 + 0.4) * fade;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }
      });

      // 2. Desenhar a mini-constelação (top right com Fade In X)
      constellationNodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bouncing constraints
        if (node.x < canvas.width * 0.5 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height * 0.8) node.vy *= -1;

        const fade = getFadeAlpha(node.x);
        if (fade > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 92, 246, ${0.7 * fade})`; 
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(139, 92, 246, ${0.5 * fade})`;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }

        for (let j = i + 1; j < constellationNodes.length; j++) {
          const n2 = constellationNodes[j];
          const dist = Math.hypot(node.x - n2.x, node.y - n2.y);
          if (dist < 120) {
            const midX = (node.x + n2.x) / 2;
            const lineFade = getFadeAlpha(midX);
            if (lineFade > 0) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist/120) * 0.3 * lineFade})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      });

      // 3. Desenhar o Mar (Ondas Matemáticas presas sempre ao chão)
      const waves = [
        { amplitude: 40, frequency: 0.005, speed: 1.5, color: 'rgba(16, 185, 129, 0.15)' }, // Emerald
        { amplitude: 60, frequency: 0.003, speed: 1, color: 'rgba(139, 92, 246, 0.1)' },   // Purple
        { amplitude: 30, frequency: 0.007, speed: 2, color: 'rgba(56, 189, 248, 0.15)' }    // Sky
      ];

      waves.forEach((wave) => {
        ctx.beginPath();
        // Start from bottom left
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
          // O mar preenche os últimos 150px da base da tela (independentemente da altura do canvas)
          ctx.lineTo(x, canvas.height - 150 + y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-[50%] -translate-x-1/2 w-[100vw] h-full pointer-events-none z-0 opacity-70"
    />
  );
};
