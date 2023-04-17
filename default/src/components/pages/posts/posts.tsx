import {FC} from "react";
import {Post} from "./post/post";
import {PostService} from "../../services/post/post.service";


export const Posts: FC = () => {
    const postService = new PostService();
    const posts = postService.getPosts();

    return (
        <div>
            {posts.map((post) => <Post key={post.id} id={post.id} name={post.name}/>)}
        </div>
    )
}