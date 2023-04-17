import {FC} from "react";
import {Link} from "react-router-dom";

type Props = {
    id: number
    name: string
}

export const Post: FC<Props> = ({id, name}) => {

    return (
        <Link to={`/post/${id}`}>
            id: {id} name: {name}
        </Link>
    )

}