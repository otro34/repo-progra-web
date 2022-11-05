import axios from 'axios'

const post = async (request) => {
    return await axios
        .post('http://localhost:3001/enrollment',request);
}

const getAll = async () => {
    return await axios
        .getAll('http://localhost:3001/enrollment/getAll');
}

const Enrollment = { post, getAll }

export default Enrollment