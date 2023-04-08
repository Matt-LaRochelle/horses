import React, { useState, useEffect } from "react";
import styles from './Game.module.css';

function Game() {

    const [tRexJump, setTRexJump] = useState(false)

    function jump() {
        if (tRexJump !== true) {
            setTRexJump(true);
            setTimeout(function () {
                setTRexJump(false);
            }, 1000);
        }
    }


    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e) => {
        if (e.key === ' ') {
            jump();
        }
    }

    useEffect(() => {
        const isAlive = setInterval(() => {
            let dinoTop = window.getComputedStyle(styles.dino).getPropertyValue("top");
            console.log(dinoTop);
        }, 10);
        return () => clearInterval(isAlive);
    }, []);

    

    return (
        <div className={styles.game}>
            <div className= {tRexJump ? [styles.jump, styles.dino].join(' ') : [styles.dino]}>

            </div>
            <div className={styles.cactus}></div>
        </div>
    );
}

export default Game;