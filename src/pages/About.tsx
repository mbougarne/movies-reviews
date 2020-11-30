import React, { Component } from 'react';

export default class About extends Component
{

  render() 
  {
    return (
      <div className="AboutPage container">
        <main>
          <h1 className="text-uppercase font-weight-bold">About</h1>
          <p className="lead mt-5">
            React app for Movies and TV Shows with their details, it's made with using 
            <a href="https://www.themoviedb.org/"><strong>TMDB</strong></a>, the source code is hosted on 
            <a href="https://github.com/mbougarne/movies-reviews"><strong>Github</strong></a>.
          </p>
        </main>
      </div>
    )
  }
}