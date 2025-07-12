import { create } from "zustand";

// Updated with larger size options
type FontSize = "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
type BodySize = "base" | "lg" | "xl" | "2xl" | "3xl";

interface FontState {
  // Font selections
  headingFont: string;
  bodyFont: string;
  headingSize: FontSize;
  bodySize: BodySize;
  headingText: string;
  bodyText: string;

  // Actions
  setHeadingFont: (font: string) => void;
  setBodyFont: (font: string) => void;
  setHeadingSize: (size: FontSize) => void;
  setBodySize: (size: BodySize) => void;
  setHeadingText: (text: string) => void;
  setBodyText: (text: string) => void;
}

export const useFontStore = create<FontState>((set) => ({
  // Initial state
  headingFont: "Geist",
  bodyFont: "Geist",
  headingSize: "5xl",
  bodySize: "lg",
  headingText: "Magically simplify typography",
  bodyText:
    "Test different font combinations for your web projects. Find the perfect pairing for your design.",

  // Actions
  setHeadingFont: (font) => set({ headingFont: font }),
  setBodyFont: (font) => set({ bodyFont: font }),
  setHeadingSize: (size) => set({ headingSize: size }),
  setBodySize: (size) => set({ bodySize: size }),
  setHeadingText: (text) => set({ headingText: text }),
  setBodyText: (text) => set({ bodyText: text }),
}));
