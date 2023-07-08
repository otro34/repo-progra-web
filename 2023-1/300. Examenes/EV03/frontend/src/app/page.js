'use client'

import Link from 'next/link'
import styles from './page.module.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import placasApi from './api/placas.js';
import { useEffect, useState } from 'react';

export default function Home() {

  const [ placas, setPlacas ] = useState([])
  const [ terminoBusqueda, setTerminoBusqueda ] = useState("")

  const handleOnLoad = async () => {
    const result = await placasApi.findAll();
    setPlacas(result.data)
  }

  const handleBuscar = async () => {
    const result = await placasApi.findAll();
    const filtered = result.data.filter(x => x.nombre.includes(terminoBusqueda))
    setPlacas(filtered)

  }

  const handleDesactivar = async (item) => {
    item.activo = false
    const result = await placasApi.update(item);
    if (result)
      handleOnLoad();
  }

  useEffect(() => {
    if (!terminoBusqueda)
      handleOnLoad();
  }, [terminoBusqueda])

  return (
    <main >
      <Container>
        <Row>
          <Col>
            <h1>Registro Automovilístico de Ciudad Gótica</h1>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <Form.Control 
              type="text" 
              placeholder="Ingrese nombre o placa..."
              value={terminoBusqueda}
              onChange={e => setTerminoBusqueda(e.target.value)} />
          </Col>
          <Col xs={2}>
            <Button onClick={() => handleBuscar()}>
              <i className="bi bi-search"></i>
               &nbsp;BUSCAR
              </Button>
          </Col>
        </Row>
        <Row>
          <Col >
            <br/>
            <Table striped bordered hover style={{ paddingTo: '20px'}}>
                      <thead>
                          <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellido</th>
                          <th scope="col">DNI</th>
                          <th scope="col">Marca</th>
                          <th scope="col">Modelo</th>
                          <th scope="col">Placa</th>
                          <th scope="col">Activo</th>
                          <th scope="col">Desactivar</th>
                          </tr>
                      </thead>
                      <tbody>
                        { placas?.map( item => (
                        <tr key={item.id}>
                          <th scope="row" >
                            <a href={"mantenimiento/"+item.id}>
                              {item.id}
                            </a>
                            </th>
                          <td>{item.nombre}</td>
                          <td>{item.apellido}</td>
                          <td>{item.dni}</td>
                          <td>{item.marcaNombre}</td>
                          <td>{item.modeloNombre}</td>
                          <td>{item.placa}</td>
                          <td>{item.activo ? "Si" : "No"}</td>
                          <td>
                            <Button variant="danger" size="sm" 
                              onClick={() => handleDesactivar(item)}>
                              <i className="bi bi-dash-circle-fill"></i>
                            </Button>
                          </td>
                        </tr>
                        ))}
                      </tbody>
              </Table>
          </Col>
        </Row>
        <Row>
        <Col>
            <a className="btn text-white btn-lg btn-floating" style={{backgroundColor: '#ac2bac'}} href="/mantenimiento" role="button">
              <i className="bi bi-plus"></i>
              Nuevo Registro
            </a>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
