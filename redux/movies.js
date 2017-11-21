
//Actions
const FETCH_NOW_PLAYING_MOVIES = 'FECH_PLAYING_MOVIES';
const FETCH_NOW_PLAYING_MOVIES_SUCCESS = 'FETCH_NOW_PLAYING_MOVIES_SUCCESS';


//Reducer
export const movies = (state = [], action ) => {
    const { type, payload } = action;

    switch(type){
        case FETCH_NOW_PLAYING_MOVIES_SUCCESS:{
            return payload
        }
        default: {
            return state
        }
    }
}

//Action Creators
export const fetchNowPlayingMoviesSuccess = (movies) => ({
    type: FETCH_NOW_PLAYING_MOVIES_SUCCESS,
    payload: movies
})



//Thunks
export const gethNowPlayingMovies = () =>{

    fetchNowPlayingMovies = () =>{
        console.log("fetching")
        return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=60ff436f2769f4f8ddf76ac0cc28a39d&language=en-US&page=1')
            .then(response => response.json())
            .then(body => body.results);
    }
    
    return (dispatch) => {
        return fetchNowPlayingMovies().then( (movies) => {
            console.log("movies ====>", movies)
            dispatch(fetchNowPlayingMoviesSuccess(movies))
        })
    };
}