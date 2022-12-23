import { useEffect } from "react";
import { getMovieActors } from "utils/moviesdb";

export default function Cast() {


    useEffect(() => {
        getMovieActors()
    })

    return <div></div>
}