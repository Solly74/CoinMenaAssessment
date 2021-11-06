import React, { useState, useCallback } from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CMSwipeModal, CMText, CMTextInput } from "../atoms";
import { FontFamily, ICountry, TextSizes, THEME } from "../../constants";
import { useStore } from "../../hooks";
import { RadioButtonGroup } from "../molecules";
import { FUNCTIONS } from "../../util";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  COUNTRY_SORTING,
  COUNTRY_SORTING_ARRAY,
  MODAL_DIRECTION,
} from "../../constants/Types";

interface IProps {
  renderItem: ListRenderItem<ICountry>;
  hasFilter?: boolean;
}

const CountriesList: React.FC<IProps> = ({
  renderItem = null,
  hasFilter = false,
}) => {
  const store = useStore();
  const { countrySortedBy } = store;
  const [text, setText] = useState<string>(store.selectedCountry);
  const countries: Array<ICountry> = useStore().countries;
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const onTextChange = (enteredTex: string) => {
    setText(enteredTex);
  };

  const sortCountries = (countries: Array<ICountry>) => {
    let filteredResult: Array<ICountry>;
    switch (countrySortedBy) {
      case COUNTRY_SORTING.alphabetically:
        filteredResult = FUNCTIONS.sortCountriesAlphabetically(countries);
        break;

      case COUNTRY_SORTING.cases:
        filteredResult = FUNCTIONS.sortCountriesByCase(countries);
        break;

      case COUNTRY_SORTING.recovered:
        filteredResult = FUNCTIONS.sortCountriesByRecovered(countries);
        break;

      case COUNTRY_SORTING.deaths:
        filteredResult = FUNCTIONS.sortCountriesByDeaths(countries);
        break;

      default:
        filteredResult = FUNCTIONS.sortCountriesAlphabetically(countries);
        break;
    }

    return filteredResult;
  };

  const filteredCountries = useCallback(() => {
    let returnedCountries = countries.filter(country => {
      return (
        country.Country.toLowerCase().includes(text.toLowerCase()) ||
        country.Slug.toLowerCase().includes(text.toLowerCase())
      );
    });
    return sortCountries(returnedCountries);
  }, [text, countrySortedBy]);

  const toggleFilters = () => {
    setShowFilter(!showFilter);
  };

  const hideFilters = () => {
    setShowFilter(false);
  };

  const onFilterSelect = (value: COUNTRY_SORTING) => {
    store.setCountrySortedBy(value);
    hideFilters();
  };

  const clearText = () => {
    setText("");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchParent}>
        <View style={{ flex: 0.1 }}>
          <MaterialIcons name={"search"} size={25} color={THEME.Colors.grey} />
        </View>
        <View style={styles.searchInputParent}>
          <CMTextInput
            placeholder={"Filter by country name..."}
            onChangeText={onTextChange}
            value={text}
            style={{ flex: 0.8 }}
          />
          <TouchableOpacity
            onPress={clearText}
            style={{ flex: hasFilter ? 0.15 : 0.3, alignItems: "flex-end" }}
          >
            <CMText
              text={"Clear"}
              size={TextSizes.medium}
              color={THEME.Colors.lightBlue}
            />
          </TouchableOpacity>
          {hasFilter && (
            <TouchableOpacity
              style={{ flex: 0.15, alignItems: "flex-end" }}
              onPress={() => setShowFilter(true)}
            >
              <MaterialCommunityIcons
                name={"tune"}
                size={25}
                color={THEME.Colors.grey}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <FlatList
        ListEmptyComponent={
          <CMText text="No countries found..." size={TextSizes.medium} />
        }
        keyExtractor={item => item.Country}
        data={filteredCountries()}
        style={styles.listStyle}
        contentContainerStyle={styles.listContainerStyle}
        renderItem={renderItem}
      />
      {hasFilter && (
        <CMSwipeModal
          show={showFilter}
          toggle={toggleFilters}
          hide={hideFilters}
          direction={MODAL_DIRECTION.right}
        >
          <View style={{ justifyContent: "space-between", flex: 0.3 }}>
            <CMText
              text={"Sort by:"}
              size={TextSizes.large}
              color={THEME.Colors.white}
              font={FontFamily.bold}
            />
            <RadioButtonGroup
              items={COUNTRY_SORTING_ARRAY}
              defaultCheckedIndex={COUNTRY_SORTING_ARRAY.indexOf(
                store.countrySortedBy,
              )}
              onCheck={onFilterSelect}
            />
          </View>
        </CMSwipeModal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchParent: {
    flexDirection: "row",
    backgroundColor: THEME.Colors.white,
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: THEME.Colors.lightGrey,
  },
  searchInputParent: {
    flex: 0.9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainerStyle: {
    paddingBottom: 100,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  listStyle: { backgroundColor: THEME.Colors.white, height: "100%" },
});

export default CountriesList;
