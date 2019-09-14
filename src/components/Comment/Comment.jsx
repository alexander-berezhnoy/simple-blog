import React from 'react';

import { CommentContainer } from './CommentStyles'

const Comment = ({ content }) => {
    return <CommentContainer>{content.body ? content.body : "Comment was deleted"}</CommentContainer>;
}

export default Comment;