import MVDB from '../../../configs';

import { IS_ERROR, LOAD_POPULAR_SHOWS } from '../types';

const popularShows = () => async (dispatch: any) => {

  const link = MVDB.BASE_URL + 'tv/popular?api_key=' + MVDB.API_KEY + '&language=en-US&page=1';
  const res = await fetch(link);
  const data = await res.json();

  if(data.status_code)
  {
    return dispatch({
      type: IS_ERROR,
      payload: {
        error: true,
        message: data.status_message,
        loaded: true
      }
    })
  } 

  return dispatch({
    type:LOAD_POPULAR_SHOWS,
    payload: {
      shows: data.results,
      error: false,
      message: '',
      loaded: true
    }
  })

}

export default popularShows;