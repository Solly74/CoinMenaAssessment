import React, { useState } from "react";
import { CMModalForm, RadioButtonGroup, ValidationText } from "../molecules";
import {
  CASE_TYPES,
  CASE_TYPES_ARRAY,
  ICountry,
  IModal,
} from "../../constants/Types";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { CountriesList } from "./index";
import { CMButton, CMText } from "../atoms";
import { FontFamily, TextSizes, THEME } from "../../constants";
import { useStore } from "../../hooks";

const ReportCase: React.FC<IModal> = ({
  visible = false,
  dismiss = () => null,
}) => {
  const store = useStore();
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [reportType, setReportType] = useState<string>("");
  const validCountry = selectedCountry !== null;
  const validType = reportType !== "";
  const [validate, setValidate] = useState<boolean>(false);

  const renderItem = ({ item }: { item: ICountry }) => {
    const isCountrySelected = item.Slug === selectedCountry?.Slug;

    const onSelect = (country: ICountry) => {
      isCountrySelected
        ? setSelectedCountry(null)
        : setSelectedCountry(country);
    };

    return (
      <TouchableOpacity
        onPress={() => onSelect(item)}
        hitSlop={{ bottom: 5, top: 5 }}
        style={{
          backgroundColor: isCountrySelected
            ? THEME.Colors.darkTurquoise
            : THEME.Colors.white,
          marginBottom: 8,
        }}
      >
        <CMText
          text={item.Country}
          size={TextSizes.medium}
          color={isCountrySelected ? THEME.Colors.white : THEME.Colors.grey}
          font={isCountrySelected ? FontFamily.bold : FontFamily.regular}
        />
      </TouchableOpacity>
    );
  };

  const onSubmit = () => {
    if (validCountry && validType) {
      switch (reportType) {
        case CASE_TYPES.activeCase:
          store.addActiveCase(selectedCountry);
          break;

        case CASE_TYPES.recovery:
          store.addActiveRecovery(selectedCountry);
          break;

        case CASE_TYPES.death:
          store.addActiveDeath(selectedCountry);
          break;

        default:
      }

      dismiss();
    } else {
      setValidate(true);
    }
  };

  return (
    <CMModalForm dismiss={dismiss} visible={visible}>
      <View style={styles.parent}>
        <View style={styles.top}>
          {validate && !validCountry && (
            <ValidationText text={"Please choose a country"} />
          )}
          <CMText
            text={"Select the country:"}
            size={TextSizes.large}
            color={THEME.Colors.white}
            font={FontFamily.medium}
          />
          <CountriesList renderItem={renderItem} />
        </View>
        <View style={{ flex: 0.25 }}>
          <View style={{ flex: 0.6 }}>
            {validate && !validType && (
              <ValidationText text={"Please choose a type"} />
            )}
            <CMText
              text={"Select the type of case:"}
              size={TextSizes.large}
              color={THEME.Colors.white}
            />
            <RadioButtonGroup
              items={CASE_TYPES_ARRAY}
              onCheck={value => setReportType(value)}
              horizontal
            />
          </View>
          <View style={{ flex: 0.2 }}>
            <CMButton label={"Submit"} onPress={onSubmit} invert />
          </View>
        </View>
      </View>
    </CMModalForm>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: THEME.Colors.turquoise,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderRadius: THEME.Elements.borderRadius,
  },
  top: { flex: 0.7, marginTop: "3%" },
});

export default ReportCase;
