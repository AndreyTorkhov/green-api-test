export function normalizeApiUrl(value: string): string {
  return value.trim().replace(/\/$/, "");
}
