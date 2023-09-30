import styles from './page.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sistema de Matrícula</h1>
      <ul>
        <li><Link href="/alumnos" >Alumnos</Link></li>
        <li>Docentes</li>
        <li>Matricula</li>
      </ul>
    </main>
  )
}
