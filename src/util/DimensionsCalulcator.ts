import { PixelRatio, Dimensions } from "react-native";

const DIMENSIONS_CALCULATOR = {
  widthPercentageToDP: (widthPercent: number) => {
    const screenWidth = Dimensions.get("window").width;
    return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
  },
  heightPercentageToDP: (heightPercent: number) => {
    const screenHeight = Dimensions.get("window").height;
    return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
  },
  getDeviceWidth: () => {
    return Dimensions.get("window").width;
  },
  getDeviceHeight: () => {
    return Dimensions.get("window").height;
  },
};

export default DIMENSIONS_CALCULATOR;
