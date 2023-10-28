'use client'

//import axios from 'axios'

import {useState} from 'react'

import styles from './page.module.css'
import '@fontsource/roboto/400.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export default function Home() {

  const [ pkmn, setPkmn] = useState('')

  const buscar = async () => {
    
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/'+pkmn);
    
    console.log(resp.text)

  }

  return (
    <main className={styles.main}>
      <Typography variant="h1" gutterBottom>
        Pokedex
      </Typography>
      <TextField id="outlined-basic" 
        label="Nombre de Pokemon" 
        variant="outlined"
        value={pkmn}
        onChange={e => setPkmn(e.target.value)} 
        />
        
        <br/>
        <Button variant="outlined" onClick={buscar}>ENVIAR</Button>
    </main>
  )
}
