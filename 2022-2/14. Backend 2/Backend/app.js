import express from 'express'
import { CourseService,
         ProgramService,
         FacultyService } 
         from './src/services/index.js';

var app = express();

let enrollment = [];

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.post('/enrollment', (req,res,next)=> {
    console.log('received request')
    console.log(req.body)

    enrollment.push(req.body);

    return res.json({ response: 'OK'});
})

app.get('/enrollment/getAll', (req,res,next)=> {
    return res.json(enrollment);
})

app.get('/course/getAll', (req,res,next)=> {
    return res.json(CourseService.getAll());
})

app.get('/program/getAll', (req,res,next)=> {
    return res.json(ProgramService.getAll());
})

app.get('/faculty/getAll', (req,res,next)=> {
    return res.json(FacultyService.getAll());
})

app.get('/',(req, res, next)=> {
    return res.json({ response: 'OK'});
})

app.listen(3001,()=>{
    console.log('Servidor Iniciado.')
})