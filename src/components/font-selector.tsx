import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fontOptions } from "@/lib/fonts";

interface FontSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options?: { name: string; value: string }[];
}

export default function FontSelector({
  label,
  value,
  onChange,
  options = fontOptions,
}: FontSelectorProps) {
  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={`${label}-selector`}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={`${label}-selector`}>
          <SelectValue placeholder="Select font" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
