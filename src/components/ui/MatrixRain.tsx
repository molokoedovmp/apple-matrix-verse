
import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  density?: number;
  speed?: number;
  opacity?: number;
  color?: string;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  density = 30,
  speed = 1.5,
  opacity = 0.06,
  color = '#00FF41'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const columns = Math.floor(canvas.width / 20); // Adjust for character width
    const drops: number[] = [];

    // Initialize drops
    for(let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
    }

    const draw = () => {
      // Add semi-transparent black background to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, ${0.1 * speed})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = color;
      ctx.font = '15px "Courier New"';
      
      for(let i = 0; i < drops.length; i++) {
        // For each column, choose a random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Calculate x position (add variations)
        const x = i * 20 + Math.random() * 5;
        
        // Draw the character
        ctx.globalAlpha = Math.random() * 0.8 + 0.2; // Vary opacity
        ctx.fillText(text, x, drops[i]);
        
        // Move drops down with varying speed
        drops[i] += Math.random() * 5 + 10 * speed;
        
        // Reset drops to top if they reach bottom
        if(drops[i] * opacity > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -100;
        }
      }
    };

    const interval = setInterval(draw, 33); // ~30fps

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [density, speed, opacity, color]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-20"
    />
  );
};

export default MatrixRain;
