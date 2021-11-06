import React from "react";
import { CMText } from "../atoms";
import { TextSizes, THEME } from "../../constants";

interface IProps {
  text: string;
  size?: TextSizes;
}

const ValidationText: React.FC<IProps> = ({
  text = "",
  size = TextSizes.medium,
}) => {
  return <CMText text={text} size={size} color={THEME.Colors.red} />;
};

export default ValidationText;
