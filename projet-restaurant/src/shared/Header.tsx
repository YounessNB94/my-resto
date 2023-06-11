import "./Header.css";
import {Outlet, Link} from "react-router-dom"

export const Header = () => {
  return (
    <>
      <header>
        <Link to={"/"}>
          <h1>My Resto</h1>
        </Link>

        <h3>Find your favorite restaurant</h3>
        <Link to={"/favorite"}>
          <button className="fav-list-button">
            Favorites List +
            <img src="../assets/liste-de-favoris(1).png" />
          </button>
        </Link>
      </header>
      <Outlet></Outlet>
    </>
  );
};
