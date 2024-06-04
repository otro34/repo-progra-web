import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [ docentes, setDocentes ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/docente')
      .then(resp => resp.json())
        .then(data =>{
          console.log(data);
          setDocentes(data);
        })
  }, [])


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Codigo</th>
          </tr>
        </thead>
        <tbody>
          { 
            docentes.map(item => <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.code}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  )
}

export default App
