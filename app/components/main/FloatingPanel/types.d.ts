type FloatingPanelProps = {
  isActive: boolean;
  onClose: () => any;
  showCloseButton?: boolean;
  fullWidth?: boolean;
  noBackgroundOpacity?: boolean;
  style?: any;
  closeRootStyle?: any;
  closeIconStyle?: any;
  closeOnTouchOutside?: boolean;
  onlyLarge?: boolean;
  onlySmall?: boolean;
  openLarge?: boolean;
  noBar?: boolean;
  barStyle?: any;
  allowTouchOutside?: boolean;
  children?: React.ReactNode;
  pan: Animated.ValueXY;
  panelHeight: number;
};

type FloatingPanelState = {
  showComponent: boolean;
  opacity: Animated.Value;
  orientation: 'portrait' | 'landscape';
  deviceWidth: number;
  deviceHeight: number;
  panelHeight: number;
  isClosing: boolean;
};
