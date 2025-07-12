import { cn } from "@/lib/utils";

interface PreviewAreaProps {
  headingFont: string;
  bodyFont: string;
  headingSize: string;
  bodySize: string;
  headingText: string;
  bodyText: string;
  onHeadingTextChange: (text: string) => void;
  onBodyTextChange: (text: string) => void;
}

export default function PreviewArea({
  headingFont,
  bodyFont,
  headingSize,
  bodySize,
  headingText,
  bodyText,
  onHeadingTextChange,
  onBodyTextChange
}: PreviewAreaProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border min-h-[400px] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full space-y-6">
        <div>
          <textarea
            value={headingText}
            onChange={(e) => onHeadingTextChange(e.target.value)}
            className={cn(
              `w-full bg-transparent border-none outline-none resize-none overflow-hidden text-${headingSize} font-bold leading-tight`,
              `font-[${headingFont}]`
            )}
            style={{ fontFamily: headingFont }}
          />
        </div>
        <div>
          <textarea
            value={bodyText}
            onChange={(e) => onBodyTextChange(e.target.value)}
            className={cn(
              `w-full bg-transparent border-none outline-none resize-none overflow-hidden text-${bodySize} leading-relaxed`,
              `font-[${bodyFont}]`
            )}
            style={{ fontFamily: bodyFont }}
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}