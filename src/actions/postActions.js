import postActionTypes from './postActionTypes';

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
        const fetchData = async () => {
            try {
                const res = await fetch('https://simple-blog-api.crew.red/posts');
                const json = await res.json();
                const postsData = await json.map(item => ({
                    ...item
                }));
                console.log(postsData);
                dispatch(fetchPostsSuccess(postsData));
            } catch (err) {
                dispatch(fetchPostsFailure(err));
            }
        };
        fetchData();

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