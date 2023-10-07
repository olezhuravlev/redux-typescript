import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {

    const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {error: creationError, isLoading: isCreationLoading}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3);
    //     }, 2000);
    // }, [])

    const addNewPostHandler = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }

    const updatePostHandler = (post: IPost): {} => {
        updatePost(post);
        return post;
    }

    const deletePostHandler = (post: IPost): void => {
        deletePost(post);
    }

    return (
        <div>
            <div className="post-list-1">
                <button onClick={refetch}>REFETCH!</button>
                <button onClick={addNewPostHandler}>Add new post</button>
                {isCreationLoading && <div>Is uploading new post...</div>}
                {creationError && <div>Post creation error!</div>}
                {isLoading && <div>Is loading posts...</div>}
                {error && <div>Post fetch error!</div>}
                {posts && posts.map(post => <PostItem key={post.id} post={post} updatePost={updatePostHandler}
                                                      deletePost={deletePostHandler}/>)}
            </div>
        </div>
    );
};

export default PostContainer;
