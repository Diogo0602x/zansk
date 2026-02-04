/**
 * Normaliza paths de assets vindos do siteContent.ts
 * - Remove "/public" do início quando necessário
 * - Garante compatibilidade com Next.js
 */
export function normalizeAssetPath(path?: string): string | undefined {
  if (!path) return undefined;

  // Remove "/public" do início se existir
  if (path.startsWith("/public/")) {
    return path.replace("/public", "");
  }

  return path;
}
