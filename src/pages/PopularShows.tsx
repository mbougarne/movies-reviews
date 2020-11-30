import React, { Component } from 'react';

import Show from '../components/Show';

import configs from '../configs';
import ShowSchema from '../types/Show';

export default class PopularShows extends Component<any, any>
{
  constructor(props: {} | Readonly<{}>)
  {
    super(props);
    this.state = {
      shows: []
    }
  }

  moviesLink() : string
  {
    return configs.BASE_URL + 'tv/popular?api_key=' + configs.API_KEY + '&language=en-US&page=1';
  }

  async fetchShows()
  {
    try {

      const res = await fetch(this.moviesLink());
      const data = await res.json()
      
      this.setState((state: any) => ({
        shows: [...state.shows, data.results]
      }))
      
    } catch (error) {
      console.log(error) 
    }
  }

  componentDidMount()
  {
    this.fetchShows();
  }

  render()
  {
    let { shows } = this.state;  
    let Shows = (shows.length > 0) ? shows[0].map((item: ShowSchema) => <Show show={item} key={item.id} />) : '';

    return (
      <div className="PopularShows container-fluid">
        <h1>Top Rated TV Shows</h1>
        <div className="my-3 py-2">
          <div className="row">
            {Shows}
          </div>
        </div>
      </div>
    )
  }
}