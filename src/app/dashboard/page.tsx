"use client";

import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend
} from "recharts";
import { useState } from "react";

const salesData = [
  { year: "2022", sales: 42000 },
  { year: "2023", sales: 67000 },
  { year: "2024", sales: 89000 },
];

export default function DashboardPage() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState(0);

  const filteredData = salesData.filter((item) => item.sales >= threshold);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow">
        <h1 className="mb-4 text-3xl font-bold">Sales Dashboard</h1>

        <div className="mb-6 flex flex-wrap gap-3">
          <button onClick={() => setChartType("bar")} className="rounded bg-blue-600 px-4 py-2 text-white">
            Bar
          </button>
          <button onClick={() => setChartType("line")} className="rounded bg-green-600 px-4 py-2 text-white">
            Line
          </button>
          <button onClick={() => setChartType("pie")} className="rounded bg-purple-600 px-4 py-2 text-white">
            Pie
          </button>

          <input
            type="number"
            placeholder="Enter sales threshold"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="rounded border px-4 py-2"
          />
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#2563eb" />
              </BarChart>
            ) : chartType === "line" ? (
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#16a34a" strokeWidth={3} />
              </LineChart>
            ) : (
              <PieChart>
                <Pie data={filteredData} dataKey="sales" nameKey="year" outerRadius={130} label>
                  {filteredData.map((_, index) => (
                    <Cell key={index} fill={["#2563eb", "#16a34a", "#9333ea"][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Sales Data</h2>
          {filteredData.map((item) => (
            <p key={item.year}>
              {item.year}: ₹{item.sales}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}