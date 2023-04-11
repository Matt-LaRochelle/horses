import React from "react";
import styles from './About.module.css';

import cat from '../images/cat2.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h6 from '../images/h6.jpg';

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

            <h3 className={styles.h3}>Our Facility</h3>
            <div className={styles.grid}>
                <p className={styles.pgrid}>Nestled on 15 acres in Southern Maryland, Windmill Equestrian also serves as our family farm. Owned by Jon and Shoshana Haag, the family farm is home to horses, geese, chickens, and a very friendly barn cat named Cole.  Our outdoor arena has lights, and evening lessons are available. </p>
                <img src={h3} alt="horses in a barn" className={styles.horses} />
                <img className={styles.cat} src={cat} alt="cat" />
            </div>
            

            <h3 className={styles.h3}>Our Trainer</h3>
            <p className={styles.p}>Shoshana Haag has a passion for horses that started with riding at age three. She believes that horses should be for everyone and that riding should be safe, fun, and educational. She has been professionally involved in the equestrian world since 15, and has developed her riding and teaching skills in the 20 years since. Shoshana’s goal is to help students acquire the tools for success and build confidence, while learning to appreciate the art and the beauty of a relationship with  horses. By helping students step out of their comfort zone in a safe and positive environment, she allows students to develop skills, connect with horses, and ultimately progress. </p>
            <br></br>
            <p className={styles.p}>Shoshana has</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Worked and trained under classical trainer Fernando Cardenas Sr.</li>
                <li className={styles.li}>Competed in A Circuit jumping up to 3’9”</li>
            </ul>
            <img className={styles.jump} src={h6} alt="shoshana and horse jumping hurdle" />
            <p className={styles.p}>And has an expansive breadth of experience from working in</p>
            <ul className={styles.ul}>
                <li className={styles.li}>Foxhunting and Steeplechase </li>
                <li className={styles.li}>Commercial Carriages</li>
                <li className={styles.li}>A rated hunter/jumper show barns</li>
                <li className={styles.li}>Trail guiding</li>
                <li className={styles.li}>And much more!</li>
            </ul>
            <img className={styles.baby} src={h2} alt="baby horse on the farm" />
            <p className={styles.p}>When she’s not out working, Shoshana enjoys being with her husband, Jon, and her two children. She loves exploring the beaches of Maryland, opera (she is professionally trained!), making music, and giving back to the community. She is also a doula. </p>
            
        </div>
    );
}

export default About;