"use client";

import FontSettings from "@/components/font-settings";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PreviewArea from "@/components/preview-area";

const HomeContent = () => {
  return (
    <div className="min-h-screen py-4 gap-8 flex flex-col">
      <Header />
      <PreviewArea />
      <FontSettings />
      <Footer />
    </div>
  );
};

export default HomeContent;
