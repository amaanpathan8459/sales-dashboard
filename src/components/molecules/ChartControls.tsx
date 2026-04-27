import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { ChartType } from "@/types/sales";

type ChartControlsProps = {
  chartType: ChartType;
  threshold: number;
  onChartTypeChange: (type: ChartType) => void;
  onThresholdChange: (value: number) => void;
};

export default function ChartControls({ chartType, threshold, onChartTypeChange, onThresholdChange }: ChartControlsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:items-end">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">Sales Threshold</label>
        <Input value={threshold} onChange={onThresholdChange} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-slate-700">Chart Type</p>
        <div className="flex flex-wrap gap-2">
          <Button active={chartType === "bar"} onClick={() => onChartTypeChange("bar")}>Bar</Button>
          <Button active={chartType === "line"} onClick={() => onChartTypeChange("line")}>Line</Button>
          <Button active={chartType === "pie"} onClick={() => onChartTypeChange("pie")}>Pie</Button>
        </div>
      </div>
    </div>
  );
}
