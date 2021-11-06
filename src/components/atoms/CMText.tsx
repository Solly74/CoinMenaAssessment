import React from "react";
import { Text } from "react-native";
import { TextSizes, THEME, FontFamily } from "../../constants";

interface IProps {
  text: string;
  color?: string;
  size: TextSizes;
  font?: FontFamily;
  numberOfLines?: number;
  style?: object;
}

const CMText: React.FC<IProps> = ({
  text = "",
  color = "#000",
  size = THEME.TextSizes.small,
  font = FontFamily.regular,
  numberOfLines = 1,
  style = null,
}) => {
  return (
    <Text
      style={[style, { color: color, fontSize: size, fontFamily: font }]}
      numberOfLines={numberOfLines}
    >
      {text}
    </Text>
  );
};

export default CMText;
