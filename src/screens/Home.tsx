import React, { useEffect, useState } from "react";
import { ENDPOINTS, IChartCoord, ISummary, THEME } from "../constants";
import { CMText } from "../components/atoms";
import {
  CMScrollView,
  ReportCase,
  TopFiveCountriesList,
} from "../components/organisms";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetData, useStore } from "../hooks";
import ChartCard from "../components/molecules/ChartCard";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FUNCTIONS } from "../util";
import { API_KEYS } from "../constants/Types";

export default function Home() {
  const store = useStore();
  const { TextSizes, Colors, FontFamily } = THEME;
  const [chartData, setChartData] = useState<Array<IChartCoord>>([]);
  const { worldwideCases, worldwideDeaths, worldwideRecoveries } = store;
  const [showReportCase, setShowReportCase] = useState<boolean>(false);

  const {
    isLoading,
    data,
    refetch,
  }: { isLoading: boolean; error: any; data: ISummary; refetch: any } =
    useGetData(ENDPOINTS.summary, API_KEYS.summary);

  useEffect(() => {
    if (data) {
      store.setWorldwideValues(data.Global, data.Date);
      store.setCountries(data.Countries);
    }
  }, [data]);

  useEffect(() => {
    const data: Array<IChartCoord> = [
      { x: "Cases", y: 0, y0: worldwideCases },
      { x: "Deaths", y: 0, y0: worldwideDeaths },
      { x: "Recoveries", y: 0, y0: worldwideRecoveries },
    ];
    setChartData(data);
  }, [worldwideCases, worldwideRecoveries, worldwideDeaths]);

  const dismissReportCase = () => {
    setShowReportCase(false);
  };

  return (
    <CMScrollView loading={isLoading} refresh={refetch} linearGradient={true}>
      <SafeAreaView style={styles.parent}>
        <View style={styles.addParent}>
          <CMText
            text={`Updated at: ${FUNCTIONS.formatDate(store.updatedAt)}`}
            size={TextSizes.small}
            color={THEME.Colors.black}
          />
          <TouchableOpacity
            style={styles.add}
            onPress={() => setShowReportCase(true)}
          >
            <MaterialIcons name={"add"} size={30} color={THEME.Colors.orange} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <CMText
            text={worldwideCases.toString()}
            size={TextSizes.extraLarge}
            color={Colors.orange}
            font={FontFamily.bold}
            style={styles.headerText}
          />
          <CMText
            text="  COVID-19 cases worldwide"
            size={TextSizes.medium}
            color={Colors.white}
            numberOfLines={2}
            style={styles.headerText}
          />
        </View>
        <View style={styles.content}>
          <CMText
            text={"Top 5 countries:"}
            size={TextSizes.large}
            color={Colors.white}
          />
          <TopFiveCountriesList />
        </View>
        <View style={styles.content}>
          <CMText
            text={"Global statistics:"}
            size={TextSizes.large}
            color={Colors.white}
          />
          <ChartCard data={chartData} />
        </View>
        {showReportCase && (
          <ReportCase visible={showReportCase} dismiss={dismissReportCase} />
        )}
      </SafeAreaView>
    </CMScrollView>
  );
}

const styles = StyleSheet.create({
  parent: { flex: 1, paddingHorizontal: 15 },
  addParent: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: { lineHeight: 45, textAlignVertical: "bottom" },
  content: {
    marginBottom: 20,
  },
  add: {
    backgroundColor: THEME.Colors.white,
    height: 35,
    width: 35,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
