'use client';

import { useState } from 'react';

const Filters = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState(500000);

  return (
    <div className="space-y-4 border p-4 rounded-md shadow">
      <h2 className="text-xl font-semibold">Filter Properties</h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <label className="flex flex-col">
          Location
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="border p-2 rounded">
            <option value="">All</option>
            <option value="NY">New York</option>
            <option value="SF">San Francisco</option>
            <option value="LA">Los Angeles</option>
          </select>
        </label>

        <label className="flex flex-col">
          Max Price: ${priceRange.toLocaleString()}
          <input
            type="range"
            min={100000}
            max={2000000}
            step={50000}
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
};

export default Filters;
