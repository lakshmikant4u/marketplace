'use client';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function ResultChart({ value }: { value: number }) {
  const data = {
    labels: ['Predicted Value'],
    datasets: [
      {
        label: 'Property Value',
        data: [value],
        backgroundColor: '#3B82F6',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
