import {FC} from "react";
import {useLocation, useParams } from "react-router-dom";
import {PostService} from "../../services/post/post.service";

export const Post: FC = () => {
    const postService = new PostService();
    const {postId} = useParams();
    const post = postService.getPostById(+postId!);
    const location = useLocation();


    return (
        <div>
            {post && <div> {post.id}: <span>{post.description}</span> {location.state ?? location.state}</div>}
        </div>
    )
}