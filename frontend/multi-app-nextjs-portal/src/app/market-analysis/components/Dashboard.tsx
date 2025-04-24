'use client';

import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
import { useEffect, useState } from 'react';
import { fetchMarketData } from '../utils/mockApi.ts';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement);

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const result = await fetchMarketData();
      setData(result.trends);
    }
    load();
  }, []);

  const labels = data.map((item) => item.month);
  const prices = data.map((item) => item.price);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 border rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Price Trends</h2>
        <Line
          data={{
            labels,
            datasets: [
              {
                label: 'Avg. Price',
                data: prices,
                fill: false,
                borderColor: 'blue',
                tension: 0.3,
              },
            ],
          }}
        />
      </div>

      <div className="bg-white p-4 border rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Monthly Sales</h2>
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: 'Units Sold',
                data: prices.map((p) => p / 1000),
                backgroundColor: 'rgba(75,192,192,0.5)',
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
