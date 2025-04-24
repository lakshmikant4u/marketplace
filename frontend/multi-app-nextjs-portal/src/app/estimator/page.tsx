'use client';

import { useState } from 'react';
import History from './components/History';
import Comparison from './components/Comparison';
import PredictionChart from './components/PredictionChart';

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
      // Generate a random property value prediction
      const randomPrediction = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000; // Random value between $500,000 and $1,000,000

      setPredictionResult(randomPrediction);

      // Save to history
      setHistory([{ ...formData, prediction: randomPrediction }, ...history]);

    } catch (err) {
      setError('An error occurred while making the prediction');
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Property Value Estimator</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Bedrooms Input */}
        <div className="flex items-center space-x-4">
          <label htmlFor="bedrooms" className="text-lg font-medium w-1/4">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            className="w-3/4 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of bedrooms"
          />
        </div>

        {/* Bathrooms Input */}
        <div className="flex items-center space-x-4">
          <label htmlFor="bathrooms" className="text-lg font-medium w-1/4">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            className="w-3/4 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of bathrooms"
          />
        </div>

        {/* Area Input */}
        <div className="flex items-center space-x-4">
          <label htmlFor="area" className="text-lg font-medium w-1/4">Area (in sqft)</label>
          <input
            type="number"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-3/4 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter area in square feet"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center space-x-4">
          <label htmlFor="location" className="text-lg font-medium w-1/4">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-3/4 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Enter property location"
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

// Simulated Prediction Function (Mock)
const mockPrediction = (formData: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate a random prediction value (between $500,000 and $1,000,000)
      const randomValue = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
      resolve({ value: randomValue });
    }, 1000); // Simulate a delay of 1 second
  });
};

export default PropertyValueEstimator;
