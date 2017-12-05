import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function updatesReducer(state = initialState.editList, action) {
    switch(action.type){

        case actionTypes.INITIALIZE_LIST_EDITOR:
            return action.list;

        case actionTypes.UPDATE_LIST_SUCCESS:
            return initialState.editList;

        default:
            return state;
    }
}