import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const michaelisMenten = (S, Vmax, Km) => Vmax * S / (Km + S);

export const generateData = (Vmax, Km) => {
    const dataPoints = Array.from({ length: 100 }, (_, i) => i * 0.1);
    return dataPoints.map(S => ({
      x: S,
      y: michaelisMenten(S, Vmax, Km)
    }));
};

export const Graph = ({ data, options }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data,
      options,
    });
  }, [data, options]);

  return <canvas ref={canvasRef} />;
};
