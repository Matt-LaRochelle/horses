import React from "react";
import styles from './About.module.css';
import h4 from '../images/h4.jpg';

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>About Us</h1>
            <p className={styles.p}>Windmill Equestrian is proud to offer horseback riding lessons for students aged 12 and up specializing in the foundations of classical riding appropriate for any discipline.</p>
            <h3 className={styles.h3}>We offer:</h3>
            <div className={styles.grid}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Independent balance seat  lunge lessons to teach or improve proper form and poise</li>
                    <li className={styles.li}>Lessons in classical equitation and horsemanship</li>
                    <li className={styles.li}>Beginner lessons on driving</li>
                    <li className={styles.li}>Exercises  in building confidence and connecting with horses</li>
                    <li className={styles.li}>More!</li>
                </ul>
                <img className={styles.img} src={h4} alt="woman riding horse through a field" />
            </div>
            <p className={styles.p}>All lessons include instruction in horse care (tacking, grooming, and teachings in overall health) and individualized riding skills matched to each rider’s ability and goals. </p>
            
        </div>
    );
}

export default About;