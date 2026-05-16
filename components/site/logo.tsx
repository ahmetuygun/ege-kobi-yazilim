import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Ege360 ana sayfa"
      className={cn(
        "group inline-flex items-center gap-2 text-xl font-semibold tracking-tight",
        className
      )}
    >
      <span
        aria-hidden
        className="relative grid size-8 place-items-center rounded-md bg-foreground text-background transition-transform group-hover:scale-105"
      >
        <span className="text-[15px] font-bold leading-none">E</span>
      </span>
      <span className="text-foreground">
        Ege<span className="text-muted-foreground">360</span>
      </span>
    </Link>
  );
}
