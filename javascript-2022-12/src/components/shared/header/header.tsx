import {FC} from "react";
import {Link, NavLink} from "react-router-dom";
import css from './header.module.scss'

const links = [
    {to: '/', name: 'Main'},
    {to: '/posts', name: 'Posts'},
    {to: '/about', name: 'About'},
    {to: '/wrong url', name: 'Wrong Url'},
]

export const Header: FC = () => {
    return (
        <nav className={css.header}>
            {
                links.map((link) => {
                    return <NavLink
                        key={link.to}
                        className={
                            ({isActive}) => isActive ? css.active : ''
                        }
                        to={link.to}>{link.name}</NavLink>
                })
            }
        </nav>
    )
}
