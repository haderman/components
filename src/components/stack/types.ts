export const Space = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge'
] as const;

export type Space = typeof Space[number];
