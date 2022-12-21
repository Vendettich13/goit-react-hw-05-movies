import axios from 'axios';

const API_KEY = 'db88cb17e110bf96da2b8bba1fcb8edb';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response;
}
