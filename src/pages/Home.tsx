import React, { Component, ReactNode } from 'react';
import Movie from '../components/Movie';
import Show from '../components/Show';
import Error from '../components/Error';

import MovieSchema from '../types/Movie';
import ShowSchema from '../types/Show';
import StateSchema from '../types/State';

import { connect } from 'react-redux';
import { topRatedMovies, topRatedShows } from '../store/actions';

class Home extends Component<any, any>
{

	constructor(props: {} | Readonly<{}>)
	{
		super(props);
	}


	componentDidMount()
	{
		this.props.topRatedMovies()
		this.props.topRatedShows()
	}

	render(): ReactNode
	{
		const { movies, shows, error, errorMessage, loaded } = this.props;
		const Movies = (movies.length > 0) ? movies.map((item: MovieSchema) => <Movie movie={item} key={item.id} />) : '';
		const Shows = (shows.length > 0) ? shows.map((item: ShowSchema) => <Show show={item} key={item.id} />) : '';
		
		const UI = () => {
			
			if(error)
			{
				return <Error title="404 Not Found" message={errorMessage} />
			} else if(!loaded) {
				return <h1>LOADING DATA...</h1>
			}

			return (
					<>
					{/* Top Rated Movies */}
					<section className="TopRatedSection">
						<h2 className="mb-4 text-uppercase font-weight-bold">Top Rated Movies</h2>
						<div className="my-3 py-2">
							<div className="row">
								{Movies}
							</div>
						</div>
					</section>
					{/* Top Rated Shows */}
					<section className="TopRatedSection mt-5">
						<h2 className="mb-4 text-uppercase font-weight-bold">Top Rated Shows</h2>
						<div className="my-3 py-2">
							<div className="row">
								{Shows}
							</div>
						</div>
					</section>
				</>
			)
		}

		return (
			<div className="HomePage container">
				<UI />
			</div>
		)
	}
}

const mapStatetoProps = (state: StateSchema) => {
	return {
		movies: state.movies,
		shows: state.shows,
		error: state.isError,
		errorMessage: state.message,
		loaded: state.isLoaded
	}
}

export default connect(
	mapStatetoProps,
	{ topRatedMovies, topRatedShows }
)(Home);