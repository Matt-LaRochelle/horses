import React from "react";
import styles from './Footer.module.css';
import l1 from '../images/l1.png';
import l3 from '../images/l3.png';

function Footer() {
    return (
        <footer className={styles.footer}>
                <p>123 Random Road</p>
                <p>Brandywine, MD, 12345</p>
                <p>buisness.owner@gmail.com</p>
                <p>123 456-7890</p>
        </footer>
    );
}

export default Footer;