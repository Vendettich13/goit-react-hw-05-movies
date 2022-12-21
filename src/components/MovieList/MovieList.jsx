import { MovieItem } from "components/MovieItem/MovieItem"
import { Box } from "components/MovieItem/MovieItem.styled"
import { List } from "./MovieList.styled"

export function MovieList({ movies }) {
    return <><h2>Tranding today</h2>
        <List>
        {movies.map(movie => {
            return <Box key={movie.id}><MovieItem movie={movie} /></Box>
        })}
        </List>
        </>
    
}