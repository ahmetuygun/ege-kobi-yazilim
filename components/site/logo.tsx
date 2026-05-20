import Image from "next/image";
import Link from "next/link";

import { SITE_LOGO, SITE_LOGO_LIGHT } from "@/lib/site-assets";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
  priority?: boolean;
  compact?: boolean;
};

export function Logo({
  className,
  variant = "dark",
  priority = false,
  compact = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="EgeKOBİ ana sayfa"
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <Image
        src={variant === "light" ? SITE_LOGO_LIGHT : SITE_LOGO}
        alt=""
        width={1080}
        height={540}
        className={
          compact
            ? "h-10 w-auto max-w-[13rem] sm:h-11 sm:max-w-[15rem]"
            : "h-11 w-auto sm:h-12 md:h-14"
        }
        sizes={
          compact
            ? "(max-width: 640px) 180px, 200px"
            : "(max-width: 640px) 200px, 240px, 280px"
        }
        priority={priority}
        unoptimized
      />
    </Link>
  );
}
