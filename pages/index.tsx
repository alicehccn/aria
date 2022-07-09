import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Page.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aria</title>
        <meta name="description" content="New Note" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        </h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
