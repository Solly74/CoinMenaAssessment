import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CMText } from "./index";
import { TextSizes, THEME } from "../../constants";

interface IProps {
  title: string;
  checked: boolean;
  check: () => void;
}

const CMRadioButton: React.FC<IProps> = ({
  title = "",
  checked = false,
  check = () => null,
}) => {
  return (
    <TouchableOpacity
      hitSlop={{ bottom: 10, top: 10 }}
      style={styles.parent}
      onPress={check}
    >
      <View style={styles.circleParent}>
        {checked && <View style={styles.checkedCircle} />}
      </View>
      <CMText
        text={title}
        size={TextSizes.medium}
        style={{ marginLeft: 5 }}
        color={THEME.Colors.white}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleParent: {
    borderRadius: 50,
    width: 20,
    height: 20,
    backgroundColor: THEME.Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderColor: THEME.Colors.orange,
    borderWidth: 1,
  },
  checkedCircle: {
    borderRadius: 50,
    width: 12,
    height: 12,
    backgroundColor: THEME.Colors.orange,
  },
});

export default CMRadioButton;
