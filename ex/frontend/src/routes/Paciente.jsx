import PacienteDetalle from "../components/paciente/PacienteDetalle.jsx"
import { useParams } from "react-router-dom"
const Paciente = () => {
    const params = useParams()

    return (
        <PacienteDetalle id={params.id} />
    )
}

export default Paciente