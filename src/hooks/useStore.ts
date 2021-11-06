import create from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICountry } from "../constants";
import { COUNTRY_SORTING, IGlobal } from "../constants/Types";

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return await AsyncStorage.getItem(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await AsyncStorage.setItem(name, value);
  },
};

export const useStore = create(
  persist(
    (set, get) => ({
      worldwideCases: 0,
      worldwideRecoveries: 0,
      worldwideDeaths: 0,
      updatedAt: "",
      localTotalActive: 0,
      localTotalDeaths: 0,
      localTotalRecoveries: 0,
      addActiveCase: (country: ICountry) => {
        set(state => ({
          localTotalActive: state.localTotalActive + 1,
          worldwideCases: state.worldwideCases + 1,
        }));
      },
      addActiveDeath: (country: ICountry) => {
        set(state => ({
          localTotalDeaths: state.localTotalDeaths + 1,
          worldwideDeaths: state.worldwideDeaths + 1,
        }));
      },
      addActiveRecovery: (country: ICountry) => {
        set(state => ({
          localTotalRecoveries: state.localTotalRecoveries + 1,
          worldwideRecoveries: state.worldwideRecoveries + 1,
        }));
      },
      setWorldwideValues: (globalData: IGlobal, date: string) => {
        set(() => ({
          worldwideCases: globalData.TotalConfirmed + get().localTotalActive,
          worldwideRecoveries:
            globalData.TotalRecovered + get().localTotalRecoveries,
          worldwideDeaths: globalData.TotalDeaths + get().localTotalDeaths,
          updatedAt: date,
        }));
      },
      countries: [],
      setCountries: (countries: Array<ICountry>) => {
        set(() => ({ countries: countries }));
      },
      selectedCountry: "",
      setSelectedCountry: (countryName: string) => {
        set(() => ({ selectedCountry: countryName }));
      },
      countrySortedBy: COUNTRY_SORTING.alphabetically,
      setCountrySortedBy: (sortBy: COUNTRY_SORTING) => {
        set(() => ({
          countrySortedBy: sortBy,
        }));
      },
    }),
    {
      name: "covid_data",
      getStorage: () => storage,
    },
  ),
);

export default useStore;
