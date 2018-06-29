import {
     SET_SEARCH_FIELD,
       REQUEST_ROBOTS_SUCCESS,
       REQUEST_ROBOTS_FAILED ,
       REQUEST_ROBOTS_PENDING
    } from './types';
const initialState = {
    search : ''
}
export const searchRobots = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_SEARCH_FIELD:
            return { ...state, search: action.text}
        default :
            return state
    }
}
const initialRobotState = {
    robots: [],
    isPending: false,
    error: ''
}
export const requestRobots = (state=initialRobotState,action={}) => {
  switch(action.type) {
      case REQUEST_ROBOTS_PENDING:
        return { ...state, isPending: true};
      case REQUEST_ROBOTS_SUCCESS:
        return { ...state, robots: action.robots,isPending:false}; 
      case REQUEST_ROBOTS_FAILED:
        return {...state, error: action.errors,isPending: true};
    
      default: 
      return state;  

  }
}

