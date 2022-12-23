import { MovieItem } from "components/MovieItem/MovieItem"
import { List } from "./MovieList.styled"

export function MovieList({ movies }) {
    return <List>
            {movies.map(movie => {return <MovieItem movie={movie} /> })}
        </List>
    
}