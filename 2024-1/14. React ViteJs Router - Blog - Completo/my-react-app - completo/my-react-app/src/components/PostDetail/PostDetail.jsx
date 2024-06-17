
const PostDetail = ({ postId }) => {

    console.log(postId)

    return (
        <>
            <h2>Titulo</h2>
            <h3>Id: { postId }</h3>
            <h4>Fecha: </h4>
            <p>
                Contenido
            </p>
            <p>Contenido Largo</p>
        </>
    )
}

export default PostDetail