import React from 'react';
import { NavLink } from 'react-router-dom';

import MovieSchema from '../types/Movie';
import MVDB from '../configs'

const Movie = ({ movie }: MovieSchema) => {
  return (
    <div className="col-md-2">
      <div className="Poster">
        <div className="card border-0">
          <div className="PosterImage">
            <img 
              src={MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE + '/' + movie.poster_path} 
              className="img-fluid" 
              alt={movie.title} 
            />
          </div>
          <div className="PosterDetails">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text text-date">{movie.release_date}</p>
              <NavLink 
                exact
                to={'/movies/' + movie.id} 
                className="btn btn-poster">
                More Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;