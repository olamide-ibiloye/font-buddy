import { Textarea } from "@/components/ui/textarea";
import { useFontStore } from "@/lib/store";

// Map font sizes to pixel values
const headingSizeMap = {
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const bodySizeMap = {
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
};

export default function PreviewArea() {
  const {
    headingFont,
    bodyFont,
    headingSize,
    bodySize,
    headingText,
    bodyText,
    setHeadingText,
    setBodyText,
  } = useFontStore();

  return (
    <div className="min-h-[300px] max-w-xl mx-auto flex flex-col justify-center">
      <div className="w-full space-y-6">
        <div>
          <Textarea
            value={headingText}
            onChange={(e) => setHeadingText(e.target.value)}
            className="w-full bg-transparent text-center shadow-none border-none outline-none resize-none overflow-hidden font-bold leading-tight"
            style={{
              fontFamily: headingFont,
              fontSize: headingSizeMap[headingSize] || "6rem",
            }}
          />
        </div>
        <div>
          <Textarea
            value={bodyText}
            onChange={(e) => setBodyText(e.target.value)}
            className="w-full bg-transparent border-none shadow-none text-center outline-none resize-none overflow-hidden leading-relaxed"
            style={{
              fontFamily: bodyFont,
              fontSize: bodySizeMap[bodySize] || "1.25rem",
            }}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
