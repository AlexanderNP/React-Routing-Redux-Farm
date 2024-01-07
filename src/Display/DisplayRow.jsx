import styles from './DisplayRow.module.css'

export function DisplayRow({ title, value }) {
  return (
    <p className={styles.row}>{title}: {value} шт.</p>
  )
}