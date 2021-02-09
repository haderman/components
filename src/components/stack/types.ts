export type Space = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export const Space = {
  toArray(): Space[] {
    return ['xsmall', 'small', 'medium', 'large', 'xlarge']
  }
}
