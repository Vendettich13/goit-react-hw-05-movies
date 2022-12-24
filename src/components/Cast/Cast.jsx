import { useEffect, useState } from "react";
import { getMovieActors } from "utils/moviesdb";
import { useParams } from "react-router-dom";
import { CastItem } from "components/CastItem/CastItem";
import { List } from "./Cast.styled";


export default function Cast() {
    const [cast, setCast] = useState([])
    const { movieId } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovieActors(Number(movieId)).then(credits => setCast(credits.data.cast)).catch(error => setError(error.message))
    }, [movieId])

    return <>
        {error && "Something wrong, reload the page..."}
        <List>
            {cast.map(actor => {return <CastItem actor={actor} key={actor.id} />})}
        </List>
    </>
}