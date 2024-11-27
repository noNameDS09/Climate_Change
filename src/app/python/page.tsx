'use client';
// src/app/python/page.tsx
import { useEffect, useState } from 'react';

export default function PythonPage() {
  const [plotGenerated, setPlotGenerated] = useState(false);

  useEffect(() => {
    // Call the API to generate the plot
    const generatePlot = async () => {
      const response = await fetch('/api/python');
      if (response.ok) {
        setPlotGenerated(true);
      } else {
        console.error('Error generating plot');
      }
    };

    generatePlot();
  }, []);

  return (
    <div>
      <h1>Python Plot</h1>
      {plotGenerated ? (
        <img src="/plot.png" alt="Generated Plot" />
      ) : (
        <p>Generating plot...</p>
      )}
    </div>
  );
}
