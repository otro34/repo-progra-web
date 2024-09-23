import { useState, useEffect } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold">Sistema de Atención Médica</h1>
      <ol>
        <li><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/pacientes">Pacientes</a></li>
        <li><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/doctores">Doctores</a></li>
        <li><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/citas">Citas</a></li>
        <li><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/especialidades">Especialidades</a></li>
      </ol>
    </>
  )
}

export default App
