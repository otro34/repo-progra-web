let modelos = [{
    id: 1, nombre: "Camaro", marcaId: 1, nombreMarca: "Chevrolet"
  },
  {
    id: 2, nombre: "Corvette", marcaId: 1, nombreMarca: "Chevrolet"
  },
  {
    id: 3, nombre: "Mustang", marcaId: 2, nombreMarca: "Ford"
  },
  {
    id: 4, nombre: "Explorer", marcaId: 2, nombreMarca: "Ford"
  },
  {
    id: 5, nombre: "Challenger", marcaId: 3, nombreMarca: "Dodge"
  },
  {
    id: 6, nombre: "Viper", marcaId: 3, nombreMarca: "Dodge"
  }]

  const findAll = () => {
    return modelos;
  }

  const ModeloRepository = { findAll }

  export default ModeloRepository