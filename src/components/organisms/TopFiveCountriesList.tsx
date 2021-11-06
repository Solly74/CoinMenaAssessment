import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { CMCardView } from "../atoms";
import CardItem from "./CardItem";
import { ICountry } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../hooks";

const TopFiveCountriesList = () => {
  const store = useStore();
  const [topFiveCountries, setTopFiveCountries] = useState<Array<ICountry>>([]);
  const navigation = useNavigation();
  const onItemPress = (item: ICountry) => {
    store.setSelectedCountry(item.Country);
    navigation.navigate("Countries");
  };

  const { countries }: { countries: Array<ICountry> } = useStore();

  useEffect(() => {
    const countriesSortedByCases = countries.sort((a, b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });

    const topFiveCountriesByCases = countriesSortedByCases.slice(0, 5);
    setTopFiveCountries(topFiveCountriesByCases);
  }, [countries]);

  return (
    <CMCardView style={styles.parent}>
      {topFiveCountries.map((country, index) => (
        <CardItem
          text={`${country.Country} (${country.TotalConfirmed})`}
          key={index}
          onItemPress={() => onItemPress(country)}
        />
      ))}
    </CMCardView>
  );
};

const styles = StyleSheet.create({
  parent: {
    marginBottom: 15,
    justifyContent: "center",
    padding: 15,
  },
});

export default TopFiveCountriesList;
