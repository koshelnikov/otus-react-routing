import {FC} from "react";
import {Link} from "react-router-dom";

type Props = {
    id: number
    name: string
}

export const Post: FC<Props> = ({id, name}) => {
    return (
        <div>
            <Link to={`/posts/${id}`} state={'Some State'}>{id}: <span>{name}</span></Link>
        </div>
    )
}
