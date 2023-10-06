import React from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";

const PostContainer = () => {

    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)

    return (
        <div>
            <div className="post-list-2">
                {isLoading && <div>Is loading posts...</div>}
                {error && <div>Post fetch error!</div>}
                {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default PostContainer;
