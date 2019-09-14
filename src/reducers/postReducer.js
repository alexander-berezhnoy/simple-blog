import postActionTypes from '../actions/postActionTypes';

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    errorMessage: '',
    currentPost: null
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postActionTypes.FETCH_POSTS_START:
        case postActionTypes.VIEW_POST_START:
            return { ...state, isFetching: true };
        case postActionTypes.FETCH_POSTS_SUCCESS:
            return { ...state, isFetching: false, data: action.payload };
        case postActionTypes.FETCH_POSTS_FAILURE:
        case postActionTypes.VIEW_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case postActionTypes.VIEW_POST_SUCCESS:
            return { ...state, isFetching: false, currentPost: action.payload }
        default:
            return state;
    }
};

export default postReducer;
