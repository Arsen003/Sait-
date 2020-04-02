import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <div className={s.item}><a href="/profile">Profile</a></div>
            <div className={`s.post} activeclassname={s.active}`}><a href="/dialogs">Messages</a></div>

            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </div>
    </nav>
}
export default Navbar;
