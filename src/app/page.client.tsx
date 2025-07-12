"use client";

import FontSettings from "@/components/font-settings";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PreviewArea from "@/components/preview-area";

const HomeContent = () => {
  return (
    <div className="min-h-screen max-md:px-4 py-4 flex flex-col gap-8">
      <Header />
      <div className="flex-1 flex flex-col gap-8">
        <PreviewArea />
        <FontSettings />
      </div>
      <Footer />
    </div>
  );
};

export default HomeContent;
