import {FC} from "react";
import {useNavigate, useNavigation } from "react-router-dom";

export const NotFound: FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>Not Found</div>
            <button onClick={(e) => {
                e.preventDefault();
                navigate('/')
            }}>Go To Main Page</button>
        </div>
    )
}