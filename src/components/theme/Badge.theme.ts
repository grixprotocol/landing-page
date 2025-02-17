import { colors } from './colors.theme';

export const badgeTheme = {
  baseStyle: {
    borderRadius: 16,
    p: 2,
    pt: 1,
    pb: 1,
    textTransform: 'none',
    fontSize: 'sm',
    fontWeight: '500',
  },
  variants: {
    primary: {
      borderColor: colors.primary[400],
      color: colors.primary[400],
      backgroundColor: colors.primary[950],
    },
    primaryGradient: {
      bgGradient: 'linear(to-r, blue.500, primary.500)',
      color: 'primary.25',
      borderColor: 'transparent',
    },
    warning: {
      borderColor: colors.warning[400],
      color: colors.warning[400],
      backgroundColor: colors.warning[950],
    },
    primaryBlue: {
      borderColor: colors.primary[950],
      color: colors.blue[400],
      backgroundColor: colors.blue[950],
    },
    primaryError: {
      borderColor: colors.error[950],
      color: colors.error[400],
      backgroundColor: colors.error[950],
    },
    disabled: {
      color: colors.gray[400],
      backgroundColor: colors.gray[950],
    },
    closePosition: {
      color: colors.error[700],
      backgroundColor: colors.gray[950],
    },
    settlePosition: {
      color: colors.primary[700],
      backgroundColor: colors.gray[950],
    },
    expiredTx: {
      color: colors.gray[400],
      backgroundColor: colors.gray[950],
    },
  },
};
