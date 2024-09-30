declare global {
  interface Window {
    PUBLIC_URL: string;
  }
}

const baseUrl = typeof window !== 'undefined' ? window.location.origin : process.env.PUBLIC_URL;

export const assetUrl = (path: string): string => {
  if (path.startsWith('http')) {
    return path;
  } else if (path.startsWith('/')) {
    return `${baseUrl}/${path.substring(1)}`;
  }

  return `${baseUrl}/${path}`;
};
