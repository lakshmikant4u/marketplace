'use client';

import { useEffect, useState } from 'react';
import { fetchMarketData } from '../utils/mockApi';

const MarketTable = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const result = await fetchMarketData();
      setData(result.properties);
    }
    load();
  }, []);

  return (
    <div className="overflow-x-auto border rounded-md p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">Property Data Table</h2>
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Bedrooms</th>
            <th className="px-4 py-2">Area (sqft)</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{item.location}</td>
              <td className="px-4 py-2">{item.type}</td>
              <td className="px-4 py-2">{item.bedrooms}</td>
              <td className="px-4 py-2">{item.area}</td>
              <td className="px-4 py-2">${item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTable;
