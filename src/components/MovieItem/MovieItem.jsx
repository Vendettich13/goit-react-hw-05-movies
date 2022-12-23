import { Image, Text } from "./MovieItem.styled";

export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieItem({movie: { poster_path, title, name }}) {
    return <>
        <Image src={`${BASE_IMG_URL}` + poster_path} alt={title || name} />
        <Text>{title || name}</Text>
    </>
}