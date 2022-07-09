import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Note from './_note';

const Album: NextPage = () => {
  const date = new Date().toDateString();
  return (
    <div className={styles.container}>
      <Note />
    </div>
  )
}

export default Album
