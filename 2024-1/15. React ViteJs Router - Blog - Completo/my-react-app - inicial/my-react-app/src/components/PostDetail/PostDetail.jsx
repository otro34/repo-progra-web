const PostDetail = ({ titulo, autor, fecha, contenido, contenidoLargo }) => {
    return (
        <>
            <h2>{ titulo }</h2>
            <h3>{ autor }</h3>
            <h4>{ fecha }</h4>
            <p>
                {contenido}
            </p>
            <p>{ contenidoLargo}</p>
        </>
    )
}

export default PostDetail