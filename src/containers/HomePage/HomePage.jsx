import React, { useEffect } from 'react';
import useFetch from '../../components/useFetch';
import Spinner from '../../components/Spinner';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchPostsStartAsync } from '../../actions/postActions';
import { selectIsFetching } from '../../selectors/postSelectors';

import withSpinner from '../../components/withSpinner';
import PostList from '../../components/PostList';

const PostListWithSpinner = withSpinner(PostList);

const HomePage = ({ arePostsFetching, fetchPostsStartAsync }) => {
    useEffect(() => {
        fetchPostsStartAsync();
    }, []);
    return <PostListWithSpinner isLoading={arePostsFetching} />;
};
const mapStateToProps = createStructuredSelector({
    arePostsFetching: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
    fetchPostsStartAsync: () => dispatch(fetchPostsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
