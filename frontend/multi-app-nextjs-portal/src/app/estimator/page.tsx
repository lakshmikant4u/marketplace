'use client'; // Add this line to mark this file as a Client Component

import { useState } from 'react';
import History from './components/History';
import Comparison from './components/Comparison';
import PredictionChart from './components/PredictionChart';

// Mock API response
const mockPrediction = (propertyDetails: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value: 500000 + Math.random() * 100000, // Random value for mock prediction
      });
    }, 1000);
  });
};

const PropertyValueEstimator = () => {
  const [formData, setFormData] = useState({
    bedrooms: '',
    bathrooms: '',
    area: '',
    location: '',
  });
  const [predictionResult, setPredictionResult] = useState<number | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple client-side validation
    if (!formData.bedrooms || !formData.bathrooms || !formData.area || !formData.location) {
      setError('Please fill out all fields');
      setLoading(false);
      return;
    }

    try {
      const result: any = await mockPrediction(formData);
      setPredictionResult(result.value);

      // Save to history
      setHistory([{ ...formData, prediction: result.value }, ...history]);

    } catch (err) {
      setError('An error occurred while making the prediction');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Property Value Estimator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label>Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label>Area (in sqft)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Calculating...' : 'Get Estimate'}
        </button>
      </form>

      {predictionResult && (
        <div>
          <h2 className="text-xl font-semibold">Prediction Result</h2>
          <p>Estimated Value: ${predictionResult.toFixed(2)}</p>
          <PredictionChart data={{ bedrooms: formData.bedrooms, value: predictionResult }} />
        </div>
      )}

      <History history={history} />
      <Comparison history={history} />
    </div>
  );
};

export default PropertyValueEstimator;
