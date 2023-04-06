import React, { useState } from "react";
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import l2 from '../images/l2.png';
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <header className={styles.header}>
            <img className={styles.img} src={l2} alt="windmill equestrian logo" />
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li className={styles.li}>
                        <Link to="/" className={styles.a}>Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="about" className={styles.a}>About</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="horses" className={styles.a}>Horses</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="lessons" className={styles.a}>Lessons</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="how_to" className={styles.a}>How to Prepare</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="contact" className={styles.a}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}   
            </div>
        </header>
    );
}

export default Navbar;