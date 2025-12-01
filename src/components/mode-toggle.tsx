import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className: string }) {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    const toTheme = theme === "light" ? "dark" : "light";
    setTheme(toTheme);
  };

  return (
    <Button
      className={cn(
        "absolute right-5 top-5 rounded-full bg-yellow-400 text-foreground dark:text-background hover",
        " hover:bg-yellow-500 ease-in-out duration-200 hover:scale-110",
        className,
      )}
      onClick={handleClick}
    >
      {theme === "light" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
