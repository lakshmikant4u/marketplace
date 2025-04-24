'use client';

import { useEffect, useState } from 'react';

export const useMarketData = () => {
  const [trends, setTrends] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMockData() {
      const res = await fetch('/api/market-data'); // or from mock
      const data = await res.json();
      setTrends(data.trends);
      setProperties(data.properties);
      setLoading(false);
    }
    fetchMockData();
  }, []);

  return { trends, properties, loading };
};
