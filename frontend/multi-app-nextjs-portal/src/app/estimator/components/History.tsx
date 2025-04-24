'use client';

export default function History({ history }: { history: any[] }) {
  if (history.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Prediction History</h3>
      <table className="table-auto w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Bedrooms</th>
            <th className="border px-2 py-1">Bathrooms</th>
            <th className="border px-2 py-1">Area</th>
            <th className="border px-2 py-1">Location</th>
            <th className="border px-2 py-1">Predicted Value</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, i) => (
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
  );
}
