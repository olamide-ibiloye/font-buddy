import { OPEN_SOURCE_LINK } from "@/lib/contants";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

const Footer = () => {
  return (
    <div className="py-2 justify-between flex text-sm text-muted-foreground gap-4 mx-auto w-full flex-wrap">
      <div className="flex-1">
        <Link
          href={OPEN_SOURCE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          FontBuddy - An open source project for web developers to test fonts
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Footer;
