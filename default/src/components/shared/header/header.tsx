import {FC, Suspense} from "react";
import css from './header.module.scss';
import {Link, NavLink, Outlet} from "react-router-dom";

export const Header: FC = () => {
    return (
        <div>
            <header className={css.menu}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({isActive}) => isActive ? css.active : ''}
                            >Main</NavLink>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/posts'>Posts</Link>
                        </li>
                        <li>
                            <Link to='/wrong url'>Wrong Url</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}