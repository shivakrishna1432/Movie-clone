import React, { useState, useEffect } from "react";
import { MOVIES_API } from "../Utils/constants";
import Header from "./Header";
import MoviesContainer from "./MoviesContainer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  const getMovies = async () => {
    const data = await fetch(MOVIES_API);
    const json = await data.json();
    setMovies(json?.results);
    setSearchResults(json?.results);
  };

  return (
    <div>
      <Header movies={movies} setSearchResults={setSearchResults} />
      <MoviesContainer searchResults={searchResults} />
    </div>
  );
};

export default Home;
