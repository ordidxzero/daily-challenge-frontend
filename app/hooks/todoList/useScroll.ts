import { useState } from "react";
import {
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const { width } = Dimensions.get("window");

function useScroll() {
  const [isReached, setIsReached] = useState({ left: false, right: false });
  const [isScroll, setIsScroll] = useState(false);
  const onScroll = (
    dataLength: number,
    onLeftEndReached: any,
    onRightEndReached: any
  ) => ({
    nativeEvent: {
      contentOffset: { x },
    },
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (x < width * 0.5) {
      if (!isReached.left) {
        setIsReached((prev) => ({ ...prev, left: true }));
        onLeftEndReached();
      }
    }
    if (x > width * (dataLength - 1.5)) {
      if (!isReached.right) {
        setIsReached((prev) => ({ ...prev, right: true }));
        onRightEndReached();
      }
    }
  };
  const resetExecutable = () => setIsReached({ left: false, right: false });
  return { onScroll, resetExecutable, isScroll, setIsScroll };
}

export default useScroll;
