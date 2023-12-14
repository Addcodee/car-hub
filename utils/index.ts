import { Car, FilterProps } from "@/types";

export const fetchCars = async (filters: FilterProps) => {
  const headers = {
    "X-RapidAPI-Key":
      "324ffd3414mshc511716541f0535p16f6b6jsn3f752089d99c",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const { manufacturer, year, limit, fuel, model } = filters;

  const URL = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}`;

  const response = await fetch(URL, {
    headers,
  });

  const result: Car = await response.json();

  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${
    window.location.pathname
  }?${searchParams.toString()}`;

  return newPathname;
};
