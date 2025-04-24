'use client';

const DataExport = () => {
  const handleExport = (type: 'csv' | 'pdf') => {
    alert(`Mock export to ${type.toUpperCase()}`);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleExport('csv')}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Export CSV
      </button>
      <button
        onClick={() => handleExport('pdf')}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Export PDF
      </button>
    </div>
  );
};

export default DataExport;
