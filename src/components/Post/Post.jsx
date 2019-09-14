import React from 'react';

import { PostContainer, PostDate, PostTitle, PostAuthor, PostDivider } from './PostStyles';

const Post = ({ post }) => {
    const { title, author, date, body } = post;
    return (
        <PostContainer>
            <PostDate>{date}</PostDate>
            <PostTitle>{title}</PostTitle>
            <PostAuthor>{author}</PostAuthor>
            <p>{body}</p>
            <PostDivider></PostDivider>
        </PostContainer>
    )
}

export default Post;