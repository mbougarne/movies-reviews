import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import MVDB from '../../configs';
import { IS_SEARCHING } from '../../store/actions/types';

const MovieItem = ({ movie }: Record<string, any>) => {

  const dispatch = useDispatch(); 

  const hideSearch = () => {
    dispatch({
      type: IS_SEARCHING,
			payload: {
				searching: false
			}
    })
  }

  return (
    <div className="search-item row mb-2">
      <div className="col-3 col-md-2">
        <img 
          src={MVDB.IMAGE_BASE_URL + MVDB.POSTER_SEARCH + '/' + movie.poster_path}
          className="img-fluid" 
          alt={movie.title} 
        />
      </div>
      <div className="col-9 col-md-10">
        <h5 className="card-title text-white">{movie.title}</h5>
        <div>
          <span className="card-text text-date">{movie.release_date}</span>
          <NavLink 
            exact
            to={'/movies/' + movie.id} 
            className="btn btn-poster btn-sm shadow ml-3"
            onClick={hideSearch}>
            More Details
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default MovieItem;