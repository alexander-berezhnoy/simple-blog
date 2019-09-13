import { createSelector } from 'reselect';

const selectPosts = store => store.posts;

export const selectPostsData = createSelector(
    [selectPosts], posts => posts.data
);

export const selectIsPostsFetching = createSelector(
    [selectPosts], posts => posts.isFetching
);