import { Moon, Sun } from "lucide-react";

import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";
// import { useIsMobile } from "@/hooks/use-mobile";

export function ModeToggle({ className }: { className?: string }) {
  // const isMobile = useIsMobile();
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    const toTheme = theme === "light" ? "dark" : "light";
    console.log(toTheme);
    setTheme(toTheme);
  };

  return (
    <Button
      className={cn(
        "absolute right-5 top-5 rounded-full bg-yellowish text-foreground dark:text-background cursor-pointer",
        " hover:bg-yellowish/90 ease-in-out duration-200 z-100",
        // { "size-20": isMobile },
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
