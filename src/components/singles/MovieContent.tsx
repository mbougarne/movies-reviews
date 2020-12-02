import React, { useState } from 'react';
import Icon from '../Icon';
import Trailer from '../Trailer';

import MVDB from '../../configs';
import MovieSchema from '../../types/Movie';
import { getYearOfDate, timeConverter, budgetRevenueConverter } from '../../helpers';

const MovieContent = ({ movie }: MovieSchema) => 
{
  const [showTrailer, setShowTrailer] = useState(false);
  const genres = movie.genres.map((g: any) =>  <span key={g.id}>{g.name} <Icon name="circle mr-1" /></span>);
  const languages = movie.spoken_languages.map((l: any, i: number) =>  <li key={i}>{l.english_name}</li>);

  const getTrailerLink = () : string | void => {
    if(movie.videos.results.length > 0)
    {
      return MVDB.YOUTUBE_WATCH + movie.videos.results[0].key;
    }
  }

  const watchTrailer = () : void => setShowTrailer(true);
  const hideTrailer = () : void => setShowTrailer(false);

  return (
    <div className="ItemContent">
      {/* Hero */}
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${MVDB.IMAGE_BASE_URL + MVDB.BACKDROP_SIZE + movie.backdrop_path})`
        }}
      >
        <div className="overly"></div>
        <div className="container-fluid">
          <div className="row">
            {/* Poster */}
            <div className="col-md-4">
              <div className="item-poster text-center">
                <img 
                  src={MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE_SM + '/' + movie.poster_path}
                  alt={movie.title} 
                  className="img-fluid"/>
              </div>
            </div>
            {/* Details */}
            <div className="col-md-8">
              {/* Title - Year - Genres - Duration */}
              <div className="production">

              <h1 className="item-headline font-weight-bold">
                {movie.title}
                <span className="text-muted ml-2">
                  ({getYearOfDate(movie.release_date)})
                </span>
              </h1>

              <p className="font-weight-bold">
                <span> {movie.release_date} </span>
                <Icon name="circle my-2" />
                <span> {genres} </span>
                <span> {timeConverter(movie.runtime)} </span>
              </p>
              </div>
              {/* Score - trailer - IMDB */}
              <div className="trailer-score">
                <h3>
                  <span className="score-icon mr-3">
                    {movie.vote_average}
                    <Icon name="star ml-2" /> 
                  </span>

                  <span className="imdb-ico mr-3">
                    <a 
                      href={'https://www.imdb.com/title/' + movie.imdb_id}
                      title="IMDB profile"
                      target="_blank"
                      rel="noreferrer">
                      <Icon name="imdb text-star" brand={true} />
                    </a>
                  </span>

                  {(movie.videos.results.length > 0) && <span className="trailer-ico">
                    <button className="btn btn-play" onClick={watchTrailer}>
                      <Icon name="play text-star" />
                    </button>
                  </span>}
                </h3>
              </div>
              <div className="details-content mt-5">
                <h5 className="text-muted mb-3">{movie.tagline}</h5>
                <h3>Overview</h3>
                <p className="mt-3">{movie.overview}</p>
              </div>
              {/* More Details */}
              <div className="row">
                <div className="col-4 col-md-3">
                  <p className="font-weight-bold text-uppercase ">
                    <span className="d-block"> Budget </span>
                    <span className="text-danger">{budgetRevenueConverter(movie.budget)}</span>
                  </p>
                </div>
                
                <div className="col-4 col-md-3">
                  <p className="font-weight-bold text-uppercase ">
                    <span className="d-block"> Revenue </span>
                    <span className="text-success">{budgetRevenueConverter(movie.revenue)}</span>
                  </p>
                </div>
                
                <div className="col-4 col-md-3">
                  <p className="font-weight-bold text-uppercase ">
                    <span className="d-block"> Status </span>
                    <span className="text-success">{movie.status}</span>
                  </p>
                </div>
                
                <div className="col-4 col-md-3">
                  <p className="font-weight-bold text-uppercase ">
                    <span className="d-block"> Languages </span>
                  </p>
                  <ul>
                    {languages}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* More Dteilas */}
      <section className="trailers">
        <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="font-weight-bold text-uppercase mb-4">
                  Media
                </h3>
              </div>
            </div>
            {/* Vidoes */}
            <div className="row">
              {(movie.videos.results.length > 0) ? movie.videos.results.map((video: any) => (
                <div className="col-md-4" key={video.id}>
                  <div className="embed-responsive embed-responsive-4by3 mb-3">
                    <iframe 
                      className="embed-responsive-item" 
                      src={MVDB.YOUTUBE_WATCH + video.key}></iframe>
                  </div>
                </div>
              )) : <div className="col-12"><p className="font-weight-bold text-danger">There is no media for this item.</p></div>}
            </div>
        </div>
      </section>
      {/* Trailer */}
      {showTrailer && <Trailer media={getTrailerLink()} hide={hideTrailer} />}
    </div>
  )
}

export default MovieContent;