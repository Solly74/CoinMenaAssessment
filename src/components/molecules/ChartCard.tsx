import React from "react";
import { CMCardView, CMChart } from "../atoms";
import { IChartCoord } from "../../constants";

interface IProps {
  data: Array<IChartCoord>;
}

const Component: React.FC<IProps> = ({ data = [] }) => {
  return (
    <CMCardView>
      <CMChart data={data} />
    </CMCardView>
  );
};

export default Component;
