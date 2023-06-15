import { useContext } from "react";
import { RestaurantContext } from "../../context/RestaurantContext";
import { CardsList } from "../../shared/CardsList";

export const Home = () => {
  const { restaurants } = useContext(RestaurantContext);
  return (
    <div>
      <CardsList RestaurantList={restaurants} />
    </div>
  );
};
