import {
    GET_ANIME,
    GET_EPISODE,
    GET_ANIMES
} from '../../types';

const AnimeReducer = (state, action) => {
    switch(action.type){
        case GET_ANIME:
            return{
                ...state,
                anime: action.payload,
            }
        case GET_EPISODE:
            return{
                ...state,
                anime: action.payload.anime,
                episode: action.payload.anime.episodes.filter(episode => episode.id === action.payload.idEpisode)
            }
        case GET_ANIMES:
            return{
                ...state,
                animes: action.payload,
            }
        default:
            return state;
    }
}
 
export default AnimeReducer;