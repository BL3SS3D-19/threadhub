interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Buscar Conversaciones..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-full border border-slate-700 bg-[#050509] px-4 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
    />
  );
}
