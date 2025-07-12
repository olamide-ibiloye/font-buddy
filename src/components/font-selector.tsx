interface FontSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { name: string; value: string }[];
}

export default function FontSelector({
  label,
  value,
  onChange,
  options,
}: FontSelectorProps) {
  return (
    <div className="space-y-2 w-full">
      <label className="block text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
