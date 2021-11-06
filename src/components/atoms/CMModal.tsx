import React from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
import { IModal } from "../../constants/Types";

const CMModal: React.FC<IModal> = ({
  children = null,
  dismiss = () => null,
  visible = false,
}) => {
  const renderOutsideTouchable = () => (
    <TouchableWithoutFeedback onPress={dismiss}>
      <View style={{ flex: 0.1, width: "100%" }} />
    </TouchableWithoutFeedback>
  );

  return (
    <Modal animationType={"fade"} transparent={true} visible={visible}>
      <View style={styles.childrenParent}>
        {renderOutsideTouchable()}
        {children}
        {renderOutsideTouchable()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  childrenParent: {
    flex: 1,
    backgroundColor: "#000000AA",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CMModal;
