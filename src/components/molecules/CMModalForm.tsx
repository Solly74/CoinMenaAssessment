import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { CMModal } from "../atoms";
import { IModal } from "../../constants/Types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { THEME } from "../../constants";

const CMModalForm: React.FC<IModal> = ({
  visible = false,
  dismiss = () => null,
  children = null,
}) => {
  return (
    <CMModal visible={visible} dismiss={dismiss}>
      <View style={styles.parent}>
        <TouchableOpacity
          onPress={dismiss}
          hitSlop={{ left: 5, bottom: 5 }}
          style={styles.closeButton}
        >
          <MaterialIcons name={"close"} size={25} color={THEME.Colors.white} />
        </TouchableOpacity>
        {children}
      </View>
    </CMModal>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 0.8,
    width: "90%",
  },
  closeButton: { right: 5, top: 30, zIndex: 1, alignSelf: "flex-end" },
});

export default CMModalForm;
