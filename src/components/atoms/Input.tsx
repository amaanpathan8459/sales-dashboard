type InputProps = {
  value: number;
  onChange: (value: number) => void;
};

export default function Input({ value, onChange }: InputProps) {
  return (
    <input
      type="number"
      value={value}
      min={0}
      onChange={(event) => onChange(Number(event.target.value))}
      className="w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-slate-900"
      placeholder="Enter sales threshold"
    />
  );
}
