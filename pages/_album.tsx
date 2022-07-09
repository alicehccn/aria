import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Note from './_note';

const Album: NextPage = () => {
  return (
    <div className={styles.container}>
      <Note />
    </div>
  )
}

export default Album
