import Image from 'next/image'
import styles from './page.module.css'

import Header from '../components/Header/Header.jsx'
import Main from '../components/Main/Main.jsx'

export default function Home() {
  return (
    <main>
      <Header title="My Travel Blog"></Header>
      <Main />
    </main>
  )
}
