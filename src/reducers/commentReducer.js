import commentActionTypes from '../actions/commentActionTypes';

const INITIAL_STATE = {
    comment: null,
    isFetching: false,
    errorMessage: ''
};

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case commentActionTypes.CREATE_COMMENT_START:
            return { ...state, isFetching: true };
        case commentActionTypes.CREATE_COMMENT_SUCCESS:
            return { ...state, isFetching: false, comment: action.payload };
        case commentActionTypes.CREATE_COMMENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default commentReducer;
