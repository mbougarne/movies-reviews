export default interface State{
  movies: Record<string, any>[],
  shows: Record<string, any>[],
  popularMovies: Record<string, any>[],
  popularShows: Record<string, any>[],
  isError: boolean,
  message: string,
  isLoaded: boolean
}