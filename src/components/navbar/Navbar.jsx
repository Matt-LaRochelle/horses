import React, { useState } from "react";
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import l2 from '../images/l2.png';
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <header className={styles.header}>
            <img className={styles.img} src={l2} alt="windmill equestrian logo" />
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li className={styles.li}>
                    <NavLink 
                        to="/"
                        onClick={()=> setNav(false)}
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >Home</NavLink>
                    </li>
                    <li className={styles.li}>
                    <NavLink 
                        to="about"
                        onClick={()=> setNav(false)}
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >
                        About</NavLink>
                    </li>
                    <li className={styles.li}>
                    <NavLink 
                        to="horses"
                        onClick={()=> setNav(false)}
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >Horses</NavLink>
                    </li>
                    <li className={styles.li}>
                    <NavLink 
                        to="lessons"
                        onClick={()=> setNav(false)}
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >Lessons</NavLink>
                    </li>
                    <li className={styles.li}>
                    <NavLink 
                        to="how_to"
                        onClick={()=> setNav(false)}
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}
                        >How to Prepare</NavLink>
                    </li>
                    <li className={styles.li}>
                    <NavLink 
                        to="contact"
                        onClick={()=> setNav(false)}
                        style={({ isActive, isPending }) => {
                            return {
                            textDecoration: isActive ? "underline" : "inherit",
                            };
                        }}
                        className={({ isActive, isPending }) => {
                            return isActive ? "active" : isPending ? "pending" : "";
                        }}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}   
            </div>
        </header>
    );
}

export default Navbar;