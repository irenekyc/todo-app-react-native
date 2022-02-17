import React, { FunctionComponent, useRef, useEffect } from "react";
import { Animated } from "react-native";

const TransitedView: FunctionComponent = ({ children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(
    () =>
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 600,
      }).start(),
    [fadeAnim]
  );

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default TransitedView;
