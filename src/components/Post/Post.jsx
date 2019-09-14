import React from 'react';

import { PostContainer, PostDate, PostTitle, PostAuthor } from './PostStyles';

const Post = ({ post }) => {
    const { title, author, date, id } = post;
    const content = post.content ? post.content : post.body;
    return (
        <PostContainer>
            <PostDate>{date}</PostDate>
            <PostTitle>{title}{` #${id}`}</PostTitle>
            <PostAuthor>{author}</PostAuthor>
            <p>{content}</p>
        </PostContainer>
    )
}

export default Post;