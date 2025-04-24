'use client';

import { useState } from 'react';

const Comparison = ({ history }: { history: any[] }) => {
  const [selected, setSelected] = useState<any[]>([]);

  const toggleSelect = (property: any) => {
    setSelected((prev) =>
      prev.includes(property)
        ? prev.filter((item) => item !== property)
        : [...prev, property]
    );
  };

  if (history.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Compare Properties</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {history.map((item, i) => (
          <div
            key={i}
            onClick={() => toggleSelect(item)}
            className={`cursor-pointer p-4 border rounded ${selected.includes(item) ? 'bg-blue-100' : ''}`}
          >
            <p><strong>Bedrooms:</strong> {item.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {item.bathrooms}</p>
            <p><strong>Area:</strong> {item.area} sqft</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Value:</strong> ${item.prediction.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {selected.length > 1 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Side-by-Side Comparison</h4>
          <table className="table-auto w-full border">
            <thead>
              <tr>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Area</th>
                <th>Location</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((item, i) => (
                <tr key={i}>
                  <td className="border px-2 py-1">{item.bedrooms}</td>
                  <td className="border px-2 py-1">{item.bathrooms}</td>
                  <td className="border px-2 py-1">{item.area}</td>
                  <td className="border px-2 py-1">{item.location}</td>
                  <td className="border px-2 py-1">${item.prediction.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Comparison;
