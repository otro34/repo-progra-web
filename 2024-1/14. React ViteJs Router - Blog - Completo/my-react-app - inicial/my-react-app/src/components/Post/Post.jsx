const Post = (props) => {
    return (
        <>
            <article>
                <h2>{ props.titulo }</h2>
                <span>Publicado por: </span> { props.autor }
                <br />
                En: {props.fecha}
                <p>
                    { props.contenido }
                </p>
            </article>
        </>
    )
}

export default Post