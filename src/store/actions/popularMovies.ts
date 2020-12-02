import MVDB from '../../configs';

import {
  IS_LOADING,
  IS_ERROR,
  LOAD_POPULAR_MOVIES
} from './types';

const popularMovies =async (dispatch: any) => {
  
  dispatch({
    type: IS_LOADING,
    payload: {
      isLoading: true
    }
  })

  const link = MVDB.BASE_URL + 'movie/popular?api_key=' + MVDB.API_KEY + '&language=en-US&page=1';
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
    type:LOAD_POPULAR_MOVIES,
    payload: {
      popularMovies: data.results
    }
  })

}

export default popularMovies;