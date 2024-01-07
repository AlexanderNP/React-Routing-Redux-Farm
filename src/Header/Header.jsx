import styles from './Header.module.css'
import { HeaderButton } from './HeaderButton'
import { useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className={styles.header}>
      <HeaderButton
        path={'/general'}
        title={'Общая'}
        currentPath={currentPath}
      />
      <HeaderButton
        path={'/cows'}
        title={'Коровы'}
        currentPath={currentPath}
      />
      <HeaderButton
        path={'/bulls'}
        title={'Быки'}
        currentPath={currentPath}
      />
    </header>
  )
}