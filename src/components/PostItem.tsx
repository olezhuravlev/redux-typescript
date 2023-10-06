import React from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost;
}

export const PostItem = ({post}: PostItemProps) => {
    return (
        <div className="post">
            #{post.id}: {post.title}: {post.body}
            <button>Del</button>
        </div>
    );
};
