import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MVDB from '../../configs';
import { IS_SEARCHING } from '../../store/actions/types';

const ShowItem = ({ show }: Record<string, any>) => {

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
          src={MVDB.IMAGE_BASE_URL + MVDB.POSTER_SEARCH + '/' + show.poster_path}
          className="img-fluid" 
          alt={show.name} 
        />
      </div>
      <div className="col-9 col-md-10">
        <h5 className="card-title text-white">{show.name}</h5>
        <div>
          <span className="card-text text-date">{show.first_air_date}</span>
          <NavLink 
            exact
            to={'/shows/' + show.id} 
            className="btn btn-poster btn-sm shadow ml-3"
            onClick={hideSearch}>
            More Details
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ShowItem;