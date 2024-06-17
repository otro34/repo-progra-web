import { useEffect, useState } from 'react'
import { UsuarioLogueado } from './UsuarioLogueado.jsx'
//import { useUser } from '../../context/User.jsx'

const Header = () => {

    //const { user } = useUser()
    const [ user, setUser ] = useState({ usuario: null, password: null })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        setUser(user);

    }, [])

    const handleCerrarSesion = () => {
        alert('Sesión cerrada');
        localStorage.removeItem('user');
        setUser({ usuario: null, password: null })
    }

    return (<header>

                <h1>Mi blog de aventuras</h1>
                <div id="derecha">
                { user?.usuario ? <UsuarioLogueado username={user.usuario} onClick={handleCerrarSesion} /> : <a href="/login">Login</a> }
                </div>

            </header>)
}

export default Header