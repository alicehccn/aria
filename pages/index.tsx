import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Album from './_album'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aria</title>
        <meta name="description" content="Start typing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Album />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
