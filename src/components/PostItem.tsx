import React from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost;
    updatePost: (post: IPost) => {};
    deletePost: (post: IPost) => void;
}

export const PostItem = ({post, updatePost, deletePost}: PostItemProps) => {

    const updateHandler = (event: React.MouseEvent) => {
        const newTitle = prompt() || '';
        updatePost({...post, title: newTitle});
    }

    const deleteHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        deletePost(post);
    }

    return (
        <div className="post" onClick={updateHandler}>
            #{post.id}: {post.title}: {post.body}
            <button onClick={deleteHandler}>Del</button>
        </div>
    );
};
