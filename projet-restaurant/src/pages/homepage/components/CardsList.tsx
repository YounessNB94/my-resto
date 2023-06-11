import React from "react";
import "./CardsList.css";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { Restaurant } from "../../../models/Restaurant";
type CardsListProps = {

  RestaurantList: Restaurant[];
  
};

export const CardsList = ({ RestaurantList }: CardsListProps) => {
  return (
    <div className="cards-list">
      {RestaurantList.map((item) => (
        <Link to={"/details"}>
          <Card restaurant={item} key={item.id} />
        </Link>
      ))}
    </div>
  );
};
