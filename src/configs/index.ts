type StringFunction = () => string;

export const MVDB = {
	API_KEY: 'af7c3821eec1b93f1fb273661064fb55',
	BASE_URL: 'https://api.themoviedb.org/3/',
	YOUTUBE_WATCH: 'https://www.youtube.com/watch?v=',
	IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/',
	BACKDROP_SIZE: 'w1280',
	POSTER_SIZE: 'w500'
}

const searchMovie: StringFunction = () : string => (
	MVDB.BASE_URL + 'search/movie?api_key=' + MVDB.API_KEY + '&query='
)

export default {
	...MVDB,
	searchMovie
}