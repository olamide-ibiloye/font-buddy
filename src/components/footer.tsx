import { OPEN_SOURCE_LINK } from "@/lib/contants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-6 text-center text-sm text-muted-foreground max-w-3xl mx-auto w-full">
      <Link href={OPEN_SOURCE_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
        FontBuddy - An open source project for web developers to test fonts
      </Link>
    </div>
  );
};

export default Footer;
