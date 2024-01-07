import styles from './DisplayButton.module.css'

export function DisplayButton({ title, handler }) {
  return (
    <button className={styles.button} onClick={handler}>{title}</button>
  )
}