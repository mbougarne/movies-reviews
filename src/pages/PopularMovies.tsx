import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Movie from '../components/Movie';

import configs from '../configs';
import MovieSchema from '../types/Movie';

export default class PopularMovies extends Component<any, any>
{
  constructor(props: {} | Readonly<{}>)
  {
    super(props);
    this.state = {
      movies: []
    }
  }

  moviesLink() : string
  {
    return configs.BASE_URL + 'movie/popular?api_key=' + configs.API_KEY + '&language=en-US&page=1';
  }

  async fetchMovies()
  {
    try {

      const res = await fetch(this.moviesLink());
      const data = await res.json()
      console.log(data)
      this.setState((state: any) => ({
        movies: [...state.movies, data.results]
      }))

    } catch (error) {
      console.log(error) 
    }
  }

  componentDidMount()
  {
    this.fetchMovies();
  }

  render()
  {
    let { movies } = this.state;  
    let Movies = (movies.length > 0) ? movies[0].map((item: MovieSchema) => <Movie movie={item} key={item.id} />) : '';

    return (
      <div className="PopularMovies container-fluid">
        <h1>Top Rated Movies</h1>
        <div className="my-3 py-2">
          <div className="row">
            {Movies}
          </div>
        </div>
      </div>
    )
  }
}