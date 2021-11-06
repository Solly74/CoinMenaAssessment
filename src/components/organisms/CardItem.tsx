import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CMText } from "../atoms";
import { FontFamily, TextSizes, THEME } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface IProps {
  text: string;
  color?: string;
  onItemPress: () => void;
}

const CardItem: React.FC<IProps> = ({
  text = "",
  color = THEME.Colors.grey,
  onItemPress = () => null,
}) => {
  const onPress = () => {
    onItemPress();
  };

  return (
    <TouchableOpacity style={styles.parent} onPress={onPress}>
      <View style={{ flex: 0.9 }}>
        <CMText
          text={text}
          size={TextSizes.medium}
          color={color}
          font={FontFamily.medium}
          numberOfLines={1}
        />
      </View>
      <MaterialIcons
        name={"chevron-right"}
        color={THEME.Colors.turquoise}
        size={25}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "2.5%",
  },
});

export default CardItem;
