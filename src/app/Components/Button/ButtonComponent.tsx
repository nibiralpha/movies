import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  icon?: boolean;
  className?: string;
}
export default function Button({
  text,
  icon,
  className,
}: Readonly<ButtonProps>) {

  return (
    <div
      className={`${styles.button} ${styles[className == undefined ? "" : className]}`}
    >
      {icon && (
        <div className={styles.icon}>
          <img src={"./play-xxl.png"} width="15px" />
        </div>
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
}
