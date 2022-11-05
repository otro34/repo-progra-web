import axios from 'axios'

const getAll = async () => {
    return await axios.get('http://localhost:3001/course/getAll');
}

const Course = { getAll }

export default Course



