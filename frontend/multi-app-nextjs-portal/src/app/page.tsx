import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Property Portal</h1>
      <p className="text-gray-600 mb-10 max-w-xl">
        Analyze property values and market trends using advanced ML-powered tools.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/estimator"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
        >
          Property Value Estimator
        </Link>
        <Link
          href="/market-analysis"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
        >
          Market Analysis Dashboard
        </Link>
      </div>
    </div>
  );
}
