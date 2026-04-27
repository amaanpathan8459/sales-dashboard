"use client";

import { useMemo, useState } from "react";
import Card from "@/components/atoms/Card";
import ChartControls from "@/components/molecules/ChartControls";
import SalesStats from "@/components/molecules/SalesStats";
import SalesChart from "@/components/organisms/SalesChart";
import { salesData } from "@/data/salesData";
import { ChartType } from "@/types/sales";

export default function SalesDashboard() {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState(0);

  const filteredSales = useMemo(
    () => salesData.filter((item) => item.sales >= threshold),
    [threshold]
  );

  return (
    <section className="mx-auto max-w-6xl space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">Sales Performance 2022 - 2024</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Simple sales dashboard using mock data, atomic component structure, chart switching, and custom threshold filtering.
        </p>
      </div>

      <SalesStats data={filteredSales} />

      <Card>
        <ChartControls
          chartType={chartType}
          threshold={threshold}
          onChartTypeChange={setChartType}
          onThresholdChange={setThreshold}
        />
      </Card>

      <Card>
        <SalesChart data={filteredSales} chartType={chartType} />
      </Card>
    </section>
  );
}
