import Link from "next/link";
import { cn } from "@/lib/utils";

const baseClass =
  "inline-flex rounded-[5px] bg-white px-8 py-3 text-sm font-medium tracking-wide text-black transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

type Props = {
  className?: string;
  label?: string;
};

export function ExploreServicesLink({ className, label = "Explore Services" }: Props) {
  return (
    <Link href="/services" className={cn(baseClass, className)}>
      {label}
    </Link>
  );
}
