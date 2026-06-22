import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}
export default function Button({
  text,
  icon,
  className,
  onClick,
}: Readonly<ButtonProps>) {
  return (
    <div
      onClick={onClick}
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
