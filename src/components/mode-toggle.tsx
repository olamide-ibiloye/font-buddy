"use client";

import * as React from "react";

import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Get theme only after component is mounted
  const currentTheme = mounted
    ? (localStorage.getItem("theme") ?? "system")
    : "system";

  React.useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") ?? "system";
    setTheme(savedTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = (value: string) => {
    if (!value) return;

    localStorage.setItem("theme", value);
    return setTheme(value);
  };

  if (!mounted) {
    return <div className="h-6 w-20" />;
  }

  return (
    <div className="relative flex w-[80px] items-center justify-center rounded-full border border-neutral-600 bg-neutral-800 p-[2px] text-white">
      <ToggleGroup.Root
        type="single"
        defaultValue="light"
        value={theme ?? currentTheme}
        onValueChange={changeTheme}
        className="flex w-full items-center justify-center"
      >
        <ToggleGroup.Item
          value="light"
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full",
            theme === "light"
              ? "bg-gray-200 text-black"
              : "hover:bg-neutral-700"
          )}
        >
          <Sun className="size-[14px]" />
        </ToggleGroup.Item>

        <ToggleGroup.Item
          value="system"
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full",
            theme === "system"
              ? "bg-gray-200 text-black"
              : "hover:bg-neutral-700"
          )}
        >
          <MonitorCog className="size-[14px]" />
        </ToggleGroup.Item>

        <ToggleGroup.Item
          value="dark"
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full",
            theme === "dark" ? "bg-gray-200 text-black" : "hover:bg-neutral-700"
          )}
        >
          <Moon className="size-[14px]" />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
};

export default ModeToggle;
