import React from 'react';
import { NavLink } from 'react-router-dom';

import MovieSchema from '../types/Movie';

const Movie = ({ movie }: MovieSchema) => {
  return (
    <div className="Movie">
      <div className="col-md-3">
        <div className="card" style={{ width: '18rem'}}>
          <img 
            src={movie.poster_path} 
            className="card-img-top" 
            alt={movie.title} 
          />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <NavLink 
            exact
            to={'/movies/' + movie.id} 
            className="btn btn-primary">
            More Details
          </NavLink>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;