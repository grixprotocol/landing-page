import { colors } from './colors.theme';

export const numberInputTheme = {
  variants: {
    naked: {
      field: {
        border: '0',
        background: 'transparent',
        color: 'base.white',
        caretColor: colors.primary[500],
        fontWeight: 'bold',
        _placeholder: {
          color: colors.gray[900],
        },
        padding: 0,
      },
    },
  },
};
