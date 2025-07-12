"use client";

import FontSelector from "@/components/font-selector";
import ModeToggle from "@/components/mode-toggle";
import PreviewArea from "@/components/preview-area";
import { OPEN_SOURCE_LINK } from "@/lib/contants";
import { fontOptions } from "@/lib/fonts";
import Link from "next/link";
import { useState } from "react";

const HomeContent = () => {
  const [headingFont, setHeadingFont] = useState("Geist");
  const [bodyFont, setBodyFont] = useState("Geist");
  const [headingSize, setHeadingSize] = useState("4xl");
  const [bodySize, setBodySize] = useState("base");
  const [headingText, setHeadingText] = useState(
    "Magically simplify typography"
  );
  const [bodyText, setBodyText] = useState(
    "Test different font combinations for your web projects. Find the perfect pairing for your design."
  );

  return (
    <div className="min-h-screen py-8  gap-8 flex flex-col">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">FontBuddy</h1>

        <div className="flex justify-between items-center gap-6">
          <ModeToggle />

          <Link
            href={OPEN_SOURCE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </Link>
        </div>
      </header>

      <main className="flex flex-col gap-8 flex-1">
        <div className="flex flex-col gap-8">
          <PreviewArea
            headingFont={headingFont}
            bodyFont={bodyFont}
            headingSize={headingSize}
            bodySize={bodySize}
            headingText={headingText}
            bodyText={bodyText}
            onHeadingTextChange={setHeadingText}
            onBodyTextChange={setBodyText}
          />

          <div>
            <h2 className="text-xl font-semibold mb-4">Font Controls</h2>
            <div className="space-y-6">
              <FontSelector
                label="Heading Font"
                value={headingFont}
                onChange={setHeadingFont}
                options={fontOptions}
              />
              <FontSelector
                label="Body Font"
                value={bodyFont}
                onChange={setBodyFont}
                options={fontOptions}
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Heading Size
                </label>
                <select
                  value={headingSize}
                  onChange={(e) => setHeadingSize(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="3xl">Small</option>
                  <option value="4xl">Medium</option>
                  <option value="5xl">Large</option>
                  <option value="6xl">Extra Large</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Body Size</label>
                <select
                  value={bodySize}
                  onChange={(e) => setBodySize(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="sm">Small</option>
                  <option value="base">Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">Extra Large</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        <Link href={OPEN_SOURCE_LINK} target="_blank" rel="noopener noreferrer">
          FontBuddy - An open source project for web developers to test fonts
        </Link>
      </footer>
    </div>
  );
};

export default HomeContent;
