import React from "react";
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>Windmill Equestrian</h1>
            <nav>
                <ul className={styles.ul}>
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
                        <Link to="now_what" className={styles.a}>Now What?</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="contact" className={styles.a}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;