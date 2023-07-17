import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill={true}
          className={styles.img}
        />
      <div className={styles.container}>
        <h1 className={styles.container}> Digital Storytellers </h1>
        <h2 className={styles.imgDesc}>
          Handcrafting award winning digital experience
        </h2>
      </div>
    <div className={styles.container}>
        
      </div>
      <div className={styles.textContainer}></div>
    </h1>
  );
};

export default About;
