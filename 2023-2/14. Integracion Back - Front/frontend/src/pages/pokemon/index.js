import AppBar from '../../app/components/AppBar/AppBar.jsx'
import Layout from '../../app/components/Layout/Layout.jsx'

import DetallePokemon from '../../app/pokemon/Detalle.jsx'

const PokemonPage = () => {
    return (
        <>
            <Layout principal={ DetallePokemon }/>
        </>
    )
}

export default PokemonPage