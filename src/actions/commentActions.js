import commentActionTypes from './commentActionTypes';
import useFetch from '../components/useFetch';

// Actions for viewing all posts
export const createCommentStart = () => ({
    type: commentActionTypes.CREATE_COMMENT_START
});

export const createCommentSuccess = newComment => ({
    type: commentActionTypes.CREATE_COMMENT_SUCCESS,
    payload: newComment
});

export const createCommentFailure = errorMessage => ({
    type: commentActionTypes.FETCH_POSTS_FAILURE,
    payload: errorMessage
});

export const createCommentStartAsync = (comment) => {
    return dispatch => {
        dispatch(createCommentStart());
        const res = useFetch('https://simple-blog-api.crew.red/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        });
        console.log(res);
        if (!res.error) {
            dispatch(createCommentSuccess(res.response));
        } else {
            dispatch(createCommentFailure(res.error));
        }
    };
};