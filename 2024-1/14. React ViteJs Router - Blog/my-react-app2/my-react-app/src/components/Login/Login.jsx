import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Ap p'
import './Login.css'

const Login = () => {

    const navigate = useNavigate()

    const { setUser } = useContext(UserContext)
    console.log(setUser)
    const [ usuario, setUsuario ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError] = useState('')

    const handleClick = () => {
        if (usuario === 'admin' && password === '123')
            {
                setUser ({ usuario, password})
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