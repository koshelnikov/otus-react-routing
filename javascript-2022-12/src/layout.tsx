import {FC} from "react";
import { Outlet } from "react-router-dom";
import {Header} from "./components/shared/header/header";

export const Layout: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}