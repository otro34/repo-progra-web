import Header from './components/Header/Header'
import Post from './components/Post/Post'

import './App.css'

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

  return (
    <>
      <Header />
      {
        posts.map( (item) => <Post { ...item } key={item.titulo} />)
      }      
    </>
  )
}

export default App
