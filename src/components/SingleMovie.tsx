import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MVDB from '../configs';

import Error from './Error';
import MovieContent from './singles/MovieContent';
import SingleItem from '../skeleton/SingleItem';

export default function SingleMovie()
{

  const initialMovie: Record<string, any> = {};

  let [movie, setMovie] = useState(initialMovie);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(false);
  let [message, setMessage] = useState('');


  const { id }: Record<string, any> = useParams();

  const getLink: () => string = (): string => {
    return `${MVDB.BASE_URL}movie/${id}?api_key=${MVDB.API_KEY}&language=en-US&append_to_response=videos`;
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(getLink());
      const data = await res.json();

      /** There is error*/
      if(data.status_code )
      {
        setError(true);
        setMessage(data.status_message);
      } else {
        setMovie(data)
      }

      setLoaded(true);
    }
    
    fetchMovie();
  }, [id])

  const renderUI = () : any => {
    if(!loaded)
    {
      return <SingleItem />

    } else if(error) {

      return <Error title="404 Not Found" message={message} />

    } else {

      return <MovieContent movie={movie} />
      
    }
  }

  return (
    <div className="SingleMovie">
      {renderUI()}
    </div>
  )
}