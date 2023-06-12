import React from "react";
import "./Card.css";
import { Restaurant } from "../../../models/Restaurant";
import { Link } from "react-router-dom";
type CardProps = {
  restaurant: Restaurant;
};
export const Card = ({ restaurant : Restaurant}: CardProps) => {
  return (
    <div>
      
      <Link to={`/details/${Restaurant.id}`} className="card">
        <img src={Restaurant.img} />
        <div className="container-text-button">
          <div className="card-text">
            <h4>{Restaurant.name}</h4>
            <div className="fav-button">
              <button>
                <p>+</p>
              </button>
            </div>
          </div>
          <p>{Restaurant.description_short}</p>
        </div>
      </Link>
    </div>
  );
};
