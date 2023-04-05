import React from "react";
import styles from './Lessons.module.css';
import h10 from '../images/h10.jpg';
import h7 from '../images/h7.jpg';

function Lessons() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Lessons</h1>
            <div className={styles.grid}>
                <p className={styles.p}>Windmill Equestrian offers lesson options for any level of equestrian, ages 12 and up. For the true beginner, the amateur horse lover, or someone with their hearts set on a future of professional riding, we have something for everyone. For those with more experience,  who are interested in learning how to drive horses, we also offer beginner courses. All lessons require a completed Introduction Lesson, which we offer by appointment only for private riders, or once a month for up to 4 riders. We also offer multi-lesson bundles at a discount. </p>
                <img className={styles.img} src={h10} alt="Shoshana riding a horse"></img>
            </div>
            <h3 className={styles.h3}>Private Introduction Lesson - Ages 12+ - One Time Lesson - 2 Hours - $120</h3>
            <p className={styles.p}>During our Private Introduction Lesson, you will meet one-on-one with our trainer, Shoshana Haag, and get a tour of the facilities, meet the horses, have a riding or driving evaluation, and discuss your visions for  your experience with Windmill Equestrian. Please ask lots of questions! After initial introductions, you will move on to grooming and tacking, learn fundamentals of horse care, and receive an intro to driving or horseback riding  lesson. Although targeted for potential riders newer to horses, who may need to “try it on”, this lesson is required for everyone  in order to be scheduled for any of the bundles. Waivers are required and anyone under age 16 must be accompanied by an adult for the entirety of the lesson. </p>
            <h3 className={styles.h3}>Group Introduction Lesson - Ages 12+ - Four Rider Slots - 2.5 Hours - $60/Rider</h3>
            <p className={styles.p}>Offered once a month, our Group Introduction Lesson is perfect for true beginners or those with little experience who want to make sure horseback riding is for them. During our 2.5 hour lesson, riders will be walked through the  basics of horse care, grooming, tacking, and one on one lesson time. Get a better understanding of the horse world, your needs and goals, and experience the wonder of horses! This lesson has zero commitment, but graduates of the group lesson are given priority for lesson booking. Waivers are required and anyone under age 16 must be accompanied by an adult for the entirety of the lesson.</p>
            <h3 className={styles.h3}>Private One Hour Riding Lesson - Ages 12+ - All Levels - $75</h3>
            <p className={styles.p}>After completion of one of our Introduction Lessons, begin your journey with our trainer in private lessons. A combination of horse care and individualized time in the arena, the Private One Hour Lessons are tailored  to your specific needs and requests.  Anyone under age 16 must be accompanied by an adult for the entirety of the lesson. </p>
            <img className={styles.img2} src={h7} alt="Horse jumping over a gate" />
            <h3 className={styles.h3}>Private One Hour Driving Lesson - Ages 12+ - Beginner- $95</h3>
            <p className={styles.p}>After completion of one of our Introduction Lessons, begin your journey with our trainer in private lessons. A combination of horse care and individualized time in the arena, the Private One Hour Lessons are tailored  to your specific needs and requests.  Anyone under age 18 must be accompanied by an adult for the entirety of the lesson. </p>
            <h3 className={styles.h3}>Savings Bundles</h3>
            <p className={styles.p}>We offer bundles to help you save. More lessons = more savings! Pay in advance.</p>
            <ul className={styles.ul}>
                <li>Single Private Lesson = $75</li>
                <li>
                Four Pack Bundle = $260 or $65/lesson
                </li>
                <li>Eight Pack Bundle = $480 or $60/lesson</li>
            </ul>
            <h3 className={styles.h3}>Scheduling</h3>
            <p className={styles.p}>We offer lessons Sunday - Friday with afternoon and evening times available. After your Introduction Lesson, we will find a time and day that fits your needs. Riders can choose days per week on a recurring basis. </p>
        </div>
    );
}

export default Lessons;