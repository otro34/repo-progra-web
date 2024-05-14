import { useContext } from 'react'
import { UserContext } from '../../App'

const Header = () => {

    const { user } = useContext(UserContext)

    console.log(user)

    return (<header>
                <h1>Mi blog de aventuras</h1>
                <br />
                { user.usuario ? user.usuario : <a href="/login">Login</a> }

            </header>)
}

export default Header