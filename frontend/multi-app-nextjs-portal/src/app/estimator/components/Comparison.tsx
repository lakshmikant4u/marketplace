import { useState } from 'react';

interface Property {
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  prediction: number;
}

interface ComparisonProps {
  history: Property[];
}

const Comparison = ({ history }: ComparisonProps) => {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);

  const handleSelectProperty = (property: Property) => {
    if (selectedProperties.some((item) => item === property)) {
      setSelectedProperties(selectedProperties.filter((item) => item !== property));
    } else {
      setSelectedProperties([...selectedProperties, property]);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Compare Properties</h3>
      <div className="grid grid-cols-3 gap-4">
        {history.map((item, index) => (
          <div
            key={index}
            onClick={() => handleSelectProperty(item)}
            className={`cursor-pointer p-4 border ${
              selectedProperties.includes(item) ? 'bg-blue-100' : ''
            }`}
          >
            <p>Bedrooms: {item.bedrooms}</p>
            <p>Bathrooms: {item.bathrooms}</p>
            <p>Area: {item.area}</p>
            <p>Location: {item.location}</p>
            <p>Value: ${item.prediction.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {selectedProperties.length > 1 && (
        <div className="space-y-4">
          <h4 className="font-semibold">Comparison</h4>
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
              {selectedProperties.map((property, index) => (
                <tr key={index}>
                  <td>{property.bedrooms}</td>
                  <td>{property.bathrooms}</td>
                  <td>{property.area}</td>
                  <td>{property.location}</td>
                  <td>${property.prediction.toFixed(2)}</td>
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
