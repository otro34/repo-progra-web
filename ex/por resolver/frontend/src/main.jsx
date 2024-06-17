import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Paciente from './routes/Pacientes.jsx'
import PacienteDetalle from './routes/Paciente.jsx'
import Cita from './routes/Citas.jsx'
import Especialidades from './routes/Especialidades.jsx'
import Doctores from './routes/Doctores.jsx'
import RegistroPaciente from './routes/RegistroPaciente.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pacientes",
    element: <Paciente />,
  },
  {
    path: "/pacientes/:id",
    element: <PacienteDetalle />,
  },
  {
    path: "/pacientes/registro",
    element: <RegistroPaciente />,
  },
  {
    path: "/citas",
    element: <Cita />,
  },
  {
    path: "/especialidades",
    element: <Especialidades />,
  },
  {
    path: "/doctores",
    element: <Doctores />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
