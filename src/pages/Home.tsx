import React, { Component, ReactNode } from 'react';
import Header from '../components/Header';

import configs from '../configs'

export default class Home extends Component<any, any>
{

	constructor(props: {} | Readonly<{}>)
	{
		super(props);
		this.state = {
			movies: [],
			tvs: []
		}
	}

	// Get API path of top rated movies
	moviesLink() : string 
	{
		return configs.BASE_URL + 'movie/top_rated?api_key=' + configs.API_KEY + '&language=en-US&page=1';
	}

	// Get API path of top rated TV shows
	tvsLink() : string
	{
		return configs.BASE_URL + 'tv/top_rated?api_key=' + configs.API_KEY + '&language=en-US&page=1';
	}

	async fetchMovies()
	{
		const res = await fetch(this.moviesLink());
		const data = await res.json();

		this.setState((state: any) => ({
			movies: [...state.movies, data.results]
		}));
	}

	async fetchShows()
	{
		const res = await fetch(this.moviesLink());
		const data = await res.json();

		this.setState((state: any) => ({
			tvs: [...state.tvs, data.results]
		}))
	}

	// Fetch movies and TV show, when component mounted
	componentDidMount()
	{
		this.fetchMovies();
		this.fetchShows();
	}

	render(): ReactNode
	{
		return (
			<div className="HomePage">
				<Header />
			</div>
		)
	}
}