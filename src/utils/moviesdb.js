import axios from 'axios';

const API_KEY = 'db88cb17e110bf96da2b8bba1fcb8edb';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_URL = 'trending/all/day';
const BY_SEARCH_URL = 'search/movie';
const DETAILS_URL = 'movie/';
const ACTORS_URL = 'movie/get-movie-credits';
const REVIEWS = 'movie/get-movie-reviews';

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}${TRENDING_URL}?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieBySearch(query) {
  const response = await axios.get(
    `${BASE_URL}${BY_SEARCH_URL}?api_key=${API_KEY}&query=${query}`
  );
  return response;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `${BASE_URL}${DETAILS_URL}${id}?api_key=${API_KEY}`
  );
  return response;
}

export async function getMovieActors(page, query) {
  const response = await axios.get(
    `${BASE_URL}${ACTORS_URL}?api_key=${API_KEY}&page=${page}&query=${query}`
  );
  return response;
}

export async function getMovieReviews(page, query) {
  const response = await axios.get(
    `${BASE_URL}${REVIEWS}?api_key=${API_KEY}&page=${page}&query=${query}`
  );
  return response;
}
