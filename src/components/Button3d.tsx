import { Button } from "./ui/button";

export default function Button3d({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative isolate mt-6">
        <Button
          size="lg"
          className="font-bold hover:bg-bluish text-xl text-foreground border-0 dark:text-background cursor-pointer bg-bluish dark:border-0 active:translate-1 z-10"
        >
          {children}
        </Button>
        <div className=" bg-foreground absolute inset-0 rounded-full -z-10 h-10 translate-1" />
      </div>
    </div>
  );
}
