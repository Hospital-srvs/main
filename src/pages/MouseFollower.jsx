import React, { useEffect, useRef } from 'react';
import '../assets/css/Mousecursor.css';

const MouseFollower = () => {
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const followMouse = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(followMouse);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(followMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={dotRef} className="mouse-dot" />;
};

export default MouseFollower;
