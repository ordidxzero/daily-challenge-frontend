export type PanelProps = {
  isActive: boolean;
  onClose: () => any;
  showCloseButton?: boolean;
  fullWidth?: boolean;
  openLarge?: boolean;
  onlyLarge?: boolean;
  onlySmall?: boolean;
  noBackgroundOpacity?: boolean;
  style?: any;
  closeRootStyle?: any;
  closeIconStyle?: any;
  barStyle?: any;
  closeOnTouchOutside?: boolean;
  allowTouchOutside?: boolean;
  noBar?: boolean;
  children?: React.ReactNode;
  pan: Animated.ValueXY;
  panelHeight: number;
};

export type PanelState = {
  showComponent: boolean;
  opacity: Animated.Value;
  orientation: 'portrait' | 'landscape';
  deviceWidth: number;
  deviceHeight: number;
  panelHeight: number;
  isClosing: boolean;
};

type Rename<T, K extends keyof T, N extends string> = Pick<
  T,
  Exclude<keyof T, K>
> &
  { [P in N]: T[K] };

type RenamedPanelProps = Rename<
  PanelProps,
  'panelHeight',
  'panelBackgroundHeight'
>;

export type FloatingPanelProps = Omit<RenamedPanelProps, 'pan'>;

export type PanelPropsUsingUser = Omit<
  PanelProps,
  'children' | 'pan' | 'panelHeight' | 'isActive'
>;

export type BarProps = {
  barStyle?: any;
};

export type CloseProps = {
  onPress: () => void;
  rootStyle?: any;
  iconStyle?: any;
};
