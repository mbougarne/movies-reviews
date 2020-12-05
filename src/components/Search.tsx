import React, { useState } from 'react';

import Icon from './Icon';
import Error from './Error';
import MovieItem from './search/MovieItem';
import ShowItem from './search/ShowItem';

import MVDB from '../configs';

import SearchSkeleton from '../skeleton/SearchSkeleton';

export default function Search()
{

  let initialItems: Record<string, any>[] = []

  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('movie');
  const [items, setItems] = useState(initialItems);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(true);

  const getSearchLink = () : string =>
  {
    return `${MVDB.BASE_URL}search/${itemType}?api_key=${MVDB.API_KEY}&language=en-US&page=1&query=${itemName}&include_adult=false`;
  }

  const searching = async () => {
    let res = await fetch(getSearchLink());
    let data = await res.json();
    
    setItems([]);
    setItemName('');
    setError(( typeof data.results === 'undefined' || data.results.length === 0) ? true : false);
    
    if(!error)
    {
      setLoaded(true);
      setItems(data.results)
    }
  }

  const onSearch = (e: any) => {
    e.preventDefault();
    setLoaded(false);
    searching();
  }

  const UI = () => {
    if(!loaded)
    {

      return <SearchSkeleton />

    } else if(error) {

      return <Error title="404 Not Found" message={"There is no result"} />

    } else {
      
      let result = (itemType === 'movie') 
        ? items.map((m: any) => <MovieItem key={m.id} movie={m} />)
        : items.map((s: any) => <ShowItem key={s.id} show={s} />);
      
      return result;
    }
  }

  return (
    <div 
      className="SearchPage"
      style={{ position: (loaded) ? 'absolute' : 'fixed' }}>
      <div className="search-wrapper my-3">
        <div className="container">
          {/* FORM */}
          <div className="form-container mt-5 pt-4">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="row">
                  <div className="col-9">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Type a movie or show name"
                      value={itemName}
                      onChange={e => setItemName(e.target.value)}
                      />
                  </div>
                  <div className="col-3">
                    <button 
                      className="btn btn-search"
                      onClick={onSearch}
                    >
                      <Icon name="search" />
                    </button>
                  </div>
                </div>
                {/* Movie or Show */}
                <div className="row mt-2">
                  <div className="col-6 col-md-2">
                    <div className="form-check">
                      <input 
                        type="radio"
                        className="form-check-input"
                        value="movie"
                        id="movieRad"
                        onChange={e => setItemType(e.target.value)}
                        checked={(itemType === 'movie') ? true : false}
                        name="searchType"
                      />
                      <label 
                        htmlFor="movieRad"
                        className="form-check-label font-weight-bold text-white">
                        Movie
                      </label>
                    </div>
                  </div>
                  <div className="col-6 col-md-2">
                    <div className="form-check">
                      <input 
                        type="radio"
                        className="form-check-input"
                        value="tv"
                        id="tvRad"
                        onChange={e => setItemType(e.target.value)}
                        checked={(itemType === 'tv') ? true : false}
                        name="searchType"
                      />
                      <label 
                        htmlFor="tvRad" 
                        className="form-check-label font-weight-bold text-white"
                      >
                        TV Show
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Result */}
          <div className="search-result mt-4">
            <div className="row">
              <div className="col-md-8 mx-auto">
                {UI()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}