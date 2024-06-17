import { useEffect, useState } from 'react'

import Header from './components/Header/Header'
import Post from './components/Post/Post'
import './App.css'

import { useUser } from './context/User'
import { dataPosts } from './data/posts'


function App() {

  const [ posts, setPosts ] = useState(dataPosts)

  useEffect(() => {
    const rawPosts = localStorage.getItem('posts');

    if (!rawPosts) {
      localStorage.setItem('posts', JSON.stringify(posts));
    } else {
      setPosts(JSON.parse(rawPosts));
    }
  },[])

  const obj = useUser()

  console.log(obj)

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
