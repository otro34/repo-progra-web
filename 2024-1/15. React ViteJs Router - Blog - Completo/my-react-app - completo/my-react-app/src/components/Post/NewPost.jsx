import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {

    const [posts, setPosts] = useState([]);
    const [post , setPost] = useState({ titulo: '', autor: '', contenido: '', fecha: new Date()});
    const navigate = useNavigate();

    useEffect(() => {
        const rawPosts = JSON.parse(localStorage.getItem('posts'));
        setPosts(rawPosts)
        console.log(posts)
    },[])

    const handleOnClick = () => {
        posts.push(post)
        localStorage.setItem('posts', JSON.stringify(posts));
        alert('Post publicado!')
        navigate('/');
    }

    return (
        <div>
            <h1>New Post</h1>
           <form>
                <label htmlFor="titulo">Título</label>
                <br />
                <input type="text" name="titulo" id="titulo" 
                    value={post.titulo} onChange={e => setPost({...post, titulo: e.target.value})}/>
                <br />
                <label htmlFor="autor">Autor</label>
                <br />
                <input type="text" name="autor" id="autor" 
                    value={post.autor} onChange={e => setPost({...post, autor: e.target.value})}/>
                <br />
                <label htmlFor="contenido">Contenido</label>
                <br />
                <textarea name="contenido" id="contenido" cols="30" rows="10" 
                    value={post.contenido} onChange={e => setPost({...post, contenido: e.target.value})}></textarea>
                <br />
                <button onClick={handleOnClick}>Publicar</button>
            </form>
        </div>
    );
}

export default NewPost;