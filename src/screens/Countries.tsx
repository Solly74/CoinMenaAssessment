import React from "react";
import { CMText, CMView } from "../components/atoms";
import { CountriesList } from "../components/organisms";
import { CollapsibleView } from "../components/molecules";
import { StyleSheet, View } from "react-native";
import { TextSizes, THEME } from "../constants";

const Countries = () => {
  const CountryInformation = ({ leftText, rightText }) => {
    return (
      <View style={styles.itemRow}>
        <CMText
          text={leftText}
          size={TextSizes.medium}
          color={THEME.Colors.grey}
        />
        <CMText
          text={rightText}
          size={TextSizes.medium}
          color={THEME.Colors.orange}
        />
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <CollapsibleView header={item.Country} style={{ marginBottom: 20 }}>
      <CountryInformation
        leftText="Total cases: "
        rightText={item.TotalConfirmed.toString()}
      />
      <CountryInformation
        leftText="Total deaths: "
        rightText={item.TotalDeaths.toString()}
      />
      <CountryInformation
        leftText="Total recoveries: "
        rightText={item.TotalRecovered.toString()}
      />
      <CountryInformation
        leftText="New cases: "
        rightText={item.NewConfirmed.toString()}
      />
      <CountryInformation
        leftText="New deaths: "
        rightText={item.NewDeaths.toString()}
      />
      <CountryInformation
        leftText="New recoveries: "
        rightText={item.NewRecovered.toString()}
      />
    </CollapsibleView>
  );

  return (
    <CMView>
      <CountriesList renderItem={renderItem} hasFilter />
    </CMView>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Countries;
