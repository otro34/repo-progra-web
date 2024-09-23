const CursosMatriculados = ({ cursos }) => {
    console.log(cursos)
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
                cursos?.map((c) => {
                    return <tr key={c.idCurso}>
                        <td>{c.curso.id}</td>
                        <td>{c.curso.name || ""}</td>
                        <td>{c.curso.nivel || ""}</td>
                        <td>{c.curso.carrera || ""}</td>
                    </tr>
                })
            }
        </tbody>
            </table>
}

export default CursosMatriculados;