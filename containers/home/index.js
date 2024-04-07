import React from 'react';
import { FeaturedMovie } from "@/components/featured-movie";
import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';
import {Categories} from '@/components/categories';
import { MoviesSection } from '@/components/movies-section';

function HomeContainer({selectedCategory}) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]}  />
      <Categories categories={Genres.genres.slice(0,7)} />
      {selectedCategory.movies.length >0 && (<MoviesSection title='Popular Films' Movies={selectedCategory.movies}/>
      ) }
      <MoviesSection title='Popular Films' movies={Movies.results.slice(1,7)} />
      <MoviesSection title='Your Favorites' movies={Movies.results.slice(7,13)} />
    </div>
  )
}

export default HomeContainer
