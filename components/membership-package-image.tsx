import Image from "next/image";
import { cn } from "@/lib/utils";

/** Layout hint for Next/Image; photos render at full container width, natural height. */
const LAYOUT_WIDTH = 2400;
const LAYOUT_HEIGHT = 2400;

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function MembershipPackageImage({ src, alt, className, priority }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={LAYOUT_WIDTH}
      height={LAYOUT_HEIGHT}
      unoptimized
      priority={priority}
      className={cn("block h-auto w-full max-w-full", className)}
    />
  );
}
