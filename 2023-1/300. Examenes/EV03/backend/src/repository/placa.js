let placas = [{
    id:1,
    nombre: "Bruce",
    apellido: "Wayne",
    dni: "00998877",
    marcaId: 1,
    marcaNombre: "Chevrolet",
    modeloId: 1,
    modeloNombre: "Camaro",
    placa: "BAT-MAN",
    activo: true
  },
  {
    id:2,
    nombre: "Clark",
    apellido: "Kent",
    dni: "11223344",
    marcaId: 2,
    marcaNombre: "Ford",
    modeloId: 3,
    modeloNombre: "Mustang",
    placa: "SUP-MAN",
    activo: true
  },
  {
    id:3,
    nombre: "Barry",
    apellido: "Allen",
    dni: "66338844",
    marcaId: 3,
    marcaNombre: "Dodge",
    modeloId: 5,
    modeloNombre: "Challenger",
    placa: "FLA-SH1",
    activo: false
  }]

  let counter = 3; 

  const findAll = () => {
    return placas;
  }

  const create = (placa) => {
    counter++;
    const newObject = {...placa, id: counter };
    placas.push(newObject);

    return newObject;
  }

  const findOne = (id) => {
    const result = placas.find(x => x.id == id);

    return result;
  }

  const update = (placa) => { 
    const index = placas.findIndex(x => x.id === placa.id)

    if (index > -1) {
        placas[index] = placa;
    }

    return placa;
  }



  const PlacaRepository = { findAll, create, update, findOne }

  export default PlacaRepository