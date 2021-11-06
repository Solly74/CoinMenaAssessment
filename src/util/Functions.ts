import { ICountry } from "../constants";
import { format, parseISO } from "date-fns";

const Functions = {
  sortCountriesAlphabetically: (countries: Array<ICountry>) => {
    return countries.sort((a, b) => {
      const countryA = a.Country || "";
      const countryB = b.Country || "";

      return countryA.localeCompare(countryB);
    });
  },
  sortCountriesByCase: (countries: Array<ICountry>) => {
    return countries.sort((a, b) => {
      return b.TotalConfirmed - a.TotalConfirmed;
    });
  },
  sortCountriesByRecovered: (countries: Array<ICountry>) => {
    return countries.sort((a, b) => {
      return b.TotalRecovered - a.TotalRecovered;
    });
  },
  sortCountriesByDeaths: (countries: Array<ICountry>) => {
    return countries.sort((a, b) => {
      return b.TotalDeaths - a.TotalDeaths;
    });
  },
  formatStatisticNumber: (number: number, decimal?: number) => {
    return Number(number / 1000000).toFixed(decimal ? decimal : 0);
  },
  formatDate: (date: string) => {
    return date ? format(parseISO(date), " dd-MMM-yyyy hh:mm:ss a") : "";
  },
};

export default Functions;
