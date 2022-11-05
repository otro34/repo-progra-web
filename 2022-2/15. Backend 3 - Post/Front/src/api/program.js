import axios from 'axios'

const getAll = async () => {
    return await axios.get('http://localhost:3001/program/getAll');
}

const Program = { getAll }

export default Program



