import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { CMText } from "./index";
import { FontFamily, TextSizes, THEME } from "../../constants";

interface IProps {
  label: string;
  onPress: () => void;
  invert?: boolean;
}

const CMButton: React.FC<IProps> = ({
  label = "",
  onPress = () => null,
  invert = false,
}) => {
  const onButtonPress = () => {
    onPress();
  };

  const { white, turquoise } = THEME.Colors;
  const backgroundColor = invert ? white : turquoise;
  const textColor = invert ? turquoise : white;

  return (
    <TouchableOpacity
      style={[styles.parent, { backgroundColor: backgroundColor }]}
      onPress={onButtonPress}
    >
      <CMText
        text={label}
        size={TextSizes.medium}
        font={FontFamily.bold}
        color={textColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: THEME.Elements.borderRadius,
    flex: 1,
    minHeight: 50,
  },
});

export default CMButton;
