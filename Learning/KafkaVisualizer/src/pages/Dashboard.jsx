import { fetchTopics } from "../api/kafkaApi";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopics()
      .then((res) => {
        setTopics(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load topics");
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">

      {/* Top Metrics */}
      <div className="col-span-12 md:col-span-6 xl:col-span-3 bg-slate-800 text-gray-200 rounded-xl p-5 shadow">
        <h3 className="text-sm text-gray-400">Topics</h3>
        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : error ? (
          <div className="text-red-400">{error}</div>
        ) : (
          <div className="text-3xl font-semibold mt-2">{topics.length}</div>
        )}
      </div>

      <div className="col-span-12 md:col-span-6 xl:col-span-3 bg-slate-800 text-gray-200 rounded-xl p-5 shadow">
        <h3 className="text-sm text-gray-400">Messages/sec</h3>
        <div className="text-3xl font-semibold mt-2">12,430</div>
      </div>

      <div className="col-span-12 md:col-span-6 xl:col-span-3 bg-slate-800 text-gray-200 rounded-xl p-5 shadow">
        <h3 className="text-sm text-gray-400">Consumers</h3>
        <div className="text-3xl font-semibold mt-2">8</div>
      </div>

      <div className="col-span-12 md:col-span-6 xl:col-span-3 bg-slate-800 text-gray-200 rounded-xl p-5 shadow">
        <h3 className="text-sm text-gray-400">Lag</h3>
        <div className="text-3xl font-semibold mt-2">120</div>
      </div>

      {/* Main Graph */}
      <div className="col-span-12 xl:col-span-8 bg-slate-800 text-gray-200 rounded-xl p-6 shadow min-h-80">
        <h3 className="text-gray-400">Throughput Graph</h3>
      </div>

      {/* Side Panels */}
      <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-slate-800 text-gray-200 rounded-xl p-6 shadow min-h-80">
        <h3 className="text-gray-400">Partition Health</h3>
      </div>

      <div className="col-span-12 md:col-span-6 xl:col-span-4 bg-slate-800 text-gray-200 rounded-xl p-6 shadow min-h-80">
        <h3 className="text-gray-400">Recent Messages</h3>
      </div>

    </div>
  );
}
