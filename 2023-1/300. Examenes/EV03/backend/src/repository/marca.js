let marcas = [{
    id: 1, nombre: "Chevrolet"
  },
  {
    id: 2, nombre: "Ford"
  },
  {
    id: 2, nombre: "Dodge"
  }]

  const findAll = () => {
    return marcas;
  }

  const MarcaRepository = { findAll }

  export default MarcaRepository