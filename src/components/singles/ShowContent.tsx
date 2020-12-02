import React, { useState } from 'react';
import Icon from '../Icon';
import Trailer from '../Trailer';

import MVDB from '../../configs';
import ShowSchema from '../../types/Show';
import { getYearOfDate, timeConverter } from '../../helpers';

const ShowContent = ({ show }: ShowSchema) => 
{
  const [showTrailer, setShowTrailer] = useState(false);
  const netLogo = MVDB.IMAGE_BASE_URL + 'w45/';
  const genres = show.genres.map((g: any) =>  <span key={g.id}>{g.name} <Icon name="circle mr-1" /></span>);
  const languages = show.spoken_languages.map((l: any, i: number) =>  <li key={i}>{l.english_name}</li>);
  const networks = show.networks.map((n: any) => <img key={n.id} src={netLogo + n.logo_path} alt={n.name} />);

  const getTrailerLink = () : string | void => {
    if(show.videos.results.length > 0)
    {
      return MVDB.YOUTUBE_WATCH + show.videos.results[0].key
    }
  }

  const watchTrailer = () : void => setShowTrailer(true)
  const hideTrailer = () : void => setShowTrailer(false);

  return (
    <div className="ItemContent">
      {/* Hero */}
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${MVDB.IMAGE_BASE_URL + MVDB.BACKDROP_SIZE + show.backdrop_path})`
        }}
      >
        <div className="overly"></div>
        <div className="container-fluid">
          <div className="row">
            {/* Poster */}
            <div className="col-md-4">
              <div className="item-poster text-center">
                <img 
                  src={MVDB.IMAGE_BASE_URL + MVDB.POSTER_SIZE_SM + '/' + show.poster_path}
                  alt={show.name} 
                  className="img-fluid"/>
              </div>
            </div>
            {/* Details */}
            <div className="col-md-8">
              {/* Title - Year - Genres - Duration */}
              <div className="production">

              <h1 className="item-headline font-weight-bold">
                {show.name}
                <span className="text-muted ml-2">
                  ({getYearOfDate(show.first_air_date)})
                </span>
              </h1>

              <p className="font-weight-bold">
                <span> {show.first_air_date} </span>
                <Icon name="circle my-2" />
                <span> {genres} </span>
                <span> {timeConverter(show.episode_run_time[0])} </span>
              </p>
              </div>
              {/* Score - trailer - IMDB */}
              <div className="trailer-score">
                <h3>
                  <span className="score-icon mr-3">
                    {show.vote_average}
                    <Icon name="star ml-2" /> 
                  </span>

                  {(show.videos.results.length > 0) && <span className="trailer-ico">
                    <button className="btn btn-play" onClick={watchTrailer}>
                      <Icon name="play text-star" />
                    </button>
                  </span>}
                </h3>
              </div>
              <div className="details-content mt-5">
                <h5 className="text-muted mb-3">{show.tagline}</h5>
                <h3>Overview</h3>
                <p className="mt-3">{show.overview}</p>
              </div>
              {/* More Details */}
              <div className="row">
                <div className="col-4 col-md-3">
                  <p className="font-weight-bold text-uppercase ">
                    <span className="d-block"> Type </span>
                    {show.type}
                  </p>
                </div>
                
                <div className="col-4 col-md-3">
                  <p className="font-weight-bold text-uppercase ">
                    <span className="d-block"> Status </span>
                    <span className={(show.status.toLowerCase() === 'ended') ? 'text-danger' : 'text-success'}>
                      {show.status}
                    </span>
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
          {(show.networks.length > 0) && <div className="row">
            <div className="col-12">
              <div className="float-right">
                {networks}
              </div>
            </div>
          </div>}
          <div className="row">
            <div className="col-12">
              <h3 className="font-weight-bold text-uppercase mb-4">
                Media
              </h3>
            </div>
          </div>
          {/* Vidoes */}
          <div className="row">
            {(show.videos.results.length > 0) ? show.videos.results.map((video: any) => (
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

export default ShowContent;