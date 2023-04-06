import React from "react";
import styles from './Contact.module.css';
import h9 from '../images/h9.jpg';

function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <div className={styles.grid}>
                <form className={styles.contact}>
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
                    <textarea className={styles.message} rows="8" cols="30" name="message" required></textarea>
                    <hr className={styles.hr}></hr>
                    <button className={styles.btn} type="submit">Submit</button>
                </form>
                <img className={styles.img} src={h9} alt="Horse in bushes" />
            </div>
        </div>
    );
}

export default Contact;