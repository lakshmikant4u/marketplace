'use client';

import { useState } from 'react';
import Form from './components/Form';
import ResultChart from './components/ResultChart';
import History from './components/History';
import Comparison from './components/Comparison';
import Loading from './components/Loading';

const PropertyValueEstimator = () => {
  const [predictionResult, setPredictionResult] = useState<number | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePrediction = async (formData: any) => {
    setLoading(true);
    try {
      const randomPrediction = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
      setPredictionResult(randomPrediction);
      setHistory([{ ...formData, prediction: randomPrediction }, ...history]);
    } catch (error) {
      console.error('Prediction failed', error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Property Value Estimator</h1>

      <Form onPredict={handlePrediction} loading={loading} />

      {loading && <Loading />}
      {predictionResult && (
        <div>
          <h2 className="text-xl font-semibold mt-4">Prediction Result</h2>
          <p>Estimated Value: ${predictionResult.toFixed(2)}</p>
          <ResultChart value={predictionResult} />
        </div>
      )}

      <History history={history} />
      <Comparison history={history} />
    </div>
  );
};

export default PropertyValueEstimator;
