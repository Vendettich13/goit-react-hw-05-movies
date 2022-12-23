import { Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from "utils/moviesdb";
import { BASE_IMG_URL } from "components/MovieItem/MovieItem";
import { useState, useEffect, Suspense } from "react";
import { Image, Description, OverviewText, Title, Wrapper, Year, Genres } from "./MovieDetails.styled";
import { Link } from "./MovieDetails.styled";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        getMovieDetails(Number(movieId)).then(movie => setMovie(movie.data))
    },[movieId])

    return <>
        {movie &&
            <Wrapper>
                <Link to={backLinkHref}>Back to movies</Link>
                <div style={{display: 'flex', marginBottom: '20px'}}>
                <Image src={movie.poster_path ? `${BASE_IMG_URL}` + movie.poster_path : 'https://static7.depositphotos.com/1021974/739/i/950/depositphotos_7397821-stock-photo-cinema.jpg'} alt={movie.title || movie.name} />
                <div style={{padding: "30px 0"}}>
                    <Title>{movie.title || movie.name}</Title>
                    <Year>({movie.release_date})</Year>
                    <Description>Overview</Description>
                    <OverviewText>{movie.overview}</OverviewText>
                    <Description>Genres</Description>
                    <Genres>
                    {movie.genres.map(genre => { return genre.name }).join(', ')}
                    </Genres>
                    </div>
                    </div>
            <div>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Cast</Link>
            </div>
            </Wrapper>}
        <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
        </> 
}