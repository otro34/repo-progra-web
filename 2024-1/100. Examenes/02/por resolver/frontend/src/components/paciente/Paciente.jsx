
const Paciente = () => {

    return (
        <>
        <div className="pt-2">
            <a href="/" className="pl-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Volver</a>
        </div>
        <h2 className='text-4xl p-5 '>Pacientes</h2>
            <div className="mb-5">
                <a href="/pacientes/registro" className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> + Registrar Paciente</a>
            </div>
            <div className="m-5">
                <input type="text" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange=""
                placeholder='Buscar paciente por nombre o apellido'
                />
            </div>
            <table className="mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Nombre</th>
                        <th className="px-6 py-3">Apellido</th>
                        <th className="px-6 py-3">Edad</th>
                        <th className="px-6 py-3">Fecha de Nacimiento</th>
                        <th className="px-6 py-3">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="border  px-6 py-4  font-medium">1</td>
                        <td className="border  px-6 py-4  font-medium">Cristiano</td>
                        <td className="border  px-6 py-4  font-medium">Ronaldo</td>
                        <td className="border  px-6 py-4  font-medium">38</td>
                        <td className="border  px-6 py-4  font-medium">1985/10/02</td>
                        <td className="border  px-6 py-4  font-medium">
                            <a href={"/pacientes/1"} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver Detalle</a> 
                            <button className="ml-1 bg-red-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded">Eliminar</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>


    )
}

export default Paciente