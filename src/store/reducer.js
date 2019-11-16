import * as actionTypes from './actions';
import axios from 'axios';

const appState = {
    isLoding:false,
    characters:[],
    user:{
        userName:null,
        password:null,
        uuid:null,
        favCharacters:null,
        films:null
    }
}

const reducer = (state = appState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.GET_CHARACTERS:
            return {
                ...state,
                characters: action.characters
            }
        case actionTypes.SAVE_FAVORITES_CHARACTERS:
            const user = {...state.user};
            user.favCharacters = action.favCharacters;
            user.sortedFilms = action.sortedFilms;
            return {
                ...state,
                user:user
            }
        default:
            return state;
    }
}


export default reducer;