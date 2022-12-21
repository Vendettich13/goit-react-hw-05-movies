import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "utils/moviesdb";
import { Container } from "./App.styled";

export function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies().then(movies => setMovies(movies.data.results))
  }, [])

  return (
    <Container>
      <MovieList movies={movies}/>
    </Container>
  );
};
