'use client';

import { useState } from 'react';

const WhatIfTool = () => {
  const [bedrooms, setBedrooms] = useState(3);
  const [area, setArea] = useState(1200);
  const [prediction, setPrediction] = useState<number | null>(null);

  const handlePredict = () => {
    const value = 100000 + bedrooms * 30000 + area * 100;
    setPrediction(value + Math.random() * 10000);
  };

  return (
    <div className="space-y-4 border p-4 rounded-md shadow">
      <h2 className="text-xl font-semibold">What-If Analysis</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
        <label className="flex flex-col">
          Bedrooms
          <input
            type="number"
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Area (sqft)
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="border p-2 rounded"
          />
        </label>

        <button onClick={handlePredict} className="mt-4 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Predict Value
        </button>
      </div>

      {prediction && (
        <p className="font-bold text-lg text-green-700">Estimated Value: ${prediction.toFixed(2)}</p>
      )}
    </div>
  );
};

export default WhatIfTool;
