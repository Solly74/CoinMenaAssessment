import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { THEME } from "../../constants";
import LinearGradient from "react-native-linear-gradient";

interface IProps {
  children: ReactNode;
  includeLinearGradient?: boolean;
}

const CMView: React.FC<IProps> = ({
  children = null,
  includeLinearGradient = false,
}) => {
  const { Colors } = THEME;

  return includeLinearGradient ? (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[Colors.lightTurquoise, Colors.turquoise, Colors.darkTurquoise]}
      style={styles.parent}
    >
      <View style={styles.linearParent}>{children}</View>
    </LinearGradient>
  ) : (
    <View style={styles.parent}>{children}</View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: THEME.Colors.darkTurquoise,
  },
  linearParent: {
    flex: 1,
  },
});

export default CMView;
