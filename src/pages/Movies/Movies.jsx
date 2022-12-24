import { useSearchParams} from "react-router-dom";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getMovieBySearch } from "utils/moviesdb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form } from "./Movies.styled";
import { FcSearch } from "react-icons/fc";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query');

    useEffect(() => {
        if (searchQuery === '' || searchQuery === null) { return }
        
        getMovieBySearch(searchQuery).then(images => {
            if (images.data.results.length === 0) {
                return toast.warn('Please enter another movie name...', {autoClose: 3000})
            }
            setMovies(images.data.results)
        })
     }, [searchQuery])
    
    
     function handleSubmit(e) {
        e.preventDefault();
        if (e.currentTarget.elements.input.value === '') {
            return toast.warn('Please enter something to search', {autoClose: 2000}) 
        } else
        setSearchParams({query: e.currentTarget.elements.input.value})
        e.currentTarget.elements.input.value = '';
        setMovies([]);
  }

    return <>
        <Form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" autoFocus placeholder="Enter movie to search..." name="input"/>
        <Button type="submit"><FcSearch size={25}/><p>Search</p></Button>
        </Form>
        <ToastContainer/>
        <MovieList movies={movies} />
        </>
}