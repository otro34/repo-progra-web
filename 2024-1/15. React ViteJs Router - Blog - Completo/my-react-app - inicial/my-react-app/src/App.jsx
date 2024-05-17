import { createContext, useState } from 'react'

import Header from './components/Header/Header'
import Post from './components/Post/Post'
import './App.css'

export const UserContext = createContext({ usuario: '', password: ''})


function App() {

  const posts = [
   {
    titulo: "Mi viaje por Alemania",
    autor: "Juan",
    fecha: "12/12/2022",
    fecha2: new Date(12/12/2022),
    contenido: "Viaje a Alemania y me divertí mucho."
   },
   {
    titulo: "Mi viaje por Japón",
    autor: "Juan",
    fecha: "12/12/2023",
    fecha2: new Date(12/12/2022),
    contenido: "Viaje a Japón y me divertí mucho."
   },
   {
    titulo: "Mi viaje por Francia",
    autor: "Juan",
    fecha: "12/12/2016",
    fecha2: new Date(12/12/2022),
    contenido: "Viaje a Francia y me divertí mucho."
   }

  ]

  const [user, setUser ] = useState({ usuario: null, password: null})

  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        {
          posts.map( (item) => <Post { ...item } key={item.titulo} />)
        }      
      </UserContext.Provider>
    </>
  )
}

export default App
