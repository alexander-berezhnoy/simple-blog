import postActionTypes from '../actions/postActionTypes';

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    errorMessage: ''
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postActionTypes.FETCH_POSTS_START:
            return { ...state, isFetching: true };
        case postActionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, isFetching: false, data: action.payload };
        case postActionTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default postReducer;
