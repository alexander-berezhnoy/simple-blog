import { createSelector } from 'reselect';

const selectPosts = store => store.posts;

export const selectPostsData = createSelector(
    [selectPosts], posts => posts.data
);

export const selectIsFetching = createSelector(
    [selectPosts], posts => posts.isFetching
);