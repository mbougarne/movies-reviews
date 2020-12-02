import StateScheme from '../../types/State';
import * as types from '../actions/types'

const initialState: StateScheme = {
  movies: [],
  shows: [],
  popularMovies: [],
  popularShows: [],
  isError: false,
  message: '',
  isLoaded: false
} 

const rootReducers = (state: StateScheme = initialState, action: any) => 
{
  switch(action.type)
  {
    case types.IS_ERROR:
      return {
        ...state,
        isError: action.payload.error,
        message: action.payload.message,
        isLoaded: action.payload.loaded
      }
    
    case types.LOAD_MOVIES:
      return {
        ...state,
        movies: [...action.payload.movies],
        isError: action.payload.error,
        message: action.payload.message,
        isLoaded: action.payload.loaded
      }
    
    case types.LOAD_SHOWS:
      return {
        ...state,
        shows: [...action.payload.shows],
        isError: action.payload.error,
        message: action.payload.message,
        isLoaded: action.payload.loaded
      }
    
    case types.LOAD_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...action.payload.movies],
        isError: action.payload.error,
        message: action.payload.message,
        isLoaded: action.payload.loaded
      }
    
    case types.LOAD_POPULAR_SHOWS:
      return {
        ...state,
        popularShows: [...action.payload.shows],
        isError: action.payload.error,
        message: action.payload.message,
        isLoaded: action.payload.loaded
    }

    default:
      return state
  }
}

export default rootReducers;