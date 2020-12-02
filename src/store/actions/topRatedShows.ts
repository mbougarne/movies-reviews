import MVDB from '../../configs';

import {
  IS_LOADING,
  IS_ERROR,
  LOAD_SHOWS
} from './types';

const topRatedShows =async (dispatch: any) => {
  
  dispatch({
    type: IS_LOADING,
    payload: {
      isLoading: true
    }
  })

  const link = MVDB.BASE_URL + 'tv/top_rated?api_key=' + MVDB.API_KEY + '&language=en-US&page=1';
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
    type:LOAD_SHOWS,
    payload: {
      shows: data.results.slice(0, 12)
    }
  })

}

export default topRatedShows;