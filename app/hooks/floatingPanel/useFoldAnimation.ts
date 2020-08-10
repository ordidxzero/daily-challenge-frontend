import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

function useFoldAnimation(isSectionFolded: boolean) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isSectionFolded ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isSectionFolded]);

  return animation;
}

export default useFoldAnimation;
