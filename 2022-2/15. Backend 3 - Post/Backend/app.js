import express, { response } from 'express'
import bodyParser from 'body-parser'
import { CourseService,
         ProgramService,
         FacultyService,
         EnrollmentService } 
         from './src/services/index.js';

var app = express();

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/enrollment', (req,res,next)=> {
    console.log('received request')
    
    EnrollmentService.insert(req.body);
    return res.json();
})

app.get('/enrollment/:id', (req,res,next) => {
    const result = EnrollmentService.findOne(req.params.id)
    return res.json(result)
})

app.get('/enrollment/getAll', (req,res,next)=> {
    return res.json(EnrollmentService.getAll());
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