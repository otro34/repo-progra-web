'use client';

import Formulario from '../components/Form/Form.jsx'

const PaginaRegistro = () => {

    //AGREGUE AQUI SU CODIGO QUE MANEJE LA INTERACCION

    const placaDefault = {
        id:0,
        nombre: "",
        apellido: "",
        dni: "",
        marcaId: 0,
        marcaNombre: "",
        modeloId: 0,
        modeloNombre: "",
        placa: "",
        activo: false
      }

    return (
        <>
        <h2>Nuevo Registro</h2>
        <br/>
            <Formulario placa={placaDefault}/>
        </>
    )
} 

export default PaginaRegistro