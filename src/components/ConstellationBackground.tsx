import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface MilkyWayStar {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export const ConstellationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let milkyWayStars: MilkyWayStar[] = [];
    
    // Configurações Globais
    const particleCount = 60; // Mais partículas
    const connectionDistance = 150; // Conexões mais longas
    
    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = window.innerWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const initParticles = () => {
      particles = [];
      milkyWayStars = [];
      
      // Inicializar Rede Neural/Partículas Distribuídas
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1 // Um pouco maiores e mais visíveis
        });
      }

      // Inicializar a Via Láctea (Cluster diagonal de milhares de poeiras estelares)
      for (let i = 0; i < 600; i++) {
        // Distribuir as estrelas na diagonal principal com algum desvio (blur)
        const progress = Math.random();
        const x = progress * canvas.width;
        // Linha diagonal com uma variação gaussiana aproximada
        const deviation = (Math.random() + Math.random() + Math.random() - 1.5) * 200; 
        const y = progress * canvas.height + deviation - (canvas.height * 0.2);
        
        milkyWayStars.push({
          x,
          y,
          radius: Math.random() * 1.2,
          alpha: Math.random() * 0.4 + 0.1
        });
      }
    };

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });
    
    resize();
    initParticles();

    // Definição estática do Cruzeiro do Sul (Southern Cross) relativa a um ponto
    // Estrelas: 0=Pé (Magalhães), 1=Topo (Rubídea), 2=Braço Esq (Mimosa), 3=Braço Dir (Pálida), 4=Intrometida
    const cruzeiroRelOffsets = [
      { dx: 0, dy: 100, radius: 3, name: "Acrux" },
      { dx: 0, dy: -40, radius: 2.5, name: "Gacrux" },
      { dx: -45, dy: 15, radius: 2.5, name: "Mimosa" },
      { dx: 40, dy: 30, radius: 2, name: "Delta" },
      { dx: 20, dy: 65, radius: 1.5, name: "Epsilon" },
    ];

    let time = 0;

    const draw = () => {
      // Fundo mais translúcido para deixar rastro suave
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // 1. Desenhar Via Láctea (Estática/Cintilante)
      milkyWayStars.forEach((star, i) => {
        // Cintilação usando seno + índice para dessincronizar
        const twinkle = Math.sin(time * 10 + i) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${star.alpha * twinkle})`; // Tom roxo da via láctea
        ctx.fill();
      });

      // 2. Desenhar o Cruzeiro do Sul (Rotacionando super lentamente no topo/direito)
      const cruzeiroCenterX = canvas.width * 0.8;
      const cruzeiroCenterY = canvas.height * 0.2;
      const angle = Math.sin(time) * 0.2; // Leve balanço pendular
      
      const cruzeiroRealPositions: {x: number, y: number}[] = [];

      cruzeiroRelOffsets.forEach((star) => {
        // Aplicar rotação
        const rx = star.dx * Math.cos(angle) - star.dy * Math.sin(angle);
        const ry = star.dx * Math.sin(angle) + star.dy * Math.cos(angle);
        
        const sx = cruzeiroCenterX + rx;
        const sy = cruzeiroCenterY + ry;
        cruzeiroRealPositions.push({x: sx, y: sy});

        // Efeito de brilho intenso nas estrelas do cruzeiro
        ctx.beginPath();
        ctx.arc(sx, sy, star.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // Branca cintilante brilhante
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Conectar a cruz (Linhas imaginárias)
      ctx.beginPath();
      ctx.moveTo(cruzeiroRealPositions[0].x, cruzeiroRealPositions[0].y); // Pé
      ctx.lineTo(cruzeiroRealPositions[1].x, cruzeiroRealPositions[1].y); // Topo
      ctx.moveTo(cruzeiroRealPositions[2].x, cruzeiroRealPositions[2].y); // Esq
      ctx.lineTo(cruzeiroRealPositions[3].x, cruzeiroRealPositions[3].y); // Dir
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Desenhar Partículas Dinâmicas (Engenharia Distribuída)
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Rebater nas bordas
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Partículas bem mais visíveis agora (Verde Esmeralda Forte)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.7)'; 
        ctx.fill();

        // Conectar com partículas próximas
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Linhas de conexão mais visíveis
            const opacity = 1 - (dist / connectionDistance);
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.4})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Removida opacidade para renderizar o brilho das estrelas no máximo
      className="absolute top-0 left-[50%] -translate-x-1/2 w-[100vw] h-full pointer-events-none z-0"
    />
  );
};
