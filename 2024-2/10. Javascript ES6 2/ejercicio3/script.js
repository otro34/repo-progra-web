let people = [
    {name: 'Juan', age: 23, country: 'Argentina'},
    {name: 'Pedro', age: 45, country: 'Brasil'},
    {name: 'Maria', age: 34, country: 'Peru'},
    {name: 'Luis', age: 21, country: 'Uruguay'},
    {name: 'Ana', age: 56, country: 'Brasil'},
    {name: 'Marta', age: 19, country: 'Argentina'},
]

const llenarPersonas = () => {
    let peopleElement = [];

    people.forEach(person => {
        peopleElement.push(`<li>${person.name} - ${person.age} 
            - ${person.country}</li>`);
    });

    document.getElementById('listaPersonas').innerHTML = 
        peopleElement.join('');
}

const llenarPersonasFiltradas = (filteredPeople) => {
    let peopleElement = [];

    filteredPeople.forEach(person => {
        peopleElement.push(`<li>${person.name} - ${person.age} 
            - ${person.country}</li>`);
    });

    document.getElementById('listaPersonas').innerHTML = 
        peopleElement.join('');
}

const limpiarLista = () => {
    document.getElementById('listaPersonas').innerHTML = '';
}

const sumarEdad = () => {
    const newArr = people.map(person => {
       return {...person, age: person.age + 10};
    });

    people = newArr;

    llenarPersonas();
}

const buscarPersonaPorNombre = () => {
    const valorBusqueda = document.getElementById('txtBusqueda').value;

    const foundPeople = people.filter(person => person.name === valorBusqueda);

    llenarPersonasFiltradas(foundPeople);

};

const filtrarPorPais = () => {
    const paisFiltro = document.getElementById('selectPaises').value;
    const foundPeople = people.filter(person => person.country === paisFiltro);

    llenarPersonasFiltradas(foundPeople);
}