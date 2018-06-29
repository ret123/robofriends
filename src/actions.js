import { 
    SET_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS 
} from "./types";

export const setSearchField =(text) => ({
    type: SET_SEARCH_FIELD,
    text
});
export const requestRobots = () => dispatch => {
    dispatch({type:REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robots => dispatch({type:REQUEST_ROBOTS_SUCCESS, robots}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED, error}));
};
