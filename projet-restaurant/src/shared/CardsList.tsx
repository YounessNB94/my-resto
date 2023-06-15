import "./CardsList.css";
import { Card } from "./Card";
import { Restaurant } from "../models/Restaurant";

type CardsListProps = {
  //get restaurant list from data
  RestaurantList: Restaurant[];
};

export const CardsList = ({ RestaurantList }: CardsListProps) => {
  return (
    <div className="cards-list">
      {RestaurantList.map((item) => (
        <Card restaurant={item} key={item.id} />
      ))}
    </div>
  );
};
