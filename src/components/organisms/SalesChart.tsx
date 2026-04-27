"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartType, SalesData } from "@/types/sales";

type SalesChartProps = {
  data: SalesData[];
  chartType: ChartType;
};

const chartColors = ["#0f172a", "#2563eb", "#16a34a"];

export default function SalesChart({ data, chartType }: SalesChartProps) {
  if (data.length === 0) {
    return <div className="flex h-80 items-center justify-center text-slate-500">No data matched your threshold.</div>;
  }

  if (chartType === "line") {
    return (
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#0f172a" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chartType === "pie") {
    return (
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie data={data} dataKey="sales" nameKey="year" outerRadius={110} label>
              {data.map((entry, index) => (
                <Cell key={entry.year} fill={chartColors[index % chartColors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#0f172a" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
