import React, { ReactNode, useEffect, useState } from "react";
import {
  LayoutAnimation,
  TouchableOpacity,
  UIManager,
  View,
  StyleSheet,
} from "react-native";
import { CMText } from "../atoms";
import { PLATFORM, TextSizes, THEME } from "../../constants";
import { FUNCTIONS } from "../../util";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface IProps {
  children: ReactNode;
  header: string;
  headerColor?: string;
  style?: object;
}

const CollapsibleView: React.FC<IProps> = ({
  children = null,
  header = "",
  style = null,
  headerColor = THEME.Colors.grey,
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  useEffect(() => {
    if (!PLATFORM.isIOS) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowChildren(!showChildren);
  };

  return (
    <View style={style}>
      <TouchableOpacity
        hitSlop={{ top: 10, bottom: 10 }}
        onPress={onPress}
        style={styles.parent}
      >
        <CMText text={header} size={TextSizes.medium} color={headerColor} />
        <MaterialCommunityIcons
          name={showChildren ? "chevron-up" : "chevron-down"}
          size={25}
          color={THEME.Colors.turquoise}
        />
      </TouchableOpacity>
      <View style={styles.children}>{showChildren && children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  children: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
});

export default CollapsibleView;
