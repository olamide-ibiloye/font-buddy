import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Font Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FontSelector
            label="Font Family"
            value={headingFont}
            onChange={setHeadingFont}
            options={fontOptions}
          />

          <div className="space-y-2">
            <Label htmlFor="heading-size">Font Size</Label>
            <Select
              value={headingSize}
              onValueChange={(value) => setHeadingSize(value as any)}
            >
              <SelectTrigger id="heading-size">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3xl">Small (30px)</SelectItem>
                <SelectItem value="4xl">Medium (36px)</SelectItem>
                <SelectItem value="5xl">Large (48px)</SelectItem>
                <SelectItem value="6xl">Extra Large (60px)</SelectItem>
                <SelectItem value="7xl">Huge (72px)</SelectItem>
                <SelectItem value="8xl">Massive (96px)</SelectItem>
                <SelectItem value="9xl">Giant (128px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FontSelector
            label="Font Family"
            value={bodyFont}
            onChange={setBodyFont}
            options={fontOptions}
          />

          <div className="space-y-2">
            <Label htmlFor="body-size">Font Size</Label>
            <Select
              value={bodySize}
              onValueChange={(value) => setBodySize(value as any)}
            >
              <SelectTrigger id="body-size">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="base">Small (16px)</SelectItem>
                <SelectItem value="lg">Medium (18px)</SelectItem>
                <SelectItem value="xl">Large (20px)</SelectItem>
                <SelectItem value="2xl">Extra Large (24px)</SelectItem>
                <SelectItem value="3xl">Huge (30px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
