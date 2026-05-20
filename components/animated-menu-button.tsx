"use client";

import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClick: () => void;
  controlsId?: string;
  className?: string;
};

const lineClass =
  "absolute right-0 block h-[1.5px] w-5 origin-center rounded-full bg-current transition-all duration-300 ease-out motion-reduce:transition-none";

export function AnimatedMenuButton({ open, onClick, controlsId, className }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "relative flex h-10 w-5 shrink-0 items-center justify-end text-black lg:hidden",
        className,
      )}
      aria-expanded={open}
      aria-controls={controlsId}
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span className={cn(lineClass, open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[15px]")} />
      <span className={cn(lineClass, open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[23px]")} />
    </button>
  );
}
