import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/animation.css';

export const ScrollAnimate = ({ animation = '', children }) => {
    const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const classNames = ['box', animation];
  if (show) classNames.push('show');

  return (
    <div ref={ref} className={classNames.join(' ')}>
      {children}
    </div>
  );
}


