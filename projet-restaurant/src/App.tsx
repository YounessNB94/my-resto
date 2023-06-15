import "./App.css";
import { Home } from "./pages/homepage/Homepage";
import { Header } from "./shared/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/details/Details";
import { Favorites } from "./pages/favorites/Favorites";
import { RestaurantProvider } from "./context/RestaurantContext";
import { FavoritesContextProvider } from "./context/FavoritesContext";

export const App = () => {
  return (
    <div>
      <RestaurantProvider>
        <FavoritesContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/details/:restoId" element={<About />} />
              <Route path="/favorite" element={<Favorites />} />
              <Route />
            </Routes>
          </BrowserRouter>
        </FavoritesContextProvider>
      </RestaurantProvider>
    </div>
  );
};
