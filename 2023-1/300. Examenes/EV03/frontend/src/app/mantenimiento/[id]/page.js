'use client';

import Formulario from '../../components/Form/Form.jsx'

import { useState,useEffect } from 'react'

const obtenerIdDeUrl = () => {
    const location = window.location.href;

    const values = location.split('/');

    return values[values.length-1];
}

const PaginaMantenimiento = () => {

    const [ id, setId ] = useState(0)

    useEffect(() => {

    //Codigo que envia ID Al formulario
        setId(obtenerIdDeUrl());

    }, [])

    //AGREGUE AQUI SU CODIGO QUE MANEJE LA INTERACCION 

    return (
        <>
        <h2>Actualizar Registro</h2>
        <br/>
            <Formulario id={id}/>
        </>
    )
} 

export default PaginaMantenimiento