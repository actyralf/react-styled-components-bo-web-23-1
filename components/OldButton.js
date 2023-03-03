import styles from "./OldButton.module.css";
export default function OldStyledButton({ onClick, children }) {
  return (
    <button className={styles["old-button"]} onClick={onClick}>
      {children}
    </button>
  );
}
