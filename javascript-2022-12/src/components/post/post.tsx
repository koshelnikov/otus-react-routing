import {FC} from "react";
import { useParams } from "react-router-dom";
import {PostService} from "../../services/post/post.service";

export const Post: FC = () => {
    const postService = new PostService();
    const {postId} = useParams();
    const post = postService.getPostById(+postId!)


    return (
        <div >
            {post &&
            <>
                <h1>Post</h1>

                <div>
                    {post.name}
                </div>

                <div>
                    {post.description}
                </div>
            </>
            }
        </div>
    )
}