import { Image, Text } from "./MovieItem.styled";
import { MyLink } from "./MovieItem.styled";
import { Box } from "components/MovieItem/MovieItem.styled"

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';


export function MovieItem({ movie: { poster_path, title, name, id, vote_average }, location }) {
    return <li>
        <MyLink to={`/movies/${id}`} state={{ from: location }} >
        <Box>
        <Image src={`${BASE_IMG_URL}` + poster_path} alt={title || name} />
                <Text style={{fontSize: '20px'}}>{title || name}</Text>
                <Text>Rate: {vote_average.toFixed(1)} / 10</Text>
        </Box>
        </MyLink>
        </li>
}