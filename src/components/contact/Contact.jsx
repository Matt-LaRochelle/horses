import React from "react";
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <form className={styles.container}>
                <div className={styles.name}>
                    <input type="text" placeholder="First Name" name="first_name" required></input>
                    <input type="text" placeholder="Last Name" name="last_name" required></input>
                </div>
                <div className={styles.content}>
                    <input type="email" placeholder="Email" name="email" required></input>
                    <input type="text" placeholder="Subject" name="subject" required></input>
                    <textarea rows="8" cols="80" placeholder="Message" className={styles.message} name="message" required></textarea>
                    <button className={styles.btn} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;