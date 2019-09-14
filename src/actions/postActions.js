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

export const viewPostStartAsync = () => {
    return dispatch => {
        dispatch(viewPostStart());
        const fetchData = async () => {
            try {
                const url = `https://simple-blog-api.crew.red/posts/18?_embed=comments`;
                const resPost = await fetch(url);
                const jsonPost = await resPost.json();
                const post = { ...jsonPost, comments: jsonPost.comments.map(comment => ({ ...comment })) };
                dispatch(viewPostSuccess(post));
            } catch (err) {
                dispatch(viewPostFailure(err));
            }
        };
        fetchData();
    };
};