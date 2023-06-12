import React, { useContext } from "react";
import { restaurants } from "../../data/data";
import { RestaurantContext } from "../../context/RestaurantContext";
import { Link } from "react-router-dom";
import { CardsList } from "./components/CardsList";

export const Home = () => {
  const restaurantData = useContext(RestaurantContext);
  return (
    <div>
      <CardsList RestaurantList={restaurantData} />
    </div>
  );
};
