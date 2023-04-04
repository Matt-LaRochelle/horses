import React from "react";
import styles from './Horses.module.css';

function Horses() {
    return (
        <div>
            <h1>Meet the Lesson Horses</h1>
            <h3>Bravado</h3>
            <p>The Distinguished Gentleman,  Bravado,  is our school master. Gentle and patient, he is perfect for riders of all abilities, and is trained through to lateral movements. </p>
            {/* IMAGE */}
            <h3>Flint</h3>
            <p>Former family buggy horse, Flint is exceptionally calm and collected. Trained to ride and drive, Flint is able to accommodate a vast variety of riders. This sweet gelding also shows a lot of promise for jumping.</p>
            {/* IMAGE */}
            <h3>Babe</h3>
            <p>Babe, our big Belgian draft, may seem intimidating because of  his size, but rest assured Babe is perfect for a rider who wants a slow and steady horse. Great for teaching fundamentals like walk and trot, Babe is also trained to drive! </p>
            {/* IMAGE */}
            <h3>Lexi</h3>
            <p>A former hunter show horse, Lexi is returning to work after a long hiatus. She’s sweet, smart, and responsive. </p>
            <h3>Gator</h3>
            <p>Gator is a large young pony, sweet and kind. An excellent horse for more advanced riders, Gator moves beautifully and loves to learn.</p>
            <p>Leases Available - showing and competing encouraged!</p>
        </div>
    );
}

export default Horses;