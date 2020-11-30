import React from 'react';
import { NavLink } from 'react-router-dom';

import ShowSchema from '../types/Show';
import { MVDB } from '../configs'

const Show = ({ show }: ShowSchema) => {
  return (
    <div className="col-md-2">
      <div className="Poster">
        <div className="card border-0">
          <div className="PosterImage">
            <img 
              src={MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE + '/' + show.poster_path} 
              className="img-fluid" 
              alt={show.name} 
            />
          </div>
          <div className="PosterDetails">
            <div className="card-body">
              <h5 className="card-title">{show.name}</h5>
              <p className="card-text text-date">{show.first_air_date}</p>
              <NavLink 
                exact
                to={'/shows/' + show.id} 
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

export default Show;