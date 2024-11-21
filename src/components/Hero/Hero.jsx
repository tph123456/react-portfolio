import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Tatum!</h1>
            <p className={styles.description}>I'm an aspiring IT professional with a Diploma in IT Advanced Programming. I have a passion for front-end development and love crafting UI/UX designs. While I'm just starting my career in IT, my strong foundation in programming and web development, coupled with my ability to quickly learn new technologies, drives me to continuously grow and improve.I'm excited to contribute, collaborate, and keep learning in this fast-paced industry!</p>
        <a href="mailto:tatumhameister@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}