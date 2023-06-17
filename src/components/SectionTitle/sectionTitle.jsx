
import styles from "./style.module.css";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
}



