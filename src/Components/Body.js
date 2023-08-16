import React, { useEffect, useState } from "react";
import { MOVIES_API } from "../Utils/constants";
import { MovieCard } from "./MovieCard";

const Body = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch(MOVIES_API);
    const json = await data.json();
    console.log(json.results[0]);
    setMovie(json.results);
  };

  return (
    <div>
      <div className="flex flex-wrap m-2 p-2">
        {movie.map((movie) => (
          <MovieCard props={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
