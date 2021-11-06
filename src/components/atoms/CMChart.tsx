import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
} from "victory-native";
import { DIMENSIONS_CALCULATOR, FUNCTIONS } from "../../util";
import { THEME } from "../../constants";

interface IProps {
  data: any;
  height?: number;
}

const shouldStatBeFormatted = (value: number) => {
  return value > 100000;
};

const CMChart: React.FC<IProps> = ({
  data = [],
  height = DIMENSIONS_CALCULATOR.heightPercentageToDP(35),
}) => {
  return (
    <View style={styles.parent}>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: [25, 25], y: 1 }}
        animate
        height={height}
      >
        <VictoryAxis tickFormat={name => `${name}`} />
        <VictoryAxis
          dependentAxis
          tickFormat={value => `${FUNCTIONS.formatStatisticNumber(value)}m`}
        />
        <VictoryBar
          style={{ data: { fill: THEME.Colors.orange } }}
          data={data}
          barWidth={10}
          labels={({ datum }) =>
            `${
              shouldStatBeFormatted(datum.y0)
                ? FUNCTIONS.formatStatisticNumber(datum.y0, 2) + "m"
                : datum.y0
            }`
          }
          labelComponent={
            <VictoryLabel
              style={{ fontFamily: "Mukta-Bold", fill: THEME.Colors.black }}
            />
          }
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

export default CMChart;
