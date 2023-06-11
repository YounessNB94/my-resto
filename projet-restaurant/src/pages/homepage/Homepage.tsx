import React, { useContext } from "react";
import { restaurants } from "../../data/data";
import { Link } from "react-router-dom";
import { CardsList } from "./components/CardsList";

export const Home = () => {
  return (
    <div>
      <CardsList RestaurantList={restaurants} />
    </div>
  );
};
