import { getTrendingMovies } from "utils/moviesdb";
import { useEffect, useState } from "react";
import { MovieList } from "components/MovieList/MovieList";
import { Title } from "./Home.styled";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
    getTrendingMovies().then(movies => setMovies(movies.data.results)).catch(error => setError(error.message))
  }, [])
    
    return <>
        <Title>Trending today</Title>
        {error && "Something wrong, reload the page"}
        <MovieList movies={movies} />
    </>
}