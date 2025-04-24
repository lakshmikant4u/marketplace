export async function fetchMarketData() {
    return {
      trends: [
        { month: 'Jan', price: 350000 },
        { month: 'Feb', price: 360000 },
        { month: 'Mar', price: 370000 },
        { month: 'Apr', price: 365000 },
      ],
      properties: [
        { location: 'NY', type: 'Apartment', bedrooms: 2, area: 900, price: 450000 },
        { location: 'NY', type: 'House', bedrooms: 4, area: 1800, price: 850000 },
        { location: 'SF', type: 'Apartment', bedrooms: 3, area: 1100, price: 650000 },
        { location: 'LA', type: 'House', bedrooms: 5, area: 2200, price: 950000 },
      ],
    };
  }
  