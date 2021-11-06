//region COVID DATA
import { ReactNode } from "react";

export interface ISummary {
  ID: string;
  Date: string;
  Message: string;
  Global: IGlobal;
  Countries: Array<ICountry>;
}

export interface IGlobal {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface ICountry {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface IChartCoord {
  x: string;
  y: number;
  y0: number;
}

//endregion

// region CARDS

export interface ICardItem {
  text: string;
}

// endregion

// region NAVIGATION

export type RootStackParamList = {
  Home: undefined;
  Countries: undefined;
};

//endregion

// region MODAL

export enum MODAL_DIRECTION {
  right = "right",
  left = "left",
  up = "up",
  down = "down",
}

export interface IModal {
  children?: ReactNode;
  visible: boolean;
  dismiss: () => void;
}

// endregion

//region COUNTRY SORTING
export enum COUNTRY_SORTING {
  alphabetically = "Alphabetically",
  cases = "Active cases",
  deaths = "Total deaths",
  recovered = "Total recovered",
}

export const COUNTRY_SORTING_ARRAY = [
  COUNTRY_SORTING.alphabetically,
  COUNTRY_SORTING.cases,
  COUNTRY_SORTING.recovered,
  COUNTRY_SORTING.deaths,
];

//endregion

// region API KEYS
export enum API_KEYS {
  summary = "summary",
}

// endregion

//region REPORTING

export enum CASE_TYPES {
  activeCase = "Active case",
  death = "Death",
  recovery = "Recovery",
}

export const CASE_TYPES_ARRAY = [
  CASE_TYPES.activeCase,
  CASE_TYPES.death,
  CASE_TYPES.recovery,
];

//endregion
