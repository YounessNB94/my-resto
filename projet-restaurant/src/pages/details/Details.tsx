import { useEffect, useState, useContext } from "react";
import "./Details.css";
import { Restaurant } from "../../models/Restaurant";
import { RestaurantContext } from "../../context/RestaurantContext";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";

export const About = () => {
  const { restoId } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { restaurants } = useContext(RestaurantContext);
  const { addFavorite, setShowModal, favoritesIds, setSelectedFavId } =
    useContext(FavoritesContext);

  if (restoId == null) return <p>No restaurant found...</p>;

  const getRestaurant = () => {
    const foundRestaurant: Restaurant | undefined = restaurants.find(
      (restaurant: Restaurant) => {
        if (restoId) {
          if (restaurant.id === parseInt(restoId, 10)) {
            return true;
          }
        }
        return false;
      }
    );
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  const isFavorite = favoritesIds.includes(restaurant.id);

  // Nice to have defined a method centralizing the logic
  const handleFavoriteClick = () => {
    if (isFavorite) {
      setSelectedFavId(restaurant.id);
      setShowModal(true);
    } else {
      addFavorite(restaurant.id);
    }
  };

  return (
    <div className="details-page">
      <div className="img-description">
        <img src={restaurant?.img} alt="" />
        <div className="description">
          <h1>{restaurant?.name}</h1>

          <button onClick={handleFavoriteClick}>
            {isFavorite ? "Remove favorites" : "Add favorites"}
          </button>

          <p>{restaurant?.description_short}</p>
          <p>{restaurant?.description_long}</p>
          <h3>Adress:</h3>
          <p>{restaurant?.address}</p>
        </div>
      </div>
      <h2>MENU</h2>
      <div className="menu-details">
        <h3>Entrees</h3>
        <p>{restaurant?.menu.entrees.join()}</p>
        <h3>Dishes</h3>
        <p>{restaurant?.menu.dishes}</p>
        <h3>Deserts</h3>
        <p>{restaurant?.menu.deserts}</p>
      </div>
    </div>
  );
};
