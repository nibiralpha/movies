import styles from "./Button.module.css";
import Image from "next/image";

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
          <Image src="/play-xxl.png" width={15} height={15} alt="Play" />
        </div>
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
}
