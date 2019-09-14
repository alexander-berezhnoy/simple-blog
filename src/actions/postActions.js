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
        console.log(res);
        if (!res.error) {
            dispatch(fetchPostsStart(res.response));
        } else {
            dispatch(fetchPostsFailure(res.error));
        }
    };
};

// actions for viewing specific post
export const viewPostStart = () => ({
    type: postActionTypes.VIEW_POST_START
});

export const viewPostSuccess = post => ({
    type: postActionTypes.VIEW_POST_SUCCESS,
    payload: post
});

export const viewPostFailure = errorMessage => ({
    type: postActionTypes.VIEW_POST_FAILURE,
    payload: errorMessage
});

export const viewPostStartAsync = (postId) => {
    return dispatch => {
        dispatch(viewPostStart());
        const res = useFetch(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`);
        console.log(res);
        if (!res.error) {
            dispatch(viewPostSuccess(res.response));
        } else {
            dispatch(viewPostFailure(res.error));
        }
    };
};