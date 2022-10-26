//import {express} from 'express'
var express = require("express");
var app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const facultyData = [
    { id: 1, name: 'Facultad de Derecho', 
    programs: [
        {id:1, name: 'Derecho'}
    ]},
    { id: 2, name: 'Facultad de Psicología',
    programs: [
        {id:2, name: 'Psicologia'}
    ]},
    { id: 3, name: 'Facultad de Ingeniería y Arquitectura',
    programs: [
        {id:3, name: 'Ingeniería Civil'},
        {id:4, name: 'Ingeniería de Sistemas'},
        {id:5, name: 'Arquitectura'},
    ]
    }
]

app.get('/faculty', (req,res,next)=> {
    return res.json(facultyData);
})

app.get('/',(req, res, next)=> {
    return res.json({ response: 'OK'});
})

app.listen(3001,()=>{
    console.log('Servidor Iniciado.')
})