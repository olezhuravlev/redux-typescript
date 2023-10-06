import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";

const PostContainer = () => {

    const [limit, setLimit] = useState(5);

    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, {pollingInterval: 3000})

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3);
    //     }, 2000);
    // }, [])

    return (
        <div>
            <div className="post-list-1">
                <button onClick={refetch}>REFETCH!</button>
                {isLoading && <div>Is loading posts...</div>}
                {error && <div>Post fetch error!</div>}
                {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default PostContainer;
