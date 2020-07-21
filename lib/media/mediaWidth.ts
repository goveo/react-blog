// [XS, S): xs width
// [S, M): s width
// [M, L): m width
// [L, XL): l width
// [XL, inf): xl width

export enum ScreenWidth {
  XS = 0,
  S = 600,
  M = 960,
  L = 1280,
  XL = 1920,
}

export interface MediaWidth {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

export const mediaWidth: MediaWidth = Object.assign(
  {},
  ...Object.entries(ScreenWidth).map(([key, value]) => ({ [key.toLowerCase()]: `@media (min-width: ${value}px)` })),
);
