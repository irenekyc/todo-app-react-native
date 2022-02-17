import React, { FunctionComponent } from "react";
import loadingAnimation from "../../assets/77615-loading-animation-for-apps.json";
import LottieView from "lottie-react-native";

const Loading: FunctionComponent = () => {
  return <LottieView source={loadingAnimation} autoPlay loop />;
};

export default Loading;
