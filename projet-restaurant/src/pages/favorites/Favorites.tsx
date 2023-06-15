import  { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Restaurant } from "../../models/Restaurant";
import { RestaurantContext } from "../../context/RestaurantContext";
import { CardsList } from "../../shared/CardsList";

export const Favorites = () => {
  const { restaurants } = useContext(RestaurantContext);
  const { favoritesIds } = useContext(FavoritesContext);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<Restaurant[]>(
    []
  );

  useEffect(() => {
    const filtered = restaurants.filter((r) => favoritesIds.includes(r.id));
    setFavoriteRestaurants(filtered);
  }, [favoritesIds]);

  return (
    <div>
      <div className="title-fav">
        <h1>My Fav</h1>
      </div>

      {favoriteRestaurants.length === 0 ? (
        <p>No favorite restaurants found...</p>
      ) : (
        <CardsList RestaurantList={favoriteRestaurants} />
      )}
    </div>
  );
};
