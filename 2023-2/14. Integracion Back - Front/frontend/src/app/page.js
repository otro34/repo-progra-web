'use client'

//import axios from 'axios'

import {useState} from 'react'

import styles from './page.module.css'
import '@fontsource/roboto/400.css';

import Matricula from './components/Matricula/Matricula.jsx';

export default function Home() {


  return (
    <main className={styles.main}>
      <>
        <Matricula />
      </>
    </main>
  )
}
