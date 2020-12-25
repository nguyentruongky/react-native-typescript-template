export enum Weight {
  regular,
  semiBold,
  medium,
  bold,
}

export function getFont(weight: Weight, size: number) {
  switch (weight) {
    case Weight.bold:
      return {
        fontFamily: 'SFUIDisplay-Bold',
        fontSize: size,
      };
    case Weight.medium:
      return {
        fontFamily: 'SFUIDisplay-Medium',
        fontSize: size,
      };
    case Weight.semiBold:
      return {
        fontFamily: 'SFUIDisplay-SemiBold',
        fontSize: size,
      };
    default:
      return {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: size,
      };
  }
}
