'use client'

//import axios from 'axios'

import styles from './page.module.css'
import '@fontsource/roboto/400.css';

import HomePage from '../pages/HomePage.jsx';

export default function Home() {


  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  )
}
