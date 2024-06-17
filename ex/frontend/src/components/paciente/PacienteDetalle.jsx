import { useEffect, useState } from "react";
import api from "../../api/paciente.js";
import apiCitas from "../../api/cita.js";

const PacienteDetalle = ({ id }) => {

    const [ paciente, setPaciente ] = useState({})
    const [ citas, setCitas ] = useState([])

    useEffect(() => {
        handleOnLoad();
    }, [])
    
    const handleOnLoad = async () => {
        const rawPaciente = await api.findOne(id);
        setPaciente(rawPaciente)
        const rawCitas = await apiCitas.findAll();
        console.log(rawCitas)
        const filteredCitas = rawCitas.filter(cita => cita.pacienteId == id)
        setCitas(filteredCitas)
    }

    return (
            <div id="defaultTabContent">
                <a href="/pacientes" className="mt-10 pl-8 font-medium text-blue-600 dark:text-blue-500 hover:underline">Regresar</a>
                {
                    paciente && (
                        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about">
                            <h2 className="text-3xl  font-semibold text-gray-500 dark:text-gray-400">Paciente {paciente.nombre} {paciente.apellido}</h2>
                            <p><strong>Edad:</strong> {paciente.edad}</p>
                            <p><strong>Fecha de Nacimiento:</strong> {paciente.fechaNacimiento}</p>
                            <h2 className="pt-4 pb-4 font-bold">Próximas Citas:</h2>

                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-6 py-3">ID</th>
                                        <th className="px-6 py-3">Fecha</th>
                                        <th className="px-6 py-3">Hora</th>
                                        <th className="px-6 py-3">Doctor</th>
                                        <th className="px-6 py-3">Especialidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        citas?.map(cita => {
                                            return (
                                                <tr key={cita.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <td className="px-6 py-4">{cita.id}</td>
                                                    <td className="border  px-4 py-2  font-medium">{cita.fecha}</td>
                                                    <td className="border  px-4 py-2  font-medium">{cita.hora}</td>
                                                    <td className="border  px-4 py-2  font-medium">{cita.doctor.nombre}</td>
                                                    <td className="border  px-4 py-2  font-medium">{cita.especialidad.nombre}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>    
                            </table>
                        </div>
                        
                    )
                }
                
            </div>
    )
}

export default PacienteDetalle;