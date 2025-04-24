'use client';

import { useState } from 'react';

export function usePrediction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const predict = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      // mock or real API call
      const value = 100000 + data.bedrooms * 40000 + data.area * 120;
      setResult(value + Math.random() * 5000);
    } catch (e: any) {
      setError('Prediction failed');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, result, predict };
}
