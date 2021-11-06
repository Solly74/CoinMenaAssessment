import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { THEME } from "../../constants";

interface IProps {
  value?: string;
  style?: object;
  placeholder?: string;
  onChangeText?: (text) => void;
}

const CMTextInput: React.FC<IProps> = ({
  value = "",
  style = null,
  placeholder = "",
  onChangeText = () => null,
}) => {
  return (
    <TextInput
      style={[styles.parent, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={THEME.Colors.lightGrey}
    />
  );
};
const styles = StyleSheet.create({
  parent: {
    backgroundColor: THEME.Colors.white,
    minHeight: 50,
    paddingLeft: 10,
    fontFamily: THEME.FontFamily.regular,
    fontSize: THEME.TextSizes.medium,
    color: THEME.Colors.black
  },
});

export default CMTextInput;
