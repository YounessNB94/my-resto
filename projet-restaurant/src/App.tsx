import "./App.css";
import { Home } from "./pages/homepage/Homepage";
import { Header } from "./shared/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/details/Details";
import { Favorites } from "./pages/favorites/Favorites";

export const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="details" element={<About />} />
            <Route path="favorite" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
};
