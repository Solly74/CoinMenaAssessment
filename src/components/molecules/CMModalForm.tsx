import React from "react";
import { View } from "react-native";
import { CMModal } from "../atoms";
import { IModal } from "../../constants/Types";

const CMModalForm: React.FC<IModal> = ({
  visible = false,
  dismiss = () => null,
  children = null,
}) => {
  return (
    <CMModal visible={visible} dismiss={dismiss}>
      <View
        style={{
          flex: 0.8,
          width: "90%",
        }}
      >
        {children}
      </View>
    </CMModal>
  );
};

export default CMModalForm;
