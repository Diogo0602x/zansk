export function normalizeAssetPath(path?: string): string | undefined {
  if (!path) return undefined;

  if (path.startsWith("/public/")) {
    return path.replace("/public", "");
  }

  return path;
}
