import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { fetchPostsStartAsync } from '../../actions/postActions';
// import { selectIsPostsFetching } from '../../selectors/postSelectors';

// import withSpinner from '../../components/withSpinner';
// import PostList from "../../components/PostList";
import Post from "../../components/Post";

// const PostListWithSpinner = withSpinner(PostList);

const HomePage = ({ isPostsFetching, fetchPostsStartAsync }) => {

    // useEffect(() => {
    //     fetchPostsStartAsync();
    // }, []);

    return (
        // <PostListWithSpinner isLoading={isPostsFetching} {...props} />
        <Post />
    )

};
export default HomePage;
// const mapStateToProps = createStructuredSelector({
//     isPostsFetching: selectIsPostsFetching
// });

// const mapDispatchToProps = dispatch => ({
//     fetchPostsStartAsync: () => dispatch(fetchPostsStartAsync())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
