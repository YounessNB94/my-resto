import React, { useEffect, useState, useContext } from "react";
import "./Details.css";
import { restaurants } from "../../data/data";
import { Restaurant } from "../../models/Restaurant";
import { RestaurantContext } from "../../context/RestaurantContext";
import { Link, useParams } from "react-router-dom";

export const About = () => {
  const { restoId } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const restaurantData = useContext(RestaurantContext);

  if (restoId == null) return <p>No restaurant found...</p>;

  const getRestaurant = () => {
    const foundRestaurant: Restaurant | undefined = restaurantData.find(
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

  return (
    <div className="details-page">
      <div className="img-description">
        <img src={restaurant?.img} alt="" />
        <div className="description">
          <h1>{restaurant?.name}</h1>

          <button>Add to favorites</button>
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
