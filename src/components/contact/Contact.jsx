import React from "react";
import styles from './Contact.module.css';
import h9 from '../images/h9.jpg';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <div className={styles.grid}>
                <form className={styles.contact} action="https://formsubmit.co/larochelle.matthew@gmail.com" method="POST">
                    <label>First Name</label>
                    <input className={styles.input} type="text" name="first_name" required></input>
                    <hr className={styles.hr}></hr>
                    <label>Last Name</label>
                    <input className={styles.input} type="text" name="last_name" required></input>
                    <hr className={styles.hr}></hr>
                    <label>Email</label>
                    <input className={styles.input} type="email" name="email" required></input>
                    <hr className={styles.hr}></hr>
                    <label>Message</label>
                    <textarea className={styles.message} rows="8" cols="22" name="message" required></textarea>
                    <hr className={styles.hr}></hr>
                    <button className={styles.btn} type="submit">Submit</button>
                </form>
                <div className={styles.korak}>
                    <img className={styles.img} src={h9} alt="Horse in bushes" />
                    {/* <Link to="../game" className={styles.link}><div className={styles.secret}></div></Link> */}
                    <Link to="https://www.crazygames.com/game/robot-unicorn-attack" className={styles.link}><div className={styles.secret}></div></Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;