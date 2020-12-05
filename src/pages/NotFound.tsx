import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NotFound extends Component<any, any>
{
  render()
  {
    return (
      <div className="NotFound container text-center mt-5">
        <h1 className="display-3 font-weight-bold">
          Ooops! Not Found :(
            <br/>
            <span className="NoutFound-404">
              404
            </span>
        </h1>
        <div className="lead mt-3">
          <NavLink
            exact 
            to="/"
            className="btn btn-poster"
          > 
            Back to home   
          </NavLink>
        </div>
      </div>
    )
  }
}