import postActionTypes from './postActionTypes';
import useFetch from '../components/useFetch';

// Actions for viewing all posts
export const fetchPostsStart = () => ({
    type: postActionTypes.FETCH_POSTS_START
});

export const fetchPostsSuccess = posts => ({
    type: postActionTypes.FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsFailure = errorMessage => ({
    type: postActionTypes.FETCH_POSTS_FAILURE,
    payload: errorMessage
});

export const fetchPostsStartAsync = () => {
    return dispatch => {
        dispatch(fetchPostsStart());
        const res = useFetch('https://simple-blog-api.crew.red/posts');
        if (!res.error) {
            dispatch(fetchPostsStart(res.response));
        } else {
            dispatch(fetchPostsFailure(res.error));
        }
    };
};
