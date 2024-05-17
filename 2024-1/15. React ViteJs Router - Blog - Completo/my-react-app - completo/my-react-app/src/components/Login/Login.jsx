import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/User.jsx'
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const user = useUser()
    const [ usuario, setUsuario ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError] = useState('')

    const handleClick = () => {
        if (usuario === 'admin' && password === '123')
            {
                localStorage.setItem('user', JSON.stringify({ usuario, password }))
                user.setUser ({ ...user, usuario, password})
                navigate('/')
                
            }
        else 
            setError("Usuario o password incorrecto. ")
    }

    return (
        <main id="mainLogin" className='mainLogin'>
            <label>Usuario: </label>
            <br/>
            <input type="text" value={usuario} onChange={event => setUsuario(event.target.value)} />
            <br />
            <label>Password: </label>
            <br />
            <input type="password" value={password } onChange={e => setPassword(e.target.value)} ></input>
            <br />
            <span className="errorMessage">{error}</span>
            <br />
            <button onClick={handleClick}>Login</button>
        </main>
        
    )
}

export default Login