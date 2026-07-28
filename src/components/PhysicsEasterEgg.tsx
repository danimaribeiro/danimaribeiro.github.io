import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export const PhysicsEasterEgg: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Inicialização da engine de física 2D
    const engine = Matter.Engine.create();
    const world = engine.world;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      }
    });
    renderRef.current = render;

    // Chão invisível para reter os emojis/objetos
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 30, // Escondido logo abaixo da tela
      window.innerWidth,
      60,
      { isStatic: true, render: { visible: false } }
    );
    
    // Paredes invisíveis para eles não caírem pros lados
    const leftWall = Matter.Bodies.rectangle(-30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true, render: { visible: false } });
    const rightWall = Matter.Bodies.rectangle(window.innerWidth + 30, window.innerHeight / 2, 60, window.innerHeight, { isStatic: true, render: { visible: false } });

    Matter.Composite.add(world, [ground, leftWall, rightWall]);

    // O Render fica desativado até o evento acontecer para poupar CPU
    // Matter.Render.run(render);
    // Matter.Runner.run(Matter.Runner.create(), engine);

    let isRunning = false;
    let runner: Matter.Runner;

    // Gatilho do Easter Egg
    const handleTrigger = () => {
      if (!isRunning) {
        isRunning = true;
        runner = Matter.Runner.create();
        Matter.Render.run(render);
        Matter.Runner.run(runner, engine);
      }

      // Arrays de ícones representando os hobbies e família!
      const emojis = ['👶', '⚽', '🪁', '🐶', '🐕', '🐩', '🚀', '💻', '⚡'];
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

      // Adiciona o corpo físico (com visual sendo um texto HTML canvas)
      const body = Matter.Bodies.circle(
        window.innerWidth / 2 + (Math.random() * 100 - 50), // Nasce perto do centro
        -50, // Cai de cima da tela
        20,  // Raio
        {
          restitution: 0.8, // O quanto quica
          render: {
            sprite: {
              texture: createEmojiTexture(randomEmoji),
              xScale: 1,
              yScale: 1
            }
          }
        }
      );

      Matter.Composite.add(world, body);
    };

    window.addEventListener('trigger-physics-easter-egg', handleTrigger);

    // Ajustar tamanho na janela
    const handleResize = () => {
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;
      Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + 30 });
      Matter.Body.setPosition(rightWall, { x: window.innerWidth + 30, y: window.innerHeight / 2 });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('trigger-physics-easter-egg', handleTrigger);
      window.removeEventListener('resize', handleResize);
      if (runner) Matter.Runner.stop(runner);
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, []);

  // Helper para desenhar os emojis como textura para o Matter.js
  const createEmojiTexture = (emoji: string): string => {
    const canvas = document.createElement('canvas');
    canvas.width = 60;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.font = '40px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, 30, 35);
    }
    return canvas.toDataURL();
  };

  return (
    <div 
      ref={sceneRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" 
    />
  );
};
