import { useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";
import { CardsList } from "../../shared/CardsList";

export const Home = () => {
  const { restaurants } = useContext(RestaurantContext);
  return (
    // You dont need this div
    <div>
      <CardsList RestaurantList={restaurants} />
    </div>
  );
};
