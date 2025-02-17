/* eslint-disable max-lines */
export const buttonTheme = {
  baseStyle: ({ isLoading }: { isLoading: boolean }) => ({
    container: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderRadius: 'l',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      width: '100%',
      outline: 'transparent solid 2px',
      _loading: {
        pointerEvents: 'none',
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    label: {
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit',
      visibility: isLoading ? 'hidden' : 'visible',
      whiteSpace: 'nowrap',
    },
    icon: {
      display: 'inline-flex',
      marginInlineEnd: 'xs',
    },
    loader: {
      display: 'inline-flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
  }),
  variants: getVariants(),
  defaultProps: {
    variant: 'primary',
    size: 'lg',
  },
};

function getVariants() {
  return {
    primary: {
      backgroundColor: 'primary.500',
      color: 'primary.25',
      border: '1px',
      borderColor: 'primary.500',
      _hover: {
        backgroundColor: 'primary.950',
      },
      _active: {
        color: 'primary.500',
        backgroundColor: 'primary.950',
      },
      _loading: {
        backgroundColor: 'primary.950',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        backgroundColor: 'neutral.light',
        color: 'neutral.white',
      }),
    },
    primaryGradient: {
      bgGradient: 'linear(to-r, blue.500, primary.500)',
      color: 'primary.25',
      border: '1px',
      borderColor: 'none',
      borderRadius: '10px',
      _hover: {
        bgGradient: 'linear(to-r, blue.600, primary.600)',
      },
      _active: {
        bgGradient: 'linear(to-r, blue.700, primary.700)',
      },
      _loading: {
        bgGradient: 'linear(to-r, blue.700, primary.700)',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        backgroundColor: 'neutral.light',
        color: 'neutral.white',
      }),
    },
    secondary: {
      backgroundColor: 'base.black',
      color: 'gray.600',
      border: '1px',
      borderColor: 'gray.700',
      _hover: {
        backgroundColor: 'gray.700',
        color: 'gray.600',
        borderColor: 'gray.700',
      },
      _active: {
        backgroundColor: 'base.black',
        color: 'gray.600',
        borderColor: 'primary.400',
      },
      _loading: {
        backgroundColor: 'base.black',
        color: 'gray.600',
        borderColor: 'gray.700',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        borderColor: 'gray.600',
        backgroundColor: 'transparent',
        color: 'gray.600',
      }),
    },
    secondaryBlue: {
      backgroundColor: 'base.black',
      color: 'gray.500',
      border: '1px',
      borderColor: 'gray.600',
      _hover: {
        backgroundColor: 'gray.600',
        color: 'gray.500',
        borderColor: 'gray.600',
      },
      _active: {
        backgroundColor: 'base.black',
        color: 'blue.500',
        borderColor: 'blue.500',
      },
      _loading: {
        backgroundColor: 'base.black',
        color: 'gray.500',
        borderColor: 'gray.600',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        border: 'gray.800',
        backgroundColor: 'transparent',
        color: 'gray.600',
      }),
    },
    acheived: {
      backgroundColor: 'primary.900',
      color: 'primary.400',
      border: '1px',
      borderColor: 'primary.900',
      _hover: {
        backgroundColor: 'primary.950',
      },
      _active: {
        color: 'primary.500',
        backgroundColor: 'primary.950',
      },
      _loading: {
        backgroundColor: 'primary.950',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        backgroundColor: 'neutral.light',
        color: 'neutral.white',
      }),
    },
    error: {
      backgroundColor: 'error.500',
      color: 'error.25',
      border: '1px',
      borderColor: 'error.500',
      _hover: {
        backgroundColor: 'error.950',
      },
      _active: {
        backgroundColor: 'error.950',
        color: 'error.500',
      },
      _loading: {
        backgroundColor: 'error.950',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        backgroundColor: 'neutral.light',
        color: 'neutral.white',
      }),
    },
    buttonGroupBase: {
      backgroundColor: 'transparent',
      color: 'gray.600',
      border: '1px',
      borderColor: 'transparent',
      _hover: {
        color: 'primary.400',
      },
      _active: {
        borderColor: 'primary.400',
        color: 'primary.400',
        backgroundColor: 'primary.950',
        _hover: {
          borderColor: 'primary.950',
        },
      },
      _loading: {
        backgroundColor: 'primary.950',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        backgroundColor: 'transparent',
        color: 'gray.800',
      }),
    },
    buttonGroupBaseError: {
      backgroundColor: 'transparent',
      color: 'gray.600',
      border: '1px',
      borderColor: 'transparent',
      _hover: {
        color: 'error.400',
      },
      _active: {
        borderColor: 'error.400',
        color: 'error.400',
        backgroundColor: 'error.950',
        _hover: {
          borderColor: 'error.950',
        },
      },
      _loading: {
        backgroundColor: 'error.950',
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        backgroundColor: 'transparent',
        color: 'gray.800',
      }),
    },
    outlineDark: ({ colorScheme: c = 'blue' }) => ({
      backgroundColor: 'transparent',
      color: `${c}.400`,
      border: '1px',
      borderColor: `${c}.400`,
      _hover: {
        backgroundColor: 'whiteAlpha.100',
        color: `${c}.300`,
        borderColor: `${c}.300`,
      },
      _active: {
        backgroundColor: 'whiteAlpha.200',
        color: `${c}.200`,
        borderColor: `${c}.200`,
      },
      _loading: {
        backgroundColor: 'transparent',
        color: `${c}.400`,
        borderColor: `${c}.400`,
      },
      _focusVisible: {
        outlineColor: 'focus.focus',
        outlineOffset: '2px',
        transition: 'outline-color 0.2s',
      },
      _disabled: applyToAllStates({
        borderColor: 'gray.600',
        backgroundColor: 'transparent',
        color: 'gray.600',
      }),
    }),
  };
}

function applyToAllStates(props: Record<string, unknown>) {
  return {
    ...props,
    _hover: props,
    _focusVisible: props,
    _active: props,
  };
}
