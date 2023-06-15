import { useContext } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { Restaurant } from "../models/Restaurant";
import { FavoritesContext } from "../context/FavoritesContext";
type CardProps = {
  restaurant: Restaurant;
};
export const Card = ({ restaurant }: CardProps) => {
  const { addFavorite, setShowModal, favoritesIds, setSelectedFavId } =
    useContext(FavoritesContext);
  const isFavorite = favoritesIds.includes(restaurant.id);
   const handleFavoriteClick = () => {
     if (isFavorite) {
       setSelectedFavId(restaurant.id);
       setShowModal(true);
     } else {
       addFavorite(restaurant.id);
     }
   };

  return (
    <div className="card-container">
      <Link to={`/details/${restaurant.id}`} className="card">
        <img src={restaurant.img} />
      </Link>
      <div className="container-text-button">
        <div className="card-text">
          <Link to={`/details/${restaurant.id}`} className="card">
            <h4>{restaurant.name}</h4>
          </Link>

          <div className="fav-button">
            <button onClick={handleFavoriteClick}>
              {isFavorite ? "-" : "+"}
            </button>
          </div>
        </div>
        <p>{restaurant.description_short}</p>
      </div>
    </div>
  );
};
