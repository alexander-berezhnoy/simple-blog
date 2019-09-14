import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { viewPostStartAsync } from '../../actions/postActions';
import { selectCurrentPost, selectIsFetching } from '../../selectors/postSelectors';

import withSpinner from '../../components/withSpinner';
import Post from '../../components/Post';
import Comment from '../../components/Comment';

const PostPage = ({ viewPostStartAsync, post, isLoading }) => {
    useEffect(() => {
        viewPostStartAsync();
    }, []);

    return (
        <>
            <Post post={post} />
            {/* <form>
                <textarea>Test Comment</textarea>
                <button>Add Comment</button>
            </form> */}
            {
                post.comments.map(comment => <Comment content={comment} key={comment.id} />)
            }
        </>
    )
};

const mapStateToProps = createStructuredSelector({
    post: selectCurrentPost,
    isLoading: selectIsFetching
});

const mapDispatchToProps = dispatch => ({
    viewPostStartAsync: () => dispatch(viewPostStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(withSpinner(PostPage));
