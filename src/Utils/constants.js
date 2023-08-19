export const API_KEY = "70551947008d4d1fc367caa7df87a27a";

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";

export const MOVIES_API =
  `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=` +
  `${process.env.REACT_APP_API_KEY}`;

export const MOVIE_INFO_API =
  `https://api.themoviedb.org/3/movie/credits?api_key=` +
  `${process.env.REACT_APP_API_KEY}`;
