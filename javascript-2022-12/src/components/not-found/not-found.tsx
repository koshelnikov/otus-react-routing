import {FC} from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: FC =() => {
    const navigate = useNavigate();

    return (
        <div>
            <div>Not Found</div>
            <button onClick={() => {navigate('/')}}> Go To Main Page</button>
        </div>
    )
}