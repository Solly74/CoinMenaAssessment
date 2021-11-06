import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../constants";

interface IProps {
  style?: object;
  children?: ReactNode;
}

const CMCardView: React.FC<IProps> = ({ style = null, children = null }) => {
  return <View style={[styles.parent, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  parent: {
    borderRadius: THEME.Elements.borderRadius,
    backgroundColor: THEME.Colors.white,
    height: "auto",
    minHeight: 50,
    shadowColor: THEME.Colors.black,
    shadowOpacity: 0.3,
    shadowOffset: { width: 6, height: 6 },
    elevation: 8,
  },
});

export default CMCardView;
