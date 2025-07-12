import { useFontStore } from "@/lib/store";
import { cn } from "@/lib/utils";

// Map font sizes to pixel values
const headingSizeMap = {
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72px
  "8xl": "6rem", // 96px
  "9xl": "8rem", // 128px
};

const bodySizeMap = {
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
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
    <div className="min-h-[400px] flex flex-col justify-center">
      <div className="max-w-2xl mx-auto w-full space-y-6">
        <div>
          <textarea
            value={headingText}
            onChange={(e) => setHeadingText(e.target.value)}
            className={cn(
              "w-full bg-transparent text-center border-none outline-none resize-none overflow-hidden font-bold leading-tight",
              `font-[${headingFont}]`
            )}
            style={{
              fontFamily: headingFont,
              fontSize: headingSizeMap[headingSize] || "6rem", // Default to 6rem if size not found
            }}
          />
        </div>
        <div>
          <textarea
            value={bodyText}
            onChange={(e) => setBodyText(e.target.value)}
            className={cn(
              "w-full bg-transparent border-none text-center outline-none resize-none overflow-hidden leading-relaxed",
              `font-[${bodyFont}]`
            )}
            style={{
              fontFamily: bodyFont,
              fontSize: bodySizeMap[bodySize] || "1.25rem", // Default to 1.25rem if size not found
            }}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}
