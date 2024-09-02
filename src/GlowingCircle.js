import React, { useEffect, useState } from 'react';

const GlowingCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.glow-on-hover').forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.glow-on-hover').forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`glowing-cursor ${visible ? 'visible' : 'hidden'}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};

export default GlowingCircle;
