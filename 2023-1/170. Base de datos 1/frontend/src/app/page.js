'use client'

import styles from './page.module.css'
import Link from '../components/Link/Link.jsx';

export default function Home() {
  return (
    <main >
      <h1>Ejercicios en React</h1>
      <h2 className="text-3xl font-bold underline">Hello, Next.js!</h2>
      <ul>
        <li>
          <Link href="/docentes" text="Docentes" />
        </li>
        <li>
          <Link href="/cursos" text="Cursos" />
        </li>
      </ul>
    </main>
  )
}
