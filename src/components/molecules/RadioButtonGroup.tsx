import React, { useState } from "react";
import { CMRadioButton } from "../atoms";
import { View } from "react-native";

interface IProps {
  items: Array<string>;
  defaultCheckedIndex?: number;
  onCheck: (value: string) => void;
  horizontal?: boolean;
}

const RadioButtonGroup: React.FC<IProps> = ({
  items = [],
  defaultCheckedIndex = -1,
  onCheck = () => null,
  horizontal = false,
}) => {
  const [checkedKey, setCheckedKey] = useState<number>(defaultCheckedIndex);

  const onPress = (item, key) => {
    onCheck(item);
    setCheckedKey(key);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: horizontal ? "space-between" : "space-evenly",
        flexWrap: "wrap",
        flexDirection: horizontal ? "row" : "column",
      }}
    >
      {items.map((item, key) => {
        return (
          <CMRadioButton
            title={item}
            checked={key === checkedKey}
            check={() => onPress(item, key)}
            key={key}
          />
        );
      })}
    </View>
  );
};

export default RadioButtonGroup;
