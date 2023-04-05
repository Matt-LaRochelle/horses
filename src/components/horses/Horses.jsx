import React from "react";
import styles from './Horses.module.css';
import bravado from '../images/Bravado.jpg';
import babe from '../images/babe.jpg';
import lexi from '../images/lexi.jpg';
import gator from '../images/gator.png';
import ph from '../images/ph.png';

function Horses() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Meet the Lesson Horses</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3 className={styles.h3}>Bravado</h3>
                    <img className={styles.img} src={bravado} alt="bravado the horse" />
                    <p className={styles.description}>The Distinguished Gentleman,  Bravado,  is our school master. Gentle and patient, he is perfect for riders of all abilities, and is trained through to lateral movements. </p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.h3}>Flint</h3>
                    <img className={styles.img} src={ph} alt="pikango's painting of a horse" />
                    <p className={styles.description}>Former family buggy horse, Flint is exceptionally calm and collected. Trained to ride and drive, Flint is able to accommodate a vast variety of riders. This sweet gelding also shows a lot of promise for jumping.</p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.h3}>Babe</h3>
                    <img className={styles.img} src={babe} alt="babe the horse" />
                    <p className={styles.description}>Babe, our big Belgian draft, may seem intimidating because of  his size, but rest assured Babe is perfect for a rider who wants a slow and steady horse. Great for teaching fundamentals like walk and trot, Babe is also trained to drive! </p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.h3}>Lexi</h3>
                    <img className={styles.img} src={lexi} alt="lexi the horse" />
                    <p className={styles.description}>A former hunter show horse, Lexi is returning to work after a long hiatus. She’s sweet, smart, and responsive. </p> 
                </div>
                <div className={styles.card}>
                    <h3 className={styles.h3}>Gator</h3>
                    <img className={styles.img} src={gator} alt="gator the horse" />
                    <p className={styles.description}>Gator is a large young pony, sweet and kind. An excellent horse for more advanced riders, Gator moves beautifully and loves to learn.</p> 
                </div>
            </div>
            
            
            <p className={styles.p}>Leases Available - showing and competing encouraged!</p>
        </div>
    );
}

export default Horses;