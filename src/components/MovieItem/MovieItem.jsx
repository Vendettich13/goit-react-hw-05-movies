import { Image, Text } from "./MovieItem.styled";
import { Link } from "../MovieItem/MovieItem.styled"
import { Box } from "components/MovieItem/MovieItem.styled"

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieItem({movie: { poster_path, title, name, id }, location}) {
    return <Link to={`movies/${id}` } state={{from: location}}>
    <Box key={id}>
        <Image src={`${BASE_IMG_URL}` + poster_path} alt={title || name} />
        <Text>{title || name}</Text>
        </Box>
        </Link>
}