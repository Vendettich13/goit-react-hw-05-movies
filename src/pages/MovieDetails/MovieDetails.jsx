import { Outlet, useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from "utils/moviesdb";
import { BASE_IMG_URL } from "components/MovieItem/MovieItem";
import { useState, useEffect, Suspense } from "react";
import { Image, Description, OverviewText, Title, Wrapper, Year, Genres, LinkWrapper, Additional, BackLink } from "./MovieDetails.styled";
import { MyLink } from "./MovieDetails.styled";
import {FaArrowLeft} from "react-icons/fa"

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    const location = useLocation();

    const backLinkHref = location.state?.from ?? "/";

    useEffect(() => {
        getMovieDetails(Number(movieId)).then(movie => setMovie(movie.data)).catch(error => setError(error.message))
    },[movieId])

    return <>
        {error && "Something wrong, reload the page..."}
        {movie &&
            <Wrapper>
                <BackLink to={backLinkHref}><FaArrowLeft/>Back to movies</BackLink>
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
                <LinkWrapper>
                    <Additional>Additional information</Additional>
                <MyLink to='cast'>Cast</MyLink>
                <MyLink to='reviews'>Reviews</MyLink>
            </LinkWrapper>
            </Wrapper>}
        <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
        </> 
}