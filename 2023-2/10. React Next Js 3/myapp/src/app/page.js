'use client'

import { useEffect } from 'react'

import styles from './page.module.css'
import Link from 'next/Link'
import Card from './components/Card.jsx'

export default function Home() {

  const listadoDeAlumnos = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        carrera: "Sistemas"
    },
    {
        id: 2,
        nombre: "Gabriel",
        apellido: "Sanchez",
        carrera: "Derecho"
    }
  ]

  useEffect(() => {
    let alumnos = localStorage.getItem("alumnos");

    if (!alumnos)
      window.localStorage.setItem("alumnos", JSON.stringify(listadoDeAlumnos));

  }, [])

  return (
    <main className={styles.main}>
      <h1>Sistema de Matrícula</h1>
      <ul>
        <li><Link href="/alumnos" >Alumnos</Link></li>
        <li>Docentes</li>
        <li>Matricula</li>
      </ul>
      <section>
        <Card />
      </section>
    </main>
  )
}
