import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPostsData } from '../../selectors/postSelectors';

import Post from '../Post';
import { PostsContainer, PostDivider } from './PostListStyles';

const PostList = ({ posts }) => (
    <PostsContainer>
        {
            posts.map((post, index) => (<Post post={post} key={post.id} />))
        }
    </PostsContainer>
);


const mapStateToProps = createStructuredSelector({
    posts: selectPostsData
});

export default connect(mapStateToProps)(PostList);