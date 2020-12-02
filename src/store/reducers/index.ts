import StateScheme from '../../types/State';
import * as types from '../actions/types'

const initialState: StateScheme = {
  movies: [],
  shows: [],
  popularMovies: [],
  popularShows: [],
  isError: false,
  message: '',
  isLoading: false
} 

const rootReducers = (state: StateScheme = initialState, action: any) => 
{
  switch(action.type)
  {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    
    case types.IS_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
        message: action.payload.message
      }
    
    case types.LOAD_MOVIES:
      return {
        ...state,
        movies: [...action.payload.movies]
      }
    
    case types.LOAD_SHOWS:
      return {
        ...state,
        shows: [...action.payload.shows]
      }
    
    case types.LOAD_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...action.payload.movies]
      }
    
    case types.LOAD_POPULAR_SHOWS:
      return {
        ...state,
        popularShows: [...action.payload.shows]
    }

    default:
      return state
  }
}

export default rootReducers;