import { Image } from "./MovieItem.styled";

export function MovieItem({movie: {original_title, poster_path, title }}) {
    return <>
        <Image src={poster_path} alt={title || original_title} />
        <p>{title || original_title}</p>
    </>
}