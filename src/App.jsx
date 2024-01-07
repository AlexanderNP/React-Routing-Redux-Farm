import './index.css'
import styles from './App.module.css'
import { Header } from './Header/Header'
import { Display } from './Display/Display'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <Routes>
        <Route path='/general' element={<Display title={'Общая'} />} />
        <Route path='/cows' element={<Display title={'Коровы'} />} />
        <Route path='/bulls' element={<Display title={'Быки'} />} />
      </Routes>

    </div>
  )
}

export default App
