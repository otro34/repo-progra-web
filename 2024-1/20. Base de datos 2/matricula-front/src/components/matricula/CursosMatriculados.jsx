const CursosMatriculados = ({ cursos }) => {
    return <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Nivel</th>
                <th>Carrera</th>
            </tr>
        </thead>
        <tbody>
            {
                cursos?.map((curso) => {
                    return <tr key={curso.id}>
                        <td>{curso.id}</td>
                        <td>{curso.name || ""}</td>
                        <td>{curso.nivel || ""}</td>
                        <td>{curso.carrera || ""}</td>
                    </tr>
                })
            }
        </tbody>
            </table>
}

export default CursosMatriculados;