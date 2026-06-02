import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { cn } from "../utils/cn";

export const StarsBackground = ({
  starCount = 600,
  starColor = "#ffffff",
  speed = 15,
  className,
  ...props
}) => {
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);

  const currentSpeed = useMotionValue(speed);
  const animatedSpeed = useSpring(currentSpeed, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    currentSpeed.set(speed);
  }, [speed, currentSpeed]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const isMobile = width < 768;
      
      const maxStars = isMobile ? 130 : starCount;
      const area = width * height;
      const adjustedCount = Math.min(maxStars, Math.floor(area * 0.00035));

      for (let i = 0; i < adjustedCount; i++) {
        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * (isMobile ? 0.5 : 0.8) + 0.2,
          alpha: Math.random(),
        });
      }
      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [starCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isMobile = window.innerWidth < 768;
      const mobileSpeedModifier = isMobile ? 0.25 : 1;

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.globalAlpha = star.alpha;
        ctx.fill();

        star.y += animatedSpeed.get() * 0.005 * mobileSpeedModifier; 
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [stars, starColor, animatedSpeed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0
      }}
      className={cn(className)}
      {...props}
    />
  );
};