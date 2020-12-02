import MVDB from '../../configs';

import {
  IS_LOADING,
  IS_ERROR,
  LOAD_MOVIES
} from './types';

const loadingTopRatedMovies =async (dispatch: any) => {
  
  dispatch({
    type: IS_LOADING,
    payload: {
      isLoading: true
    }
  })

  const link = MVDB.BASE_URL + 'movie/top_rated?api_key=' + MVDB.API_KEY + '&language=en-US&page=1';
  const res = await fetch(link);
  const data = await res.json();

  if(data.status_code)
  {
    dispatch({
      type: IS_LOADING,
      payload: {
        isLoading: false
      }
    })
    return dispatch({
      type: IS_ERROR,
      payload: {
        isError: true,
        message: data.status_message 
      }
    })
  } 

  dispatch({
    type: IS_LOADING,
    payload: {
      isLoading: false
    }
  })

  dispatch({
    type: IS_ERROR,
    payload: {
      isError: false,
      message: ''
    }
  })

  return dispatch({
    type:LOAD_MOVIES,
    payload: {
      movies: data.results.slice(0, 12)
    }
  })

}

export default loadingTopRatedMovies;