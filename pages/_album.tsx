import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import styles from '../styles/Note.module.css'
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
