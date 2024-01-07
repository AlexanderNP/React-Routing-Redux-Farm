import styles from './HeaderButton.module.css'
import { Link } from 'react-router-dom';

export function HeaderButton({ path, title, currentPath }) {
  return (
    <Link className={path === currentPath ? `${styles.link} ${styles.active}` : styles.link} to={path}>{title}</Link>
  )
}