import React, { useState } from "react";
import styles from './Game.module.css';

function Game() {
    const [jump, setJump] = useState(null);

    function trexjump() {
        setJump(styles.jump);
        setTimeout(function () {
            setJump(null);
        }, 300);
    }

    return (
        <div className={styles.game}>
            <div className={  `head ${styles.dino} ${jump}`  }
                 onKeyDown={(function (event) {
                trexjump();
                })}>

            </div>
            <div className={styles.cactus}></div>
        </div>
    );
}

export default Game;