import React from 'react';

import { PostContainer, PostDate, PostTitle, PostAuthor } from './PostStyles';

const Post = () => {
    return (
        <PostContainer>
            <PostDate>november 23 2016</PostDate>
            <PostTitle>This is my first article</PostTitle>
            <PostAuthor>Sheakspire</PostAuthor>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </PostContainer>
    )
}

export default Post;