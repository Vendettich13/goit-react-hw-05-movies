import { useLocation } from "react-router-dom"
import { MovieItem } from "components/MovieItem/MovieItem"
import { List } from "./MovieList.styled"

export function MovieList({ movies }) {

    const location = useLocation();

    return <List>
        {movies.map(movie => { return <MovieItem movie={movie} location={location} key={movie.id} /> })}
        </List>
    
}