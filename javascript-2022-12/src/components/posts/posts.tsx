import {FC} from "react";
import {PostService} from "../../services/post/post.service";
import {Post} from "./post/post";
import css from './posts.module.scss';

export const Posts: FC = () => {
    const postService = new PostService()
    const posts = postService.getPosts();
    return (
        <div className={css.posts}>
            {
                posts.map((post) => {
                    return (
                        <Post key={post.id} id={post.id} name={post.name}/>
                    )
                })
            }
        </div>
    )
}