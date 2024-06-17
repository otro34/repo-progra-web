const PacienteDetalle = ({ id }) => {

    return (
            <div id="defaultTabContent">
                <a href="/pacientes" className="mt-10 pl-8 font-medium text-blue-600 dark:text-blue-500 hover:underline">Regresar</a>
                        <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about">
                            <h2 className="text-3xl  font-semibold text-gray-500 dark:text-gray-400">Paciente Cristiano Ronaldo</h2>
                            <p><strong>Edad:</strong> 38</p>
                            <p><strong>Fecha de Nacimiento:</strong> 1985/02/02</p>
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
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="border  px-4 py-2  font-medium">1</td>
                                        <td className="border  px-4 py-2  font-medium">2024/02/02</td>
                                        <td className="border  px-4 py-2  font-medium">08:00</td>
                                        <td className="border  px-4 py-2  font-medium">Dr. Hugo Sanchez</td>
                                        <td className="border  px-4 py-2  font-medium">Neurología</td>
                                    </tr>
                                </tbody>    
                            </table>
                        </div>                
            </div>
    )
}

export default PacienteDetalle;