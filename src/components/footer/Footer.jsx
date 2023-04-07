import React from "react";
import styles from './Footer.module.css';
import l1 from '../images/l1.png';
import l3 from '../images/l3.png';

function Footer() {
    return (
        <footer className={styles.footer}>
                <p>15311 Baden Naylor Road</p>
                <p>Brandywine, MD, 20613</p>
                <p>windmill.equestrian.2011@gmail.com</p>
                <p>301 861-9333</p>
        </footer>
    );
}

export default Footer;