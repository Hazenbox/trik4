/**
 * Utility function to correct image paths for GitHub Pages
 * This ensures images work both in development and production (GitHub Pages)
 */
export function getImagePath(path: string): string {
  // If the path already includes the base or is an absolute URL, return it as is
  if (path.startsWith('https://') || path.startsWith('http://') || path.startsWith('./')) {
    return path;
  }

  // For local development
  if (import.meta.env.DEV) {
    return path;
  }

  // For production/GitHub Pages - adjust paths to include the base path
  // Only prefix paths that start with / to avoid double prefixing
  if (path.startsWith('/')) {
    return `/Tk${path}`;
  }

  return path;
} 