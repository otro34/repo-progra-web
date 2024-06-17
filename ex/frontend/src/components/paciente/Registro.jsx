import {useState} from 'react';
import api from '../../api/paciente.js';
import { useNavigate } from "react-router-dom";

const Registro = () => {

    const navigate = useNavigate()

    const pacienteDefault = {
        nombre: '',
        apellido: '',
        edad: '',
        fechaNacimiento: ''
    }

    const [paciente, setPaciente] = useState(pacienteDefault)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(paciente)
        const response = await api.create(paciente)

        if (response)
            alert('Paciente registrado correctamente')
        else
            alert('Ocurrió un error al registrar el paciente')
        
        navigate ('/pacientes')
    }

    return(
        <div className="p-4">
            <a href="/pacientes" className="mb-8 text-blue-700 hover:underline dark:text-blue-300">Volver a la lista de pacientes</a>
            <h1 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">Registro de Paciente Nuevo</h1>
            <form className="max-w-sm" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label for="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" id="nombre" value = {paciente.nombre}
                    onChange={e => setPaciente({...paciente, nombre: e.target.value})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                </div>
                <div className="mb-5">
                    <label for="apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                    <input type="text" id="apellido" value = {paciente.apellido}
                    onChange={e => setPaciente({...paciente, apellido: e.target.value})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label for="edad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
                    <input type="text" id="edad" value = {paciente.edad}
                    onChange={e => setPaciente({...paciente, edad: e.target.value})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label for="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento</label>
                    <input type="text" id="fechaNacimiento" value = {paciente.fechaNacimiento}
                    onChange={e => setPaciente({...paciente, fechaNacimiento: e.target.value})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            </form>
        </div>
    )
}

export default Registro;