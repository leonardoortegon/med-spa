export {
  getPackageIds,
  getPackagePageContent,
  getPracticeCity,
  homepageMembershipPackages,
  homepagePackageImagePath,
  membershipPackageImagePath,
  membershipPackageImageSrc,
  membershipPackages,
  packagePageJsonLd,
  type PackageFaq,
  type PackageId,
  type PackagePageContent,
  type PackageRelatedLink,
} from "@/lib/package-pages";

/** @deprecated Use `PackagePageContent` from `@/lib/package-pages` */
export type PackageOffering = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};
