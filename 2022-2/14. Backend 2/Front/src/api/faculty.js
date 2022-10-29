import axios from 'axios'

const getAll = async () => {
    return await axios.get('http://localhost:3001/faculty/getAll');
}

const Faculty = { getAll }

export default Faculty



