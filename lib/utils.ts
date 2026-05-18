export type ClassValue = string | number | false | undefined | null;

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
