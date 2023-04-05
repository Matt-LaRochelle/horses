import React from "react";
import styles from './Now_what.module.css';

function Now_what() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Our Facility</h1>
            <p className={styles.p}>Nestled on 15 acres in Southern Maryland, Windmill Equestrian also serves as our family farm. Owned by Jon and Shoshana Haag, the family farm is home to horses, geese, chickens, and a very friendly barn cat named Cole.  Our outdoor arena has lights, and evening lessons are available. </p>

            <h3 className={styles.h3}>Out Trainer</h3>
            <p className={styles.p}>Shoshana Haag has a passion for horses that started with riding at age three. She believes that horses should be for everyone and that riding should be safe, fun, and educational. She has been professionally involved in the equestrian world since 15, and has developed her riding and teaching skills in the 20 years since. Shoshana’s goal is to help students acquire the tools for success and build confidence, while learning to appreciate the art and the beauty of a relationship with  horses. By helping students step out of their comfort zone in a safe and positive environment, she allows students to develop skills, connect with horses, and ultimately progress. </p>
            <br></br>
            <p className={styles.p}>Shoshana has</p>
            <ul className={styles.ul}>
                <li>Worked and trained under classical trainer Fernando Cardenas Sr.</li>
                <li>Competed in A Circuit jumping up to 3’9”</li>
            </ul>
            <br></br>
            <p className={styles.p}>And has an expansive breadth of experience from working in</p>
            <ul className={styles.ul}>
                <li>Foxhunting and Steeplechase </li>
                <li>Commercial Carriages</li>
                <li>A rated hunter/jumper show barns</li>
                <li>Trail guiding</li>
                <li>And much more!</li>
            </ul>
            <p className={styles.p}>When she’s not out working, Shoshana enjoys being with her husband, Jon, and her two children. She loves exploring the beaches of Maryland, opera (she is professionally trained!), making music, and giving back to the community. She is also a doula. </p>
            <h3 className={styles.h3}>What to Wear</h3>
            <p className={styles.p}>You will need to wear pants (breeches preferred), but leggings or  loose fitting jeans are acceptable. <strong>Closed toe shoes</strong> (no sandals or lug soles), preferably a riding boot but shoes with a 1 inch heel or less, or sneakers are ok. We can provide helmets and all tack and equipment for the horse, but bringing your own helmet is encouraged. </p>
            <h3 className={styles.h3}>When You Arrive</h3>
            <p className={styles.p}>Please <strong>go slow</strong> up the driveway, park, and walk to the big barn at the top of the hill. </p>
            <h3 className={styles.h3}>Weather Policy</h3>
            <p className={styles.p}>We hold classes in all weather, rain or shine.  We may hold an indoor lesson on stable management,  horse care, and general horse education on days where we cannot ride. If the weather is truly unsafe, lessons may be rescheduled by us.</p>
            <h3 className={styles.h3}>Cancellation Policy</h3>
            <p className={styles.p}>The teacher-student relationship is one that requires mutual respect. If you are unable to make a lesson, whether that be for sickness or personal matters, you must call<strong>24 hours in advance.</strong> Lessons that are not canceled appropriately will not be eligible for a refund or reschedule. </p>
        </div>
    );
}

export default Now_what;