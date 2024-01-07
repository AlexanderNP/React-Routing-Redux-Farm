import styles from './Display.module.css';
import { DisplayRow } from './DisplayRow';
import { DisplayButton } from './DisplayButton';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { addBull, minusBull, addCow, minusCow } from "../store/farmSlice"

export function Display({ title }) {

  const info = useSelector((state) => state.farm);

  const rows = [];

  const dispath = useDispatch();

  if (info[title]) {
    for (let key in info[title]) {
      rows.push(<DisplayRow title={key} value={info[title][key]} key={key} />);
    }
  } else {
    for (let key in info) {
      for (let innerKey in info[key]) {
        rows.push(<DisplayRow title={innerKey} value={info[key][innerKey]} key={innerKey} />);
      }
    }
  }

  const renderButtons = () => {
    switch (title) {
      case 'Коровы':
        return (
          <>
            <DisplayButton title={'Родилась корова'} handler={() => dispath(addCow())} />
            <DisplayButton title={'Умерла корова'} handler={() => dispath(minusCow())} />
          </>
        );
      case 'Быки':
        return (
          <>
            <DisplayButton title={'Родился бык'} handler={() => dispath(addBull())} />
            <DisplayButton title={'Умер бык'} handler={() => dispath(minusBull())} />
          </>
        );
      case 'Общая':
        return (
          <>
            <DisplayButton title={'Родилась корова'} handler={() => dispath(addCow())} />
            <DisplayButton title={'Умерла корова'} handler={() => dispath(minusCow())} />
            <DisplayButton title={'Родился бык'} handler={() => dispath(addBull())} />
            <DisplayButton title={'Умер бык'} handler={() => dispath(minusBull())} />
          </>
        );
    }
  };

  return (
    <div className={styles.display}>
      <h1>Сводка "{title}"</h1>
      {rows}
      <div className={styles.buttonBox}>
        {renderButtons()}
      </div>
    </div>
  );
}
