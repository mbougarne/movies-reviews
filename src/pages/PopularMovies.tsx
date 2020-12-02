import React, { Component } from 'react';
import { connect } from 'react-redux';
import { popularMovies } from '../store/actions';

import Movie from '../components/Movie';
import Error from '../components/Error';

import MovieSchema from '../types/Movie';
import StateScheme from '../types/State';

class PopularMovies extends Component<any, any>
{
  constructor(props: {} | Readonly<{}>)
  {
    super(props);
  }

  componentDidMount()
  {
    this.props.popularMovies()
  }

  render()
  {
    let { movies, error, errorMessage, loaded } = this.props;  
    let Movies = (movies.length > 0) ? movies.map((item: MovieSchema) => <Movie movie={item} key={item.id} />) : '';

    const UI = () => {

      if(error)
			{
				return <Error title="404 Not Found" message={errorMessage} />
			} else if(!loaded) {
				return <h1>LOADING DATA...</h1>
      }
      
      return (
        <>
          <div className="my-3 py-2">
            <h1 className="mb-4 text-uppercase font-weight-bold">Popular Movies</h1>
            <div className="row">
              {Movies}
            </div>
          </div>
        </>
      )

    }

    return (
      <div className="PopularMovies container-fluid">
        <UI />
      </div>
    )
  }
}

const mapStateToProps = (state: StateScheme) => ({
  movies: state.popularMovies,
  error: state.isError,
  errorMessage: state.message,
  loaded: state.isLoaded
})

export default connect(mapStateToProps, { popularMovies })(PopularMovies);