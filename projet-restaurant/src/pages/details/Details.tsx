import React, { useEffect, useState, useContext } from "react";
import "./Details.css";
import { restaurants } from "../../data/data";
import { Restaurant } from "../../models/Restaurant";
import { Link, useParams } from "react-router-dom";

export const About: React.FC = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  const getRestaurant = () => {
    const foundRestaurant: Restaurant | undefined = restaurants.find(
      (restaurant: Restaurant) => {
        if (params.restoId) {
          if (restaurant.id === parseInt(params.restoId)) {
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

  return <div>DETAILS</div>;
};
