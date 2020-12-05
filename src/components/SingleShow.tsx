import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MVDB from '../configs';

import Error from './Error';
import ShowContent from './singles/ShowContent';
import SingleItem from '../skeleton/SingleItem';

export default function Singleshow()
{

  const initialShow: Record<string, any> = {};

  const [show, setShow] = useState(initialShow);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');


  const { id }: Record<string, any> = useParams();

  const getLink: () => string = (): string => {
    return `${MVDB.BASE_URL}tv/${id}?api_key=${MVDB.API_KEY}&language=en-US&append_to_response=videos`;
  }

  useEffect(() => {
    const fetchshow = async () => {
      const res = await fetch(getLink());
      const data = await res.json();

      /** There is error*/
      if(data.status_code )
      {
        setError(true);
        setMessage(data.status_message);
      } else {
        setShow(data)
      }

      setLoaded(true);
    }
    
    fetchshow();
  }, [id])

  const renderUI = () : any => {
    if(!loaded)
    {

      return <SingleItem />

    } else if(error) {

      return <Error title="404 Not Found" message={message} />

    } else {

      return <ShowContent show={show} />

    }
  }

  return (
    <div className="Singleshow">
      {renderUI()}
    </div>
  )
}