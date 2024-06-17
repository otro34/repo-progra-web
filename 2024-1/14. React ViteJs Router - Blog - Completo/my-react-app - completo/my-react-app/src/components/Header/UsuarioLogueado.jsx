export const UsuarioLogueado = ({ username, onClick }) => {
    return (
        <>
            <h3>Hola, {username}.</h3> | <button onClick={onClick}>Cerrar Sesión</button>
            <br/>
            <a href="/nueva-entrada">Nueva entrada</a>
        </>
    )
}