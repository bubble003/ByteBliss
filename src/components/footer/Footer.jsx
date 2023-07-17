import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      All Rights Reserved .
      <div className={styles.social}>
        <Image
          src="/1.png"
          height={15}
          width={15}
          alt="dasd"
          className={styles.icon}
        />
        <Image
          src="/2.png"
          height={15}
          width={15}
          alt="dasasd"
          className={styles.icon}
        />
        <Image
          src="/3.png"
          height={15}
          width={15}
          alt="dasad"
          className={styles.icon}
        />
        <Image
          src="/4.png"
          height={15}
          width={15}
          alt="daqsd"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
