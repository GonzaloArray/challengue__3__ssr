import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./page/Home";
import { LayoutSearch } from "./layout/LayoutSearch";
import { useSearch } from "./hook/useSearch";
import { Details } from "./page/Details";
import { MoviesContext } from "./context/MoviesContext";

function App() {
  const { movies, handleSearch } = useSearch();

  return (
    <MoviesContext>
      <Routes>
        <Route path="/" element={<LayoutSearch handleSearch={handleSearch} />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="/:detail" element={<Details />} />
        </Route>
      </Routes>
    </MoviesContext>
  );
}

export default App;
