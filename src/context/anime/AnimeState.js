import React, { useReducer } from 'react';
import clientAxios from '../../config/clientAxios.js';
import AnimeContext from './AnimeContext';
import AnimeReducer from './AnimeReducer';
import {
    GET_ANIME,
    GET_EPISODE,
    GET_ANIMES
} from '../../types';

const AnimeState = (props) => {

    const initialState ={
        anime: null,
        episode: null,
        animes: null
    }

    const[state, dispatch] = useReducer(AnimeReducer, initialState)

    const getAnime = async idAnime =>{
        try{
            const result = await clientAxios.get(`/api/animes/${idAnime}`)
            dispatch({
                type: GET_ANIME,
                payload: result.data
            })
        }catch(error){
           console.log(error)
        }
    }

    const getEpisode = async (idAnime, idEpisode)=>{
        try{
            const result = await clientAxios.get(`/api/animes/${idAnime}`)
            dispatch({
                type: GET_EPISODE,
                payload: {
                    anime: result.data,
                    idEpisode
                }
            })
        }catch(error){
           console.log(error)
        }
    }

    const getAnimes = async ()=>{
        try{
            const result = await clientAxios.get('/api/animes')
            dispatch({
                type: GET_ANIMES,
                payload: result.data
            })
        }catch(error){
           console.log(error)
        }
    }

    return (
        <AnimeContext.Provider
            value={{
                anime: state.anime,
                episode: state.episode,
                animes: state.animes,
                getAnime,
                getEpisode,
                getAnimes
            }}
        >
            {props.children}
        </AnimeContext.Provider>
    );
}
 
export default AnimeState;