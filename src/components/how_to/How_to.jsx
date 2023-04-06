import React from "react";
import styles from './How_to.module.css';
import h1 from '../images/h1.jpg';

function How_to() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Preparing for a lesson</h1>
            <h3 className={styles.h3}>What to Wear</h3>
            <p className={styles.p}>You will need to wear pants (breeches preferred), but leggings or  loose fitting jeans are acceptable. <strong>Closed toe shoes</strong> (no sandals or lug soles), preferably a riding boot but shoes with a 1 inch heel or less, or sneakers are ok. We can provide helmets and all tack and equipment for the horse, but bringing your own helmet is encouraged. </p>
            <img src={h1} className={styles.img} alt="horses on a hill" />
            <h3 className={styles.h3}>When You Arrive</h3>
            <p className={styles.p}>Please <strong>go slow</strong> up the driveway, park, and walk to the big barn at the top of the hill. </p>
            <h3 className={styles.h3}>Weather Policy</h3>
            <p className={styles.p}>We hold classes in all weather, rain or shine.  We may hold an indoor lesson on stable management,  horse care, and general horse education on days where we cannot ride. If the weather is truly unsafe, lessons may be rescheduled by us.</p>
            <h3 className={styles.h3}>Cancellation Policy</h3>
            <p className={styles.p}>The teacher-student relationship is one that requires mutual respect. If you are unable to make a lesson, whether that be for sickness or personal matters, you must call <strong>24 hours in advance.</strong> Lessons that are not canceled appropriately will not be eligible for a refund or reschedule. </p>
        </div>
    );
}

export default How_to;