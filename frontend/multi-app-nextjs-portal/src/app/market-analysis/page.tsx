import Dashboard from './components/Dashboard';
import Filters from './components/Filters';
import WhatIfTool from './components/WhatIfTool';
import DataExport from './components/DataExport';
import MarketTable from './components/MarketTable';

export default function MarketAnalysisPage() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Property Market Analysis</h1>
      <Filters />
      <Dashboard />
      <WhatIfTool />
      <DataExport />
      <MarketTable />
    </div>
  );
}
