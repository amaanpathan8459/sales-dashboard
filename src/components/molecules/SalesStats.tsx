import Card from "@/components/atoms/Card";
import { SalesData } from "@/types/sales";

type SalesStatsProps = {
  data: SalesData[];
};

export default function SalesStats({ data }: SalesStatsProps) {
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const bestYear = data.reduce((best, item) => (item.sales > best.sales ? item : best), data[0]);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <p className="text-sm text-slate-500">Total Sales</p>
        <h3 className="mt-2 text-2xl font-bold">${totalSales.toLocaleString()}</h3>
      </Card>
      <Card>
        <p className="text-sm text-slate-500">Best Year</p>
        <h3 className="mt-2 text-2xl font-bold">{bestYear?.year}</h3>
      </Card>
      <Card>
        <p className="text-sm text-slate-500">Records Showing</p>
        <h3 className="mt-2 text-2xl font-bold">{data.length}</h3>
      </Card>
    </div>
  );
}
