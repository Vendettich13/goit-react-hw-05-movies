import { MovieItem } from "components/MovieItem/MovieItem"
import { Box } from "components/MovieItem/MovieItem.styled"
import { Link } from "../../pages/Home/Home.styled"
import { List } from "./MovieList.styled"

export function MovieList({ movies, location }) {
    return <>
        <List>
            {movies.map(movie => {
                return <Box key={movie.id}>
                    <Link to={`movies/${movie.id}` } state={{from: location}}>
                    <MovieItem movie={movie} />
                    </Link>
                </Box>
        })}
        </List>
        </>
    
}