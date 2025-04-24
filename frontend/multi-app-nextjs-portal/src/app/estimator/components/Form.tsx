'use client';

import { useState } from 'react';

interface Props {
  onPredict: (formData: any) => void;
  loading: boolean;
}

export default function Form({ onPredict, loading }: Props) {
  const [formData, setFormData] = useState({
    bedrooms: '',
    bathrooms: '',
    area: '',
    location: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { bedrooms, bathrooms, area, location } = formData;
    if (!bedrooms || !bathrooms || !area || !location) {
      setError('Please fill out all fields');
      return;
    }

    onPredict(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      {['bedrooms', 'bathrooms', 'area', 'location'].map((field) => (
        <div className="flex items-center space-x-4" key={field}>
          <label htmlFor={field} className="capitalize w-1/3">
            {field}
          </label>
          <input
            id={field}
            name={field}
            type={field === 'location' ? 'text' : 'number'}
            placeholder={`Enter ${field}`}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
      ))}

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Calculating...' : 'Get Estimate'}
      </button>
    </form>
  );
}
