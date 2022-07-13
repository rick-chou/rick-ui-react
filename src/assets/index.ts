const baseUrl = 'https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/';

type assets_type = 'jpg' | 'png' | 'webp';

export function getAssetsUrl(type: assets_type | string, index?: number) {
  if (index) return `${baseUrl}${type}/${index}.${type}`;
  return `${baseUrl}${type}`;
}
