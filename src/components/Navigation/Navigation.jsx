import { useEffect } from 'react';
import style from './Navigation.module.scss'
import { Link } from 'react-router-dom';

export const Navigation = () => {
 
    // Eksempel der viser Mount / unmount logik
    useEffect(() => {
        console.log("Navigation Component has Mounted")
        return (
            () => {
                console.log("Navigation Component has Un-Mounted")
            }
        )
    }, [])

    return (
        <nav className={style.navStyle}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/login">login</Link>

            </div>
        </nav>
    )
}