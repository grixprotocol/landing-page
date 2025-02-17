import { BoxProps, FlexProps } from '@chakra-ui/react';

export const configDesign = {
  OPTION_COLORS: ['#2ED3B7', '#f08d8d'],
  colorGreen: 'green',
  colorRed: 'red',
  textStyle: {
    color: '#98A2B3',
    fontSize: '12px',
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: '18px',
    wordWrap: 'break-word' as const,
  },

  activeStyle: {
    color: 'white',
    fontWeight: '550',
    letterSpacing: '0.7px',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  hoverStyle: {
    color: '#D9E9FF',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
export const menuButtonStyle = {
  color: 'white',
  variant: 'outline',
  borderColor: 'blue.300',
  backgroundColor: 'gray.800',
  _hover: {
    backgroundColor: 'blue.500',
    borderColor: 'blue.600',
  },
  _focus: {
    backgroundColor: 'blue.500',
    borderColor: 'blue.600',
  },
  _expanded: {
    backgroundColor: 'blue.500',
  },
};

export const menuItemStyle = {
  backgroundColor: 'gray.700',
  variant: 'outline',
  borderColor: 'blue.300',
  color: 'white',
  _hover: {
    backgroundColor: 'blue.500',
    color: 'gray.800',
  },
  _focus: {
    backgroundColor: 'blue.600',
    color: 'gray.800',
  },
};

export const widthValuesObject = {
  base: '75%',
  md: '45%',
  lg: '35%',
};

export const layoutConstants = {
  headerHeight: '6vh',
  footerHeight: '6vh',
  mainContentHeight: '88vh',
};

export const getBadgeColor = (points: number): string => (points < 80 ? 'gray' : '#FDB022');

export const generalCmponentStyles = {
  backgroundColor: 'gray.900',
  primaryGreen: '#758131d',
  primaryGreen_c9fad1: '#c9fad1',

  mediumspringgreenColor: 'mediumspringgreen',
  orangeredColor: 'orangered',
  yellowColor: 'yellow',

  test: '700px',
  textPaddingFromBorder: 4,
  textBackgroundPadding: 3,
  textBorder: '1px',

  resultsDisplayCompButton_hoverOpacity: '0.8',
  resultsDisplayCompButton_hoverVisibility: 'visible',
  resultsDisplayCompButtonSize: 'sm',
  resultsDisplayCompButtonOpacity: '0.3',
  resultsDisplayCompButtonVisibility: 'visible',
  resultsDisplayCompButtonTransition: 'opacity 0.3s ease',
  resultsDisplayCompButtonOpacity_hover: '1',

  underlyingAssetCompBoxSizeIcon: 5,
  underlyingAssetCompBoxPadding: 4,
  underlyingAssetCompBoxRounded: 'xl',
  underlyingAssetCompBoxMarginTop: 6,
  underlyingAssetCompBoxTransition: 'all 0.2s',
  underlyingAssetCompDirection: 'row',
  underlyingAssetCompButtonBg: 'transparent',
  underlyingAssetCompRounded: 'md',
  underlyingAssetCompPaddingTopAndBottom: 1,
  underlyingAssetCompPaddingLeftAndRight: 3,
  underlyingAssetCompTextColor: 'gray.400',
  underlyingAssetCompFontWeight: 'medium',

  strikePriceCompFontSize: '14px',
  strikePriceCompFontFamily: 'Inter',
  strikePriceCompFontWeight: '600',
  strikePriceCompAbsolute: 'absolute',
  strikePriceCompBoxShadow: 'md',

  // Colors:

  purchaseCompBgColor: 'gray.900',
  purchaseCompColorText: 'gray.200',
  purchaseCompInputBorderColor: 'gray.700',
  purchaseCompColorGray900: 'gray.900',
  purchaseCompColorGray700: 'gray.700',
  purchaseCompColorGray600: 'gray.600',
  purchaseCompColorGray500: 'gray.500',
  purchaseCompColorGray400: 'gray.400',
  purchaseCompColorGray300: 'gray.300',
  purchaseCompColorGray200: 'gray.200',

  // Sizing:

  purchaseCompTopMx: 'auto',
  purchaseCompWidth: '700px',
  purchaseCompFlexWidth: '100%',
  purchaseCompBoxWidth: '50%',
  purchaseCompInputWidth: '100%',
  purchaseCompInputHeight: '40px',
  purchaseCompInputFontSize: 'sm',
  purchaseCompInputFontWeight: 'medium',
  purchaseCompTextSize: '14px',
  // Borders and Spacing:

  purchaseCompRounded: 'lg',
  purchaseCompInputBorderSize: '1px',
  purchaseCompInputBorderRadius: 'md',
  purchaseCompBoxBorder: '1px',
  purchaseCompBoxPaddingLeftRight: 5,
  purchaseCompBoxJustifyContent_spaceBetween: 'space-between',
  purchaseCompBoxJustifyContent_MarginOnBottom: 3,
  // Flex Layout:

  purchaseCompFlexAlignItems: 'center',
  purchaseCompBoxCursor: 'pointer',
  purchaseCompBoxDisplayFlex: 'inline-flex',
  purchaseCompBoxJustifyContent: 'center',

  // Positioning
  purchaseCompBoxTop: '50%',
  purchaseCompBoxRight: '0%',
  purchaseCompBoxTransform: 'translateY(-50%)',
  purchaseCompBoxZIndex: '1',
  purchaseCompIconWidth: 10,
  purchaseCompIconHight: 6,

  // Transitions and Text:

  purchaseCompTransition: 'all 0.2s',
  purchaseCompTextFontDefault: 'normal',
  purchaseCompTextWeight: 'bold',

  callOptionTextColor: '#2ED3B7',
  callOptionBorderColor: '#15B79E',
  callOptionBackgroundColor: '#0A2926',

  putOptionBorderColor: 'red.600',
  putOptionTextColor: '#f08d8d',
  putOptionBackgroundColor: '#ff00002b',
};

// const bg = useColorModeValue("black", "gray.800");
export const componentStyleVariants = {
  header: {
    headerFlexStyle: {
      bg: 'black',
      h: layoutConstants.headerHeight,
      borderBottom: '1px',
      borderColor: 'gray.700',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 0,
      position: 'sticky',
      zIndex: 1000,
      top: 0,
    } as FlexProps,
  },
  footer: {
    boxStyle: {
      width: '100%',
      height: layoutConstants.footerHeight,
      display: 'flex',
      justifyContent: 'flex-end',
      bg: 'black',
      alignItems: 'center',
      borderTop: '1px',
      borderColor: 'gray.700',
      position: 'fixed',
      zIndex: 1,
      bottom: 0,
    } as BoxProps,
    copyrightTextStyle: {
      color: '#344054',
      fontSize: { base: 'sm', md: '12px' },
      fontFamily: 'Inter',
      fontWeight: '600',
      width: { base: '30vw', md: '15vw' },
      textAlign: { base: 'center', md: 'left' },
    } as BoxProps,
  },
};
