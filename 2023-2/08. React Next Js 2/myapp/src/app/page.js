import styles from './page.module.css'
import Link from 'next/Link'

import Card from './components/RecipeReviewCard.jsx'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sistema de Matrícula</h1>
      <ul>
        <li><Link href="/alumnos" >Alumnos</Link></li>
        <li>Docentes</li>
        <li>Matricula</li>
      </ul>
      <Card />
      <Stack>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
    </main>
  )
}
