
let people = [
    {
        name: "Juan",
        age: 25,
        country: "Argentina"
    },
    {
        name: "Pedro",
        age: 30,
        country: "Chile"
    },
    {
        name: "Pablo",
        age: 35,
        country: "Uruguay"
    },
    {
        name: "Jose",
        age: 40,
        country: "Brasil"
    }
]

const llenarPersonas = () => {

    document.getElementById('listaPersonas').innerHTML = '';

    people.forEach(p => {
        const innerHTML = document.getElementById('listaPersonas').innerHTML;
        document.getElementById('listaPersonas').innerHTML = innerHTML + `<li>${p.name} - ${p.age} - ${p.country}</li>`
    })
}

const sumarEdad = () => {
    const newArr = people.map(p => {
        return {
            name : p.name,
            country: p.country,
            age: p.age + 10
        }
    })

    document.getElementById('listaPersonas').innerHTML = '';

    newArr.forEach(p => {
        const innerHTML = document.getElementById('listaPersonas').innerHTML;
        document.getElementById('listaPersonas').innerHTML = innerHTML + `<li>${p.name} - ${p.age} - ${p.country}</li>`
    })
}

const buscarPersona = () => {

    const nombre = document.getElementById('nombre').value;

    const arrFiltrado = people.filter(p => p.name == nombre );

    document.getElementById('listaPersonas').innerHTML = '';

    arrFiltrado.forEach(p => {
        const innerHTML = document.getElementById('listaPersonas').innerHTML;
        document.getElementById('listaPersonas').innerHTML = innerHTML + `<li>${p.name} - ${p.age} - ${p.country}</li>`
    })
    
 }

people.forEach(person => {
    console.log(`Nombre: ${person.name}, Edad: ${person.age}, País: ${person.country}`);
});
