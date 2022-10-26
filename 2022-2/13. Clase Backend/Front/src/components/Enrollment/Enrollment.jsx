import { useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Faculty from '../../api/faculty'

const Enrollment = () => {

    const defaultEnrollment = {
        id: 0,
        code: 0,
        name: '',
        lastName: '',
        email: '',
        faculty: {},
        program: {},
        semester:0
    }

    const [facultyData, setFacultyData] = useState([])

    const [faculty, setFaculty] = useState(0);
    const [programId, setProgramId] = useState(0);
    const [programs, setPrograms ] = useState([]);
    const [enrollment, setEnrollment] = useState(defaultEnrollment)

    useEffect(() => {
        console.log(Faculty);
        const resp = Faculty.getAll()
        .then (response => {
            console.log({resp:response.data});   
            setFacultyData(response.data)
        })
        
        

    },[])

    useEffect(() => {
        if (faculty != 0) {
            const result = facultyData.find(x => x.id == faculty);
            setEnrollment({...enrollment, faculty: result})
            setPrograms(result.programs);
        }
    },[faculty]);

    useEffect(()=> {
    }, [enrollment])

    const handleOnClick = () => {
        alert(JSON.stringify(enrollment));
    }

    const handleProgramChange = (value) => {
        if (value) {
            setProgramId(value)
            const result = enrollment.faculty.programs.find(x => x.id == value)
            if (result) setEnrollment({...enrollment, program: result})
        }
    }

    const semestreData = [1,2,3,4,5,6,7,8,9,10]

    const facultyOptions = facultyData.map((item) => {
        return (<option value={item.id} key={item.id}>{item.name}</option>)
    })

    const programOptions = programs.map((item) => {
        return (<option value={item.id} key={item.id}>{item.name}</option>)
    })

    const semestreOptions = semestreData.map((item) => {
        return (<option value={item} key={item}>{item}</option>)
    })

    

    return (
        <><Container>
                <h1>
                    Enrollment Page
                </h1>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="ID..." 
                                value={enrollment.id}
                                onChange={e => setEnrollment({...enrollment, id: e.currentTarget.value})} />
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder="Code..." 
                                value={enrollment.code}
                                onChange={e => setEnrollment({...enrollment, code: e.currentTarget.value})}/>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name..." 
                                value={enrollment.name}
                                onChange={e => setEnrollment({...enrollment, name: e.currentTarget.value})}/>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name..." 
                                value={enrollment.lastName}
                                onChange={e => setEnrollment({...enrollment, lastName: e.currentTarget.value})}/>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" 
                                value={enrollment.email}
                                onChange={e => setEnrollment({...enrollment, email: e.currentTarget.value})}/>
                        </Col>
                        <Col>
                            <Form.Label>Faculty</Form.Label>
                                <Form.Select aria-label="Seleccione un valor" 
                                    value={faculty}
                                    onChange={e => setFaculty(e.currentTarget.value)}>
                                    <option>Seleccione una opción...</option>
                                    {facultyOptions}
                                </Form.Select>
                            <Form.Label>Program</Form.Label>
                            <Form.Select aria-label="Selecione un valor"
                                value={programId}
                                onChange={e => handleProgramChange(e.currentTarget.value)}>
                                <option>Open this select menu</option>
                                {programOptions} 
                            </Form.Select>
                            <Form.Label>Semester</Form.Label>
                            <Form.Select aria-label="Selecione un valor">
                                <option>Open this select menu</option>
                                {semestreOptions}
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button style={{ 'marginTop': '10px'}} onClick={() => handleOnClick()}>SUBMIT</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Container>
        </>
    )
}

export default Enrollment