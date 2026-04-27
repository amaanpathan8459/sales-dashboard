type ButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
};

export default function Button({ children, active = false, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
        active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }`}
    >
      {children}
    </button>
  );
}
