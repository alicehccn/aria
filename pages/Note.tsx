import { Button, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Page.module.css'

const Note: NextPage = () => {
  return (
    <div className={styles.container}>
      <TextField fullWidth label="Title" id="title" />
    </div>
  )
}

export default Note
