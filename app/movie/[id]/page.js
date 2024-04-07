import { notFound } from "next/navigation";
import React from "react";
import { MovieContainer } from "@/containers/movie";
import Movies from '@/mocks/movies.json'

function MoviePage({ params, searchParams }) {
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id);

    if(!movieDetail){
        notFound();
    }

    if(searchParams.error=== 'true'){
        throw new error("Error Happened.")
    }

    return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;