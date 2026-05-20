"use client";

import {
  ImageComparison,
  ImageComparisonCenterLabel,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";
import type { ServiceBeforeAfter } from "@/lib/service-pages";

type Props = {
  beforeAfter: ServiceBeforeAfter;
};

export function ServiceBeforeAfterSlider({ beforeAfter }: Props) {
  return (
    <div className="mx-auto max-w-3xl">
      <ImageComparison className="aspect-[4/3] w-full border border-zinc-200" enableHover>
        <ImageComparisonImage src={beforeAfter.beforeSrc} alt={beforeAfter.beforeAlt} position="left" />
        <ImageComparisonImage src={beforeAfter.afterSrc} alt={beforeAfter.afterAlt} position="right" />
        <ImageComparisonSlider className="z-20 w-0.5 bg-white/30 backdrop-blur-sm" />
        <ImageComparisonCenterLabel />
      </ImageComparison>
      <p className="mt-4 text-center text-xs leading-relaxed text-zinc-500">{beforeAfter.disclaimer}</p>
    </div>
  );
}
