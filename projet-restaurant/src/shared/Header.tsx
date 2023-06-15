import "./Header.css";
import {Outlet, Link} from "react-router-dom"

export const Header = () => {
  return (
    <>
      <header>
        <div className="title">
          <Link to={"/"}>
            <h1>My Resto</h1>
          </Link>

          <Link to={"/favorite"}>
            <button className="fav-list-button">
              Favorites List
            </button>
          </Link>
        </div>
        <h3>Find your favorite restaurant</h3>
      </header>
      <Outlet></Outlet>
    </>
  );
};
