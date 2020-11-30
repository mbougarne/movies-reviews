import React, { Component, ReactNode } from 'react';
import Header from '../components/Header';
import Movie from '../components/Movie';

import configs from '../configs';
import MovieSchema from '../types/Movie';

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
			movies: [...state.movies, data.results.slice(0, 12)]
		}));
	}

	async fetchShows()
	{
		const res = await fetch(this.moviesLink());
		const data = await res.json();

		this.setState((state: any) => ({
			tvs: [...state.tvs, data.results.slice(0, 12)]
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
		const { movies } = this.state;
		const Movies = (movies.length > 0) ? movies[0].map((item: MovieSchema) => <Movie movie={item} key={item.id} />) : '';

		return (
			<div className="HomePage container">
				<Header />
				{/* Top Rated Movies */}
				<section className="TopRatedSection">
					<h2 className="mb-4 text-uppercase font-weight-bold">Top Rated Movies</h2>
					<div className="my-3 py-2">
						<div className="row">
							{Movies}
						</div>
					</div>
				</section>
			</div>
		)
	}
}