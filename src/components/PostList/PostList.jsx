import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPostsData } from '../../selectors/postSelectors';

import Post from '../Post';
import { PostsContainer, PostDivider } from './PostListStyles';

const PostList = ({ posts }) => {
    return (
        <PostsContainer>
            {
                posts.map((post, index) => {
                    return index ? (<><PostDivider /><Post key={post.id} post={post} /> </>) : (<Post key={post.id} post={post} />)
                })
            }
        </PostsContainer>);

}

const mapStateToProps = createStructuredSelector({
    posts: selectPostsData
});

export default connect(mapStateToProps)(PostList);