import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    children?: ReactNode
}
export const PrivateRoute: FC<Props> = (props) => {
    const isUserAuthenticated = false;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserAuthenticated) {
            navigate('/')
        }
    }, [isUserAuthenticated])

    return <>{props.children}</>
}