import { fontOptions } from "@/lib/fonts";
import { useFontStore } from "@/lib/store";
import FontSelector from "./font-selector";

export default function FontSettings() {
  const {
    headingFont,
    bodyFont,
    headingSize,
    bodySize,
    setHeadingFont,
    setBodyFont,
    setHeadingSize,
    setBodySize,
  } = useFontStore();

  return (
    <div className="border p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Font Controls</h2>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <FontSelector
            label="Heading Font"
            value={headingFont}
            onChange={setHeadingFont}
            options={fontOptions}
          />

          <div className="space-y-2 w-full">
            <label className="block text-sm font-medium">Heading Size</label>
            <select
              value={headingSize}
              onChange={(e) => setHeadingSize(e.target.value as any)}
              className="w-full p-2 border rounded-md"
            >
              <option value="3xl">Small</option>
              <option value="4xl">Medium</option>
              <option value="5xl">Large</option>
              <option value="6xl">Extra Large</option>
              <option value="7xl">Huge</option>
              <option value="8xl">Massive</option>
              <option value="9xl">Giant</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <FontSelector
            label="Body Font"
            value={bodyFont}
            onChange={setBodyFont}
            options={fontOptions}
          />

          <div className="space-y-2 w-full">
            <label className="block text-sm font-medium">Body Size</label>
            <select
              value={bodySize}
              onChange={(e) => setBodySize(e.target.value as any)}
              className="w-full p-2 border rounded-md"
            >
              <option value="base">Small</option>
              <option value="lg">Medium</option>
              <option value="xl">Large</option>
              <option value="2xl">Extra Large</option>
              <option value="3xl">Huge</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
