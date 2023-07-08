'use client';

import Formulario from '../../components/Form/Form.jsx'

import { useState,useEffect } from 'react'

const obtenerIdDeUrl = () => {
    const location = window.location.href;

    const values = location.split('/');

    return values[values.length-1];
}

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

const PaginaMantenimiento = () => {

    const [ id, setId ] = useState(0)

    const handleOnLoad = async () => {
        const rawId = obtenerIdDeUrl()
        setId(rawId)
    }

    useEffect(() => {
    //Codigo que envia ID Al formulario
        handleOnLoad()
    }, [])

    //AGREGUE AQUI SU CODIGO QUE MANEJE LA INTERACCION 

    return (
        <>
        <h2>Actualizar Registro</h2>
        <br/>
            <Formulario id={id} placa={placaDefault}/>
        </>
    )
} 

export default PaginaMantenimiento