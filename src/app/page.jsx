import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Exploring Ideas: Insights, Inspiration, and Information
        </h1>
        <p className={styles.desc}>
          Journey Through Words: Where Every Blog is an Adventure in Learning
          and Discovery"
        </p>
        <Button url="/blog" text="Discover >" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
