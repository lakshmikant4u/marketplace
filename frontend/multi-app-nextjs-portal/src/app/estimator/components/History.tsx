'use client';

const History = ({ history }: { history: any[] }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Estimate History</h3>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Area</th>
            <th>Location</th>
            <th>Estimated Value</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.bedrooms}</td>
              <td>{item.bathrooms}</td>
              <td>{item.area}</td>
              <td>{item.location}</td>
              <td>${item.prediction.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
