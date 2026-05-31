import styles from "./Button.module.css";

interface ButtonProps {
  text?: string;
  icon?: boolean;
}
export default function Button({ text, icon }: Readonly<ButtonProps>) {
  return (
    <div className={styles.button}>
      {icon && (
        <div className={styles.icon}>
          <img src={"./play-xxl.png"} width={15} />
        </div>
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
}
