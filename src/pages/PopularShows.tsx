import React, { Component } from 'react';
import { connect } from 'react-redux';
import { popularShows } from '../store/actions';

import Show from '../components/Show';
import Error from '../components/Error';

import ShowSchema from '../types/Show';
import StateSchema from '../types/State';

class PopularShows extends Component<any, any>
{
  constructor(props: {} | Readonly<{}>)
  {
    super(props);
  }

  componentDidMount()
  {
    this.props.popularShows();
  }

  render()
  {
    let { shows, error, errorMessage, loaded } = this.props;  
    let Shows = (shows.length > 0) ? shows.map((item: ShowSchema) => <Show show={item} key={item.id} />) : '';

    const UI = () => {
      if(error)
      {
        return <Error title="404 Not Found" message={errorMessage} />
      } else if (!loaded) {
        return <h1>LOADING DATA...</h1>
      }

      return (
        <>
          <div className="my-3 py-2">
            <h1 className="mb-4 text-uppercase font-weight-bold">Top Rated TV Shows</h1>
            <div className="row">
              {Shows}
            </div>
          </div>
        </>
      )
    }

    return (
      <div className="PopularShows container-fluid">
        <UI />
      </div>
    )
  }
}

const mapStateToProps = (state: StateSchema) => ({
  shows: state.popularShows,
  error: state.isError,
  errorMessage: state.message,
  loaded: state.isLoaded
});


export default connect(mapStateToProps, { popularShows })(PopularShows);
