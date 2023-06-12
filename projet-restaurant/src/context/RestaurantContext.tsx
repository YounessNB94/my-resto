import { createContext } from "react";
import { restaurants } from "../data/data";
import { Restaurant } from "../models/Restaurant";

export const RestaurantContext = createContext<{ restaurants: Restaurant[] }>({
  restaurants: [],
});

export const RestaurantProvider = ({ children }: any) => {
  return (
    <RestaurantContext.Provider value={{ restaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
};
