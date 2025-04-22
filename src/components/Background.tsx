import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let gradient: CanvasGradient;

        const createGradient = () => {
            gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, 'rgba(30, 30, 30, 1)');
            gradient.addColorStop(1, 'rgba(10, 10, 10, 1)');
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createGradient();
        };

        const animate = () => {
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add subtle noise effect
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            for (let i = 0; i < data.length; i += 4) {
                if (Math.random() < 0.01) { // Reduce noise density
                    const noise = Math.random() * 5; // Reduce noise intensity
                    data[i] = data[i] + noise;     // r
                    data[i + 1] = data[i + 1] + noise; // g
                    data[i + 2] = data[i + 2] + noise; // b
                }
            }
            
            ctx.putImageData(imageData, 0, 0);
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        />
    );
};

export default Background; 