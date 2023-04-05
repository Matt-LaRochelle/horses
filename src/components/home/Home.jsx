import React from "react";
import styles from './Home.module.css';
import francois from '../images/La-Gueriniere.jpg';
import alois from '../images/images.jpg';

function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Windmill Equestrian</h1>
            <h1 className={styles.h1}>Riding and Carriage Driving Lessons</h1>
            <p className={styles.p}>“The knowledge of the nature of the horse is one of the first foundations of the art of riding it, and every horseman must make it his principle study.”</p>
            <div className={styles.author}>
                <p className={styles.name}>- François de la Guérinière</p>
                <img className={styles.img} src={francois} alt="François de la Guérinière on a horse" />
            </div>
            <p className={styles.p}>“There is one principle that should never be abandoned, namely, that the rider must learn to control himself before he can control his horse. This is the basic, most important principle to be preserved in equitation.”</p>
            <div className={styles.author}>
                <p className={styles.name}>- Alois Podhajsky</p>
                <img className={styles.img} src={alois} alt="Alois Podhajsky on a horse" />
            </div>
            
        </div>
    );
}

export default Home;